function openPlayerConfig(event) {
   editedPlayer = +event.target.dataset.playerid; //Contains data attributes stored in an element
   // "+"----> Parses string into a number
    
    playerConfigOverlay.style.display = "block";
    backdropElement.style.display="block";
    
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display="none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent="";
    formElement.firstElementChild.lastElementChild.value="";
}

function savePlayerConfig(event) {
    //Prevent browser default from automatically sending a request to a server----> IT DOESN'T EXIST, BRO!!!
    event.preventDefault();
    console.log(event);

    //Extract data from text box
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get("username").trim();//"  Fiso   "=> "Fiso"
    console.log(enteredPlayername);

    //Validate the input
    if(!enteredPlayername){ //Truthy or Falsy!! Remember that !!
        event.target.firstElementChild.classList.add("error");
       errorsOutputElement.textContent="Please enter a valid name";
       return;
    }

const updatedPlayerElement = document.getElementById("player-"+editedPlayer+"-data");
updatedPlayerElement.children[1].textContent=enteredPlayername;

players[editedPlayer - 1].name= enteredPlayername;

closePlayerConfig();
/*if(editedPlayer==1){
    players[0].name=enteredPlayername;
}
else{
    players[1].name=enteredPlayername;
}*/
}