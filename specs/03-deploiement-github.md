# Erebus — Déploiement depuis un téléphone

**GitHub Actions + GitHub Pages + npm**

Guide opérationnel pour publier la bibliothèque et son site de documentation **sans machine de développement**. Tout se fait depuis l'app GitHub, le navigateur mobile et npmjs.com.

| Élément | Valeur |
|---|---|
| Dépôt | `github.com/Glowing-Sea-Studio/erebus` |
| Scope npm | `@erebus` |
| Repli si le scope est pris | `@Glowing-Sea-Studio/erebus-*` |

> **Première chose à faire, avant tout le reste** : ouvrir npmjs.com et tenter de créer une organisation gratuite nommée `erebus`. Si elle est disponible, tes paquets s'appelleront `@erebus/react`. Si elle est prise, remplace `@erebus/` par `@Glowing-Sea-Studio/erebus-` partout dans ce document et dans les `package.json` — ce scope-là t'appartient déjà par ton nom d'utilisateur, il ne peut pas t'échapper.
>
> À savoir : le paquet **non scopé** `erebus` est déjà occupé sur npm par un projet sans rapport, publié pour la dernière fois en 2022. Cela n'a aucune incidence ici — un scope et un nom de paquet nu sont deux espaces de noms distincts. Ne cherche simplement jamais à publier un paquet appelé `erebus` tout court.

---

## Table des matières

1. [Ce que tu vas obtenir](#1-ce-que-tu-vas-obtenir)
2. [Réglages du dépôt à faire en premier](#2-réglages-du-dépôt-à-faire-en-premier)
3. [Fichiers de configuration à ajouter](#3-fichiers-de-configuration-à-ajouter)
4. [Workflow 1 — Intégration continue](#4-workflow-1--intégration-continue-ciyml)
5. [Workflow 2 — Déploiement GitHub Pages](#5-workflow-2--déploiement-github-pages-deploy-docsyml)
6. [Workflow 3 — Publication npm](#6-workflow-3--publication-npm-releaseyml)
7. [Première publication npm (avec token)](#7-première-publication-npm-avec-token)
8. [Basculer sur le trusted publishing OIDC](#8-basculer-sur-le-trusted-publishing-oidc)
9. [Ordre d'exécution complet](#9-ordre-dexécution-complet)
10. [Comment tout piloter depuis le téléphone](#10-comment-tout-piloter-depuis-le-téléphone)
11. [Dépannage](#11-dépannage)
12. [Checklist finale](#12-checklist-finale)

---

## 1. Ce que tu vas obtenir

| Élément | URL finale |
|---|---|
| Site de documentation | `https://Glowing-Sea-Studio.github.io/erebus/` |
| Storybook React | `https://Glowing-Sea-Studio.github.io/erebus/storybook/react/` |
| Storybook Angular | `https://Glowing-Sea-Studio.github.io/erebus/storybook/angular/` |
| Packages npm | `https://www.npmjs.com/package/@erebus/react` |

Trois workflows :

- `ci.yml` — vérifie chaque PR (lint, types, tests, build, taille).
- `deploy-docs.yml` — construit et publie la doc sur GitHub Pages à chaque push sur `main`.
- `release.yml` — ouvre une PR de version, puis publie sur npm quand tu la merges.

---

## 2. Réglages du dépôt à faire en premier

Tout se fait dans **Settings** du dépôt, accessible depuis le navigateur mobile (`github.com/Glowing-Sea-Studio/erebus/settings`). L'app GitHub ne donne pas accès à ces écrans — utilise Safari/Chrome.

### 2.1 Activer GitHub Pages

`Settings → Pages → Build and deployment → Source` → sélectionner **GitHub Actions** (et non « Deploy from a branch »).

Ne configure rien d'autre pour l'instant. L'URL apparaîtra après le premier déploiement réussi.

> Le dépôt doit être **public**, sinon GitHub Pages exige un plan payant.

### 2.2 Autoriser les Actions à écrire

`Settings → Actions → General` :

- **Workflow permissions** → « Read and write permissions »
- Cocher **« Allow GitHub Actions to create and approve pull requests »**

Ce second point est **indispensable** : sans lui, Changesets ne pourra pas ouvrir la PR « Version Packages » et le workflow de release échouera avec une erreur `GitHub Actions is not permitted to create pull requests`.

### 2.3 Protéger `main` (recommandé)

`Settings → Rules → Rulesets → New branch ruleset` :

- Target : `main`
- Require a pull request before merging : oui, 0 approbation (tu es seul)
- Require status checks to pass : `ci` (le check apparaîtra après la première exécution)
- Autoriser les bypass pour `Repository admin` — sinon le workflow de release ne pourra pas pousser le tag.

### 2.4 Créer l'environnement de publication (optionnel mais conseillé)

`Settings → Environments → New environment` → nom : `npm-publish`.

Cela permet plus tard de restreindre le trusted publisher npm à cet environnement précis, et d'exiger une validation manuelle avant chaque publication.

---

## 3. Fichiers de configuration à ajouter

Tous ces fichiers se créent directement dans l'interface web GitHub : bouton **Add file → Create new file**, puis **Commit changes** (crée une branche + PR).

### 3.1 `apps/docs/next.config.mjs`

L'export statique est obligatoire pour GitHub Pages : pas de serveur Node, donc pas de SSR à l'exécution.

```js
/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === 'true';
const repo = 'erebus';

export default {
  output: 'export',              // génère un site 100 % statique dans out/
  basePath: isCI ? `/${repo}` : '',
  assetPrefix: isCI ? `/${repo}/` : '',
  images: { unoptimized: true }, // l'optimiseur d'images Next exige un serveur
  trailingSlash: true,           // évite les 404 sur les routes sans slash final
};
```

> **`basePath` est le piège numéro un.** Le site est servi depuis `/erebus/` et non depuis la racine. Sans ces trois lignes, la page s'affiche mais tous les CSS, JS et liens internes renvoient des 404. Si tu branches plus tard un domaine personnalisé, repasse `basePath` à `''`.

Incompatibilités à connaître avec `output: 'export'` : pas de Route Handlers, pas de Server Actions, pas de `revalidate`, pas de middleware. Une doc statique n'en a pas besoin.

### 3.2 `apps/docs/public/.nojekyll`

Fichier **vide**. Il empêche tout traitement Jekyll, qui ignore les dossiers commençant par un underscore — or Next génère `_next/`. Sans lui, risque de site sans aucun style.

Dans l'interface GitHub, saisis le chemin `apps/docs/public/.nojekyll`, laisse le contenu vide, commit.

### 3.3 `.changeset/config.json`

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": ["@changesets/changelog-github", { "repo": "Glowing-Sea-Studio/erebus" }],
  "commit": false,
  "fixed": [["@erebus/*"]],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["docs", "playground-react", "playground-angular"]
}
```

- `fixed` force tous les packages à partager le même numéro de version.
- `access: public` est obligatoire pour publier un scope `@erebus` gratuitement.
- `ignore` empêche de versionner les apps internes.

### 3.4 Scripts racine à vérifier dans `package.json`

```jsonc
{
  "scripts": {
    "build": "nx run-many -t build",
    "build:docs": "nx build docs",
    "build:storybook:react": "nx build-storybook react",
    "build:storybook:angular": "nx build-storybook angular",
    "test": "nx run-many -t test",
    "lint": "nx run-many -t lint",
    "typecheck": "nx run-many -t typecheck",
    "release": "pnpm build && changeset publish"
  },
  "packageManager": "pnpm@9.15.0"
}
```

Adapte les commandes à ce que Jules a réellement généré — ouvre le `package.json` racine dans l'app GitHub et relève les noms exacts avant d'écrire les workflows.

---

## 4. Workflow 1 — Intégration continue (`ci.yml`)

Chemin : `.github/workflows/ci.yml`

```yaml
name: ci

on:
  pull_request:
  push:
    branches: [main]

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  verify:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Installer les dépendances
        run: pnpm install --frozen-lockfile

      - name: Lint
        run: pnpm lint

      - name: Vérification des types
        run: pnpm typecheck

      - name: Tests
        run: pnpm test

      - name: Build des packages
        run: pnpm build
```

**Point d'attention** : `--frozen-lockfile` échoue si le `pnpm-lock.yaml` ne correspond pas aux `package.json`. C'est voulu, mais si Jules a modifié des dépendances sans régénérer le lockfile, cette étape cassera. Dans ce cas, la seule correction possible depuis un téléphone est de retirer temporairement le flag — à remettre dès que tu as accès à une machine.

---

## 5. Workflow 2 — Déploiement GitHub Pages (`deploy-docs.yml`)

Chemin : `.github/workflows/deploy-docs.yml`

```yaml
name: deploy-docs

on:
  push:
    branches: [main]
  workflow_dispatch:      # permet de relancer à la main depuis le téléphone

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - name: Construire les packages
        run: pnpm build

      - name: Construire le site de doc
        run: pnpm build:docs
        env:
          NEXT_PUBLIC_BASE_PATH: /erebus

      - name: Construire les Storybooks
        run: |
          pnpm build:storybook:react
          pnpm build:storybook:angular

      - name: Assembler le site final
        run: |
          mkdir -p dist-site
          cp -r apps/docs/out/* dist-site/
          mkdir -p dist-site/storybook/react dist-site/storybook/angular
          cp -r packages/react/storybook-static/*   dist-site/storybook/react/
          cp -r packages/angular/storybook-static/* dist-site/storybook/angular/
          touch dist-site/.nojekyll

      - uses: actions/configure-pages@v5

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist-site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Points à adapter

- Les chemins de sortie (`apps/docs/out`, `packages/react/storybook-static`) dépendent de la configuration réelle. Vérifie-les dans l'app GitHub avant de commiter ; sinon l'étape `cp` échouera avec `No such file or directory`.
- Le `concurrency` avec `cancel-in-progress: false` évite qu'un déploiement Pages en cours soit interrompu, ce qui laisse le site dans un état incohérent.
- Les Storybooks Angular sont longs à construire. Si le job dépasse 30 minutes, sépare-les dans un workflow distinct déclenché manuellement.

### Domaine personnalisé (optionnel)

1. Créer `apps/docs/public/CNAME` contenant une seule ligne : `erebus.dev`
2. Chez ton registrar : un `CNAME` de `www` vers `Glowing-Sea-Studio.github.io`, ou 4 enregistrements `A` vers les IP GitHub Pages pour le domaine apex.
3. Repasser `basePath` et `assetPrefix` à `''` dans `next.config.mjs`.
4. `Settings → Pages → Enforce HTTPS` une fois le certificat émis (quelques minutes à 24 h).

---

## 6. Workflow 3 — Publication npm (`release.yml`)

Chemin : `.github/workflows/release.yml`

Ce fichier couvre **les deux modes** : lis d'abord la section 7 (première publication), puis la section 8 (bascule OIDC).

```yaml
name: release

on:
  push:
    branches: [main]
  workflow_dispatch:

concurrency:
  group: release
  cancel-in-progress: false

permissions:
  contents: write        # créer les tags et la GitHub Release
  pull-requests: write   # ouvrir la PR "Version Packages"
  id-token: write        # OIDC : provenance + trusted publishing

jobs:
  release:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
          registry-url: https://registry.npmjs.org

      # Le trusted publishing OIDC exige npm 11.5.1 minimum
      - name: Mettre npm à jour
        run: npm install -g npm@latest

      - run: pnpm install --frozen-lockfile

      - name: Version ou publication
        id: changesets
        uses: changesets/action@v1
        with:
          version: pnpm changeset version
          publish: pnpm release
          title: 'chore: version des packages'
          commit: 'chore: version des packages'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # Ligne à SUPPRIMER après la bascule OIDC (section 8) :
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
          NPM_CONFIG_PROVENANCE: true
```

### Comment ça se comporte

1. Tu merges une PR contenant un fichier de changeset → le workflow ouvre (ou met à jour) une PR intitulée **« chore: version des packages »**, qui incrémente les versions et écrit les changelogs.
2. Tu merges cette PR depuis ton téléphone → le workflow se relance, détecte qu'il n'y a plus de changeset en attente, et exécute `pnpm release`, qui publie sur npm.

Tu gardes donc **un point de validation humain** avant chaque publication : rien ne part sur npm sans que tu merges explicitement la PR de version.

### Ajouter un changeset depuis le téléphone

Crée un fichier `.changeset/nom-libre.md` via l'interface web :

```md
---
'@erebus/react': minor
'@erebus/angular': minor
'@erebus/core': minor
'@erebus/tokens': minor
---

Première version publique : composants de base, système de thèmes et layout responsive.
```

Niveaux : `patch` (correctif), `minor` (ajout rétrocompatible), `major` (rupture).

### Publier en pré-version (fortement recommandé pour la v1)

Avant de merger quoi que ce soit vers `latest`, passe en mode pré-version. Crée le fichier `.changeset/pre.json` :

```json
{
  "mode": "pre",
  "tag": "alpha",
  "initialVersions": {},
  "changesets": []
}
```

Les versions publiées deviennent `0.1.0-alpha.0` et atterrissent sous le tag npm `alpha` : `npm i @erebus/react@alpha`. Personne n'obtient ce code en installant `@erebus/react` sans préciser de tag. Pour sortir du mode pré-version, supprime le fichier `pre.json`.

> **npm ne permet de dépublier une version que dans les 72 heures qui suivent**, et un numéro de version ne peut jamais être réutilisé. Une `1.0.0` bancale reste visible et installable à vie. La pré-version n'est pas de la prudence excessive : c'est la seule marche arrière disponible.

---

## 7. Première publication npm (avec token)

Le trusted publishing OIDC ne peut se configurer que sur un package **qui existe déjà** sur le registre. La toute première publication passe donc obligatoirement par un token. C'est un problème d'amorçage connu, sans contournement à ce jour.

### Étapes (navigateur mobile)

1. **Créer le compte et le scope** : sur `npmjs.com`, crée un compte, active la 2FA (obligatoire pour publier), puis crée une organisation gratuite nommée `erebus`. C'est elle qui te donne le scope `@erebus`.

2. **Générer un token** : `Avatar → Access Tokens → Generate New Token → Granular Access Token`.
   - Expiration : **7 jours** (tu vas le supprimer bien avant).
   - Packages and scopes : `@erebus/*`, permission **Read and write**.
   - Organizations : `erebus`, permission **Read and write** (nécessaire pour créer de nouveaux packages).
   - Copie le token immédiatement, il ne sera plus affiché.

3. **Ajouter le secret GitHub** : `Settings → Secrets and variables → Actions → New repository secret`.
   - Nom : `NPM_TOKEN`
   - Valeur : le token collé.

4. **Lancer la release** : ajoute ton changeset, merge, puis merge la PR de version. Le workflow publie.

5. **Vérifier** : `https://www.npmjs.com/package/@erebus/react` doit afficher la version et un badge de provenance.

---

## 8. Basculer sur le trusted publishing OIDC

À faire **immédiatement après** la première publication réussie. Cela supprime le dernier secret durable du dépôt et te donne une attestation de provenance SLSA niveau 3 vérifiable par tes utilisateurs.

### Configuration côté npm

Pour **chaque package publié** (`@erebus/core`, `@erebus/react`, `@erebus/angular`, `@erebus/tokens`, `@erebus/icons`…) :

`npmjs.com → le package → Settings → Trusted Publisher → GitHub Actions`, puis renseigner :

| Champ | Valeur |
|---|---|
| Organization or user | `Glowing-Sea-Studio` |
| Repository | `erebus` |
| Workflow filename | `release.yml` — **le nom du fichier seul**, pas le chemin complet |
| Environment | `npm-publish` si tu l'as créé, sinon laisser vide |
| Allowed actions | cocher au minimum `npm publish` |

> Depuis le 20 mai 2026, les nouvelles configurations exigent de sélectionner explicitement au moins une action autorisée. Les configurations antérieures restent en `npm publish` seul, sans changement de comportement.

C'est une configuration **par package** : dans un monorepo, il faut la répéter pour chacun. Fastidieux sur téléphone, mais à faire une seule fois.

### Configuration côté GitHub

1. Dans `release.yml`, **supprimer la ligne** `NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}`.
2. Vérifier que `permissions:` contient bien `id-token: write`.
3. Vérifier que l'étape `npm install -g npm@latest` est présente (version 11.5.1 minimum requise).
4. Supprimer le secret `NPM_TOKEN` : `Settings → Secrets and variables → Actions → NPM_TOKEN → Remove`.
5. Révoquer le token sur npmjs.com : `Access Tokens → Delete`.

### Pourquoi ça vaut le détour

Aucun secret réutilisable ne dort dans le dépôt. Le jeton est forgé à la demande, valable quelques minutes, lié à un run précis, et inutilisable ailleurs. C'est exactement la classe d'attaque qui a permis, le 19 mai 2026, la publication de 637 versions malveillantes sur 317 packages en 22 minutes via un compte mainteneur compromis — incident qui a contraint GitHub à invalider plus de 61 000 tokens npm.

---

## 9. Ordre d'exécution complet

```
┌─ 1. Réglages du dépôt (§2)              ~10 min, navigateur mobile
│     Pages → GitHub Actions
│     Actions → write + autoriser les PR
│
├─ 2. Ajouter les fichiers de config (§3)  ~15 min, éditeur web GitHub
│     next.config.mjs, .nojekyll, changeset config
│
├─ 3. Ajouter ci.yml (§4)                  1 PR
│     → vérifier qu'il passe au vert AVANT tout le reste
│
├─ 4. Ajouter deploy-docs.yml (§5)         1 PR
│     → merger, attendre, ouvrir l'URL Pages
│     → c'est ici que tu VOIS enfin le travail de Jules
│
├─ 5. REVUE VISUELLE                       le vrai point de contrôle
│     Parcourir la doc et les Storybooks au doigt
│     Tester light/dark, chaque thème, le responsive
│
├─ 6. npm : compte + org + token (§7)      ~10 min
├─ 7. Ajouter release.yml + pre.json (§6)  1 PR
├─ 8. Changeset + merge + merge la PR de version
│     → publication en 0.1.0-alpha.0
│
└─ 9. Bascule OIDC (§8), suppression du token
```

**L'étape 5 est la plus importante de la liste.** Le site de doc déployé est ton seul moyen de vérifier le travail sans machine : chaque composant y est rendu, dans chaque thème, dans les deux modes. Prends le temps de le parcourir avant de publier quoi que ce soit sur npm.

---

## 10. Comment tout piloter depuis le téléphone

| Action | Où |
|---|---|
| Lire un diff, merger une PR | App GitHub |
| Créer ou éditer un fichier | App GitHub (icône crayon) ou `github.dev` |
| Éditeur complet avec arborescence | Ouvrir le dépôt et remplacer `github.com` par `github.dev` dans l'URL (VS Code dans le navigateur, utilisable au doigt en mode paysage) |
| Voir les logs d'un workflow | App GitHub → onglet Actions |
| Relancer un workflow échoué | Actions → le run → « Re-run failed jobs » |
| Déclencher manuellement | Actions → le workflow → « Run workflow » (nécessite `workflow_dispatch`) |
| Réglages, secrets, Pages | Navigateur mobile uniquement (`/settings`) |

`github.dev` est l'outil le plus confortable pour créer plusieurs fichiers d'un coup : il permet d'éditer, de voir l'arborescence complète et de commiter sur une branche, le tout sans installer quoi que ce soit.

---

## 11. Dépannage

| Symptôme | Cause | Correction |
|---|---|---|
| Page blanche, CSS et JS en 404 | `basePath` absent ou incorrect | §3.1 — le chemin doit valoir exactement `/erebus` |
| Site sans aucun style, dossier `_next` introuvable | Traitement Jekyll | Vérifier que `.nojekyll` est bien présent à la racine de l'artefact |
| `Error: Resource not accessible by integration` | Permissions du workflow | §2.2 — activer les permissions en écriture |
| `GitHub Actions is not permitted to create pull requests` | Case non cochée | §2.2 — deuxième case à cocher |
| `ERR_PNPM_OUTDATED_LOCKFILE` | Lockfile désynchronisé | Retirer `--frozen-lockfile` temporairement, régénérer dès que possible |
| `npm error 404 Not Found - PUT` en OIDC | Le trusted publisher ne correspond pas au run | Vérifier au caractère près : org, dépôt, **nom du fichier de workflow**, environnement. Une faute de frappe suffit. |
| `npm error 402 Payment Required` | Package scopé publié en privé par défaut | `"access": "public"` dans la config Changesets, ou `publishConfig.access` dans chaque `package.json` |
| Publication ignorée sans erreur | Aucun changeset en attente | Ajouter un fichier dans `.changeset/` |
| `Cannot find module` au build de la doc | Les packages ne sont pas construits avant la doc | L'étape `pnpm build` doit précéder `pnpm build:docs` |
| `cp: No such file or directory` | Chemins de sortie erronés | Vérifier les vrais chemins dans le dépôt et corriger §5 |
| Le déploiement Pages réussit mais l'URL renvoie 404 | Premier déploiement pas encore propagé | Attendre 2–3 minutes, puis forcer le rechargement |
| Storybook Angular dépasse le timeout | Build lent | Augmenter `timeout-minutes` ou isoler dans un workflow dédié |

### Quand un workflow échoue

Dans l'app GitHub : onglet **Actions** → le run rouge → le job → dérouler l'étape en erreur. Les logs sont lisibles sur mobile ; le message utile est presque toujours dans les 20 dernières lignes.

---

## 12. Checklist finale

Réglages du dépôt

- [ ] Dépôt public
- [ ] Pages → source « GitHub Actions »
- [ ] Actions → permissions en lecture/écriture
- [ ] Actions → création de PR autorisée

Fichiers

- [ ] `apps/docs/next.config.mjs` avec `output: 'export'` et `basePath`
- [ ] `apps/docs/public/.nojekyll`
- [ ] `.changeset/config.json` avec `fixed` et `access: public`
- [ ] `.changeset/pre.json` (mode alpha pour les premières publications)
- [ ] `.github/workflows/ci.yml`
- [ ] `.github/workflows/deploy-docs.yml`
- [ ] `.github/workflows/release.yml`

Validation

- [ ] `ci` au vert sur une PR
- [ ] Site de doc accessible à l'URL Pages
- [ ] Les deux Storybooks s'ouvrent
- [ ] Revue visuelle faite : thèmes, modes, responsive
- [ ] Publication en `alpha` réussie, badge de provenance visible
- [ ] Installation testée dans un projet neuf : `npm i @erebus/react@alpha`

Sécurité

- [ ] Trusted publisher configuré sur chaque package
- [ ] `NODE_AUTH_TOKEN` retiré de `release.yml`
- [ ] Secret `NPM_TOKEN` supprimé du dépôt
- [ ] Token révoqué sur npmjs.com
- [ ] 2FA active sur le compte npm et sur le compte GitHub
