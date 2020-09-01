import { MK, EP, HS, AK } from "./constants/parks";

// TODO: Create Land via MirageJS serialization

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
      const magicKingdomPark = server.create("park", { name: MK });
      server.create("ride", {
        park: magicKingdomPark,
        ride: "Splash Mountain",
        land: MK,
        waitMinutes: "45",
      });
      server.create("ride", {
        park: magicKingdomPark,
        ride: "Space Mountain",
        land: MK,
        waitMinutes: "75",
      });

      const epcotPark = server.create("park", { name: EP });
      server.create("ride", {
        park: epcotPark,
        ride: "Maelstrom",
        land: EP,
        waitMinutes: "15",
      });
      server.create("ride", {
        park: epcotPark,
        ride: "Journey Into Imagination",
        land: EP,
        waitMinutes: "35",
      });

      const hollywoodStudiosPark = server.create("park", {
        name: HS,
      });
      server.create("ride", {
        park: hollywoodStudiosPark,
        ride: "Rise of the Resistance",
        land: HS,
        waitMinutes: "190",
      });
      server.create("ride", {
        park: hollywoodStudiosPark,
        ride: "Tower of Terror",
        land: HS,
        waitMinutes: "13",
      });

      const animalKingdomPark = server.create("park", {
        name: AK,
      });
      server.create("ride", {
        park: animalKingdomPark,
        ride: "Flight of Passage",
        land: AK,
        waitMinutes: "210",
      });
      server.create("ride", {
        park: animalKingdomPark,
        ride: "Expedition Everest",
        land: AK,
        waitMinutes: "13",
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
