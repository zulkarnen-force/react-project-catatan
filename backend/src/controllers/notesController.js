const {
  GetAllNotesService,
  CreateNotesService,
  UpdateNotesService,
  DeleteNotesService,
} = require("../services/notesServices");
const dataResponse = require("../utils/dataResponse");
const { OK, CREATED } = require("../datas/statusCode");

async function GetAllNotesController(req, res, next) {
  try {
    const response = await GetAllNotesService(req);
    res.json(dataResponse(true, OK, response));
  } catch (error) {
    next(error);
  }
}

async function CreateNotesController(req, res, next) {
  try {
    const response = await CreateNotesService(req);
    res.json(dataResponse(true, CREATED, response));
  } catch (error) {
    next(error);
  }
}

async function UpdateNotesController(req, res, next) {
  try {
    const response = await UpdateNotesService(req);
    res.json(dataResponse(true, CREATED, response));
  } catch (error) {
    next(error);
  }
}

async function DeleteNotesController(req, res, next) {
  try {
    const response = await DeleteNotesService(req);
    res.json(dataResponse(true, OK, response));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  GetAllNotesController,
  CreateNotesController,
  UpdateNotesController,
  DeleteNotesController,
};
