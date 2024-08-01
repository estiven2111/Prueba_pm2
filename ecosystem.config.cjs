module.exports = {
  apps: [
    {
      name: "APP_CREAME",
      script: "node_modules/.bin/http-server",
      args: "start",
      env_production_app: {
        NODE_ENV: "production",
        MODE: "production_app",
        PORT: 3400,
      },
    },
    {
      name: "APP-PRUEBAS-WEB",
      script: "node_modules/.bin/http-server",
      args: "start",
      exec_mode: "cluster",
      instances: "max",

      env_pruebas_creame: {
            NODE_ENV: "production",
            MODE: "pruebas_app",
            PORT: 3400,
        }
    },
  ],
};

