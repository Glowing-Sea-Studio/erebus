# Erebus — Spécifications techniques et instructions de développement

**Dépôt** : `github.com/Glowing-Sea-Studio/erebus`
**Scope npm** : `@erebus` *(repli : `@Glowing-Sea-Studio/erebus-*`)*
**Préfixe CSS** : `erb` — classes `.erb-*`, variables `--erb-*`, attributs `data-erb-*`
**Sélecteur Angular** : `erb-*`
**Destinataire** : agent de développement (Google Jules) + relecteur humain

---

## Partie A — Cadre de travail avec l'agent

### A.1 Principe directeur

Un agent de code produit du bon travail sur des tâches **fermées, vérifiables et courtes**. Il produit du travail inexploitable sur des tâches ouvertes du type « implémente la bibliothèque ». Toute la partie A vise à transformer ce projet en une suite de tâches fermées.

Trois règles non négociables :

1. **Une tâche = une pull request = un périmètre nommé.** Jamais « les composants de formulaire », toujours « le composant Input ».
2. **Chaque tâche cite les fichiers de référence à lire avant d'écrire.** L'agent doit imiter un existant, pas inventer une convention.
3. **Aucune tâche n'est fusionnée sans que sa case « Definition of Done » soit cochée** (§D.3).

### A.2 Fichier `AGENTS.md` à créer à la racine

Ce fichier est lu automatiquement par Jules et par la plupart des agents de code au début de chaque tâche. Il évite de répéter le contexte dans chaque consigne. **À créer en premier, avant toute tâche de développement.**

````md
# AGENTS.md — Erebus

## Ce qu'est ce dépôt

Monorepo pnpm + Nx contenant un design system publié en deux implémentations :
- `packages/react` → `@erebus/react`
- `packages/angular` → `@erebus/angular`
Les deux consomment `packages/core` (CSS, agnostique) et `packages/tokens`.

## Commandes

```bash
pnpm install                  # installation (ne jamais utiliser npm ou yarn)
pnpm lint                     # ESLint + stylelint
pnpm typecheck                # tsc --noEmit sur tous les packages
pnpm test                     # Vitest
pnpm build                    # build de tous les packages
pnpm tokens:build             # régénère les tokens depuis packages/tokens/src
```

Avant d'ouvrir une PR, `pnpm lint && pnpm typecheck && pnpm test && pnpm build`
doivent tous passer. Une PR dont la CI est rouge ne sera pas relue.

## Règles absolues

1. Ne jamais modifier un fichier hors du périmètre annoncé par la tâche.
2. Ne jamais ajouter une dépendance runtime sans que la tâche l'autorise
   explicitement. Les seules autorisées : @floating-ui/*, clsx, tailwind-merge
   (React) et @angular/cdk (Angular).
3. Ne jamais écrire de valeur brute (couleur hex, px, ms) dans un CSS de
   composant : toujours une variable `--erb-*`.
4. Ne jamais utiliser `left`, `right`, `margin-left`, `padding-right` :
   uniquement les propriétés logiques (`inset-inline-start`,
   `margin-inline-start`, `padding-inline-end`…).
5. Ne jamais utiliser `localStorage`, `window` ou `document` sans garde SSR.
6. Ne jamais supprimer un test existant pour faire passer la CI.
7. Tout composant React et Angular ajouté doit l'être **des deux côtés**
   dans la même PR, sauf mention contraire de la tâche.

## Conventions

- TypeScript strict. Aucun `any`, aucun `@ts-ignore`.
- Unions de littéraux, jamais `string` élargi.
- React : composants fonctionnels, `forwardRef`, `'use client'` uniquement
  si le composant a un état ou un gestionnaire d'événement.
- Angular : standalone, `ChangeDetectionStrategy.OnPush`, `input()`/`output()`,
  signals. Aucun NgModule, aucun décorateur `@Input()` historique.
- CSS : un fichier par composant dans `packages/core/src/components/`,
  classes `.erb-<composant>`, états via attributs `data-*`.
- Commits : Conventional Commits (`feat(react): ...`, `fix(core): ...`).

## Fichiers de référence à imiter

- Composant React : `packages/react/src/button/`
- Composant Angular : `packages/angular/src/button/`
- CSS : `packages/core/src/components/button.css`
- Tokens de composant : `packages/tokens/src/component/button.json`

Lis ces quatre fichiers avant d'écrire quoi que ce soit.

## Ce qu'il ne faut pas faire

- Ne pas reformater des fichiers non concernés (le diff doit rester lisible).
- Ne pas modifier la configuration CI, ESLint, TypeScript ou Nx sans y être invité.
- Ne pas « améliorer » du code existant en passant : ouvrir une issue à la place.
- Ne pas générer de composant sans son test, sa story et son entrée de doc.
````

### A.3 Anatomie d'une consigne de tâche

Chaque tâche donnée à l'agent suit ce gabarit. Il est reproduit tel quel dans le backlog en partie E.

```
## Objectif
[Une phrase. Un seul livrable.]

## Fichiers à lire d'abord
[Chemins exacts. L'agent doit s'en inspirer, pas réinventer.]

## Fichiers à créer ou modifier
[Liste exhaustive. Tout fichier hors de cette liste est une erreur.]

## Spécification
[Propriétés, valeurs autorisées, comportements, états, accessibilité.]

## Contraintes
[Ce qui est interdit dans cette tâche précise.]

## Critères d'acceptation
[Liste vérifiable. Chaque ligne doit pouvoir être testée.]
```

### A.4 Séquencement

Les tâches sont regroupées en lots. **Un lot n'est pas lancé tant que le précédent n'est pas fusionné**, parce que chaque lot établit les conventions que le suivant imite. En particulier, le lot 1 produit le composant Button qui sert de modèle à tous les autres : sa relecture doit être minutieuse, une erreur de convention à ce stade se propage à quatre-vingts composants.

À l'intérieur d'un lot, les tâches sont indépendantes et peuvent être lancées en parallèle.

### A.5 Relecture depuis un téléphone

Chaque PR se relit sur quatre points, dans cet ordre :

1. **La liste des fichiers modifiés.** Un fichier inattendu dans le diff est un signal d'alarme, à traiter avant de lire le code.
2. **Le CSS.** Chercher visuellement toute valeur brute : `#`, `px`, `rgb(`, `left:`, `right:`. Aucune ne doit apparaître.
3. **Le test.** S'il ne teste que le rendu, la tâche est incomplète : il faut un test clavier et un test d'accessibilité.
4. **Le rendu réel.** Attendre le déploiement de la doc et regarder le composant, en clair et en sombre.

Les trois premiers points se font dans l'app GitHub. Le quatrième nécessite que le site de documentation soit déployé — d'où l'ordre de la partie E, qui met le déploiement très tôt.

---

## Partie B — Architecture

### B.1 Structure du dépôt

```
erebus/
├── apps/
│   ├── docs/                    # site de documentation (Next.js, export statique)
│   ├── playground-react/
│   └── playground-angular/
├── packages/
│   ├── tokens/                  # @erebus/tokens — source de vérité
│   ├── core/                    # @erebus/core — CSS, agnostique
│   ├── react/                   # @erebus/react
│   ├── angular/                 # @erebus/angular
│   ├── icons/                   # @erebus/icons
│   └── tailwind-preset/         # @erebus/tailwind-preset
├── .github/workflows/
├── AGENTS.md
└── pnpm-workspace.yaml
```

### B.2 Dépendances entre packages

```
tokens ──► core ──► react
              │ └──► angular
              └──► tailwind-preset
icons ──► react, angular
```

`core` ne dépend d'aucun framework. `react` et `angular` ne se référencent jamais. Cette contrainte est appliquée par Nx et fait échouer la CI si elle est violée.

### B.3 Outillage

| Sujet | Choix |
|---|---|
| Gestionnaire de paquets | pnpm 9, workspaces |
| Orchestration | Nx |
| Langage | TypeScript strict |
| Build React | tsup, sortie ESM uniquement |
| Build Angular | ng-packagr |
| Build CSS | PostCSS + Lightning CSS |
| Tokens | Style Dictionary v4 |
| Tests | Vitest + Testing Library + axe-core |
| Documentation | Next.js en export statique + Storybook |
| Versionnage | Changesets, mode `fixed` |
| Node | 20 LTS |

---

## Partie C — Spécifications du produit

### C.1 Tokens

Trois niveaux, dans `packages/tokens/src/` au format W3C Design Tokens.

**Primitives** — valeurs brutes, jamais utilisées directement par un composant. Palettes générées en OKLCH pour une progression perceptuellement régulière : `gray`, `blue`, `indigo`, `violet`, `pink`, `red`, `orange`, `amber`, `green`, `teal`, `cyan`, onze nuances chacune de `50` à `950`.

**Sémantique** — ce que consomment les composants.

| Famille | Tokens |
|---|---|
| Fonds | `bg.canvas`, `bg.surface`, `bg.surface-raised`, `bg.surface-sunken`, `bg.overlay`, `bg.muted`, `bg.inverse` |
| Textes | `fg.default`, `fg.muted`, `fg.subtle`, `fg.on-accent`, `fg.on-inverse`, `fg.disabled`, `fg.link`, `fg.link-hover` |
| Bordures | `border.default`, `border.muted`, `border.strong`, `border.focus`, `border.inverse` |
| Intentions | pour chacune de `accent`, `neutral`, `success`, `warning`, `danger`, `info` : `.bg`, `.bg-hover`, `.bg-active`, `.bg-subtle`, `.bg-subtle-hover`, `.fg`, `.fg-on-bg`, `.border` |
| Ombres | `shadow.xs` → `shadow.2xl`, `shadow.focus`, `shadow.inner` |
| Rayons | `radius.none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `full` |
| Espacements | `space.0` à `space.96`, échelle de 4 px, avec les demi-pas `0.5`, `1.5`, `2.5`, `3.5` |
| Typographie | `font.sans`, `font.serif`, `font.mono` ; `text.xs` → `text.9xl` couplant taille, interligne et interlettrage ; `weight.*` |
| Superposition | `z.hide` -1, `z.base` 0, `z.docked` 10, `z.dropdown` 1000, `z.sticky` 1100, `z.banner` 1200, `z.overlay` 1300, `z.modal` 1400, `z.popover` 1500, `z.skipLink` 1600, `z.toast` 1700, `z.tooltip` 1800 |
| Mouvement | `duration.instant/fast/normal/slow/slower`, `easing.standard/decelerate/accelerate/spring` |

**Composant** — chaque composant expose ses propres variables, ce qui rend la personnalisation ponctuelle triviale.

```css
.erb-button {
  --erb-button-bg: var(--erb-color-accent-bg);
  --erb-button-fg: var(--erb-color-accent-fg-on-bg);
  --erb-button-radius: var(--erb-radius-md);
  --erb-button-height: var(--erb-size-control-md);
  --erb-button-padding-x: var(--erb-space-4);
  background: var(--erb-button-bg);
}
```

Redéfinir `--erb-button-radius` sur un conteneur suffit à modifier tous les boutons descendants, sans `!important`.

### C.2 Thèmes et modes

Application par attributs, sur `<html>` ou sur n'importe quel élément — ce qui autorise un panneau sombre dans une page claire.

```html
<html data-erb-theme="corporate" data-erb-mode="dark" data-erb-density="comfortable">
```

```css
[data-erb-theme='corporate'][data-erb-mode='dark'] {
  --erb-color-bg-canvas: #0b0f1a;
}
```

Le mode accepte `light`, `dark` ou `system`. En mode système, la préférence est résolue via `prefers-color-scheme` **et écoutée** pour réagir à un changement en cours de session. La valeur choisie est persistée sous la clé `erb-color-mode`.

Un script bloquant d'environ 400 octets est fourni (`@erebus/core/theme-script`), à injecter dans le `<head>` avant tout rendu pour éviter le scintillement clair au chargement. `color-scheme: light dark` est déclaré pour que les barres de défilement et les contrôles natifs suivent le mode.

**Thèmes livrés en v1** : `default` (neutre, accent bleu), `corporate` (dense, rayons faibles), `vibrant` (accent violet, rayons larges), `minimal` (monochrome, sans rayon ni ombre), `high-contrast` (ratios ≥ 7:1).

Chaque thème existe obligatoirement en clair **et** en sombre. Un contrôle automatique refuse toute fusion si un token sémantique est défini dans un mode et absent de l'autre.

### C.3 Mise en page responsive

**Points de rupture**, tous en `min-width`, aucune règle `max-width` dans le code source :

| Nom | Seuil |
|---|---|
| `base` | 0 |
| `sm` | 480px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Les composants de mise en page réagissent à **leur conteneur** et non au viewport, via `container-type: inline-size` — un composant réutilisé dans une colonne étroite s'adapte correctement.

Toute propriété dimensionnelle accepte une valeur responsive :

```tsx
<Grid cols={{ base: 1, md: 2, xl: 4 }} gap={{ base: 4, md: 6 }} />
```

```html
<erb-grid [cols]="{ base: 1, md: 2, xl: 4 }" [gap]="{ base: 4, md: 6 }" />
```

Primitives fournies : `Container`, `Grid`, `GridItem`, `Flex`, `Stack`, `Inline`, `Spacer`, `Center`, `AspectRatio`, `Split`, `Section`, `ScrollArea`, `Show`, `Hide`, `Divider`, `Box`.

Une couche de compatibilité reproduit la grille Bootstrap (`.erb-row`, `.erb-col-md-4`, `.erb-offset-lg-2`) pour faciliter les migrations ; la documentation recommande `Grid`.

### C.4 Conventions d'API communes

Ce vocabulaire est identique dans les deux frameworks. Aucune exception.

| Propriété | Valeurs |
|---|---|
| `variant` | `solid`, `soft`, `outline`, `ghost`, `link`, `plain` |
| `intent` | `accent`, `neutral`, `success`, `warning`, `danger`, `info` |
| `size` | `xs`, `sm`, `md`, `lg`, `xl` — défaut `md` |
| `radius` | `none`, `sm`, `md`, `lg`, `full`, `inherit` |
| `orientation` | `horizontal`, `vertical` |
| `placement` | les 12 valeurs de Floating UI |
| Booléens | `disabled`, `loading`, `readOnly`, `required`, `invalid`, `open`, `selected`, `checked` |

Interdits : `color="red"` (utiliser `intent="danger"`), `type="primary"`, toute taille numérique.

L'état est exposé dans le DOM par des attributs de données, ce qui permet de styler depuis l'extérieur sans connaître les classes internes :

```html
<button class="erb-button" data-variant="solid" data-intent="danger"
        data-size="md" data-loading="true">
```

Le CSS ne cible que `.erb-<composant>` et des `data-*`. Les classes composées du type `.erb-button--danger--solid` sont interdites : elles rendent les surcharges utilisateur imprévisibles.

**Contrôlé et non contrôlé** — tout composant à état accepte les deux modes. React : `value` + `onValueChange`, ou `defaultValue`. Angular : `[(value)]`, plus `ControlValueAccessor` pour les contrôles de formulaire.

**Échappatoires** — `className`/`class` toujours fusionnée et jamais écrasée, `style` propagé, propriétés HTML inconnues transmises à l'élément racine, `ref` exposée.

### C.5 Spécificités React

- React 18.3 et 19 en peer dependency.
- `'use client'` uniquement sur les composants interactifs ; les composants purement présentationnels restent des composants serveur.
- `forwardRef` partout.
- Aucun `useLayoutEffect` non protégé pour le rendu serveur.
- Sortie ESM uniquement, sous-exports par composant, `sideEffects: ["*.css"]`.
- Dépendances runtime autorisées : `@floating-ui/react`, `clsx`, `tailwind-merge`. Rien d'autre.

### C.6 Spécificités Angular

- Angular 18 minimum, cible 19 et 20.
- Composants standalone uniquement, `OnPush`, état en signals, entrées via `input()` et sorties via `output()`.
- Compatible zoneless : aucun code ne doit dépendre de `NgZone`.
- `@angular/cdk` utilisé pour Overlay, A11y, Portal, Layout, DragDrop et le défilement virtuel. On ne réimplémente pas ce que le CDK fait correctement.
- Compatible rendu serveur : aucun accès direct au DOM hors `afterNextRender` ou garde `isPlatformBrowser`.

**Formulaires** — chaque contrôle implémente `ControlValueAccessor` et fonctionne avec les Reactive Forms comme avec les Template-driven Forms. Les états Angular sont traduits en attributs de données : `ng-invalid ng-touched` devient `data-invalid="true"` avec `aria-invalid`. Une directive traduit les erreurs des validateurs standards en messages localisés, surchargeables via un jeton d'injection.

### C.7 Catalogue

Priorités : **P0** obligatoire en 1.0, **P1** en 1.1, **P2** ultérieur.

**Mise en page (P0)** — les 16 primitives listées en C.3.

**Structure applicative (P0)** — `AppShell`, `Header`, `Footer`, `Sidebar`, `MobileNav`, `BottomNav`, `Breadcrumb`, `Tabs`, `Stepper`, `Pagination`, `SkipLink`, `TableOfContents`.

**Actions (P0)** — `Button`, `IconButton`, `ButtonGroup`, `SplitButton`, `ToggleButton`, `ToggleGroup`, `Link`, `CopyButton`, `ThemeToggle`.

**Formulaires (P0)** — `Form`, `Field`, `Label`, `Input`, `Textarea`, `NumberInput`, `Select`, `Combobox`, `MultiSelect`, `Checkbox`, `CheckboxGroup`, `Radio`, `RadioGroup`, `RadioCard`, `Switch`, `Slider`, `RangeSlider`, `DatePicker`, `DateRangePicker`, `TimePicker`, `ColorPicker`, `FileUpload`, `PinInput`, `TagsInput`, `Rating`, `SearchInput`, `PasswordStrength`, `FormSummary`, `Fieldset`.

**Données (P0)** — `Table`, `List`, `DescriptionList`, `Card`, `Stat`, `Badge`, `Tag`, `Avatar`, `AvatarGroup`, `Timeline`, `Kbd`, `Code`, `CodeBlock`, `Prose`, `Heading`, `Text`.
**(P1)** — `DataTable`, `Tree`, `Calendar`, `PricingTable`.

**Superpositions (P0)** — `Modal`, `AlertDialog`, `Drawer`, `Popover`, `Tooltip`, `DropdownMenu`, `Lightbox`, `CommandPalette`.
**(P1)** — `ContextMenu`, `HoverCard`.

Toutes les superpositions partagent un socle commun : Floating UI pour le positionnement, un gestionnaire de couches pour l'empilement et l'ordre de fermeture à l'échappement, un piège de focus, un verrou de défilement sans saut de mise en page, et `inert` sur le contenu d'arrière-plan.

**Retours (P0)** — `Toast`, `Alert`, `Banner`, `Progress`, `CircularProgress`, `Spinner`, `Skeleton`, `EmptyState`, `ErrorState`, `Callout`, `LoadingOverlay`.

**Médias et vitrine (P0)** — `Image`, `Gallery`, `Carousel`, `Hero`, `FeatureGrid`, `CTA`, `Testimonial`, `LogoCloud`, `Accordion`, `FAQ`.
**(P1)** — `Video`, `Marquee`.

**Utilitaires (P0)** — `Portal`, `VisuallyHidden`, `FocusTrap`, `Transition`, `Collapse`, `LiveRegion`, plus les hooks React et services Angular correspondants (`useDisclosure`/`DisclosureDirective`, `useBreakpoint`/`BreakpointService`, `useColorMode`/`ColorModeService`, `useToast`/`ToastService`, etc.).

### C.8 Accessibilité

Exigence bloquante, vérifiée automatiquement.

- WCAG 2.2 niveau AA sur tout le catalogue ; le thème `high-contrast` vise AAA sur le texte.
- Implémentation conforme aux ARIA Authoring Practices pour chaque motif d'interaction.
- Navigation clavier complète, documentée composant par composant.
- Focus toujours visible via `:focus-visible`, anneau de 2 px avec décalage, jamais supprimé sans remplacement.
- Dans les superpositions : focus piégé à l'ouverture, restitué au déclencheur à la fermeture.
- Zones tactiles d'au moins 24 × 24 px, 44 px recommandés sur mobile.
- Contrastes vérifiés sur **toutes** les combinaisons thème × mode par un script dédié.
- Annonces dynamiques via `aria-live` : notifications en `polite`, erreurs de formulaire en `assertive`.
- `prefers-reduced-motion` désactive transitions, animations décoratives et défilement automatique.
- Mode contraste forcé de Windows géré : bordures explicites.
- Zoom à 400 % sans perte de fonctionnalité ni défilement horizontal.
- Aucune information portée par la seule couleur.

### C.9 Internationalisation

Aucun texte figé dans les composants : tout passe par un dictionnaire injectable. Français et anglais fournis. Formatage des dates, nombres et listes via `Intl` uniquement.

Écriture de droite à gauche supportée nativement : le CSS n'utilise que des propriétés logiques, sans exception, et une règle stylelint bloquante interdit les propriétés physiques. Les icônes directionnelles se retournent automatiquement.

### C.10 Performance

| Sujet | Règle |
|---|---|
| Couches CSS | `@layer erb.reset, erb.base, erb.components, erb.utilities, erb.overrides` — les surcharges utilisateur gagnent toujours |
| Élagage | Build ESM, sous-exports par composant, `sideEffects` déclaré |
| Budget | CSS de base ≤ 18 ko compressé, composant React moyen ≤ 4 ko — vérifié en CI |
| Rendu serveur | Aucun accès DOM au premier rendu, identifiants stables, zéro avertissement d'hydratation |
| Virtualisation | Fournie pour Table, List et Select au-delà de 100 éléments |

---

## Partie D — Qualité

### D.1 Tests

| Niveau | Outils | Portée |
|---|---|---|
| Logique | Vitest | Hooks, services, utilitaires |
| Composants React | Vitest + Testing Library + `user-event` | Rendu, interactions, clavier, mode contrôlé |
| Composants Angular | Vitest + Testing Library Angular | Idem, plus `ControlValueAccessor` et signals |
| Accessibilité | axe-core sur chaque story + tests clavier explicites | 100 % des composants |
| Types | `expect-type` | API publique |
| Rendu serveur | Build Next.js et Angular Universal en CI | Zéro avertissement |

### D.2 Seuils bloquants

Une fusion est refusée si l'un de ces points échoue : couverture sous 90 %, nouvelle violation axe, budget de taille dépassé, token sémantique absent d'un mode, ou composant livré d'un seul côté sans dérogation déclarée.

### D.3 Definition of Done par composant

Un composant n'existe que si **toutes** ces cases sont cochées :

- [ ] Implémentation React (`forwardRef`, `'use client'` si nécessaire)
- [ ] Implémentation Angular (standalone, `OnPush`, signals, CVA si contrôle de formulaire)
- [ ] CSS dans `packages/core`, uniquement des variables, propriétés logiques, bonne couche `@layer`
- [ ] Variables de composant exposées et documentées
- [ ] Types complets, aucune union élargie, JSDoc sur chaque propriété publique
- [ ] Toutes les variantes, intentions et tailles applicables, conformes à C.4
- [ ] États : survol, focus clavier, actif, désactivé, chargement, invalide, lecture seule, sélectionné
- [ ] Rôle ARIA conforme, navigation clavier, focus géré, annonces si dynamique
- [ ] Fonctionne dans les 5 thèmes × 2 modes × LTR/RTL × 3 densités
- [ ] Vérifié à 320 px, 768 px et 1440 px
- [ ] Test unitaire + test clavier + test axe
- [ ] Stories Storybook des deux côtés, avec les cas limites : texte long, contenu vide, chargement, erreur
- [ ] Page de documentation avec exemples React **et** Angular
- [ ] Budget de taille respecté
- [ ] Changeset ajouté

### D.4 Vérification de parité

Un script extrait l'API publique des deux packages et produit un rapport. Toute divergence non listée dans un fichier d'exceptions justifiées fait échouer la CI. C'est le garde-fou central du projet : sans lui, les deux implémentations divergent en quelques semaines.

---

## Partie E — Backlog de tâches pour l'agent

Chaque entrée est une consigne à copier telle quelle. Les tâches d'un même lot peuvent être lancées en parallèle ; les lots s'enchaînent séquentiellement.

### Lot 0 — Fondations *(à faire seul, en premier, sans parallélisme)*

**T0.1 — Initialisation du monorepo**

```
## Objectif
Créer la structure du monorepo pnpm + Nx, vide mais fonctionnelle.

## Fichiers à créer
pnpm-workspace.yaml, package.json racine, nx.json, tsconfig.base.json,
.editorconfig, .gitignore, .npmrc, eslint.config.js, .prettierrc,
stylelint.config.js, AGENTS.md (contenu fourni en §A.2 de la spec).
Dossiers vides avec un package.json minimal : packages/tokens, packages/core,
packages/react, packages/angular, packages/icons.

## Spécification
- pnpm 9, Node 20, packageManager verrouillé.
- TypeScript strict : strict, noUncheckedIndexedAccess,
  exactOptionalPropertyTypes, noImplicitOverride.
- Scripts racine : lint, typecheck, test, build, tokens:build.
- Contrainte Nx enforce-module-boundaries : packages/core ne peut importer
  ni react ni @angular/*.
- Règle stylelint bloquante interdisant les propriétés physiques
  (left, right, margin-left, margin-right, padding-left, padding-right,
  border-left, border-right, text-align: left|right).

## Contraintes
Aucun composant dans cette tâche. Aucune dépendance runtime.

## Critères d'acceptation
- `pnpm install` réussit.
- `pnpm lint`, `pnpm typecheck`, `pnpm build` réussissent sur un dépôt vide.
- Un import de React dans packages/core fait échouer `pnpm lint`.
```

**T0.2 — Tokens et thème par défaut**

```
## Objectif
Créer packages/tokens avec le pipeline Style Dictionary et le thème default
en clair et sombre.

## Fichiers à créer
packages/tokens/src/primitive/{color,size,typography,radius,shadow,duration,easing}.json
packages/tokens/src/semantic/{shared,light,dark}.json
packages/tokens/src/themes/default.json
packages/tokens/style-dictionary.config.js
packages/tokens/scripts/verify-parity.mjs

## Spécification
Reprendre exactement la liste de tokens de la section C.1 de la spec :
primitives OKLCH sur 11 palettes × 11 nuances, puis les familles sémantiques
bg / fg / border / intentions / shadow / radius / space / typographie /
z-index / motion.
Format W3C Design Tokens ($type, $value).
Sorties : dist/css/variables.css (variables --erb-*), dist/js/tokens.ts
(objet typé + types littéraux), dist/json/tokens.json.
Le script verify-parity.mjs échoue si un token sémantique existe dans
semantic/light.json et pas dans semantic/dark.json, ou l'inverse.

## Critères d'acceptation
- `pnpm tokens:build` produit les trois sorties.
- Relancer le build ne produit aucun diff (idempotence).
- `node packages/tokens/scripts/verify-parity.mjs` réussit.
- Retirer un token de dark.json fait échouer ce script.
```

**T0.3 — Socle CSS**

```
## Objectif
Créer packages/core avec le reset, les couches, l'application des thèmes
et le script anti-scintillement.

## Fichiers à créer
packages/core/src/reset.css, layers.css, theme.css, index.css
packages/core/src/theme-script.js
packages/core/postcss.config.js

## Spécification
- Déclarer les couches dans cet ordre :
  @layer erb.reset, erb.base, erb.components, erb.utilities, erb.overrides;
- Reset moderne : box-sizing, marges nulles, media en block, texte non ajusté,
  et une règle globale respectant prefers-reduced-motion.
- theme.css applique les tokens via
  [data-erb-theme='default'][data-erb-mode='light'|'dark'].
- color-scheme: light dark déclaré.
- theme-script.js : moins de 500 octets, lit localStorage['erb-color-mode'],
  retombe sur prefers-color-scheme, pose les attributs sur documentElement
  avant le premier rendu. Aucune dépendance, exécutable en balise inline.

## Contraintes
Aucun composant. Aucune valeur brute hors des fichiers de tokens.

## Critères d'acceptation
- Une page HTML nue important index.css affiche les bonnes couleurs de fond
  et de texte dans les deux modes.
- Basculer data-erb-mode change le rendu sans rechargement.
```

**T0.4 — Mise en page**

```
## Objectif
Implémenter les 16 primitives de mise en page de la section C.3, en CSS,
puis en React et en Angular.

## Fichiers à lire d'abord
packages/core/src/layers.css, packages/tokens/dist/css/variables.css

## Spécification
Container, Grid, GridItem, Flex, Stack, Inline, Spacer, Center, AspectRatio,
Split, Section, ScrollArea, Show, Hide, Divider, Box.
Points de rupture : base 0, sm 480, md 768, lg 1024, xl 1280, 2xl 1536,
tous en min-width. Aucune règle max-width.
Les propriétés dimensionnelles acceptent soit une valeur, soit un objet
{ base, sm, md, lg, xl, 2xl }.
Grid, Split et Section utilisent container-type: inline-size.
Exporter aussi les points de rupture en TypeScript depuis @erebus/core.

## Critères d'acceptation
- <Grid cols={{ base: 1, md: 3 }}> rend une colonne à 375 px et trois à 1024 px.
- L'équivalent Angular produit exactement le même HTML et le même CSS.
- Aucune propriété physique dans le CSS (stylelint passe).
```

### Lot 1 — Le composant modèle *(seul, relecture minutieuse)*

**T1.1 — Button, de référence**

```
## Objectif
Implémenter Button en React, en Angular et en CSS. Ce composant sert de
modèle à tous les suivants : sa structure de fichiers, ses conventions de
nommage et son style de test seront copiés quatre-vingts fois.

## Fichiers à créer
packages/tokens/src/component/button.json
packages/core/src/components/button.css
packages/react/src/button/{button.tsx,button.types.ts,button.test.tsx,button.stories.tsx,index.ts}
packages/angular/src/button/{button.component.ts,button.spec.ts,button.stories.ts,index.ts}

## Spécification
Propriétés : variant (solid|soft|outline|ghost|link, défaut solid),
intent (accent|neutral|success|warning|danger|info, défaut accent),
size (xs|sm|md|lg|xl, défaut md), loading, loadingText, iconStart, iconEnd,
fullWidth, disabled.
React : forwardRef, polymorphisme via `as`, 'use client'.
Angular : standalone, OnPush, input()/output(), sélecteur erb-button.

HTML produit, identique des deux côtés :
<button class="erb-button" type="button" data-variant="…" data-intent="…"
        data-size="…" data-loading="…" data-full-width="…" aria-busy="…">
  <span class="erb-button__spinner" aria-hidden="true"></span>
  <span class="erb-button__icon" data-position="start" aria-hidden="true">…</span>
  <span class="erb-button__label">…</span>
</button>

CSS : uniquement .erb-button et des sélecteurs d'attributs. Interdiction des
classes composées type .erb-button--danger. Toutes les valeurs proviennent de
variables --erb-button-* qui retombent sur les tokens sémantiques.
En état loading : aria-busy, pointer-events désactivés, le libellé reste lisible.
En état disabled : attribut disabled natif, jamais aria-disabled seul.

## Critères d'acceptation
- 5 variants × 6 intents × 5 tailles rendus correctement dans les deux modes.
- Le focus clavier est visible et distinct du survol.
- Le test axe passe sur toutes les combinaisons.
- Un test vérifie que le HTML React et le HTML Angular sont identiques
  pour les mêmes propriétés.
- Redéfinir --erb-button-radius sur un parent modifie le rendu du bouton.
```

Après fusion de T1.1, la partie D.3 doit être vérifiée ligne à ligne. **Toute erreur de convention non corrigée ici se propagera à l'ensemble du catalogue.**

### Lot 2 — Socle *(parallélisable)*

Une tâche par composant, sur le modèle de T1.1 : `IconButton` + `ButtonGroup`, `Card`, `Badge` + `Tag`, `Avatar` + `AvatarGroup`, `Spinner` + `Skeleton`, `Alert` + `Callout`, `Divider` + `Kbd` + `Code`, `Heading` + `Text` + `Prose`.

Consigne type à adapter :

```
## Objectif
Implémenter [COMPOSANT] en React, Angular et CSS.

## Fichiers à lire d'abord
packages/react/src/button/, packages/angular/src/button/,
packages/core/src/components/button.css,
packages/tokens/src/component/button.json
Reproduire exactement leur structure et leurs conventions.

## Fichiers à créer
[la même arborescence, pour COMPOSANT]

## Spécification
[propriétés, valeurs, HTML attendu, rôle ARIA, comportement clavier]

## Contraintes
Ne modifier aucun fichier existant hors de la liste ci-dessus.
Aucune dépendance runtime nouvelle.

## Critères d'acceptation
[reprendre la Definition of Done, section D.3]
```

### Lot 3 — Formulaires

`Field` + `Label` d'abord (ils conditionnent tous les autres), puis `Input`, `Textarea`, `Checkbox` + `CheckboxGroup`, `Radio` + `RadioGroup`, `Switch`, `Select`, `NumberInput`, `SearchInput`.

Point d'attention à inclure dans chaque consigne :

```
Field câble automatiquement id, aria-describedby et aria-invalid entre le
label, la description, le message d'erreur et le contrôle. Le contrôle ne
doit jamais générer ces liens lui-même.
Côté Angular, le contrôle implémente ControlValueAccessor et fonctionne
avec formControlName comme avec ngModel. Les états ng-invalid + ng-touched
sont traduits en data-invalid="true" et aria-invalid="true".
```

### Lot 4 — Superpositions

**T4.1 en premier et seul** : socle commun (Portal, FocusTrap, ScrollLock, LayerManager, intégration Floating UI, Transition). Puis en parallèle : `Modal` + `AlertDialog`, `Drawer`, `Popover`, `Tooltip`, `DropdownMenu`.

```
Le socle gère : l'empilement par z-index issu des tokens, la fermeture à
l'échappement dans l'ordre inverse d'ouverture, le piégeage du focus, sa
restitution au déclencheur, le verrou de défilement avec compensation de la
largeur de la barre de défilement (aucun saut de mise en page), et inert sur
le contenu d'arrière-plan.
Aucun composant de superposition ne réimplémente l'un de ces mécanismes.
```

### Lot 5 — Structure applicative

`Header`, `Footer`, `Sidebar`, `AppShell`, `MobileNav`, `BottomNav`, `Tabs`, `Breadcrumb`, `Pagination`, `Stepper`, `Accordion`, `SkipLink`.

### Lot 6 — Saisie avancée

`Combobox`, `MultiSelect`, `Slider` + `RangeSlider`, `DatePicker` + `DateRangePicker`, `TimePicker`, `ColorPicker`, `FileUpload`, `PinInput`, `TagsInput`, `Rating`.

Ces composants sont les plus coûteux du projet. Prévoir le double du temps des autres et découper chacun en deux tâches : d'abord la logique et l'accessibilité, ensuite l'habillage.

### Lot 7 — Données, retours, vitrine

`Table`, `List`, `DescriptionList`, `Stat`, `Timeline`, `EmptyState`, `ErrorState` — puis `Toast`, `Banner`, `Progress`, `LoadingOverlay` — puis `Image`, `Gallery`, `Lightbox`, `Carousel`, `Hero`, `FeatureGrid`, `CTA`, `Testimonial`, `LogoCloud`, `FAQ`, `CommandPalette`.

### Lot 8 — Finition

Thèmes `corporate`, `vibrant`, `minimal`, `high-contrast` ; dictionnaires français et anglais ; vérification RTL complète ; script d'audit des contrastes ; script de parité ; site de documentation ; guides de migration depuis Bootstrap et depuis Tailwind.

---

## Partie F — Points de vigilance

Ces cinq erreurs sont les plus probables avec un agent de code sur ce type de projet. Les vérifier explicitement à chaque relecture.

1. **Valeurs brutes dans le CSS.** Un agent écrit volontiers `padding: 12px` plutôt que `var(--erb-space-3)`. C'est invisible en revue rapide et ruine la thématisation. Chercher `px`, `#`, `rgb(` dans chaque diff CSS.

2. **Dérive entre React et Angular.** L'agent implémente d'abord React, puis « adapte » pour Angular en changeant un nom de propriété au passage. Comparer les deux API dans chaque PR, avant même de lire le code.

3. **Accessibilité de façade.** Ajouter `role="dialog"` sans piéger le focus donne un composant qui passe les tests automatiques et reste inutilisable au clavier. Exiger un test clavier explicite, pas seulement un test axe.

4. **Débordement de périmètre.** Une tâche « ajouter Input » qui modifie aussi Button, la config ESLint et trois fichiers de tokens. Refuser la PR et relancer la tâche avec une liste de fichiers plus stricte.

5. **Dépendances ajoutées silencieusement.** Vérifier le diff de `package.json` et de `pnpm-lock.yaml` dans chaque PR. Une bibliothèque de dates ou d'animations ajoutée « pour aller plus vite » double le poids du paquet.
