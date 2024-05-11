function increase(){
    var countele=document.getElementById("counter");
    let currentvalue= parseInt(countele.innerText);
    countele.textContent = currentvalue + 1;
}

function decrease(){
    var countele=document.getElementById("counter");
    let currentvalue= parseInt(countele.innerText);
    countele.textContent = currentvalue - 1;
}