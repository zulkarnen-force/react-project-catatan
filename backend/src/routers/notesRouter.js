const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const {
  GetAllNotesController,
  CreateNotesController,
  UpdateNotesController,
  DeleteNotesController,
} = require("../controllers/notesController");

const notesValidation = require("../validations/notesValidation");
const middlewareValidation = require("../middleware/middlewareValidation");

router.use(fetchuser);

router.get("/fetchallnotes", GetAllNotesController);

router.post(
  "/addnote",
  notesValidation,
  middlewareValidation,
  CreateNotesController
);

router.put(
  "/updatenote/:id",
  notesValidation,
  middlewareValidation,
  UpdateNotesController
);

router.delete("/deletenote/:id", DeleteNotesController);

module.exports = router;
