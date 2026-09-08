# Plan d'implémentation — Erebus, design system React + Angular

**Branche** : `001-erebus-design-system`
**Entrée** : `specs/001-erebus-design-system/spec.md`
**Statut** : Rétrospectif (décrit l'architecture réelle) + prospectif pour la section 6 (travail restant)

## 1. Résumé

Monorepo pnpm + Nx publiant un design system en deux implémentations natives (React 19, Angular 18+), partageant un package CSS agnostique (`core`) et un package de tokens (`tokens`) généré par Style Dictionary. Approche technique : parité d'API garantie par convention stricte + script d'audit, thématisation par attributs de données et variables CSS en cascade de couches (`@layer`), accessibilité vérifiée par axe-core et tests clavier explicites.

## 2. Contexte technique

| Axe | Valeur |
|---|---|
| Langage | TypeScript strict (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`) |
| Frameworks cibles | React 18.3 / 19 (peer dependency), Angular 18+ (standalone, OnPush, signals) |
| Gestionnaire de paquets | pnpm 9, workspaces, `packageManager` verrouillé |
| Orchestration | Nx 19 (`enforce-module-boundaries` : `core` ne peut importer ni React ni `@angular/*`) |
| Build CSS | PostCSS + Lightning CSS |
| Build tokens | Style Dictionary v4, format W3C Design Tokens |
| Build React | tsup, sortie ESM uniquement, sous-exports par composant |
| Build Angular | ng-packagr |
| Tests | Vitest + Testing Library (React et Angular) + axe-core |
| Documentation vivante | Storybook 8 (React et Angular séparés) |
| E2E / visuel | Playwright (`apps/e2e`), snapshots visuels |
| Node | ≥ 20 |
| Stockage/état | Aucun — bibliothèque de présentation, pas de backend |
| Cible de performance | CSS de base ≤ 18 ko compressé (NF-002) |
| Contraintes | Aucune dépendance runtime hors `@floating-ui/*`, `clsx`, `tailwind-merge` (React) et `@angular/cdk` (Angular) — Article 7 de la constitution |
| Périmètre projet | Bibliothèque de composants multi-consommateurs (pas une application unique) |

## 3. Vérification contre la constitution (`.specify/memory/constitution.md`)

| Article | Statut constaté | Preuve / lacune |
|---|---|---|
| 1 — Parité stricte | Structure symétrique confirmée (96 dossiers composants de chaque côté) ; **vérification automatique non exécutée en continu** (E-4) | `scripts/audit-parity.js` existe mais aucune CI ne l'exécute |
| 2 — Tokens uniquement | Respecté dans `packages/core/src/components/*.css` pour le thème `default` ; **à re-vérifier** pour les 4 thèmes additionnels écrits directement en CSS (E-6) | `packages/core/src/themes/*.css` |
| 3 — Propriétés logiques | Approche documentée (`docs/i18n-rtl.md`) ; règle stylelint bloquante à confirmer dans `stylelint.config.js` | À auditer dans le cadre de T-01 (tasks.md) |
| 4 — Accessibilité AA | Tests axe présents par composant (convention `*.spec`/`*.test`) ; **aucun rapport consolidé** faute de CI (E-4) | À produire via T-02 |
| 5 — CSS par attributs de données | Convention respectée dans les fichiers de composants consultés (`button.css` notamment) | Conforme |
| 6 — Definition of Done | Appliquée composant par composant selon `specs/02-*` §D.3 ; pas de gate automatique | À formaliser en CI (T-02) |
| 7 — Périmètre de tâche strict | Processus humain (revue de diff), pas d'outillage automatique | Pas d'action requise, discipline de revue |
| 8 — SSR-safe | À auditer : aucun test de rendu serveur (Next/Angular Universal) constaté dans `apps/` | Risque si un site doc SSR est ajouté plus tard |
| 9 — Semver / dépréciation | Aucune publication effective à ce jour ; tous les packages en `0.1.0` sans changeset | Non applicable tant que E-5 n'est pas résolu |

**Aucune violation ne nécessite de justification dans une section « Complexity Tracking »** : les écarts constatés (E-1 à E-6) sont des retards d'infrastructure, pas des dérogations volontaires aux principes.

## 4. Structure du projet (réelle)

```
erebus/
├── apps/
│   ├── demo-react/          # application de démonstration Vite + React
│   ├── demo-angular/        # application de démonstration Angular CLI
│   └── e2e/                 # tests Playwright (fonctionnels + visuels)
├── packages/
│   ├── tokens/               # @glowing-sea-studio/erebus-tokens — source de vérité
│   │   └── src/{primitive,semantic,component,themes}/
│   ├── core/                 # @glowing-sea-studio/erebus-core — CSS agnostique
│   │   └── src/{components,themes,reset.css,layers.css,theme.css}
│   ├── react/                 # @glowing-sea-studio/erebus-react
│   ├── angular/                # @glowing-sea-studio/erebus-angular
│   └── icons/                 # @glowing-sea-studio/erebus-icons
├── scripts/
│   ├── audit-parity.js       # diff d'API publique React ⟷ Angular
│   └── audit-contrast.js     # vérification des contrastes par thème × mode
├── docs/                      # guides Markdown (i18n/RTL, migrations Bootstrap/Tailwind)
├── specs/                     # spécifications produit (00-04 historiques + 001-* SpecKit)
├── .specify/                  # constitution et mémoire SpecKit
├── AGENTS.md                  # cadre de travail pour agents de développement
└── pnpm-workspace.yaml
```

**Écart vs. l'architecture cible initiale (`specs/02-*` §B.1)** : pas d'`apps/docs` (site Next.js statique), pas d'`apps/playground-react`/`playground-angular` séparés d'un environnement de démo. Storybook (par package, sous `packages/*/. storybook`) et les deux apps de démo remplissent aujourd'hui ce rôle. Décision à formaliser (voir `spec.md` §9) : combler l'écart ou entériner cette architecture comme définitive.

## 5. Dépendances entre packages (contrainte Nx)

```
tokens ──► core ──► react
              │ └──► angular
icons ──► react, angular
```

`core` n'importe aucun framework. `react` et `angular` ne se référencent jamais entre eux. Violation = échec CI (une fois la CI en place, cf. écart E-4).

## 6. Travail restant pour atteindre la v1.0 publiable (delta entre l'état constaté et `spec.md`)

Cette section fait le lien vers `tasks.md`, qui détaille chaque item en tâches exécutables :

1. **Vérification continue** — mettre en place `.github/workflows/ci.yml` exécutant lint, typecheck, test, build, `audit-parity.js`, `audit-contrast.js` sur chaque PR (comble E-4).
2. **Décision de scope et publication** — trancher `@glowing-sea-studio/erebus-*` vs `@erebus/*` (E-1), ajouter `LICENSE`, `CONTRIBUTING.md`, `.changeset/config.json`, publier en pré-version `alpha` (comble E-5).
3. **Site de documentation ou décision d'y renoncer** — si retenu, `apps/docs` Next.js en export statique + déploiement GitHub Pages selon `specs/03-deploiement-github.md` (comble E-2) ; sinon, documenter Storybook comme vitrine officielle dans le README.
4. **Internationalisation réelle** — soit implémenter le mécanisme de dictionnaire injectable FR/EN annoncé en NF-003, soit réviser la spécification pour n'annoncer que le support RTL effectivement livré (résout E-3 par le code ou par la spec).
5. **Cohérence des tokens de thème** — décider si les 4 thèmes additionnels doivent migrer vers un fichier de tokens source JSON (Style Dictionary) au lieu d'un CSS écrit à la main, pour rester conformes à l'Article 2 de la constitution (résout E-6).
6. **Exécution et consignation des audits existants** — lancer `audit-parity.js` et `audit-contrast.js` une première fois hors CI pour établir une base de référence avant de les rendre bloquants (prépare CS-3 et CS-4 de `spec.md`).

## 7. Suivi de progression

- [x] Phase 0 : Recherche des écarts et confirmation de l'état réel (`research.md`)
- [x] Phase 1 : Modèle de données / contrats d'API (`data-model.md`, `quickstart.md`)
- [ ] Phase 2 : Génération des tâches (`tasks.md`) — **fait**, voir fichier associé
- [ ] Phase 3 : Exécution des tâches restantes (hors périmètre de ce corpus — nécessite des PR dédiées)
- [ ] Phase 4 : Validation (exécution des audits, revue visuelle multi-thème/mode)

**Gate constitution initiale** : PASS (aucune violation nécessitant une dérogation).
**Gate constitution post-conception** : PASS — les écarts identifiés sont des items de `tasks.md`, pas des exceptions à documenter.

---

*Voir `research.md` pour le détail des décisions et alternatives considérées, `data-model.md` pour le modèle de tokens et le contrat d'API composant, `quickstart.md` pour le mode d'emploi consommateur/contributeur, et `tasks.md` pour le backlog exécutable.*
