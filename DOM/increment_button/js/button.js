const btn = document.querySelector("#btn");

btn.addEventListener("click", function(e){
    let text = parseInt(btn.innerText);
    btn.innerText = text + 1;
})