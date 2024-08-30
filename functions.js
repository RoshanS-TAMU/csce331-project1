// Add event listeners to the buttons for navigating to their respective pages
document.getElementById("button1").addEventListener("click", function() {
    window.location.href = "home.html";
});
document.getElementById("button2").addEventListener("click", function() {
    window.location.href = "resume.html";
});

document.getElementById("button3").addEventListener("click", function() {
    window.location.href = "quals.html";
});

document.getElementById("button4").addEventListener("click", function() {
    window.location.href = "service.html";
});

document.getElementById("button5").addEventListener("click", function() {
    window.location.href = "ai.html";
});


function toggleStyle() {
    const currentStyleLink = document.getElementById("currentStyle");

    if (currentStyleLink.getAttribute("href") === "styles.css") {
        currentStyleLink.setAttribute("href", "styles2.css");

    } else {
        currentStyleLink.setAttribute("href", "styles.css");
       
    }
}



document.querySelector(".options-button").addEventListener("mouseenter", function() {
    document.querySelector("nav").style.display = "block";
});

document.querySelector("nav").addEventListener("mouseleave", function() {
    this.style.display = "none";
});

