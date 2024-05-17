let input = $("#input-box");
let buttons = document.querySelectorAll('button');
let string = "";
let btnArray = Array.from(buttons)

btnArray.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        if (e.target.innerHTML === "="){
            string = eval(string);
            input.val(string)
        }
        else if (e.target.innerHTML === "C"){
            string = "";
            input.val(string)
        }
        else if (e.target.innerHTML ==='Del'){
            string = string.substring(0,string.length-1);
            input.val(string)
        }
        else if (e.target.innerHTML === '%'){
            string = (parseInt(string)/100)
            input.val(string)
        }
        else {
            string += e.target.innerHTML;
            input.val(string)
        }
    })
})