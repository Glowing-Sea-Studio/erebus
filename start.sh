#!/bin/bash

# start.sh - Script pour builder le design system et lancer les démos

# Couleurs pour un joli output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== 1/3 Installation des dépendances ===${NC}"
pnpm install

echo -e "\n${BLUE}=== 2/3 Build des tokens et des paquets ===${NC}"
pnpm tokens:build
pnpm build

echo -e "\n${BLUE}=== 3/3 Lancement des démos Storybook ===${NC}"
echo -e "${GREEN}-> Storybook React démarrera sur http://localhost:6006${NC}"
echo -e "${GREEN}-> Storybook Angular démarrera sur http://localhost:6007${NC}"
echo -e "${BLUE}(Appuyez sur Ctrl+C pour arrêter les serveurs)${NC}\n"

# On lance les deux serveurs en parallèle
# Note: Storybook se lance par défaut sur le port 6006. On force le port 6007 pour Angular.
pnpm nx storybook @glowing-sea-studio/erebus-react -p 6006 &
REACT_PID=$!

pnpm nx storybook @glowing-sea-studio/erebus-angular -p 6007 &
ANGULAR_PID=$!

# On attend que l'utilisateur coupe le script
wait $REACT_PID $ANGULAR_PID
