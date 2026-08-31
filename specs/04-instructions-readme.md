# Erebus — Instructions de rédaction du README

Ce document décrit **comment écrire** le `README.md` du dépôt. Il n'est pas le README : c'est la consigne à suivre pour le produire, utilisable par toi ou par un agent de code.

---

## 1. Identité du dépôt

À renseigner dans GitHub, hors README, avant toute chose.

### Description (champ « About », 350 caractères maximum)

```
One design system, two native implementations. A complete, accessible component
library for React and Angular — 75+ components, multiple themes, and light/dark
support on every single one.
```

### Topics

```
design-system  react  angular  component-library  ui-components  typescript
accessibility  wcag  dark-mode  design-tokens  monorepo  css
```

Douze topics maximum indexés par la recherche GitHub ; au-delà, ils sont ignorés. Les quatre premiers portent l'essentiel du trafic.

### Site web

Renseigner `https://Glowing-Sea-Studio.github.io/erebus/` dès que la documentation est déployée. Ce champ apparaît en haut du dépôt et dans les résultats de recherche.

### Image d'aperçu social

`Settings → General → Social preview`, format 1280 × 640 px. Contenu minimal : le nom Erebus, la baseline en une ligne, et un aperçu de quelques composants. C'est ce qui s'affiche quand le lien est partagé sur Slack, X ou LinkedIn.

---

## 2. Objectif du README

Un lecteur arrive sur le dépôt depuis une recherche ou un lien. Le README doit répondre à trois questions, dans cet ordre et dans ces délais :

| Délai | Question | Où elle est traitée |
|---|---|---|
| 5 secondes | Qu'est-ce que c'est, et est-ce pour moi ? | Titre + baseline + badges |
| 30 secondes | À quoi ça ressemble et que sait-il faire ? | Capture + arguments + exemple de code |
| 5 minutes | Comment je démarre ? | Installation + premier composant + lien vers la doc |

Si l'une de ces trois réponses exige de faire défiler longuement ou de cliquer ailleurs, le README a échoué.

**Le README n'est pas la documentation.** Il donne envie et il fait démarrer. Tout le reste renvoie au site.

---

## 3. Structure imposée

Dans cet ordre exact.

### 3.1 En-tête

- Logo ou titre `# Erebus` (un logo SVG centré est préférable, mais ne pas bloquer le README en attendant qu'il existe).
- Une baseline d'une ligne, identique à la description du dépôt.
- Une ligne de badges.
- Une ligne de liens rapides : Documentation · Storybook React · Storybook Angular · Changelog · Contribuer.

Badges à afficher, dans cet ordre, et **uniquement ceux-ci** :

```md
[![npm](https://img.shields.io/npm/v/@erebus/react)](https://www.npmjs.com/package/@erebus/react)
[![CI](https://github.com/Glowing-Sea-Studio/erebus/actions/workflows/ci.yml/badge.svg)](https://github.com/Glowing-Sea-Studio/erebus/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/@erebus/react)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@erebus/react)](https://bundlephobia.com/package/@erebus/react)
```

Quatre badges maximum. Au-delà, ils cessent d'être lus et donnent une impression de bruit. Pas de badge « PRs welcome », pas de badge de compteur de téléchargements tant que le chiffre n'est pas flatteur.

### 3.2 Capture d'écran

Une seule image, placée immédiatement après les liens rapides. Elle doit montrer **plusieurs composants dans le même écran, en mode clair et sombre côte à côte**. C'est l'élément le plus consulté de la page.

Format : PNG ou WebP, largeur 1200 px, stockée dans `.github/assets/`. Attribut `alt` descriptif obligatoire.

Tant qu'elle n'existe pas, laisser un commentaire HTML à cet endroit plutôt qu'une image cassée.

### 3.3 Pourquoi Erebus

Trois à cinq puces, pas plus. Chacune énonce un fait vérifiable, pas une promesse marketing.

Contenu à couvrir : la parité React/Angular vérifiée automatiquement, l'accessibilité WCAG 2.2 AA testée en intégration continue, la thématisation par tokens sans surcharge CSS, le mode sombre garanti sur l'intégralité du catalogue, et le poids maîtrisé.

Formulation attendue : « Parité vérifiée — chaque composant existe des deux côtés avec la même API, contrôlé par un test qui bloque la publication en cas d'écart. »
Formulation rejetée : « Une expérience développeur exceptionnelle. »

### 3.4 Installation

Les deux frameworks, dans deux blocs distincts, avec les trois gestionnaires de paquets en onglets ou simplement pnpm et npm.

Inclure obligatoirement l'import CSS et le script anti-scintillement, car ce sont les deux oublis qui génèrent le plus d'issues sur ce type de projet.

### 3.5 Premier composant

Un exemple React et un exemple Angular, **strictement équivalents**, montrant le même écran. Une quinzaine de lignes chacun au maximum.

L'exemple doit être **copiable-collable et fonctionner sans modification**. Un exemple qui ne compile pas est pire que pas d'exemple : il coûte la confiance du lecteur dès la première minute.

Choisir un cas qui illustre la valeur du projet : un petit formulaire dans une carte, avec un bouton en état de chargement. Pas un « Hello world » avec un seul bouton.

### 3.6 Thématisation

Six à dix lignes maximum, montrant les deux niveaux :

- changer de thème et de mode par attributs sur `<html>` ;
- surcharger trois variables CSS pour adapter la charte.

Puis un lien vers la page de thématisation du site. Ne pas dérouler la liste des tokens ici.

### 3.7 Catalogue

Un tableau condensé par catégorie, en listant les noms de composants sans les décrire. L'objectif est que le lecteur voie d'un coup d'œil que ce dont il a besoin existe.

Ne pas faire une puce par composant : quatre-vingts puces rendent la page illisible.

### 3.8 Accessibilité

Un paragraphe court, factuel, listant ce qui est réellement testé. C'est un argument différenciant fort et il mérite sa section, mais il perd toute valeur s'il est formulé en promesses. Écrire ce qui est vérifié automatiquement, pas ce qui est souhaité.

### 3.9 Structure du monorepo

Un tableau des paquets publiés avec leur rôle en une ligne. Utile pour comprendre quoi installer.

### 3.10 Pied de page

Contribuer, licence, et une ligne sur le nom : Erebus est la divinité primordiale des ténèbres dans la mythologie grecque — un clin d'œil au mode sombre présent sur chaque composant. Cette anecdote est courte, se retient, et humanise le projet.

---

## 4. Règles de rédaction

**Langue.** Anglais pour le README principal. C'est la langue de l'écosystème et elle conditionne l'adoption. Un `README.fr.md` peut suivre plus tard, avec un lien croisé en haut des deux fichiers.

**Ton.** Descriptif et sobre. Le lecteur juge un projet à sa précision, pas à son enthousiasme.

À proscrire systématiquement : « blazing fast », « beautiful », « delightful », « powerful », « modern », « seamless », « the ultimate », « developer experience » employé comme argument en soi, ainsi que toute comparaison dénigrant un projet concurrent. Ces formules apparaissent dans des milliers de READMEs et ne communiquent rien.

**Chiffres.** Toujours préférer un chiffre vérifiable à un adjectif. « CSS de base sous 18 ko compressés » plutôt que « léger ». Si un chiffre n'est pas encore mesuré, ne pas l'écrire.

**Emojis.** Aucun dans les titres de section. Tolérés nulle part ailleurs par défaut. Ils vieillissent mal et nuisent à la lisibilité pour les lecteurs d'écran, qui les vocalisent intégralement.

**Longueur.** 200 lignes cible, 300 plafond. Au-delà, déplacer du contenu vers le site de documentation.

**Liens.** Tous absolus (`https://github.com/Glowing-Sea-Studio/erebus/blob/main/...`) et non relatifs, car le README est aussi rendu sur npmjs.com où les liens relatifs cassent.

**Statut du projet.** Tant que la version est en `alpha`, l'annoncer dans un encart visible juste après les badges. Un utilisateur qui découvre l'instabilité après avoir intégré la bibliothèque ouvre une issue mécontente ; celui qui a été prévenu contribue.

---

## 5. Ce qu'il ne faut pas mettre

| À éviter | Pourquoi |
|---|---|
| Une table des matières | GitHub en génère une automatiquement dans l'en-tête du fichier |
| La liste complète des propriétés d'un composant | C'est le rôle du site de documentation |
| Une feuille de route détaillée | Elle vieillit mal ; un `ROADMAP.md` séparé, ou les milestones GitHub |
| Une section « Remerciements » longue | Un `CONTRIBUTORS` ou la page Insights suffit |
| Des captures multiples | Une seule, bien choisie, vaut mieux que six |
| Un badge par outil utilisé | Signal de bruit, pas de qualité |
| « Star this repo if you like it » | Contre-productif, perçu comme de la mendicité |
| Des exemples non testés | Source numéro un des issues d'onboarding |

---

## 6. Maintenance

Le README est le fichier qui se périme le plus vite. Trois garde-fous :

1. **Les exemples de code sont extraits de fichiers réellement compilés.** Placer les snippets dans `examples/readme/` et les inclure au build, ou à défaut ajouter un test qui compile le contenu des blocs de code. Un exemple obsolète est un bug.
2. **Vérification des liens en CI.** Un job hebdomadaire signale les liens morts.
3. **Relecture à chaque version mineure.** Ajouter la ligne « README relu » à la checklist de publication.

---

## 7. Consigne pour l'agent

À donner telle quelle une fois que le premier lot de composants est fusionné et que le site de documentation est déployé — pas avant, sinon les liens et la capture n'existent pas.

```
## Objectif
Rédiger le README.md à la racine du dépôt.

## Fichiers à lire d'abord
docs/01-specifications-metier.md      (sections 2, 3 et 6)
docs/02-specifications-techniques.md  (sections C.2, C.4 et C.7)
docs/04-instructions-readme.md        (ce document, à appliquer intégralement)
packages/react/src/button/button.tsx
packages/angular/src/button/button.component.ts

## Fichiers à créer ou modifier
README.md
.github/assets/  (uniquement si une capture est fournie)

## Spécification
Appliquer la structure de la section 3 du document d'instructions, dans
l'ordre exact, sans ajouter ni retirer de section.
Appliquer les règles de rédaction de la section 4, en particulier
l'interdiction du vocabulaire promotionnel listé.
Rédiger en anglais.
Les exemples de code des sections 3.5 et 3.6 doivent utiliser l'API réelle
des composants telle qu'elle existe dans le dépôt à cet instant — les lire
dans les sources, ne rien inventer.
Les deux exemples, React et Angular, doivent produire le même écran.

## Contraintes
- Ne modifier aucun autre fichier.
- Ne pas insérer d'image qui n'existe pas dans le dépôt : laisser un
  commentaire HTML à l'emplacement prévu.
- Ne pas inventer de chiffre de performance ou de nombre de composants :
  compter les composants réellement présents dans packages/react/src/.
- Aucun emoji.
- Maximum 300 lignes.

## Critères d'acceptation
- Les dix sections de la structure sont présentes, dans l'ordre.
- Les exemples compilent : les coller dans playground-react et
  playground-angular fonctionne sans modification.
- Aucun terme de la liste proscrite n'apparaît.
- Tous les liens sont absolus et répondent en 200.
- Le fichier fait moins de 300 lignes.
```

---

## 8. Squelette de départ

À utiliser comme point de départ si tu écris le README toi-même. Les commentaires HTML marquent ce qui reste à compléter.

````md
<h1 align="center">Erebus</h1>

<p align="center">
  One design system, two native implementations.<br>
  A complete, accessible component library for React and Angular.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@erebus/react"><img src="https://img.shields.io/npm/v/@erebus/react" alt="npm version"></a>
  <a href="https://github.com/Glowing-Sea-Studio/erebus/actions/workflows/ci.yml"><img src="https://github.com/Glowing-Sea-Studio/erebus/actions/workflows/ci.yml/badge.svg" alt="CI status"></a>
  <a href="https://github.com/Glowing-Sea-Studio/erebus/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@erebus/react" alt="MIT license"></a>
  <a href="https://bundlephobia.com/package/@erebus/react"><img src="https://img.shields.io/bundlephobia/minzip/@erebus/react" alt="bundle size"></a>
</p>

<p align="center">
  <a href="https://Glowing-Sea-Studio.github.io/erebus/">Documentation</a> ·
  <a href="https://Glowing-Sea-Studio.github.io/erebus/storybook/react/">Storybook React</a> ·
  <a href="https://Glowing-Sea-Studio.github.io/erebus/storybook/angular/">Storybook Angular</a> ·
  <a href="https://github.com/Glowing-Sea-Studio/erebus/blob/main/CHANGELOG.md">Changelog</a>
</p>

> **Alpha.** The API is not yet stable. Pin an exact version.

<!-- SCREENSHOT: light and dark side by side, 1200px wide, .github/assets/preview.png -->

## Why Erebus

<!-- 3 to 5 factual bullets, see instructions §3.3 -->

## Installation

<!-- React and Angular, including the CSS import and the theme script -->

## Your first component

<!-- One React example and one Angular example producing the same screen -->

## Theming

<!-- Attribute switching, then CSS variable override, then link to docs -->

## Components

<!-- Condensed table by category -->

## Accessibility

<!-- What is actually tested in CI -->

## Packages

<!-- Table: package name, role -->

## Contributing

See [CONTRIBUTING.md](https://github.com/Glowing-Sea-Studio/erebus/blob/main/CONTRIBUTING.md).

## License

MIT © Glowing-Sea-Studio

---

<sub>Erebus is the primordial god of darkness in Greek mythology — a nod to the
dark mode that ships with every component.</sub>
````
