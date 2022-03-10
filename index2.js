let sitesInput = [];  

const inputEl = document.getElementById("input-el");
const saveInputButton = document.getElementById("save-input-btn");
const ulEl = document.getElementById("ul-el"); 
const delEl = document.getElementById("delete-btn");
const tabEl = document.getElementById("tab-btn");

tabEl.addEventListener("click", function() {
    // using chrome API and retriving the tabs object and what is inside of the object query to pass in 2 arguments to the paramenters stablished by the query function
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        sitesInput.push(tabs[0].url); 
        localStorage.setItem("mySitesInput", JSON.stringify(sitesInput));
        render(sitesInput);
     });  
}); 

// ["lead1", "lead2"] or null

// Here I get the KEY from the object localStorage 
// then, turn it into an Array again by using JSON.parse
// I assign it to the leadsFromLocalStorage variable
// I also used a conditional to make sure the variable data is not a falsy value (null)
// assigned the values from the leadsFromLocalStorage variable to the array sitesInput to store the array that I obtained from the getItem function
// lastly I called my funciton render(sitesInput) to show the data in an Unorder List
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("mySitesInput"));   
//1. Check if the LeadsFromLocalStorage is truthy
// It is automatically recognized if it is truthy or falsy 
if (leadsFromLocalStorage){
    sitesInput = leadsFromLocalStorage; 
    render(sitesInput);
}

//refactoring. I added a parameter to enter any array on the code.
function render(passAnArray){
    let listItems = "";
    for(let i = 0; i<passAnArray.length; i++){ 
        // listItems += "<li><a target='_black' " + "href="  + sitesInput[i] + ">" +  sitesInput[i] + "</a></li>";
        //template strings
        listItems += 
        `<li>
            <a target='_black' href= ${passAnArray[i]}>
            ${passAnArray[i]} 
            </a>
        </li>`;
    }   
    // it is out from the loop to make sure it is not printed while the loop is running, by doing this we are saving work to the DOM.
    ulEl.innerHTML = listItems; 
}

delEl.addEventListener("dblclick", function() {  
    localStorage.clear(); 
    sitesInput = [];
    render(sitesInput);
});



saveInputButton.addEventListener("click", function(){
    sitesInput.push(inputEl.value);  
    inputEl.value = "";

    // save the sitesInput array to localStorage
    localStorage.setItem("mySitesInput", JSON.stringify(sitesInput)); 
    render(sitesInput);

});  

// *************************************** last challange **************************************
 /*
const uorderEl = document.getElementById("ul-element"); 
let myImages = ["img1.png", "img3.png", "dollar-sign.png"] 
let myClass= "team-img"

function readImages(array){ 
    listItems = ""
    for (let i = 0; i<array.length; i++){ 
        listItems += `  <li>
                        <img class=${myClass} src=${array[i]}>
                        </li>`
    }
    
    uorderEl.innerHTML = listItems
     
}
let showImages = readImages(myImages)
console.log(showImages)

*/