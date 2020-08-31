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
      let epcotPark = server.create("park", { name: "Epcot" });
      server.create("ride", {
        park: epcotPark,
        ride: "Maelstrom",
        land: "Epcot",
        waitMinutes: "15",
      });
      server.create("ride", {
        park: epcotPark,
        ride: "Journey Into Imagination",
        land: "Epcot",
        waitMinutes: "35",
      });
      // let magicKingdomPark = server.create("park", { name: "Magic Kingdom" });
      // ====================================
      //server.createPark("ride", 2);
      // server.create("park", {
      //   rides: server.createPark("ride", 2),
      // });
      //server.create("park", "withRide");
    },

    routes() {
      // this.namespace = "/wdw";

      this.get("/api/parks", (schema, request) => {
        return schema.parks.all();
      });

      this.get("/api/rides", (schema) => {
        return schema.rides.all();
      });

      // this.get("/api/rides", () => ({
      //   rides: [],
      // }));

      this.post("/api/rides", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.rides.create(attrs);
      });

      this.delete("/api/rides/:id", (schema, request) => {
        let id = request.params.id;

        return schema.rides.find(id).destroy();
      });

      this.get("/api/parks/:id/rides", (schema, request) => {
        let parkId = request.params.id;
        let park = schema.parks.find(parkId);

        return park.rides;
      });
    },
  });
}
