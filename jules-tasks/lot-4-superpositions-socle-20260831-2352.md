# Lot 4 - Superpositions : T4.1 (Socle commun)

## Objectif
Implémenter le socle commun des superpositions (overlays) pour le design system Erebus, comme défini dans les spécifications techniques du Lot 4.
Ce socle commun doit être implémenté sans aucun autre composant visuel (Modal, Drawer, etc. viendront plus tard).

## Contexte
Erebus est un design system publié pour React et Angular, consommant un cœur CSS agnostique.
Le socle commun gère :
- L'empilement par `z-index` issu des tokens.
- La fermeture à la touche "Échap" dans l'ordre inverse d'ouverture.
- Le piégeage du focus (FocusTrap).
- La restitution du focus au déclencheur.
- Le verrou de défilement (ScrollLock) avec compensation de la largeur de la barre de défilement pour éviter les sauts de mise en page.
- `inert` sur le contenu d'arrière-plan.
- L'intégration de Floating UI (si nécessaire pour le positionnement, bien que T4.1 s'occupe surtout du socle de type modal/layer, Floating UI est autorisé).
- Transition.

## Fichiers attendus
Créer les utilitaires / hooks / directives / composants de base (ex: `Portal`, `FocusTrap`, `ScrollLock`, `LayerManager`, `Transition`) dans :
- `packages/react/src/layer/` (ou nom similaire)
- `packages/angular/src/layer/` (ou nom similaire)

## Contraintes
- Ne pas implémenter Modal, Popover ou Tooltip. **Seul le socle technique est demandé ici.**
- Suivre les conventions du projet :
  - React : functional components, strict typings.
  - Angular : standalone, signals (`input`, `output`).
  - Utiliser les variables CSS `--erb-*` (pas de valeurs brutes).
- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.

## Critères d'acceptation
- Le code compile (TS strict).
- Les tests unitaires valident le piégeage de focus et le verrouillage de défilement.
- La structure est en place pour pouvoir être consommée facilement par les futurs composants du Lot 4.
