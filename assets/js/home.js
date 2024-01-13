 HEAD
document.getElementById("sign-in").addEventListener("click", function() {
    window.location.href = "login.html"
})
const checkLogin = localStorage.getItem("checkLogin") || false;
function checkGetStarted() {
    if (checkLogin) {
        window.location.href = "player-search.html";
    } else {
        alert("Bạn chưa đăng nhập!");
        window.location.href = "login.html";
    }
}
// a7e17aef9f24313d38c158976a16c3a2ce19de1f
