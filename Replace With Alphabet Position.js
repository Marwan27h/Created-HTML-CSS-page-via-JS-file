/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

STRINGSFUNDAMENTALS
Ad
How to Begin a New Career as a Software Engineer
Completely lost on where to begin? We've got you covered.
*/

function alphabetPosition(text) {
   return text.toLowerCase().split("").map(a => a.charCodeAt(0) - 96).filter(a => a < 27 ).join(' ');
}
console.log(alphabetPosition("hallo"))
console.log(alphabetPosition("marwan alhatab "))


   