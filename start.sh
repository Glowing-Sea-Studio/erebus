#!/bin/bash

# start.sh - Script pour builder les démos et lancer le serveur PHP

# Couleurs pour un joli output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== 1/3 Build des paquets Erebus ===${NC}"
npx pnpm tokens:build
npx pnpm build

echo -e "\n${BLUE}=== 2/3 Build des applications de démo ===${NC}"
rm -rf www
mkdir -p www
cat << 'HTMLEOF' > www/index.html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Erebus Démos</title>
  <style>
    body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #f0f0f0; margin: 0; }
    h1 { color: #333; }
    .links { display: flex; gap: 20px; }
    a { padding: 15px 30px; background: #007bff; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; }
    a:hover { background: #0056b3; }
  </style>
</head>
<body>
  <h1>Démos du Design System Erebus</h1>
  <div class="links">
    <a href="/react/">Démo React</a>
    <a href="/angular/">Démo Angular</a>
  </div>
</body>
</html>
HTMLEOF

# Build React
echo -e "${BLUE}-> Build React...${NC}"
cd apps/demo-react
npx pnpm run build --base ./
cd ../..
mv apps/demo-react/dist www/react

# Build Angular
echo -e "${BLUE}-> Build Angular...${NC}"
cd apps/demo-angular
npx pnpm run build --base-href ./
cd ../..
mv apps/demo-angular/dist/demo-angular/browser www/angular

echo -e "\n${BLUE}=== 3/3 Lancement du serveur PHP ===${NC}"
npx --yes kill-port 8000 || true
echo -e "${GREEN}-> Le portail des démos est disponible sur http://localhost:8000${NC}"
echo -e "${BLUE}(Appuyez sur Ctrl+C pour arrêter le serveur)${NC}\n"

cd www
php -S localhost:8000
