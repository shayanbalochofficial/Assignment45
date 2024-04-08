"use strict";
//* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
let magicianNames = ['David Smith', 'John Smith', 'The Weekend'];
show_magicians(magicianNames);
