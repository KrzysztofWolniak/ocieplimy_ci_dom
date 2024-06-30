#!/bin/bash

cd ~/projects/ocieplimy_ci_dom

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
