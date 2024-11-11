const input = document.getElementById("inputId");
var newText = document.getElementsByClassName("newText")[0];

function reverseString(str){
    return str.split("").reverse().join("");
}
function check(){
    let value = input.value;
    let reverse = reverseString(value);
    if(value == reverse){
        document.querySelector("body").style.backgroundColor = "green";
        newText.innerHTML = "This is Palindrome!";
    }else{
        document.querySelector("body").style.backgroundColor = "red";
        newText.innerHTML = "This is NOT Palindrome!";
    }
    input.value = ""
}