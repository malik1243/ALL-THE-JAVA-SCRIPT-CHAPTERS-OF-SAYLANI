function toggleDetails() {
    var moreDetails = document.getElementById("moreDetails");
    var button = document.querySelector("#itemDetails button");
    
    if (moreDetails.style.display === "none") {
        moreDetails.style.display = "inline";
        button.textContent = "Read less";
    } else {
        moreDetails.style.display = "none"; 
        button.textContent = "Read more";
    }
}