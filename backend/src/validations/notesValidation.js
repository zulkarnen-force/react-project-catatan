const { body } = require("express-validator");

const notesValidation = [
  body("title", "masukan judul yang valid").isLength({ min: 3 }),
  body("description", "deskripsi minimal 5 huruf").isLength({
    min: 5,
  }),
  body("tag", "tag maksimal 10 huruf").isLength({
    max: 10,
  }),
];

module.exports = notesValidation;
