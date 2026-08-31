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
