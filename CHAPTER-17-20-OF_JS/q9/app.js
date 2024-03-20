
function findLargestNumber(arr) {
    if (arr.length === 0) { 
        return null;
    }

    let largest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}


const A = [24, 53, 78, 91, 12];


const largestNumber = findLargestNumber(A);
document.write("The largest number in the array is:", largestNumber);
