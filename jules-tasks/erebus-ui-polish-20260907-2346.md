# Charte Graphique Parfaite - React & Angular

## Objectif
Faire plusieurs passes d'analyse, d'amélioration et de correction des deux bibliothèques (React et Angular) du design system "Erebus", avec pour but d'obtenir une charte graphique parfaite.

## Contexte
Le projet est un monorepo pnpm + Nx contenant un design system avec deux implémentations : `@erebus/react` et `@erebus/angular`.
L'interface a récemment souffert de bugs visuels (transparences inattendues et backgrounds sombres en mode clair à cause d'un mauvais renommage `bg-canvas-surface` / `bg-surface`). Ces variables ont été restaurées, mais il est nécessaire de faire une passe complète d'assurance qualité (QA) visuelle.

## Tâches pour Jules
1. Analyser l'ensemble des composants React et Angular ainsi que le CSS core (`packages/core/src/components/*.css`).
2. Vérifier l'homogénéité visuelle (espacements, couleurs, typographies, contrastes) en utilisant uniquement les variables existantes de la charte dans `packages/tokens`.
3. Corriger d'éventuels décalages, problèmes d'alignement ou classes manquantes.
4. S'assurer d'une **parité absolue** entre les composants Angular et React au niveau du code (mêmes classes CSS appliquées) et du rendu. Si un composant ou un état existe d'un côté, il doit exister de l'autre.
5. Valider et maintenir la conformité totale avec le fichier `AGENTS.md`.

## Règles strictes (AGENTS.md)
- Aucun padding/margin physique (ex: `margin-left`), uniquement des propriétés logiques (`margin-inline-start`, `padding-inline-end`).
- Aucune valeur brute en pixels ou hexadécimal dans le CSS pour les couleurs ou espacements, toujours utiliser une variable `--erb-*`.
- Ne **jamais** modifier la configuration CI, ESLint, TypeScript ou Nx.
- Vérifier que `pnpm lint`, `pnpm typecheck`, `pnpm test` et `pnpm build` passent **obligatoirement** avec succès avant de terminer ou commiter le travail.

## Constraints
- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
