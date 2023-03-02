#!/bin/bash
cd /var/www/bidyanda/html/bidyanda
git pull origin master;
nest build bidyanda --webpack;
pm2 restart Bidyanda;
