const { getAll, create, getOne, remove, update, setCourseStudents } = require('../controllers/course.controllers');
const express = require('express');

const courseRouter = express.Router();

courseRouter.route('/')
    .get(getAll)
    .post(create);

courseRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

courseRouter.route('/:id/students')
    .post(setCourseStudents);

module.exports = courseRouter;