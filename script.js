const strong_btn = document.getElementById("strong");
const medium_btn = document.getElementById("medium");
const weak_btn = document.getElementById("weak");
const content = document.getElementById("content");
const generate_now_btn = document.getElementById("generate-now");
let new_password = "";
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["!", "@", "#", "$", "%", "&", "*", "?"];

generate_now_btn.addEventListener("click", () => {
  content.innerHTML = `<input class="form-control" id="text" type="text" placeholder="Generate a new Password" readonly>
    <div class="btn btn-success m-3" id="generate-strong">
        Generate Password
    </div>
    <div class="btn btn-secondary m-3" id="copy-btn">
        Copy Password <i class="fa-solid fa-clipboard"></i>
    </div>`;
  let generate_strong = document.getElementById("generate-strong");
  let pass_text = document.getElementById("text");
  generate_strong.addEventListener("click", () => {
    new_password = generateStrongPassWord();
    pass_text.setAttribute('value', new_password);
    // console.log(new_password);
  });
  let copy_btn = document.getElementById('copy-btn');
  copy_btn.addEventListener('click', ()=>{
    if(new_password !== ""){
        copy_btn.innerHTML = 'Copied! <i class="fa-solid fa-check"></i>'
        navigator.clipboard.writeText(new_password);
        setTimeout(() => {
            copy_btn.innerHTML = 'Copy Password <i class="fa-solid fa-clipboard"></i>'
        }, 1000);
    }
  });
});
strong_btn.addEventListener("click", () => {
  content.innerHTML = `<input class="form-control" id="text" type="text" placeholder="Generate a new Strong Password" readonly>
    <div class="btn btn-success m-3" id="generate-strong">
        Generate Password
    </div>
    <div class="btn btn-secondary m-3" id="copy-btn">
        Copy Password <i class="fa-solid fa-clipboard"></i>
    </div>`;
  let generate_strong = document.getElementById("generate-strong");
  let pass_text = document.getElementById("text");
  generate_strong.addEventListener("click", () => {
    new_password = generateStrongPassWord();
    pass_text.setAttribute('value', new_password);
    // console.log(new_password);
  });
  let copy_btn = document.getElementById('copy-btn');
  copy_btn.addEventListener('click', ()=>{
    if(new_password !== ""){
        copy_btn.innerHTML = 'Copied! <i class="fa-solid fa-check"></i>'
        navigator.clipboard.writeText(new_password);
        setTimeout(() => {
            copy_btn.innerHTML = 'Copy Password <i class="fa-solid fa-clipboard"></i>'
        }, 1000);
    }
  });
});
medium_btn.addEventListener("click", () => {
  content.innerHTML = `<input class="form-control" id="text" type="text" placeholder="Generate a new Medium Password" readonly>
    <div class="btn btn-warning m-3" id="generate-medium">
        Generate Password
        </div>
    <div class="btn btn-secondary m-3" id="copy-btn">
        Copy Password <i class="fa-solid fa-clipboard"></i>
        </div>`;
  let generate_medium = document.getElementById("generate-medium");
  let pass_text = document.getElementById("text");
  generate_medium.addEventListener("click", () => {
    new_password = generateMediumPassWord();
    pass_text.setAttribute('value', new_password);
    // console.log(new_password);
  });
  let copy_btn = document.getElementById('copy-btn');
  copy_btn.addEventListener('click', ()=>{
    if(new_password !== ""){
        copy_btn.innerHTML = 'Copied! <i class="fa-solid fa-check"></i>'
        navigator.clipboard.writeText(new_password);
        setTimeout(() => {
            copy_btn.innerHTML = 'Copy Password <i class="fa-solid fa-clipboard"></i>'
        }, 1000);
    }
  });
});
weak_btn.addEventListener("click", () => {
  content.innerHTML = `<input class="form-control" id="text" type="text" placeholder="Generate a new Weak Password" readonly>
    <div class="btn btn-danger m-3" id="generate-weak">
    Generate Password
    </div>
    <div class="btn btn-secondary m-3" id="copy-btn">
    Copy Password <i class="fa-solid fa-clipboard"></i>
    </div>`;
  let generate_weak = document.getElementById("generate-weak");
  let pass_text = document.getElementById("text");
  generate_weak.addEventListener("click", () => {
    new_password = generateWeakPassWord();
    pass_text.setAttribute('value', new_password);
    // console.log(new_password);
  });
  let copy_btn = document.getElementById('copy-btn');
  copy_btn.addEventListener('click', ()=>{
    if(new_password !== ""){
        copy_btn.innerHTML = 'Copied! <i class="fa-solid fa-check"></i>'
        navigator.clipboard.writeText(new_password);
        setTimeout(() => {
            copy_btn.innerHTML = 'Copy Password <i class="fa-solid fa-clipboard"></i>'
        }, 1000);
    }
  });
});

function generateStrongPassWord() {
  let str = "";
  for (let i = 0; i < 10; i++) {
    let arrChoice = Math.floor(Math.random() * 4);
    let charChoice;
    switch (arrChoice) {
      case 0:
        charChoice = Math.floor(Math.random() * 26);
        str += upperCase[charChoice];
        break;
      case 1:
        charChoice = Math.floor(Math.random() * 26);
        str += lowerCase[charChoice];
        break;
      case 2:
        charChoice = Math.floor(Math.random() * 10);
        str += numbers[charChoice];
        break;
      case 3:
        charChoice = Math.floor(Math.random() * 8);
        str += symbols[charChoice];
        break;
    }
  }
  //   console.log(str);
  return str;
}
function generateMediumPassWord() {
  let str = "";
  for (let i = 0; i < 7; i++) {
    let arrChoice = Math.floor(Math.random() * 3);
    let charChoice;
    switch (arrChoice) {
      case 0:
        charChoice = Math.floor(Math.random() * 26);
        str += upperCase[charChoice];
        break;
      case 1:
        charChoice = Math.floor(Math.random() * 26);
        str += lowerCase[charChoice];
        break;
      case 2:
        charChoice = Math.floor(Math.random() * 10);
        str += numbers[charChoice];
        break;
    }
  }
  //   console.log(str);
  return str;
}
function generateWeakPassWord() {
  let str = "";
  for (let i = 0; i < 5; i++) {
    let arrChoice = Math.floor(Math.random() * 2);
    let charChoice;
    switch (arrChoice) {
      case 0:
        charChoice = Math.floor(Math.random() * 26);
        str += upperCase[charChoice];
        break;
      case 1:
        charChoice = Math.floor(Math.random() * 26);
        str += lowerCase[charChoice];
        break;
    }
  }
  //   console.log(str);
  return str;
}