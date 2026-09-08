# Recherche & décisions — Erebus

Ce document consigne, pour chaque écart identifié en `spec.md` §7, la décision technique implicite ou explicite retrouvée dans le dépôt, ses alternatives, et son statut. Contrairement à un `research.md` classique de SpecKit (qui lève des inconnues avant de coder), celui-ci part du code déjà écrit et documente les choix a posteriori.

## R-1 — Scope npm

**Constat** : packages publiés sous `@glowing-sea-studio/erebus-react`, `-angular`, `-core`, `-tokens`, `-icons`. La spécification d'origine (`specs/03-deploiement-github.md`) prévoyait `@erebus/*` avec repli sur `@Glowing-Sea-Studio/erebus-*` si le scope `erebus` était pris sur npm.

**Décision retrouvée** : le repli a été appliqué directement, sans étape intermédiaire documentée. Cohérent avec la logique de repli prévue — pas une dérive, une exécution de la clause de secours.

**Alternatives** :
- Racheter/négocier le scope `erebus` sur npm — coût et délai inconnus, non prioritaire tant que rien n'est publié.
- Conserver `@glowing-sea-studio/erebus-*` définitivement — plus long à taper mais sans risque de dépendre d'un tiers.

**Statut** : ouvert, à trancher avant la première publication publique (voir `spec.md` §9).

## R-2 — Architecture des apps (pas de site doc Next.js)

**Constat** : `specs/02-*` §B.1 prévoyait `apps/docs` (Next.js, export statique). Le dépôt contient à la place `apps/demo-react`, `apps/demo-angular` et `apps/e2e`, plus Storybook par package.

**Raisonnement probable** : Storybook couvre déjà la démonstration composant par composant avec contrôles interactifs, sans développement supplémentaire ; un site Next.js dédié ajoute une couche de maintenance (navigation, recherche, MDX) pour une valeur ajoutée essentiellement éditoriale. Les apps de démo couvrent le besoin de « vitrine d'assemblage » (plusieurs composants dans un écran réel) que Storybook seul ne montre pas bien.

**Alternatives pour la suite** :
- (a) Construire `apps/docs` comme prévu à l'origine, pour une doc éditorialisée + recherche + guides de thématisation.
- (b) Formaliser Storybook + demos comme la documentation officielle, mettre à jour `specs/02-*` et `specs/03-*` en conséquence pour ne plus décrire un artefact qui ne sera jamais construit.

**Statut** : ouvert. Recommandation : (b) tant qu'aucun besoin utilisateur concret (recherche plein texte, guide éditorial long) ne justifie (a) — coût de maintenance d'un site statique supplémentaire non négligeable pour un mainteneur solo (cf. `specs/01-*` §12, risque « périmètre trop large pour un mainteneur solo »).

## R-3 — Internationalisation : RTL livré, dictionnaire non livré

**Constat** : `docs/i18n-rtl.md` (43 lignes) documente l'approche CSS (propriétés logiques, retournement des icônes directionnelles). Aucun fichier de dictionnaire (`fr.json`/`en.json` ou équivalent TypeScript) n'existe dans `packages/*/src`. Aucun hook `useTranslation`/service Angular équivalent trouvé.

**Raisonnement probable** : le RTL est une propriété structurelle du CSS (facile à garantir une fois les règles logiques en place et vérifiées par stylelint), alors que le dictionnaire de traduction est une fonctionnalité produit à part entière (API d'injection, valeurs par défaut, formatage `Intl`) qui n'a pas été priorisée dans les lots exécutés.

**Alternatives** :
- Implémenter un mécanisme minimal : un contexte/provider React et un jeton d'injection Angular exposant les chaînes des composants qui en affichent (ex. labels de pagination, messages de validation par défaut), avec FR et EN fournis.
- Réviser `specs/01-*` §7.3 et `spec.md` NF-003 pour ne plus promettre de dictionnaire tant qu'il n'est pas construit, et documenter le RTL seul comme le périmètre i18n réel de la v1.0.

**Statut** : ouvert, décision produit à trancher avant toute communication publique sur l'internationalisation (un utilisateur qui lit « FR et EN fournis » et ne trouve rien perd confiance dans le reste de la documentation).

## R-4 — CI/CD absente

**Constat** : aucun répertoire `.github/workflows`. `specs/03-deploiement-github.md` détaille pourtant `ci.yml`, `deploy-docs.yml`, `release.yml` prêts à l'emploi.

**Raisonnement probable** : `specs/03-*` est un guide opérationnel écrit à l'avance (« comment publier depuis un téléphone »), pas encore exécuté. Les scripts (`audit-parity.js`, `audit-contrast.js`) existent déjà et sont conçus pour tourner en CI — leur présence confirme que la CI est bien planifiée, seulement pas encore branchée.

**Statut** : ouvert. C'est l'écart avec le plus d'effet de levier : tant qu'il n'est pas comblé, la parité React/Angular et les contrastes ne sont vérifiés que manuellement, ce qui contredit directement l'Article 1 et l'Article 4 de la constitution en pratique (les garde-fous existent en tant que scripts mais ne sont pas appliqués systématiquement).

## R-5 — Publication npm non amorcée

**Constat** : pas de `LICENSE`, pas de `CONTRIBUTING.md`, pas de `.changeset/config.json`, toutes les versions à `0.1.0`.

**Dépendance** : bloqué par R-4 (le workflow `release.yml` de `specs/03-*` suppose une CI existante) et par R-1 (le scope doit être tranché avant de créer l'organisation npm et de configurer le trusted publisher).

**Statut** : ouvert, séquencé après R-4 et R-1.

## R-6 — Thèmes additionnels : CSS écrit à la main vs. tokens source

**Constat** : `packages/tokens/src/themes/` ne contient que `default.json`. Les quatre autres thèmes (`corporate`, `vibrant`, `minimal`, `high-contrast`) existent uniquement comme fichiers CSS dans `packages/core/src/themes/`.

**Risque identifié** : si ces fichiers CSS contiennent des valeurs écrites directement plutôt que des références aux primitives de tokens, ils violent potentiellement l'Article 2 de la constitution (« aucune valeur brute »), et surtout perdent la garantie de cohérence apportée par Style Dictionary (ex. vérification automatique qu'un token défini en clair existe aussi en sombre, cf. `specs/02-*` §C.2).

**Action nécessaire avant de trancher** : lire effectivement le contenu de `packages/core/src/themes/corporate.css` (et les trois autres) pour vérifier s'ils référencent des variables `--erb-color-*` existantes ou des valeurs brutes. Ce point n'a pas été vérifié dans le cadre de la rédaction de ce corpus — inscrit comme tâche de vérification en `tasks.md` (T-05).

**Statut** : ouvert, vérification factuelle requise avant décision.

## Résumé des décisions à formaliser (ordre de dépendance)

1. R-4 (CI) — débloque la vérification continue de tout le reste.
2. R-6 (thèmes) — vérification factuelle, indépendante, peu coûteuse.
3. R-1 (scope npm) — décision produit, nécessaire avant R-5.
4. R-5 (publication) — dépend de R-4 et R-1.
5. R-3 (i18n) — décision produit, indépendante, peut être tranchée en parallèle.
6. R-2 (site doc) — décision produit à plus long terme, la moins urgente.
