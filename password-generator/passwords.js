class Password {
     static #CHARSET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];
    static OBFUSCATOR = "●";
    #password = "";
    obfuscated = "";
    btn = null;
    
    constructor(btn){
        btn.textContent = "";
         btn.addEventListener("click", this.copyPassword);
         //btn.addEventListener("hover", showPassword);
         this.btn = btn;
         
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
    }
    
    clearPassword(){
        this.btn.textContent = "";
    }
    
    copyPassword = () => {
        navigator.clipboard.writeText(this.#password);
    }
    
}

const passwords = [];

function generatePasswords(passwords) {
    for (const password of passwords){
        password.createPassword();
    }
}

function render(){
    //init elements
    const generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", generatePasswords);
    const passwordBtns = document.querySelectorAll(".btn-password");
    const passwords = [];
    for(const btn of passwordBtns){
        passwords.push(new Password(btn));
    }
}
