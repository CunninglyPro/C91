function login() {
    var player1login = document.getElementById("player1_name").value;
    var player2login = document.getElementById("player2_name").value;

    localStorage.setItem("player1", player1login);
    localStorage.setItem("player2", player2login);

    window.location = "game_page.html";
}