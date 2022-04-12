function myFunction() {
    window.alert("Welcome ! This Is A js Test !")
}
function submitFunction() {
    var checkBox = document.getElementById("Checkbox-submit");
    var text = document.getElementById("Submit-button");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
myFunction()
submitFunction()