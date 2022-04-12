function myFunction() {
    window.alert("Welcome ! This Is A js Test !")
}
function agreeEua() {
    // checks if the user has agreed to the terms and conditions ; if so will display the button for submition
    let check = true
    if (check) {
        Document.getElementById("Eua").style.display = "block";
        check = false;
    };
    if (!check) {
        Document.getElementById("Eua").style.display = "none";
        check = true;
    };
} 
myFunction()
