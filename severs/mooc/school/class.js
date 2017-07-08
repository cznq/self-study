var student = require('./student');
var teacher = require('./teache');
// teacher.add('Scott');
function add(theacherName,students) {
  teacher.add(theacherName);

  students.forEach(function(item,index){
    student.add(item);
  });

}
  exports.add = add;
