document.addEventListener("DOMContentLoaded", () => {
    fetch("components/sidebar.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("sidebar").innerHTML = html;
        });

    fetch("components/dashboard.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        });
});
