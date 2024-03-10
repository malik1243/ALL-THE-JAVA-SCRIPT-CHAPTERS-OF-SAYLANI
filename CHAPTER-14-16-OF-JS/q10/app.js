
let studentScores = [285, 392, 878, 595, 488];

document.write("Original Student Scores:", studentScores);

studentScores.sort(function(a, b) {
    return a - b;
});

document.write("Sorted Student Scores (Ascending Order):", studentScores);
