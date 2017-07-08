// function learn(something){
//   console.log(something);
//
// }
// var c = 0;
// function print(){
//   console.log(c);
// }
// function plus(callback){
//   setTimeout(function(){
//     c += 1;
// callback();
//   },1000)
// }
//
// plus(print);
function we(callback,something) {
  something +='is cool';
  callback(something);
}
we(function(){
  console.log(something);
} ,'nodejs')
