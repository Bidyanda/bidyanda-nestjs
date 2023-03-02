module.exports = {
  apps: [
    // First application
    {
      name: 'bidyanda',
      script: 'dist/main.js',
      instances: 'max',
      exec_mode: 'cluster',
      error_file: 'err.log',
      out_file: 'bidyanda.log',
      merge_logs: false,
      env_development: {
        NODE_ENV: 'development',
        PORT:3000
      },
      env_staging: {
        NODE_ENV: 'staging',
        PORT:3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT:3000
      },
    },
  ],
};