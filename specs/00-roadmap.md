# Roadmap — Erebus

Cette roadmap décrit les différentes phases de développement du design system Erebus, structurées en lots de tâches à exécuter. Ces lots suivent un ordre séquentiel, bien que certaines tâches au sein d'un même lot puissent être parallélisées.

## Lot 0 — Fondations (Séquentiel)
Mise en place de l'infrastructure de base et des fondements CSS/Design Tokens.
- [x] **T0.1** : Initialisation du monorepo (pnpm, Nx, TypeScript, outils de linting)
- [x] **T0.2** : Tokens et thème par défaut (pipeline Style Dictionary)
- [x] **T0.3** : Socle CSS (reset, couches, application des thèmes, script anti-scintillement)
- [x] **T0.4** : Primitives de mise en page (Container, Grid, Flex, Stack, etc.)

## Lot 1 — Le composant modèle (Séquentiel)
- [x] **T1.1** : Implémentation du composant `Button` (React, Angular, CSS). Il servira de modèle pour les structures de fichiers, conventions de nommage, et style de test de tous les autres composants.

## Lot 2 — Socle (Parallélisable)
Implémentation des composants de base sur le modèle de `Button`.
- [x] `IconButton` & `ButtonGroup`
- [x] `Card`
- [x] `Badge` & `Tag`
- [x] `Avatar` & `AvatarGroup`
- [x] `Spinner` & `Skeleton`
- [x] `Alert`
- [x] `Callout`
- [x] `Divider` & `Kbd` & `Code`
- [x] `Heading` & `Text` & `Prose`

## Lot 3 — Formulaires (Parallélisable après Field/Label)
- [x] `Field` & `Label` (à réaliser en premier pour le câblage d'accessibilité `aria-describedby`, etc.)
- [x] `Input`
- [x] `Textarea`
- [x] `Checkbox` & `CheckboxGroup`
- [x] `Radio` & `RadioGroup`
- [x] `Switch`
- [x] `Select`
- [x] `NumberInput`
- [x] `SearchInput`

## Lot 4 — Superpositions (Parallélisable après le socle)
- [x] **Socle commun (T4.1)** : `Portal`, `FocusTrap`, `ScrollLock`, `LayerManager`, `Floating UI`, `Transition`
- [x] `Modal`
- [x] `AlertDialog`
- [x] `Drawer`
- [x] `Popover`
- [x] `Tooltip`
- [x] `DropdownMenu`

## Lot 5 — Structure applicative
- [x] `Header`
- [x] `Footer`
- [x] `Sidebar`
- [x] `AppShell`
- [x] `MobileNav`
- [x] `BottomNav`
- [x] `Tabs`
- [x] `Breadcrumb`
- [x] `Pagination`
- [x] `Stepper`
- [x] `Accordion`
- [x] `SkipLink`

## Lot 6 — Saisie avancée (Complexité élevée)
Prévoir un découpage en deux tâches (logique/accessibilité, puis habillage) pour chacun de ces composants.
- [x] `Combobox`
- [x] `MultiSelect`
- [x] `Slider` & `RangeSlider`
- [x] `DatePicker` & `DateRangePicker`
- [x] `TimePicker`
- [x] `ColorPicker`
- [x] `FileUpload`
- [x] `PinInput`
- [x] `TagsInput`
- [x] `Rating`

## Lot 7 — Données, retours, vitrine
- [x] `Table`
- [x] `List`
- [x] `DescriptionList`
- [x] `Stat`
- [x] `Timeline`
- [x] `EmptyState`
- [x] `ErrorState`
- [x] `Toast`
- [x] `Banner`
- [x] `Progress`
- [x] `LoadingOverlay`
- [x] `Image`
- [x] `Gallery`
- [x] `Lightbox`
- [x] `Carousel`
- [x] `Hero`
- [x] `FeatureGrid`
- [x] `CTA`
- [x] `Testimonial`
- [x] `LogoCloud`
- [ ] `FAQ`
- [ ] `CommandPalette`

## Lot 8 — Finition
- [ ] Thèmes supplémentaires (`corporate`, `vibrant`, `minimal`, `high-contrast`)
- [ ] Dictionnaires (français, anglais) et vérification RTL complète
- [ ] Script d'audit des contrastes et script de parité (React/Angular)
- [ ] Site de documentation
- [ ] Guides de migration (depuis Bootstrap / Tailwind)

