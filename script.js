const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    const html = document.documentElement;

    const currentTheme = html.getAttribute("data-theme");

    if (currentTheme === "dark") {

        html.setAttribute("data-theme", "light");

        themeToggle.innerHTML = "🌙 Tema Escuro";

    } else {

        html.setAttribute("data-theme", "dark");

        themeToggle.innerHTML = "☀️ Tema Claro";

    }

});