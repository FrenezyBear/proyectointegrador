module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1337,
        PUBLIC_URL: "https://strapi.sucucho.com",

        DATABASE_CLIENT: "postgres",
        DATABASE_HOST: "strapi-db.cana2cqm0gas.us-east-1.rds.amazonaws.com",
        DATABASE_PORT: 5432,
        DATABASE_NAME: "strapi-db",
        DATABASE_USERNAME: "strapi",
        DATABASE_PASSWORD: "Anima2025!",
        DATABASE_SSL: true,

        APP_KEYS: "45fbbb18163c6f09e9c5817965c44eadc81a39e5c09dafe0281670996cfd83f8,b74a03f89e606ddf5fe4854fde5599620148404e5bb55,1e083c9b1d26a4dc3c2131f519fa09e8d1c4e3f2644e13cf6f6ac8f773eb8e76,4bbfe7a1a4b14f18ff7b14b6497d877f36b0cb5a6405d1ce12f2e69d51409e5a",
        API_TOKEN_SALT: "2894e069937ed473bc6cf984307fc1ee4fd83a1ebf6a7605e691c689c069c854",
        TRANSFER_TOKEN_SALT: "e487dd30688d012c7c423b009bf3559e8fd27cccb71abfaf708b302ee9ca5758",
        ADMIN_JWT_SECRET: "47a8fa0574b2d64c3a991a6cfb7d5216b39f2b38dd6b91ab983d6f4d8eb7e3db",
        JWT_SECRET: "9e96f8ca327519ccd7c966d8a8ded0ee21a8883c8012e5190850383b23ca0edc",

        CLOUDINARY_NAME: "prointegrador",
        CLOUDINARY_KEY: "382947868911661",
        CLOUDINARY_SECRET: "gwffsKJ7Y2nsSdi4I1Z_doy5cEA",
      },
    },
  ],
};
