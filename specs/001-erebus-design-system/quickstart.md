# Quickstart — Erebus

Deux publics : le **consommateur** (installe la bibliothèque dans son app) et le **contributeur** (travaille dans ce monorepo). Les deux parcours sont vérifiables en quelques minutes.

## A. Consommateur — installer et afficher un premier composant

### React

```bash
pnpm add @glowing-sea-studio/erebus-react @glowing-sea-studio/erebus-tokens @glowing-sea-studio/erebus-core
```

```tsx
import '@glowing-sea-studio/erebus-tokens/dist/css/variables.css';
import '@glowing-sea-studio/erebus-core/src/components/index.css';
import { ToastProvider, AppShell, Button } from '@glowing-sea-studio/erebus-react';

function App() {
  return (
    <ToastProvider>
      <AppShell>
        <Button variant="solid" intent="accent">Commencer</Button>
      </AppShell>
    </ToastProvider>
  );
}
```

### Angular

```bash
pnpm add @glowing-sea-studio/erebus-angular @glowing-sea-studio/erebus-tokens @glowing-sea-studio/erebus-core
```

```ts
import { Component } from '@angular/core';
import { ButtonComponent, AppShellComponent } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, AppShellComponent],
  template: `
    <erb-app-shell>
      <button erb-button variant="solid" intent="accent">Commencer</button>
    </erb-app-shell>
  `
})
export class AppComponent {}
```

**Validation du parcours** : moins de 5 étapes, moins de 3 minutes (critère UC1 de `specs/01-*` §5). Si l'un des deux imports CSS est oublié, le composant s'affiche sans style — c'est l'erreur d'onboarding la plus fréquente (voir `specs/04-*` §3.4) ; toujours importer `variables.css` **et** `index.css`.

## B. Contributeur — poser l'environnement de dev

```bash
git clone <dépôt>
cd erebus
pnpm install                  # jamais npm, jamais yarn (AGENTS.md)
pnpm tokens:build              # régénère les CSS/TS de tokens
pnpm build                     # build tous les packages
```

Avant toute PR :

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

Les quatre doivent passer. **Aucune CI ne les rejoue automatiquement à ce jour** (écart E-4 de `spec.md`) — c'est une vérification manuelle obligatoire tant que `tasks.md` T-01 n'est pas fait.

### Lire avant d'écrire un composant

1. `AGENTS.md` (racine) — règles absolues et conventions.
2. `packages/react/src/button/` et `packages/angular/src/button/` — composant de référence.
3. `packages/core/src/components/button.css` — CSS de référence.
4. `packages/tokens/src/component/button.json` — tokens de référence.
5. `.specify/memory/constitution.md` — les 9 articles non négociables.

### Ajouter un composant (gabarit de tâche)

Reprendre le gabarit de `specs/02-specifications-techniques.md` §A.3, en citant explicitement les 4 fichiers de référence ci-dessus et la Definition of Done de §D.3 comme critères d'acceptation. Un composant livré d'un seul côté (React ou Angular) sans dérogation explicite n'est pas mergeable (Article 1 de la constitution).

### Vérifier la parité et le contraste manuellement

```bash
node scripts/audit-parity.js
node scripts/audit-contrast.js
```

Aucun rapport de référence n'existe encore (voir `research.md` R-4) — la première exécution sert de ligne de base.

### Voir le rendu réel

```bash
pnpm exec nx run @glowing-sea-studio/erebus-react:storybook
pnpm exec nx run @glowing-sea-studio/erebus-angular:storybook
```

Vérifier le composant dans les 5 thèmes × 2 modes (`data-erb-theme`, `data-erb-mode` dans les contrôles Storybook), au clavier seul, puis avec un lecteur d'écran si le composant est interactif.

## C. Où trouver quoi

| Besoin | Fichier |
|---|---|
| Vision produit, personas, périmètre | `specs/01-specifications-metier.md` |
| Détail technique par domaine (tokens, thèmes, a11y…) | `specs/02-specifications-techniques.md` |
| Publier sur GitHub Pages / npm | `specs/03-deploiement-github.md` (non exécuté à ce jour) |
| Écrire le README | `specs/04-instructions-readme.md` |
| Charte graphique | `specs/Charte_Graphique_Glowing_Sea_Studio.md` |
| Ce que l'app est *réellement* aujourd'hui | `specs/001-erebus-design-system/spec.md` §7 (écarts) |
| Pourquoi ces écarts existent | `specs/001-erebus-design-system/research.md` |
| Backlog restant pour la v1.0 publique | `specs/001-erebus-design-system/tasks.md` |
