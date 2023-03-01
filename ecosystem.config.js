module.exports = {
  apps: [
    {
      instances: -1,
      exec_mode: "cluster",
    },
    {
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
      env_staging: {
        PORT: 3000,
        NODE_ENV: "staging",
      },
      
      env_production: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
      "production" : {
        "key"  : "/var/www/sshkey.pem", // path to the public key to authenticate
        "user" : "root",              // user used to authenticate
        "host" : "143.110.240.100",      // where to connect
        "ref"  : "origin/master",
        "repo" : "git@github.com:Bidyanda/bidyanda-nestjs.git",
        "path" : "/var/www/bidyanda/html/bidyanda",
        "post-deploy" : "pm2 startOrRestart ecosystem.json --env production"
      },
  },
};
