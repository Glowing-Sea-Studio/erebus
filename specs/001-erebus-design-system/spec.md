# Spécification — Erebus, design system React + Angular

**Feature branch** : `001-erebus-design-system`
**Statut** : Rétrospectif — décrit l'état réel du produit tel que construit (lots 0 à 8 de la roadmap), pas une intention future
**Créé le** : 2026-09-08
**Entrée** : bibliothèque de composants d'interface, deux implémentations natives (React, Angular), partageant tokens et CSS

---

## 1. Résumé exécutif

Erebus est un design system publié en deux implémentations natives — React et Angular — partageant les mêmes tokens de design, le même CSS de composant et la même API publique. L'objectif : une organisation qui maintient du React **et** de l'Angular n'entretient qu'une seule identité visuelle, un seul vocabulaire de composants, une seule documentation d'accessibilité.

Le catalogue actuel compte plus de 90 composants côté React et autant côté Angular, cinq thèmes (chacun en clair et sombre), un système de mise en page responsive, et une exigence bloquante de conformité WCAG 2.2 AA.

## 2. Utilisateurs et scénarios (acceptance scenarios)

### Persona 1 — Développeuse front, produit sans designer dédié
**Scénario** : installe `@glowing-sea-studio/erebus-react`, importe les styles et le script anti-scintillement, pose un `Button` et un `Card` dans une page.
**Given** un projet React vide, **When** elle suit les instructions du README, **Then** elle obtient un rendu stylé, accessible au clavier, en moins de 5 étapes.

### Persona 2 — Lead front sur plusieurs projets clients (React et Angular mêlés)
**Scénario** : doit reproduire la même charte sur un projet React et un projet Angular.
**Given** un même jeu de tokens de thème, **When** il l'applique des deux côtés via les mêmes attributs `data-erb-theme`/`data-erb-mode`, **Then** le rendu est visuellement identique et l'API des composants ne change pas de nom de propriété entre les deux stacks.

### Persona 3 — Référent accessibilité
**Scénario** : doit auditer un écran construit avec Erebus.
**Given** un écran composé uniquement de composants Erebus, **When** il exécute un audit axe-core, **Then** aucune violation automatique n'est détectée, et la navigation clavier permet d'atteindre et d'actionner chaque contrôle.

### Persona 4 — Designer système
**Scénario** : doit vérifier que le Figma correspond au code.
**Given** les noms de tokens sémantiques (`bg.canvas`, `fg.muted`, `color.accent.bg`…), **When** elle les compare aux variables `--erb-*` publiées, **Then** la correspondance est directe, sans traduction.

## 3. Exigences fonctionnelles

- **FE-001** : Le système DOIT fournir un ensemble de tokens de design à trois niveaux (primitif, sémantique, composant), exprimés en variables CSS `--erb-*` et en objets TypeScript typés.
- **FE-002** : Le système DOIT fournir au moins cinq thèmes visuels (`default`, `corporate`, `vibrant`, `minimal`, `high-contrast`), chacun disponible en mode clair et en mode sombre, appliqués par attributs de données sur n'importe quel élément (pas seulement `<html>`).
- **FE-003** : Le système DOIT fournir un script anti-scintillement exécutable en balise inline, résolvant le mode couleur (persisté ou `prefers-color-scheme`) avant le premier rendu.
- **FE-004** : Le système DOIT fournir un ensemble de primitives de mise en page responsive (conteneur, grille, empilements, ratio, visibilité conditionnelle) réagissant au conteneur (`container-type: inline-size`), avec points de rupture en `min-width` uniquement.
- **FE-005** : Chaque composant public DOIT exister en React et en Angular avec une API identique (noms de propriétés, valeurs énumérées, événements) et produire un arbre HTML équivalent.
- **FE-006** : Le vocabulaire d'API commun (`variant`, `intent`, `size`, `radius`, `orientation`, `placement`, booléens d'état) DOIT être identique dans les deux frameworks, sans exception.
- **FE-007** : Chaque composant à état DOIT supporter le mode contrôlé et non contrôlé (React : `value`/`onValueChange` ou `defaultValue` ; Angular : liaison bidirectionnelle + `ControlValueAccessor` pour les contrôles de formulaire).
- **FE-008** : Le système DOIT fournir un socle commun de superposition (portail, piège de focus, verrou de défilement, gestionnaire de couches, positionnement Floating UI) réutilisé par tous les composants de superposition (Modal, Drawer, Popover, Tooltip, DropdownMenu, AlertDialog, Lightbox, CommandPalette).
- **FE-009** : Chaque contrôle de formulaire Angular DOIT implémenter `ControlValueAccessor` et fonctionner à la fois avec les Reactive Forms et les Template-driven Forms ; les états de validation Angular (`ng-invalid`, `ng-touched`) DOIVENT être traduits en attributs `data-invalid`/`aria-invalid`.
- **FE-010** : Le composant `Field` DOIT câbler automatiquement `id`, `aria-describedby` et `aria-invalid` entre le label, la description, le message d'erreur et le contrôle, sans que le contrôle ait à le faire lui-même.
- **FE-011** : Le système DOIT exposer les variables CSS de chaque composant (`--erb-<composant>-*`) pour permettre une personnalisation ponctuelle par simple redéfinition, sans surcharge de règle CSS.
- **FE-012** : Une couche de compatibilité de grille de type Bootstrap (`.erb-row`, `.erb-col-md-4`, `.erb-offset-lg-2`) DOIT être disponible pour faciliter la migration depuis Bootstrap ou Tailwind (guides fournis dans `docs/migration-*.md`).

## 4. Exigences non fonctionnelles

- **NF-001 — Accessibilité (bloquante)** : conformité WCAG 2.2 niveau AA sur l'intégralité du catalogue publié ; le thème `high-contrast` vise AAA sur le texte. Navigation clavier complète, focus visible via `:focus-visible`, annonces dynamiques via `aria-live` (poli pour les notifications, assertif pour les erreurs de formulaire), respect de `prefers-reduced-motion` et du mode contraste forcé, zones tactiles ≥ 24×24px, zoom 400 % sans perte de fonctionnalité, aucune information portée par la seule couleur.
- **NF-002 — Performance** : CSS de base ≤ 18 ko compressé ; import d'un composant sans effet d'entraînement sur le reste du catalogue (sous-exports, `sideEffects` déclaré) ; aucun accès DOM au premier rendu serveur, zéro avertissement d'hydratation.
- **NF-003 — Internationalisation** : aucun texte figé dans un composant ; toute chaîne visible passe par une source injectable. **État réel : le mécanisme de dictionnaire injectable FR/EN décrit à l'origine n'est pas implémenté dans le code (voir §7, écart E-3) ; seul le support CSS des propriétés logiques (RTL) est en place.**
- **NF-004 — Compatibilité** : deux dernières versions des navigateurs majeurs, Safari iOS ≥ 15.4, React 18.3 et 19, Angular 18 et suivants.
- **NF-005 — Stabilité** : versionnage sémantique strict, dépréciation sur deux versions mineures minimum, guide de migration à chaque rupture majeure.
- **NF-006 — Parité vérifiable** : un script d'audit de parité doit pouvoir produire un rapport de divergence d'API entre React et Angular, avec un mécanisme d'exceptions justifiées.
- **NF-007 — Contraste vérifiable** : un script d'audit de contraste doit pouvoir vérifier chaque combinaison thème × mode.

## 5. Entités clés (voir aussi `data-model.md`)

- **Token** — valeur de design nommée à trois niveaux (primitif, sémantique, composant), exposée en CSS et en TypeScript.
- **Thème** — ensemble cohérent de valeurs de tokens sémantiques, décliné en clair et sombre.
- **Composant** — unité publiée à l'identique (API) dans les deux frameworks, avec son CSS partagé dans `packages/core`.
- **Variante / Intention / Taille** — dimensions d'API communes à tous les composants concernés.
- **Densité** — axe de compacité de l'interface, indépendant du thème.

## 6. Périmètre

### 6.1 Dans le périmètre (livré)
Fondations (tokens, thèmes, mise en page), structure applicative, actions, formulaires, affichage de données, superpositions, retours utilisateur, médias et vitrine — catalogue détaillé en `specs/02-specifications-techniques.md` §C.7 et vérifié en §7 ci-dessous.

### 6.2 Hors périmètre (assumé, non regretté)
- Composants métier spécifiques (réservation, facturation, cartographie).
- Éditeur de texte riche, bibliothèque de graphiques (intégration tierce documentée uniquement).
- Support Vue, Svelte, Web Components.
- Offre commerciale, support payant.

### 6.3 Dans le périmètre à l'origine, non livré à ce jour (voir §7)
- Pipeline CI/CD (`.github/workflows/*`).
- Site de documentation public (Next.js statique).
- Dictionnaires d'internationalisation FR/EN injectables.
- Publication npm effective et trusted publishing OIDC.
- `LICENSE`, `CONTRIBUTING.md`, configuration Changesets.

## 7. État réel constaté vs. spécification d'origine (écarts)

Cette section existe parce que la spécification est rétrospective : elle documente le produit tel qu'il est, pas tel qu'imaginé en `specs/01-*` à `specs/04-*`.

| # | Écart | Détail constaté | Impact |
|---|---|---|---|
| E-1 | Scope npm | Packages publiés sous `@glowing-sea-studio/erebus-*`, pas `@erebus/*` comme envisagé en `specs/03-deploiement-github.md` | README et exemples doivent utiliser le scope réel ; aucune action corrective requise sauf si le scope `@erebus` est explicitement voulu plus tard |
| E-2 | Architecture d'apps | Pas d'`apps/docs` (Next.js) ni d'`apps/playground-*` comme décrit en `specs/02-*` §B.1 ; à la place : `apps/demo-react`, `apps/demo-angular`, `apps/e2e` (Playwright) et Storybook par package | Aucun site de documentation public déployé à ce jour ; Storybook fait office de vitrine interne |
| E-3 | Internationalisation | `docs/i18n-rtl.md` documente l'approche RTL (CSS, propriétés logiques) mais aucun mécanisme de dictionnaire injectable FR/EN n'existe dans `packages/*/src` | NF-003 partiellement satisfaite : RTL oui, dictionnaire non |
| E-4 | CI/CD | Aucun répertoire `.github/workflows` dans le dépôt | `pnpm lint/typecheck/test/build` doivent être exécutés manuellement avant toute PR ; aucune vérification automatique de parité ou de contraste en continu |
| E-5 | Publication | Aucun `.changeset/config.json`, `LICENSE` ou `CONTRIBUTING.md` à la racine ; versions figées à `0.1.0` sur tous les packages | Aucun package n'est publiquement installable depuis npm à ce jour |
| E-6 | Thèmes | Les CSS de thème existent (`packages/core/src/themes/{corporate,vibrant,minimal,high-contrast}.css`) mais un seul thème possède un fichier de tokens source dédié (`packages/tokens/src/themes/default.json`) | À vérifier avant publication : les thèmes additionnels sont-ils dérivés uniquement en CSS ou doivent-ils aussi exister en tokens source JSON pour rester la source de vérité unique (cf. Article 2 de la constitution) |

## 8. Critères de succès mesurables

- **CS-1** : 100 % des composants listés en `specs/02-specifications-techniques.md` §C.7 (priorité P0) existent des deux côtés (React et Angular) avec un CSS partagé — **atteint** (96 dossiers de composants de chaque côté, incluant les fichiers d'index/utilitaires).
- **CS-2** : Zéro violation axe-core automatique sur les stories Storybook publiées — **à vérifier**, aucun rapport CI n'existe puisque la CI n'est pas configurée (écart E-4).
- **CS-3** : Le script `scripts/audit-parity.js` s'exécute sans échec non justifié — **à exécuter et consigner** avant de considérer la parité comme vérifiée en continu.
- **CS-4** : Le script `scripts/audit-contrast.js` s'exécute sans échec sur les 5 thèmes × 2 modes — **à exécuter et consigner**.
- **CS-5** : Le dépôt est publiquement installable (`npm i @glowing-sea-studio/erebus-react`) — **non atteint** (écart E-5).

## 9. Points nécessitant une décision (checklist de revue)

- [ ] Confirmer le scope npm définitif (`@glowing-sea-studio/erebus-*` conservé, ou migration vers `@erebus/*`).
- [ ] Décider si l'internationalisation par dictionnaire injectable (NF-003) reste un objectif de la v1.0 ou est explicitement reportée.
- [ ] Décider si un site de documentation dédié (Next.js) est requis avant la première publication publique, ou si Storybook suffit pour la v1.0.
- [ ] Confirmer que les 4 thèmes additionnels doivent obtenir un fichier de tokens source JSON (cohérence avec l'Article 2 de la constitution) plutôt que du CSS écrit à la main.

---

*Voir `plan.md` pour la traduction technique de cette spécification, `research.md` pour la justification des choix et écarts, `data-model.md` pour le modèle de tokens/composants, et `tasks.md` pour le backlog restant.*
