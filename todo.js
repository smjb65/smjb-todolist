
// let li = document.getElementById("li")
// let p = document.getElementById("p")
// let list = document.getElementById("list")
// let input = document.getElementById("input")
// let submit = document.getElementById("button")
// let form = document.getElementById("form")

// submit.addEventListener("click" , submitfunc)

// function submitfunc() {
//     let ininput = input.value
//     if (ininput.length > 0){
//         const nodeli = document.createElement("li");
//         const nodei = document.createElement("i");
//         nodei.className = "gg-trash"
//         nodei.id = "iid"
//         nodei.addEventListener("click", nodifunc)
//         // let i = document.getElementById("iid")
//         const textnode = document.createTextNode(ininput);
//         nodeli.appendChild(textnode);
//         list.appendChild(nodeli);
//         nodeli.appendChild(nodei)
//         input.scrollIntoView();}
//         input.value = ""
//     }

//     function nodifunc () {
//         console.log(i.target.className) 
//     }

let li = document.getElementById("li");
let p = document.getElementById("p");
let list = document.getElementById("list");
let input = document.getElementById("input");
let submit = document.getElementById("button");
let form = document.getElementById("form");
let body = document.getElementById("body")

submit.addEventListener("click", submitfunc);
input.addEventListener("click", inputfunc)

function inputfunc(event) {
    console.log(event)
}


function submitfunc() {
  let ininput = input.value;
  if (ininput.length > 0) {
    const nodeli = document.createElement("li");
    const nodei = document.createElement("i");
    nodei.className = "gg-trash";
    nodei.addEventListener("click", nodifunc); // event listener added here
    nodei.id = "iid";
    const textnode = document.createTextNode(ininput);
    nodeli.appendChild(textnode);
    nodeli.appendChild(nodei); // appended the trash icon before appending the child to the list
    list.appendChild(nodeli);
    input.scrollIntoView(); // moved this statement inside the if block
    input.value = "";

    
  }
}

function nodifunc(event) { // event argument added here to reference the target element
  x = event.target.parentElement
  x.remove();
}



