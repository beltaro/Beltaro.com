function myFunction() {
    window.alert("Welcome ! This Is A js Test !")
}
function submitFunction() {
    var checkBox = document.getElementById("Checkbox-submit");
    var Submit-button = document.getElementById("Submit-button");
    if (checkBox.checked == true){
        Submit-button.style.display = "block";
    } else {
        Submit-button.style.display = "none";
    }
}
myFunction()
submitFunction()