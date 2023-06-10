const toDo = document.getElementsByClassName("to-do")[0];
const inputContainer = document.getElementsByClassName("input-container")[0];
const inputText = document.getElementsByClassName("input-text")[0];
const userInput = document.getElementById("user-input");


function createCard(){

    const cardDiv = document.createElement('div');
    cardDiv.className="card-div";
    inputText.appendChild(cardDiv);

    const parentDiv = document.createElement("div");
    parentDiv.className="new-card";
    cardDiv.appendChild(parentDiv);
    
    const features = document.createElement("div");
    features.className = "features";
    cardDiv.appendChild(features);
    
    const checkMark = document.createElement("i");
    checkMark.className = "check-fa-sharp fa-solid fa-square-check";
    features.appendChild(checkMark);
    
    const removeCard = document.createElement("i");
    removeCard.className = "fa-sharp fa-solid fa-trash";
    features.appendChild(removeCard);



    let textNode = document.createTextNode(userInput.value);
    parentDiv.appendChild(textNode);
    userInput.value='';

    removeCard.addEventListener("click", function(){
        cardDiv.remove();
    });
    var counter=0;
    checkMark.addEventListener('click',function(){   
        
       if (counter%2 == 0){
        this.style.color = 'limegreen';}
        else
        {
            this.style.color = '#a9a9a9';}   
        console.log(counter);
        counter+=1;
    
    })


    // checkMark.addEventListener('click',function(){
    //    if (checkMark.style.color === '#a9a9a9'){
    //     checkMark.style.color = 'limegreen';}
    //     else
    //     {
    //         checkMark.style.color === '#a9a9a9';

    //     }
       
    // })

    
};





userInput.addEventListener("keydown", function(event){
    if (event.key == 'Enter')
    {
        createCard();
    }
});



{/* <div class="container">
<div class="to-do">
    <h1>
        <i class="fa-solid fa-clipboard-check"></i>
        To-do List
    </h1>
    <div class="input-container">
        <input id="user-input" type="text">
        <button onclick="create-card()" id="submit-button">Submit</button>
    </div>
    <div class="input-text"></div>

</div>
</div> */}