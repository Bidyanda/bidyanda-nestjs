module.exports = {
  apps: [
    {
      name: "bidyanda",
      script: "dist/main.js",
      instances: "max",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      key: "/var/www/sshkey.pem", // path to the public key to authenticate
      user: "root", // user used to authenticate
      host: "143.110.240.100", // where to connect
      ref: "origin/master",
      repo: "git@github.com:username/my-nest-app.git",
      path: "/var/www/bidyanda/html/bidyanda",
      "post-deploy":
        "pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
