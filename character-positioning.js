function countLetters(string) {

   var uniqueCharacters = {} ;
   var input = string.split(" ").join("") ;

   for (var i = 0; i < input.length ; i ++ ) {
     if (input[i] in uniqueCharacters) {
       uniqueCharacters[input[i]].push(i) ;
     } else
     uniqueCharacters[input[i]] = [i];
   }
   return uniqueCharacters ;
  }


  console.log(countLetters("lighthouse in the house"));

