#!/bin/bash

cd ~/projects/ocieplimy_ci_dom

# Load nvm and use the correct version of Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20.11.1

# Install dependencies
npm install

# Build the project
npm run build

# Restart application using pm2
if pm2 list | grep ocieplimy_ci_dom; then
    pm2 restart ocieplimy_ci_dom
else
    pm2 start npm --name "ocieplimy_ci_dom" -- start
fi
