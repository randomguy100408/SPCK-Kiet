const checkLogin = localStorage.getItem("checkLogin") || false;
function checkGetStarted() {
    if (checkLogin) {
        window.location.href = "player-search.html";
    } else {
        alert("Bạn chưa đăng nhập!");
        window.location.href = "login.html";
    }
}