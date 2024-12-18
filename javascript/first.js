// console.log("helllo aashu");
// age=22;

// const stu={
//    name:"aashutosh",
//    cgpa:8.6,
//    ispass:true,
//    srname:"patil"
// };

// const profile={
//     name:"aashutosh",
//     is_follo:true,
//     posts:190,
//     followers:500,
//     keywords:"teacher",
//     bio:"i am student at dbatu university"
// };

// let score=prompt("enter your score");

// if(score>=90 && score<=100) console.log("grade= A");
// if(score>=70 && score<=89) console.log("grade= B");

// if(score>=60 && socre<=69) console.log("grade= C");

// if(score>=50 && score<=59) console.log("grade= D");
// if(score>=0 && score<=49) console.log("grade= F");

// let name1="aashutosh_patil"
// console.log(name1)

// name1.length

// let nam=prompt("enter your full name");
// nam="@"+nam+nam.length;

// console.log(nam)

// let s=[20,15,36]
// console.log(typeof s);

// let s=[250,645,300,900,50];

// let dis=0,ind=0;

// for(let el=0;el<s.length;el++){
//     console.log(`value before discount ${s[el]}`);

//     dis=s[el]/10;
//     s[el]-=dis;
//     console.log(`value after discount ${s[el]}`);

// }

// console.log(s);

// let s= (str) => {
//   let co = 0;
//   for (let el of str) {
//     if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u")
//       co++;
//   }
//   return co;
// }

// let str = prompt("enter the string");

// console.log(s(str));

// let newb=document.createElement("button");
// newb.innerText="light mode";
// // console.log(newb);

// let div=document.querySelector("body");
// div.append(newb);

let userscore = 0;
let compscore = 0;
let us = document.getElementById("msg1");
let ks = document.querySelector(".userscore p:first-child");
let ps = document.querySelector(".compscore p:first-child");
const choices = document.querySelectorAll(".circle");

const gench = () => {
  const opt = ["rock", "paper", "scissor"];
  const bb = Math.floor(Math.random() * 3);
  return opt[bb];
};

const draw = () => {
  us.innerText = "DRAW";
  us.style.backgroundColor = "yellow";
};

const show = (userw,compch,userch) => {
  const choiceMessage = `You chose ${userch} and the computer chose ${compch}. `;

  if (userw) {
    us.innerText = choiceMessage + "YOU WIN";
    us.style.backgroundColor = "green";
    userscore++;
    ks.innerText = userscore;
  } else {
    us.innerText = choiceMessage + "COMP WIN";
    us.style.backgroundColor = "red";
    compscore++;
    ps.innerText = compscore;
  }
};

const play = (userch) => {
  const compch = gench();

  if (userch === compch) draw();
  else {
    let userw = true;

    if (userch === "rock") {
      userw = compch === "scissor" ? true : false;
    } else if (userch == "paper") {
      userw = compch === "rock" ? true : false;
    } else if (userch === "scissor") {
      userw = compch === "paper" ? true : false;
    }

    console.log(`user=${userch} && comp=${compch}`);

    show(userw,compch,userch);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userch = choice.getAttribute("id");
    play(userch);
  });
});
