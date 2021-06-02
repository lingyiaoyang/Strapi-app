"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const sizeOf = require("image-size");
const path = require("path");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.movies.create(data, { files });
    } else {
      entity = await strapi.services.movies.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.movie });
  },

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.movie.search(ctx.query);
    } else {
      entities = await strapi.services.movie.find(ctx.query);
    }

    return entities.map((entity) => {
      const movie = sanitizeEntity(entity, {
        model: strapi.models.movie,
      });

      if (movie.movie_img !== null) {
        const dimensions = sizeOf(
          path.resolve(__dirname, "../../../public" + movie.movie_img.url)
        );
        movie.movie_img.width = dimensions.width;
        movie.movie_img.height = dimensions.height;
      } else {
        return ["this is dont have movie img"];
      }

      return movie;
    });
  },
};
