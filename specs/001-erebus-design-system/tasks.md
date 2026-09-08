# Tâches — Erebus, corpus SpecKit rétrospectif

**Entrée** : `plan.md` §6, `research.md`
**Objectif** : combler les écarts entre le produit tel que construit (lots 0-8, catalogue complet) et la spécification d'origine, pour atteindre une v1.0 réellement publiable. Ce n'est pas le backlog de composants (déjà réalisé, voir `specs/00-roadmap.md`) mais le backlog d'infrastructure et de vérification restant.

**Format** : `[ID] [P?] Description — fichiers concernés`. `[P]` = parallélisable (fichiers disjoints, aucune dépendance).

**Ordre de dépendance** (voir `research.md`, résumé final) : T-01 → (T-02 [P] avec T-05) → T-03 → (T-04 [P] avec T-06, T-07)

---

## Phase 1 — Vérification factuelle (bloquant, aucune décision produit requise)

- [ ] **T-05** Lire `packages/core/src/themes/{corporate,vibrant,minimal,high-contrast}.css` et vérifier qu'ils ne référencent que des variables `--erb-color-*` existantes (pas de valeur brute). Produire un constat écrit (conforme / non conforme par thème). — *Résout R-6.*
- [ ] **T-06** Auditer la casse des noms de dossiers dans `packages/react/src/` et `packages/angular/src/` (kebab-case vs PascalCase constaté : `ColorPicker`, `DatePicker`, `Hero`, `CommandPalette`, `CTA`, `FAQ`, `Hero`, `Testimonial`, etc.) et décider d'une convention unique, à renommer ou à documenter comme acceptée. — *Résout l'incohérence relevée en `data-model.md` §6.*
- [ ] **T-07** [P] Exécuter `node scripts/audit-parity.js` et `node scripts/audit-contrast.js` une première fois, consigner le résultat comme ligne de base (créer `specs/001-erebus-design-system/audit-baseline.md` avec date, commit, résultat). — *Prépare CS-3/CS-4 de `spec.md`.*

## Phase 2 — CI/CD (débloque la vérification continue de tout le reste)

- [ ] **T-01** Créer `.github/workflows/ci.yml` : lint, typecheck, test, build sur chaque PR et push `main`, en s'inspirant de `specs/03-deploiement-github.md` §4. Adapter les noms de scripts aux commandes réelles de `package.json` racine (`pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`). — *Résout R-4.*
- [ ] **T-01b** Ajouter `pnpm exec node scripts/audit-parity.js` et `pnpm exec node scripts/audit-contrast.js` comme étapes bloquantes de `ci.yml`, une fois la ligne de base T-07 établie. — *Rend l'Article 1 et l'Article 4 de la constitution vérifiables en continu, pas seulement en revue manuelle.*

## Phase 3 — Décisions produit préalables à la publication

- [ ] **T-08** Décider et documenter le scope npm définitif (`@glowing-sea-studio/erebus-*` conservé ou migration `@erebus/*`). Mettre à jour `spec.md` §9 avec la décision actée. — *Résout R-1 (décision).*
- [ ] **T-09** Décider du périmètre i18n réel de la v1.0 : soit implémenter un mécanisme minimal de dictionnaire injectable (React : contexte + provider ; Angular : jeton d'injection), FR + EN, pour les chaînes visibles des composants qui en affichent (pagination, messages de validation par défaut, libellés d'état) ; soit réviser `specs/01-*` §7.3 et `spec.md` NF-003 pour n'annoncer que le RTL. — *Résout R-3.*
- [ ] **T-10** Décider si `apps/docs` (site Next.js statique) est construit avant la v1.0, ou si Storybook + `apps/demo-*` sont entérinés comme documentation officielle. Mettre à jour `specs/02-*` §B.1 et `specs/03-*` en conséquence dans le cas où le site Next.js est abandonné. — *Résout R-2.*

## Phase 4 — Publication (dépend de T-01, T-01b, T-08)

- [ ] **T-02** Ajouter `LICENSE` (MIT, cf. `specs/01-*` §1), `CONTRIBUTING.md`, `.changeset/config.json` (cf. `specs/03-*` §3.3, avec le scope tranché en T-08), `.changeset/pre.json` (mode `alpha`). — *Résout une partie de R-5.*
- [ ] **T-02b** Créer `.github/workflows/release.yml` selon `specs/03-*` §6, avec le scope npm de T-08. — *Complète R-5.*
- [ ] **T-02c** Suivre `specs/03-deploiement-github.md` §7 (première publication avec token) puis §8 (bascule trusted publishing OIDC) pour publier effectivement `0.1.0-alpha.0` de chaque package. — *Complète R-5 ; condition de CS-5 dans `spec.md`.*
- [ ] **T-11** Si T-10 retient le site Next.js : créer `.github/workflows/deploy-docs.yml` selon `specs/03-*` §5. Sinon : ajouter un lien Storybook déployé (GitHub Pages ou Chromatic) dans le README à la place. — *Dépend de T-10.*

## Phase 5 — Fermeture de la boucle documentaire

- [ ] **T-03** Mettre à jour `README.md` : vérifier que le scope npm affiché correspond à T-08, que les badges pointent vers les vrais workflows créés en T-01/T-02b, et que la mention de statut « alpha » est présente (cf. `specs/04-*` §4, « Statut du projet »).
- [ ] **T-04** [P] Refermer la boucle SpecKit : une fois T-05 à T-11 traités, mettre à jour `spec.md` §7 (tableau des écarts) en marquant chaque ligne résolue, et `plan.md` §7 (suivi de progression) en cochant la Phase 3.

---

## Ce qui n'est délibérément PAS dans ce backlog

- Le développement de nouveaux composants — le catalogue est complet selon `specs/00-roadmap.md` (lots 0 à 8, tous cochés). Toute demande de nouveau composant relève d'une nouvelle feature SpecKit (`specs/002-*`), pas d'une correction de celle-ci.
- La correction de bugs spécifiques à un composant — relève du suivi d'issues GitHub habituel, pas de ce corpus rétrospectif.
- Les tâches en cours suivies dans `jules-tasks/` (ex. `erebus-ui-polish-20260907-2346.md`) — ce sont des tâches d'exécution déléguées à un agent, distinctes du backlog d'infrastructure ci-dessus ; vérifier qu'elles ne dupliquent pas T-05/T-06 avant de les lancer.
