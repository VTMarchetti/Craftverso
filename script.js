/*html
<button class="menu-button" onclick="toggleMenu()">Abrir Menú</button>

<!-- Menú desplegable -->
<div id="dropdownMenu" class="dropdown-menu">
        <a href="#">Opción 1</a>
        <a href="#">Opción 2</a>
        <a href="#">Opción 3</a>
 </div>

    <script src="script.js"></script>


css

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.menu-button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    margin: 20px;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-left: 20px;
}

.dropdown-menu a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-menu a:hover {
    background-color: #f1f1f1;
}


js


function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

document.addEventListener("click", function(event) {
    const menu = document.getElementById("dropdownMenu");
    const button = document.querySelector(".menu-button");

    if (event.target !== button && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});*/ 