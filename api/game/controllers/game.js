"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    console.log("Starting to populate...");

    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query, // If I send different data, it overwrites
    };

    await strapi.services.game.populate(options);

    ctx.send("Finished populating");
  },
};
