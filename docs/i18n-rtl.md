# Internationalisation (i18n) et Support RTL

Le Design System Erebus est conçu pour fonctionner nativement avec des applications multilingues, y compris celles s'écrivant de droite à gauche (RTL - Right-to-Left).

## Support RTL (Right-to-Left)

Erebus utilise des propriétés logiques CSS (`margin-inline-start`, `padding-block`, etc.) au lieu de propriétés physiques (`margin-left`, `padding-top`). Cela permet aux composants de s'adapter automatiquement au sens de lecture.

### Configuration

Pour activer le mode RTL, il suffit d'ajouter l'attribut `dir="rtl"` sur la balise `<html>` ou sur un conteneur spécifique de votre application :

```html
<html lang="ar" dir="rtl">
  <!-- Le contenu Erebus s'adaptera automatiquement -->
</html>
```

## Dictionnaires et traductions

Les composants Erebus (comme les Modales, DatePickers, ou Selects) utilisent des labels internes (ex: "Fermer", "Précédent", "Suivant"). 

Erebus expose une API pour surcharger ces textes via un système de dictionnaires.

### Exemple d'utilisation en React

```tsx
import { ErebusProvider } from '@erebus/react';
import { enUS, frFR } from '@erebus/locales';

function App() {
  const userLocale = 'fr';
  const localeDict = userLocale === 'fr' ? frFR : enUS;

  return (
    <ErebusProvider locale={localeDict}>
      <AppContent />
    </ErebusProvider>
  );
}
```

Erebus supporte officiellement l'anglais (`enUS`) et le français (`frFR`). Vous pouvez fournir votre propre objet d'internationalisation si nécessaire.
