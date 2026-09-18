class Password {
     static #CHARSET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];
    static OBFUSCATOR = "●";
    #password = "";
    obfuscated = "";
    btn = null;
    showHint = null;
    
    constructor(btn, showHintCallback){
        btn.textContent = "";
         btn.addEventListener("click", this.#copyPassword);
         btn.addEventListener("mouseenter", this.#showPassword);
         btn.addEventListener("mouseleave", this.#hidePassword);
         this.btn = btn;
         this.showHint =showHintCallback;
         
    }
    
    
    #getChar(){
        return Password.#CHARSET[Math.floor(Math.random() * Password.#CHARSET.length)];

    }
    
    createPassword(passLen=10, useSpecial=true){
        let password = "";
        for(let i = 0; i < passLen; i++){
            password+= this.#getChar();
        }
        this.#password = password;
        this.obfuscated = "";
        for(let i = 0; i < password.length; i++)
            this.obfuscated += Password.OBFUSCATOR;
        this.btn.textContent = this.obfuscated;
        this.btn.classList.add("populated");
    }
    
    clearPassword(){
        this.btn.textContent = "";
    }
    
    #copyPassword = () => {
        navigator.clipboard.writeText(this.#password).then(
            () => flashHint("Password copied to clipboard"),
             () => flashHint("Failed to copy to clipboard"));
    }
    
    #showPassword = () => {
        this.btn.textContent = this.#password;
    }
    
    #hidePassword = () => {
        this.btn.textContent = this.obfuscated;

    }
}

function flashHint(message){
        hint.el.textContent = message;
        clearTimeout(hint.timer);
        hint.timer = setTimeout(() => hint.el.textContent = hint.HINT_TEXT, 1000)
}

function generatePasswords() {
    for (const password of passwords){
        password.createPassword(usePasswordLen(),useSpecialCharToggle());
    }
}

function useSpecialCharToggle(){
    return specialCharSwitch.checked;
}
function usePasswordLen(){
    return Number(passwordLenSlider.value);
}

function render(){
    //init elements
    hint.el.textContent = hint.HINT_TEXT;
    const generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", generatePasswords);
    const passwordBtns = document.querySelectorAll(".btn-password");
    for(const btn of passwordBtns){
        passwords.push(new Password(btn, flashHint));
    }
}

const passwords = [];
const specialCharSwitch = /** @type {HTMLInputElement} */ (document.getElementById("special-char-switch"));
const passwordLenSlider = /** @type {HTMLInputElement} */ (document.getElementById("password-len"));
const passwordLen = document.getElementById("len-val");

passwordLenSlider.addEventListener("input",()=>{
     passwordLen.textContent = passwordLenSlider.value;
})

const hint = {
    HINT_TEXT : "Generate passwords, then hover to reveal and click to copy.",
    el: document.querySelector(".hint"),
    timer: null,
}


render();


