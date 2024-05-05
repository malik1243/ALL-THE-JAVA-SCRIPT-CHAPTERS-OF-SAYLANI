
function cointoss(){
    let Random=Math.random() * 3;

    if(Random < 2){
        return 'Random dice value : Heads';
    } else{
        return 'Random dice value : Talis';
    }

}

document.write(cointoss());