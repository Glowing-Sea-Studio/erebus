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
- [ ] `IconButton` & `ButtonGroup`
- [x] `Card`
- [ ] `Badge` & `Tag`
- [ ] `Avatar` & `AvatarGroup`
- [ ] `Spinner` & `Skeleton`
- [x] `Alert`
- [ ] `Callout`
- [ ] `Divider` & `Kbd` & `Code`
- [ ] `Heading` & `Text` & `Prose`

## Lot 3 — Formulaires (Parallélisable après Field/Label)
- [ ] `Field` & `Label` (à réaliser en premier pour le câblage d'accessibilité `aria-describedby`, etc.)
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
- [ ] `AlertDialog`
- [ ] `Drawer`
- [ ] `Popover`
- [ ] `Tooltip`
- [x] `DropdownMenu`

## Lot 5 — Structure applicative
- [x] `Header`
- [x] `Footer`
- [ ] `Sidebar`
- [ ] `AppShell`
- [ ] `MobileNav`
- [ ] `BottomNav`
- [x] `Tabs`
- [ ] `Breadcrumb`
- [ ] `Pagination`
- [ ] `Stepper`
- [ ] `Accordion`
- [ ] `SkipLink`

## Lot 6 — Saisie avancée (Complexité élevée)
Prévoir un découpage en deux tâches (logique/accessibilité, puis habillage) pour chacun de ces composants.
- [ ] `Combobox`
- [ ] `MultiSelect`
- [ ] `Slider` & `RangeSlider`
- [ ] `DatePicker` & `DateRangePicker`
- [ ] `TimePicker`
- [ ] `ColorPicker`
- [ ] `FileUpload`
- [ ] `PinInput`
- [ ] `TagsInput`
- [ ] `Rating`

## Lot 7 — Données, retours, vitrine
- [ ] `Table`
- [ ] `List`
- [ ] `DescriptionList`
- [ ] `Stat`
- [ ] `Timeline`
- [ ] `EmptyState`
- [ ] `ErrorState`
- [ ] `Toast`
- [ ] `Banner`
- [ ] `Progress`
- [ ] `LoadingOverlay`
- [ ] `Image`
- [ ] `Gallery`
- [ ] `Lightbox`
- [ ] `Carousel`
- [ ] `Hero`
- [ ] `FeatureGrid`
- [ ] `CTA`
- [ ] `Testimonial`
- [ ] `LogoCloud`
- [ ] `FAQ`
- [ ] `CommandPalette`

## Lot 8 — Finition
- [ ] Thèmes supplémentaires (`corporate`, `vibrant`, `minimal`, `high-contrast`)
- [ ] Dictionnaires (français, anglais) et vérification RTL complète
- [ ] Script d'audit des contrastes et script de parité (React/Angular)
- [ ] Site de documentation
- [ ] Guides de migration (depuis Bootstrap / Tailwind)

