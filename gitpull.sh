#!/bin/bash
cd /var/www/bidyanda/html/bidyanda
git pull origin master;
pm2 restart Bidyanda;
