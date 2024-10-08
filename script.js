// Toggle button to hide or show the sidebar
document.getElementById("toggleBtn").addEventListener("click", function() {
    const sideBar = document.getElementById("sideBar");
    const mainContent = document.getElementById("mainContent");

    // Toggle the "collapsed" class on the sidebar
    if (sideBar.classList.contains("collapsed")) {
        sideBar.classList.remove("collapsed");
        mainContent.style.marginLeft = "270px"; // Restore margin
    } else {
        sideBar.classList.add("collapsed");
        mainContent.style.marginLeft = "80px"; // Reduce margin
    }
});
