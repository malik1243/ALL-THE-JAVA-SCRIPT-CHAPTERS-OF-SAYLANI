function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    const capitalizedStr = words.join(' ');
    
    return capitalizedStr;
}

const inputString = 'the quick brown fox';
document.write(capitalizeFirstLetterOfEachWord(inputString)); // Output: 'The Quick Brown Fox'
