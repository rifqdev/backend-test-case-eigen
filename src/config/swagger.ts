import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Perpustakaan",
      version: "1.0.0",
      description: "Dokumentasi API untuk sistem perpustakaan",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Server Pengembangan",
      },
    ],
  },
  apis: ["./src/interfaces/http/routes.ts"], // Path ke file rute Anda
};

export const specs = swaggerJsdoc(options);
