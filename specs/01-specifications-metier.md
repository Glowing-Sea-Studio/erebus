# Erebus — Spécifications métier

**Projet** : bibliothèque de composants d'interface open source
**Dépôt** : `github.com/Glowing-Sea-Studio/erebus`
**Scope npm** : `@erebus` *(repli : `@Glowing-Sea-Studio/erebus-*` si l'organisation `erebus` est déjà prise)*
**Licence** : MIT
**Version du document** : 1.0 — *à valider*

---

## 1. Contexte et problème adressé

Une équipe qui démarre un produit web doit choisir entre trois compromis, tous insatisfaisants :

1. **Bootstrap** — installation immédiate, catalogue complet, mais une esthétique reconnaissable entre mille, une personnalisation qui passe par la surcharge de CSS, et une accessibilité inégale selon les composants.
2. **Tailwind CSS seul** — liberté totale et cohérence des espacements, mais aucun composant fourni : chaque équipe réécrit sa modale, son menu déroulant et son autocomplétion, avec les bugs d'accessibilité qui vont avec.
3. **Une bibliothèque de composants moderne** (MUI, Mantine, shadcn, Angular Material) — excellente, mais liée à **un seul framework**. Une organisation qui maintient à la fois du React et de l'Angular entretient deux design systems, deux vocabulaires, deux dettes.

Erebus s'attaque au troisième point. C'est **un seul design system, deux implémentations natives**, avec la garantie que le même code de style produit le même rendu des deux côtés.

## 2. Vision produit

> Permettre à une organisation qui utilise React **et** Angular de n'entretenir qu'une seule identité visuelle, une seule documentation, un seul vocabulaire — sans sacrifier la qualité d'intégration à chaque framework.

Trois promesses :

- **Parité** — tout composant disponible en React l'est en Angular, avec les mêmes propriétés, les mêmes valeurs et le même rendu HTML.
- **Accessibilité par défaut** — un développeur qui utilise Erebus sans rien connaître à l'accessibilité produit malgré tout une interface conforme.
- **Thématisation sans surcharge** — changer l'apparence complète du produit ne demande pas d'écrire une seule règle CSS de contournement.

## 3. Proposition de valeur

| Pour | Erebus apporte |
|---|---|
| Un développeur front | Un catalogue complet, installable en une commande, typé, documenté, avec des exemples dans son framework |
| Une équipe mixte React/Angular | Un vocabulaire unique : ce qui est appris d'un côté est acquis de l'autre |
| Un designer | Un fichier Figma dont les noms de tokens correspondent exactement au code |
| Un responsable produit | Une conformité d'accessibilité vérifiable, exigée par la réglementation européenne depuis juin 2025 |
| Une direction technique | Zéro coût de licence, code MIT, aucun verrouillage fournisseur, possibilité de forker |

## 4. Utilisateurs cibles

### Persona 1 — Léa, développeuse front dans une PME produit

Travaille seule sur le front d'un SaaS React. Pas de designer dans l'équipe. Elle veut un rendu professionnel sans passer trois jours sur une modale accessible. **Attend** : installation triviale, composants qui marchent, documentation avec du copier-coller qui fonctionne.

### Persona 2 — Marc, lead front d'une ESN

Gère cinq projets clients, trois en Angular, deux en React. Chaque client veut sa charte. **Attend** : un thème par client sans forker la bibliothèque, une parité stricte entre les deux stacks, une montée de version prévisible.

### Persona 3 — Sofia, designer système

Maintient le Figma d'une grande organisation. Se bat pour que le code respecte les tokens. **Attend** : des noms de tokens partagés entre Figma et le code, et un moyen de vérifier que les contrastes sont respectés.

### Persona 4 — Karim, référent accessibilité

Doit faire auditer une application publique. **Attend** : une conformité documentée composant par composant, des raccourcis clavier décrits, et des preuves de tests automatisés.

## 5. Cas d'usage prioritaires

| # | Cas d'usage | Critère de réussite |
|---|---|---|
| UC1 | Installer et afficher un premier composant stylé | Moins de 3 minutes, moins de 5 étapes |
| UC2 | Construire un formulaire validé avec messages d'erreur accessibles | Sans écrire de CSS ni de logique ARIA |
| UC3 | Basculer toute l'application en mode sombre | Un seul attribut, aucun composant cassé |
| UC4 | Appliquer la charte graphique d'un client | Modifier des tokens, jamais des composants |
| UC5 | Construire un tableau de bord responsive | Fonctionne de 320 px à 2560 px sans media query écrite à la main |
| UC6 | Construire une page marketing (hero, galerie, tarifs) | Sans dépendance supplémentaire |
| UC7 | Migrer un écran Bootstrap existant | Guide de correspondance fourni, grille compatible |
| UC8 | Auditer l'accessibilité d'un écran | Zéro violation automatique détectée sur les composants Erebus |

## 6. Périmètre fonctionnel

### 6.1 Ce que la bibliothèque fournit

**Fondations**
Système de couleurs, typographie, espacements, rayons, ombres, animations — tous exprimés en tokens réutilisables. Plusieurs thèmes prêts à l'emploi, chacun décliné en clair et sombre. Un axe de densité (compact / confortable / spacieux) indépendant du thème.

**Mise en page**
Un système responsive pensé mobile d'abord : conteneurs, grille, empilements, répartitions, ratios, affichage conditionnel selon la taille d'écran. Une grille compatible avec les habitudes Bootstrap pour faciliter les migrations.

**Structure d'application**
En-tête, pied de page, barre latérale repliable, navigation mobile, fil d'Ariane, onglets, pagination, parcours par étapes.

**Saisie et formulaires**
L'ensemble des champs attendus : texte, nombre, mot de passe, sélection simple et multiple, autocomplétion, cases, boutons radio, interrupteurs, curseurs, dates et plages de dates, heure, couleur, dépôt de fichiers, code à usage unique, étiquettes, notation. Chaque champ gère ses états : vide, rempli, en erreur, désactivé, en lecture seule, en chargement.

**Affichage de données**
Tableaux, listes, cartes, statistiques, badges, étiquettes, avatars, frises chronologiques, états vides et états d'erreur.

**Superpositions**
Modales, boîtes de confirmation, panneaux latéraux, infobulles, menus contextuels, menus déroulants, visionneuse d'images plein écran, palette de commandes.

**Retours utilisateur**
Notifications temporaires, messages en ligne, bandeaux, barres de progression, indicateurs de chargement, squelettes de contenu.

**Médias et pages marketing**
Images optimisées, galeries, carrousels, bannières d'accueil, grilles de fonctionnalités, appels à l'action, témoignages, questions fréquentes.

### 6.2 Hors périmètre

- Composants métier spécifiques (réservation, facturation, cartographie).
- Éditeur de texte riche et bibliothèque de graphiques — l'intégration d'outils tiers est documentée.
- Support de Vue, Svelte ou des Web Components (envisagé après la version 2).
- Version payante, offre entreprise, support commercial.

## 7. Exigences non fonctionnelles

### 7.1 Accessibilité — exigence bloquante

Conformité **WCAG 2.2 niveau AA** sur l'intégralité du catalogue. Ce n'est pas une option de configuration : un composant non conforme n'est pas publié.

Cette exigence a une portée réglementaire. L'European Accessibility Act s'applique depuis juin 2025 à une large part des services numériques vendus dans l'Union ; en France, le RGAA impose des obligations comparables au secteur public et à certaines entreprises. Une organisation qui construit sur Erebus doit pouvoir s'appuyer sur la bibliothèque plutôt que de la corriger.

Concrètement : navigation au clavier complète, compatibilité avec les lecteurs d'écran, contrastes vérifiés sur chaque combinaison thème × mode, respect des préférences système (mouvement réduit, contraste élevé), zones tactiles suffisantes, et jamais d'information portée par la seule couleur.

### 7.2 Performance

Le poids ajouté à une application doit rester marginal : la feuille de style de base sous 18 ko compressés, et l'import d'un composant ne doit jamais entraîner l'import de tout le catalogue. Le rendu côté serveur est supporté sans scintillement ni erreur d'hydratation.

### 7.3 Internationalisation

Aucun texte figé dans les composants. Français et anglais fournis, structure ouverte aux contributions. Les langues écrites de droite à gauche sont supportées nativement, sans feuille de style additionnelle.

### 7.4 Compatibilité

Les deux dernières versions des navigateurs majeurs, plus Safari iOS à partir de la version 15.4. React 18.3 et 19. Angular 18 et suivants.

### 7.5 Stabilité

Versionnage sémantique strict. Une propriété dépréciée reste utilisable pendant deux versions mineures avant retrait, et chaque montée de version majeure est accompagnée d'un guide de migration.

## 8. Modèle de distribution

- **Code source** : GitHub, dépôt public, licence MIT.
- **Paquets** : npm, publication automatisée depuis l'intégration continue.
- **Documentation** : site public gratuit, hébergé sur GitHub Pages.
- **Design** : fichier Figma public, synchronisé sur les mêmes tokens.

Aucune monétisation prévue. Le projet est un bien commun ; sa valeur pour son auteur est la réutilisation dans ses propres projets et la visibilité.

## 9. Gouvernance et communauté

| Sujet | Règle |
|---|---|
| Décisions techniques structurantes | Proposition écrite publique, discussion ouverte 7 jours minimum |
| Contributions | Bienvenues, guide fourni, issues étiquetées pour les débutants |
| Signalement de bug | Modèle d'issue avec reproduction minimale exigée |
| Sécurité | Signalement privé, réponse sous 72 h |
| Code de conduite | Contributor Covenant |
| Rythme de publication | Correctifs au fil de l'eau, versions mineures mensuelles |

## 10. Indicateurs de succès

### À la sortie de la version 1.0

- Catalogue complet livré, parité React/Angular vérifiée automatiquement.
- Zéro violation d'accessibilité détectée sur la documentation et les exemples.
- Documentation couvrant 100 % des composants, avec exemples dans les deux frameworks.
- Site de documentation noté au moins 98 sur les quatre axes Lighthouse.
- Trois projets réels construits avec Erebus (les tiens ou ceux de contributeurs).

### À six mois

- Au moins un projet tiers identifié en production.
- Délai médian de réponse aux issues inférieur à 72 h.
- Aucune vulnérabilité de sévérité haute ouverte.

### À suivre en continu

Téléchargements npm hebdomadaires, étoiles GitHub, issues ouvertes et leur ancienneté, écarts de parité déclarés, taille des paquets.

## 11. Feuille de route par lots de valeur

| Lot | Contenu | Valeur livrée |
|---|---|---|
| **L0 — Fondations** | Tokens, thème par défaut, clair/sombre, mise en page | Une page peut être construite et thémée |
| **L1 — Socle** | Boutons, cartes, champs de base, alertes, notifications | Un formulaire complet devient réalisable |
| **L2 — Navigation** | Modales, panneaux, menus, en-tête, pied de page, onglets | Une application complète devient réalisable |
| **L3 — Saisie avancée** | Autocomplétion, dates, curseurs, fichiers, tableaux | Les cas métier complexes sont couverts |
| **L4 — Vitrine** | Galerie, visionneuse, carrousel, bannière, tarifs | Les pages marketing sont couvertes |
| **L5 — Finition** | Thèmes additionnels, langues, documentation, audit | Version 1.0 publiable |

Chaque lot est publiable et utilisable indépendamment. En cas de retard, on coupe dans le contenu d'un lot plutôt que de repousser la version 1.0.

## 12. Risques métier

| Risque | Effet | Réponse |
|---|---|---|
| Le projet n'attire aucun utilisateur externe | Effort de maintenance non amorti | Assumer l'usage personnel comme justification suffisante ; la visibilité est un bonus |
| Divergence progressive React/Angular | La promesse centrale s'effondre | Vérification automatique bloquante, refus de publication en cas d'écart |
| Périmètre trop large pour un mainteneur solo | Version 1.0 jamais atteinte | Priorisation stricte par lots, découpage en tâches courtes |
| Accessibilité traitée en fin de parcours | Reprise coûteuse, promesse non tenue | Tests automatiques dès le premier lot |
| Nom ou marque déjà déposés | Renommage tardif douloureux | Vérification npm faite ; vérifier l'INPI avant toute communication publique |
| Dépendance à un agent de développement | Code mal compris, maintenance difficile | Toute production doit être documentée et testée avant fusion |

## 13. Glossaire

| Terme | Définition |
|---|---|
| **Token** | Valeur de design nommée (une couleur, un espacement) réutilisée partout plutôt que recopiée |
| **Thème** | Ensemble cohérent de valeurs de tokens définissant une identité visuelle |
| **Mode** | Variante claire ou sombre d'un thème |
| **Densité** | Compacité de l'interface, indépendante du thème |
| **Variante** | Forme visuelle d'un composant (plein, contour, discret) |
| **Intention** | Sens véhiculé par une couleur (succès, danger, avertissement) |
| **Parité** | Garantie qu'un composant se comporte identiquement en React et en Angular |
| **Mobile d'abord** | Le style de base cible le mobile ; les écrans plus larges ajoutent des règles |
