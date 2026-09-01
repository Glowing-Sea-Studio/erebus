# Guide de migration : Bootstrap vers Erebus

Ce guide vous accompagne dans la transition d'un projet utilisant Bootstrap vers le Design System Erebus.

## Philosophie

Contrairement à Bootstrap qui s'appuie massivement sur des classes utilitaires pour le layout et les composants, Erebus privilégie une approche orientée composants avec des variables CSS fortement typées.

## Grille et Layout

Bootstrap utilise le système classique de 12 colonnes (`.container`, `.row`, `.col-*`). Erebus encourage l'utilisation des CSS Grid et Flexbox modernes avec nos composants de mise en page, ou via des variables d'espacement standardisées.

## Correspondance des composants

| Composant Bootstrap | Composant Erebus | Notes de migration |
|---------------------|------------------|--------------------|
| `.btn, .btn-primary`| `<Button variant="primary">` | Utilisez l'attribut `variant` au lieu des classes. |
| `.alert`            | `<Alert>`        | Erebus propose des icônes intégrées par défaut. |
| `.modal`            | `<Dialog>` ou `<Modal>` | Erebus utilise l'élément natif `<dialog>` sous le capot pour une meilleure accessibilité. |
| `.card`             | `<Card>`         | Structure plus sémantique via les sous-composants (`Card.Header`, `Card.Body`). |

## Utilitaires CSS

Si vous utilisiez des utilitaires d'espacement (`m-3`, `p-2`), Erebus met à disposition des variables CSS :
```css
.mon-element {
  padding: var(--erb-spacing-4);
  margin-bottom: var(--erb-spacing-8);
}
```
