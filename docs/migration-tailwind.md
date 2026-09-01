# Guide de migration : Tailwind CSS vers Erebus

Ce guide vous aide à migrer vos interfaces basées sur Tailwind CSS vers les composants structurés d'Erebus.

## Pourquoi passer de Tailwind à Erebus ?

Tailwind excelle dans le prototypage rapide grâce à ses utilitaires. Erebus apporte la cohérence, l'accessibilité garantie et une structure de composants prêts à l'emploi (React/Angular) qui respecte l'identité visuelle de notre marque.

## De l'utilitaire au composant

La principale différence réside dans la déclaration des styles. Au lieu de surcharger le HTML de classes, vous utilisez des composants pré-stylés et configurables via des props.

### Exemple : Un Bouton

**Avant (Tailwind) :**
```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
  Valider
</button>
```

**Après (Erebus) :**
```tsx
<Button variant="primary" size="md">
  Valider
</Button>
```

## Personnalisation (Design Tokens)

Si vous aviez configuré votre `tailwind.config.js`, ces valeurs sont désormais stockées sous forme de **Design Tokens** dans le package `@erebus/tokens`. 

Erebus injecte les variables CSS globales (`--erb-color-primary`, `--erb-radius-md`, etc.) que vous pouvez utiliser pour vos composants personnalisés :

```css
.custom-card {
  background-color: var(--erb-color-surface);
  border-radius: var(--erb-radius-lg);
  box-shadow: var(--erb-shadow-md);
}
```
