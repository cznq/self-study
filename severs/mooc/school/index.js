var klass = require('./class');


exports.add = function(klasses){
  klasses.forEach(function(item,index){
    var _klass =item;
    var theacherName = item.theacherName;
    var student = item.student;
      klass.add(theacherName,student);
  })
}
