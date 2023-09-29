const Notes = require("../models/Notes");

async function GetAllNotesService(req) {
  const result = await Notes.find({ user: req.user.id }).sort({
    date: "desc",
  });
  return result;
}

async function CreateNotesService(req) {
  const { title, description, tag } = req.body;
  const notes = new Notes({
    title,
    description,
    tag,
    user: req.user.id,
  });
  const result = await notes.save();
  return result;
}

async function UpdateNotesService(req) {
  const { title, description, tag } = req.body;
  const result = await Notes.findByIdAndUpdate(req.params.id, {
    title,
    description,
    tag,
  });
  return result;
}

async function DeleteNotesService(req) {
  const result = await Notes.findByIdAndDelete(req.params.id);
  return result;
}

module.exports = {
  GetAllNotesService,
  CreateNotesService,
  UpdateNotesService,
  DeleteNotesService,
};
