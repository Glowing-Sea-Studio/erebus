# Constitution — Erebus

**Version** : 1.0.0
**Ratifiée le** : 2026-09-08
**Dernier amendement** : 2026-09-08

Ce document est la loi du dépôt. Toute spécification (`specs/*/spec.md`), tout plan (`plan.md`) et toute tâche (`tasks.md`) doit s'y conformer. En cas de conflit entre une consigne de tâche et un article de cette constitution, la constitution prévaut et la tâche doit être corrigée avant exécution.

---

## Article 1 — Parité stricte React ⟷ Angular

Tout composant public existe dans les deux implémentations, avec la même API (mêmes noms de propriétés, mêmes valeurs, mêmes événements) et produit le même arbre HTML.

**Pourquoi** : la proposition de valeur d'Erebus est qu'une organisation qui utilise React *et* Angular n'entretient qu'un seul vocabulaire. Une divergence, même mineure, ruine cette promesse en quelques semaines si elle n'est pas empêchée mécaniquement.

**Comment c'est appliqué** : un script de vérification de parité (`scripts/audit-parity.js`) extrait l'API publique des deux packages et échoue la CI sur tout écart non listé dans un fichier d'exceptions justifiées. Un composant livré d'un seul côté sans dérogation explicite dans la tâche n'est pas mergeable.

## Article 2 — Aucune valeur brute, uniquement des tokens

Aucun CSS de composant ne contient de couleur hexadécimale, de valeur `px`, `rgb()` ou de durée `ms` écrite en dur. Toute valeur de style provient d'une variable `--erb-*`, elle-même issue des tokens sémantiques ou primitifs.

**Pourquoi** : c'est ce qui permet la thématisation par simple redéfinition de variables, sans jamais toucher au CSS des composants ni écrire de `!important`.

**Comment c'est appliqué** : relecture systématique du diff CSS à la recherche de `#`, `px`, `rgb(` ; à terme, règle stylelint bloquante.

## Article 3 — Propriétés logiques uniquement (compatibilité RTL)

Interdiction des propriétés physiques (`left`, `right`, `margin-left`, `margin-right`, `padding-left`, `padding-right`, `border-left`, `border-right`, `text-align: left|right`). Seules les propriétés logiques sont autorisées (`inset-inline-start`, `margin-inline-end`, `padding-block-start`, etc.).

**Pourquoi** : le support des langues écrites de droite à gauche doit être natif, sans feuille de style additionnelle ni composant dupliqué.

**Comment c'est appliqué** : règle stylelint bloquante ; toute PR introduisant une propriété physique dans `packages/core/src/components/` est refusée.

## Article 4 — Accessibilité non négociable (WCAG 2.2 AA)

Un composant qui ne respecte pas WCAG 2.2 niveau AA n'est pas publié. Ce n'est pas une option de configuration ni une amélioration future : c'est une condition de définition du composant lui-même (voir Definition of Done, Article 6).

**Pourquoi** : portée réglementaire (European Accessibility Act depuis juin 2025, RGAA) et argument de différenciation central du produit. Une accessibilité ajoutée après coup coûte plus cher et reste incomplète.

**Comment c'est appliqué** : test axe-core sur chaque story, test clavier explicite (pas seulement automatique), focus toujours visible via `:focus-visible`, jamais d'information portée par la seule couleur, zones tactiles ≥ 24×24px.

## Article 5 — Le CSS ne connaît que le composant et les attributs de données

Le CSS ne cible que `.erb-<composant>` et des sélecteurs d'attributs `data-*`. Les classes composées (`.erb-button--danger--solid`) sont interdites : elles rendent les surcharges utilisateur imprévisibles. L'état d'un composant est exposé dans le DOM via `data-variant`, `data-intent`, `data-size`, `data-loading`, etc.

**Pourquoi** : permet à un consommateur de styler depuis l'extérieur sans connaître les classes internes, et garde le vocabulaire d'API identique entre React et Angular puisqu'il est porté par le DOM et non par le nom de classe.

## Article 6 — Definition of Done bloquante par composant

Un composant n'existe pas tant que toutes les cases de la Definition of Done ne sont pas cochées : implémentation React et Angular, CSS conforme aux articles 1 à 5, types stricts sans `any`, toutes variantes/intentions/tailles couvertes, tous les états (survol, focus, actif, désactivé, chargement, invalide, lecture seule, sélectionné), rôle ARIA et navigation clavier, fonctionnement dans tous les thèmes × modes × densités × LTR/RTL, test unitaire + test clavier + test axe, stories Storybook des deux côtés, changeset ajouté.

**Pourquoi** : sans check-list exhaustive et non négociable, un agent de développement ou un contributeur presse livre un sous-ensemble qui semble suffisant mais casse la promesse de parité ou d'accessibilité.

## Article 7 — Périmètre de tâche strict

Une tâche modifie exclusivement les fichiers qu'elle annonce. Aucune dépendance runtime n'est ajoutée sans autorisation explicite de la tâche. Les seules dépendances runtime admises à ce jour : `@floating-ui/*`, `clsx`, `tailwind-merge` (React), `@angular/cdk` (Angular).

**Pourquoi** : un dépôt piloté principalement par un agent de développement dérive vite si le périmètre n'est pas fermé ; un fichier inattendu dans un diff est le signal d'alarme numéro un à la relecture.

**Comment c'est appliqué** : toute PR touchant un fichier hors périmètre annoncé, ou modifiant `package.json`/`pnpm-lock.yaml` sans que la tâche l'autorise, est refusée et relancée avec une liste de fichiers plus stricte.

## Article 8 — Sécurité du rendu serveur (SSR-safe par défaut)

Aucun accès direct à `window`, `document` ou `localStorage` sans garde d'exécution (`typeof window !== 'undefined'`, `isPlatformBrowser`, ou équivalent). Aucun `useLayoutEffect` non protégé côté React.

**Pourquoi** : les composants doivent pouvoir être rendus côté serveur (Next.js, Angular Universal) sans erreur d'hydratation ni scintillement.

## Article 9 — Versionnage sémantique et dépréciation encadrée

Semver strict sur tous les packages publiés, version verrouillée ensemble (mode `fixed` Changesets). Une propriété dépréciée reste fonctionnelle pendant deux versions mineures avant retrait. Toute rupture majeure est accompagnée d'un guide de migration.

**Pourquoi** : une bibliothèque de composants consommée par des applications tierces ne peut pas casser silencieusement ; la confiance se construit sur la prévisibilité des montées de version.

---

## Gouvernance

- Toute modification de cette constitution est un changement délibéré, jamais un effet de bord d'une tâche de composant. Elle se propose comme une PR dédiée touchant uniquement `.specify/memory/constitution.md` (et les templates qui en dépendent si leur contenu devient incohérent).
- Le numéro de version de la constitution suit semver : `MAJOR` pour le retrait ou la redéfinition incompatible d'un article, `MINOR` pour l'ajout d'un article ou d'une section de gouvernance, `PATCH` pour une clarification qui ne change aucune règle.
- Toute PR de code doit pouvoir être justifiée par référence à un ou plusieurs articles de cette constitution en cas de doute de relecture.
- En cas de contradiction constatée entre ce document et `AGENTS.md` (racine du dépôt), la constitution prévaut : `AGENTS.md` doit être mis à jour pour refléter cette source de vérité.
