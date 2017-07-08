function pet(words){
  this.words = words;
  this.speak = function(words){
    console.log(words);
  }
}
 function dog(words){
   pet.call(this,words)
 }
 var dog = new dog('ccc');
 dog.speak();
