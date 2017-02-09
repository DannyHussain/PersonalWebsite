/*----Method to create a responsive menu icon for mobile version website----*/
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
