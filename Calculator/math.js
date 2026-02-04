// Calculator 

// function calc() {
//     let a = Number(document.querySelector("#one").value);
//     let b = Number(document.querySelector("#two").value);
//     let select = document.querySelector("#select");
//     console.log(select.value);


//     if(select.value == "plus") {
//         document.querySelector("#three").value = a + b;
//     }

//     else if(select.value == "minus") {
//         document.querySelector("#three").value = a - b;
//     }

//     else if(select.value == "mult") {
//         document.querySelector("#three").value = a * b;
//     }

// }

let enterinput = (e) => {
    document.querySelector("#input").value += e.target.innerHTML;
}

let Calculator = () => {
    let cal = document.querySelector("#input").value;
    document.querySelector("#input").value = eval(cal);
}

let rem = () => {
   document.querySelector("#input").value = "";
}

let del = () => {
    let d = document.querySelector("#input").value;
    document.querySelector("#input").value = d.pop();
}