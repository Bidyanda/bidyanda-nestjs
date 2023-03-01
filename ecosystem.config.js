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
    //   env_production: {
    //     PORT: 80,
    //     NODE_ENV: "production",
    //   },
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: ["143.110.240.100"],
      ref: "origin/master",
      repo: "https://github.com/Bidyanda/bidyanda-nestjs.git",
      path: "/var/www/bidyanda/html/bidyanda",
      "post-setup": "npm install",
      "post-deploy": "pm2 start ecosystem.config.js --env production",
    },
  },
};
