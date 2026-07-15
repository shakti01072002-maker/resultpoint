// ==============================
// ResultPoint V2 JavaScript
// ==============================

// Search Button
const searchBtn = document.querySelector(".search-box button");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {

        const input = document.querySelector(".search-box input");
        const keyword = input.value.trim().toLowerCase();

        if (keyword === "") {
            alert("Please enter something to search.");
            return;
        }

        alert("Searching for: " + keyword);
    });
}

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0b5ed7";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==============================
// Welcome Message
// ==============================

window.onload = function () {

    console.log("Welcome to ResultPoint");

};
