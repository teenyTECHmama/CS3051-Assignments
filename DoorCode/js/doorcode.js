let code = "";
let key = "143";

function press(val) {
    code += `${val}`;
    for (let i = 0; i < code.length; i++) {
        if (code[i] != key[i]) {
            code = `${val}`;
            break;
        }
    }
    door(code == key);
}

function door(open) {
    let d = document.querySelector("#door");
    let btns = document.querySelectorAll("button");
    if(open) {
        d.src = "./images/open.png"
        for(let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor= '#7F7';
        }
        setTimeout(()=>{door(false)}, 4 * 1000);
    } else {
        d.src = "./images/closed.png";
        for(let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = '';
        }
    }
    
}