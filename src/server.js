import { ParkNames } from "./constants/parks";

import {
  createServer,
  Model,
  hasMany,
  belongsTo,
  Factory,
  // trait,
} from "miragejs";

export default function (environment = "development") {
  return createServer({
    environment,

    models: {
      park: Model.extend({
        rides: hasMany(),
      }),

      ride: Model.extend({
        park: belongsTo(),
      }),
    },

    factories: {
      park: Factory.extend({
        name(i) {
          return `Park ${i}`;
        },

        // withRides: trait({
        //   afterCreate(park, server) {
        //     server.createPark("ride", 5, { park });
        //   },
        // }),
      }),

      ride: Factory.extend({
        text(i) {
          return `Ride ${i}`;
        },
      }),
    },

    seeds(server) {
      const magicKingdomPark = server.create("park", { name: ParkNames.MK });
      server.create("ride", {
        park: magicKingdomPark,
        ride: "Splash Mountain",
        land: ParkNames.MK,
        waitMinutes: "45",
        id: "1",
      });
      server.create("ride", {
        park: magicKingdomPark,
        ride: "Space Mountain",
        land: ParkNames.MK,
        waitMinutes: "75",
        id: "2",
      });

      const epcotPark = server.create("park", { name: ParkNames.EP });
      server.create("ride", {
        park: epcotPark,
        ride: "Maelstrom",
        land: ParkNames.EP,
        waitMinutes: "15",
        id: "3",
      });
      server.create("ride", {
        park: epcotPark,
        ride: "Journey Into Imagination",
        land: ParkNames.EP,
        waitMinutes: "35",
        id: "4",
      });

      const hollywoodStudiosPark = server.create("park", {
        name: ParkNames.HS,
      });
      server.create("ride", {
        park: hollywoodStudiosPark,
        ride: "Rise of the Resistance",
        land: ParkNames.HS,
        waitMinutes: "190",
        id: "5",
      });
      server.create("ride", {
        park: hollywoodStudiosPark,
        ride: "Tower of Terror",
        land: ParkNames.HS,
        waitMinutes: "13",
        id: "6",
      });

      const animalKingdomPark = server.create("park", {
        name: ParkNames.AK,
      });
      server.create("ride", {
        park: animalKingdomPark,
        ride: "Flight of Passage",
        land: ParkNames.AK,
        waitMinutes: "210",
        id: "7",
      });
      server.create("ride", {
        park: animalKingdomPark,
        ride: "Expedition Everest",
        land: ParkNames.AK,
        waitMinutes: "13",
        id: "8",
      });

      // ====================================
      //server.createPark("ride", 2);
      // server.create("park", {
      //   rides: server.createPark("ride", 2),
      // });
      //server.create("park", "withRide");
    },

    routes() {
      // this.namespace = "/api";

      this.get("/api/parks", (schema, request) => {
        return schema.parks.all();
      });

      this.get("/api/rides", (schema) => {
        return schema.rides.all();
      });

      this.post("/api/rides", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.rides.create(attrs);
      });

      this.delete("/api/rides/:id", (schema, request) => {
        let id = request.params.id;

        return schema.rides.find(id).destroy();
      });

      this.get(
        "/api/parks/:id/rides",
        (schema, request) => {
          let parkId = request.params.id;
          let park = schema.parks.find(parkId);

          return park.rides;
        },
        { timing: 3000 }
      );
    },
  });
}
