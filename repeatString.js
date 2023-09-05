function repeat(str, num) {
    var output ="";
    if(num>0){
    for (var i = 0; i < num; i++) {
        output =output + str;
    

}
console.log(output);
}
else{
    console.log("Error");
}
}

repeat("Shivi",4)
repeat("ping",1)
repeat("ping",0)
repeat("hey",-2)




