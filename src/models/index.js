const Course = require('./Course');
const Professor = require('./Professor');
const Student = require('./Student');

Professor.belongsToMany(Student, { through: "inscriptions" });
Student.belongsToMany(Professor, { through: "inscriptions" });

Course.belongsToMany(Student, { through: "studentCourse" });
Student.belongsToMany(Course, { through: "studentCourse" });
