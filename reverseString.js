//-------------reveseString----------------------//

function reverseString(str){
    var string = "";
    for(var i = str.length - 1; i >=0; i--){
        string += str[i];
    }
    console.log(string);
}
reverseString("shivi yadav");
reverseString("yadav");
reverseString("Shacin yadav");
reverseString("Abhi yadav");
reverseString("Shivani yadav");