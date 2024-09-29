const firstInput = document.getElementById("firstemail");
const secondInput = document.getElementById("secondemail");

const firstButton = document.getElementById("firstbutton");
const secondButton = document.getElementById("secondbutton");

const firstError = document.querySelector(".emailf");
const secondError = document.querySelector(".emails");
const regex = /^[\w]+@[\w]+\.[\w]+$/g;

firstButton.addEventListener("click", function(event){
    event.preventDefault();
    if(firstInput.value.search(regex) == -1){
        firstError.style.display = "block";
        firstInput.style.border = "2px solid red"
    }
    else{
        firstError.style.display = "none";
        firstInput.style.border = "2px solid black"
    }
})

secondButton.addEventListener("click", function(event){
    event.preventDefault();
    if(secondInput.value.search(regex) == -1){
        secondError.style.display = "block";
    }
    else{
        secondError.style.display = "none";
    }
})