const charset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//init elements
const generateBtn = document.getElementById("generate-btn");
console.log(generateBtn);
const passwordBtns = document.querySelectorAll(".btn-password");
addEventListeners();
render();


function clearPasswordText(){
    for(const btn of passwordBtns){
        btn.textContent = "";
    }
}

function addEventListeners(){
    generateBtn.addEventListener("click",generatePasswords);
    for (const btn of passwordBtns){
        btn.addEventListener("click", copyPassword);
    }

}

function render(){
    clearPasswordText();
}

function getChar(){
    return charset[Math.floor(Math.random() * charset.length)];

}

function generatePasswords(){
    for(const btn of passwordBtns){
        populatePassword(createPassword(), btn);
    }
}

function createPassword(passLen=10, useSpecial=true){
    let password = "";
    for(let i = 0; i < passLen; i++){
        password+= getChar();
    }
    console.log(password);
    return password;
}

function populatePassword(password,passBtn){
    passBtn.textContent = password;
}

function copyPassword(ev){
    const btn = ev.currentTarget;
    navigator.clipboard.writeText(btn.textContent);
}
