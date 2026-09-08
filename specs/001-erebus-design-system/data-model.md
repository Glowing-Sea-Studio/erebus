# Modèle de données — Erebus

Erebus n'a pas de base de données ni de modèle métier au sens applicatif : ses « entités » sont les concepts de design système eux-mêmes. Ce document en fixe la structure et les invariants, comme référence pour toute nouvelle tâche.

## 1. Token

Valeur de design nommée, à l'un de trois niveaux.

| Champ | Type | Contrainte |
|---|---|---|
| `$type` | énumération W3C (`color`, `dimension`, `duration`, `fontFamily`, `fontWeight`, `number`, …) | obligatoire |
| `$value` | selon `$type` | obligatoire ; pour un token sémantique, référence un token primitif (`{color.blue.500}`), jamais une valeur brute |
| chemin | segments séparés par point (`color.accent.bg`) | détermine le nom de variable CSS généré : `--erb-<chemin-kebab>` |

**Invariants** :
- Un token **primitif** n'est jamais consommé directement par un composant (Article 2 de la constitution).
- Un token **sémantique** défini dans `semantic/light.json` DOIT avoir un équivalent dans `semantic/dark.json`, et réciproquement — vérifié par `packages/tokens/scripts/verify-parity.mjs`.
- Un token **composant** (`packages/tokens/src/component/<nom>.json`) retombe toujours, in fine, sur un ou plusieurs tokens sémantiques — jamais directement sur un primitif.

## 2. Thème

Ensemble cohérent de valeurs de tokens sémantiques, appliqué par attribut de données.

| Champ | Type | Contrainte |
|---|---|---|
| `name` | chaîne (`default`, `corporate`, `vibrant`, `minimal`, `high-contrast`) | unique |
| `mode` | `light` \| `dark` | un thème existe obligatoirement dans les deux |
| sélecteur CSS | `[data-erb-theme='<name>'][data-erb-mode='<mode>']` | applicable sur `<html>` ou tout descendant |

**Invariant** : tout token sémantique référencé par un composant DOIT recevoir une valeur pour chaque paire (thème, mode) publiée — sinon le composant « casse » silencieusement dans ce thème.

**État réel** (voir `research.md` R-6) : seul `default` a un fichier de tokens source JSON confirmé ; les 4 autres thèmes sont en CSS et leur conformité à cet invariant reste à vérifier.

## 3. Densité

Axe indépendant du thème, affectant les échelles d'espacement/hauteur de contrôle sans changer les couleurs.

| Champ | Type |
|---|---|
| `value` | `compact` \| `comfortable` \| `spacieux` (`spacious`) |
| sélecteur CSS | `[data-erb-density='<value>']` |

## 4. Composant (contrat d'API commun)

Chaque composant public est un contrat identique des deux côtés (Article 1 de la constitution).

| Élément du contrat | React | Angular | Contrainte de parité |
|---|---|---|---|
| Nom de propriété | `variant`, `intent`, `size`, … | `variant`, `intent`, `size`, … (via `input()`) | identique, aucune traduction de nom |
| Valeurs énumérées | union de littéraux TS | union de littéraux TS | même ensemble de valeurs, même ordre de préférence par défaut |
| État contrôlé | `value` + `onValueChange`, ou `defaultValue` | `[(value)]`, `ControlValueAccessor` si contrôle de formulaire | les deux modes supportés des deux côtés |
| Échappatoires | `className`, `style`, props HTML inconnues transmises, `ref` exposée | `class`, `style` fusionnés, attributs inconnus transmis | jamais écrasées, toujours fusionnées |
| Rendu DOM | balise + `data-*` | balise + `data-*` | arbre HTML équivalent, vérifiable par test de snapshot croisé |
| CSS | `.erb-<composant>` uniquement | `.erb-<composant>` uniquement | un seul fichier CSS partagé dans `packages/core`, jamais dupliqué |

**Cycle de vie d'un composant** (Definition of Done, Article 6 de la constitution) :

```
proposé → implémenté (React + Angular + CSS) → testé (unitaire + clavier + axe)
        → documenté (stories + page doc) → audité (parité + contraste)
        → publiable (changeset ajouté)
```

Un composant ne passe à l'étape suivante que si la précédente est intégralement cochée ; il n'existe pas d'état intermédiaire « publié partiellement ».

## 5. Variante / Intention / Taille (vocabulaire d'API partagé)

Valeurs autorisées, identiques pour tout composant qui les expose (voir `specs/02-*` §C.4) :

- `variant` : `solid`, `soft`, `outline`, `ghost`, `link`, `plain`
- `intent` : `accent`, `neutral`, `success`, `warning`, `danger`, `info`
- `size` : `xs`, `sm`, `md`, `lg`, `xl` (défaut `md`)
- `radius` : `none`, `sm`, `md`, `lg`, `full`, `inherit`
- `orientation` : `horizontal`, `vertical`
- `placement` : les 12 valeurs Floating UI

**Interdits explicites** : `color="red"` (utiliser `intent="danger"`), `type="primary"`, toute taille numérique brute en propriété.

## 6. Inventaire réel du catalogue (constaté le 2026-09-08)

| Côté | Dossiers dans `src/` | CSS partagés dans `packages/core/src/components/` |
|---|---|---|
| React (`packages/react/src`) | 96 (dont `index.ts` et `utils.ts`, hors composants) | 86 |
| Angular (`packages/angular/src`) | 96 (dont `index.ts` et `utils.ts`, hors composants) | 86 |

Écart de nommage constaté sans impact fonctionnel : certains dossiers utilisent la casse Pascal (`ColorPicker`, `DatePicker`, `Hero`…) plutôt que kebab-case (`color-picker` attendu par convention `specs/02-*`). À vérifier lors d'une passe de cohérence (voir `tasks.md` T-06) — n'affecte pas l'API publique si le nom de dossier n'est pas exposé, mais nuit à la lisibilité du dépôt et à l'application mécanique du gabarit de tâche (§A.3 de `specs/02-*`) qui suppose un nommage uniforme.
