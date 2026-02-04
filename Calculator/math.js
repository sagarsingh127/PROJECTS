
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
