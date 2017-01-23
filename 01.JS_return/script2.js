// Tym razem zrobimy małą interakcję z użytkownikiem
function sum(number) {
  return number * number;
}

var number = prompt("Podaj parametry, które chcesz do siebie dodać: ")
var message = "Wynik to: " + sum(number);
alert(message);
// Zmiennej number można użyć drugi raz
numbers = prompt("Podaj parametry, które chcesz do siebie dodać: ")
// Zmienna message nie jest konieczna, można wiadomość skleić od razu w wywołaniu funkcji alert
alert("Wynik to: " + sum(numbers));


// Przy mnożeniu możliwe jest tylko podawanie parametrów liczbowych. Przy dodawaniu możliwe jest łączenie ze sobą stringów i liczb
