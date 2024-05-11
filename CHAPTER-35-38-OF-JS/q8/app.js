function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    const reversedStr = cleanStr.split('').reverse().join('');
   
    return cleanStr === reversedStr;
}


const string1 = "A man, a plan, a canal, Panama";
document.write(isPalindrome(string1)); 

const string2 = "racecar";
document.write(isPalindrome(string2));

const string3 = "hello";
document.write(isPalindrome(string3));
