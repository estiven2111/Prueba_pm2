module.exports = {
  apps: [
    {
      name: 'react-app',
      script: 'node_modules/.bin/http-server',
      args: 'build -p 3400',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};

