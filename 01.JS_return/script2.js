// Tym razem zrobimy małą interakcję z użytkownikiem
function square(number) {
  return number * number;
}

var number = window.prompt("Podaj liczbę, którą chcesz podnieść do kwardatu: ")
var message = "Wynik to: " + square(number);
alert(message);
// Zmiennej number można użyć drugi raz
number = window.prompt("Podaj liczbę, którą chcesz podnieść do kwardatu: ")
// Zmienna message nie jest konieczna, można wiadomość skleić od razu w wywołaniu funkcji alert
alert("Wynik to: " + square(number));
