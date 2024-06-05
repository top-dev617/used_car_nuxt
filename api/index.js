import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/cars", () => {
        return [
          {
            id: 1,
            make: "Toyota",
            model: "Corolla",
            year: 2020,
            price: 15000,
            image: "toyota.jpg",
          },
          {
            id: 2,
            make: "Honda",
            model: "Civic",
            year: 2019,
            price: 18000,
            image: "honda.jpg",
          },
          {
            id: 3,
            make: "Ford",
            model: "Mustang",
            year: 2018,
            price: 25000,
            image: "ford.jpg",
          },
          {
            id: 4,
            make: "Chevrolet",
            model: "Camaro",
            year: 2017,
            price: 23000,
            image: "chevrolet.jpg",
          },
        ];
      });
    },
  });
}

// Ensure the server is started in development mode
makeServer();
