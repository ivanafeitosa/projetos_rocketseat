
//Countdown Timer
// Definindo a data para qual iremos fazer a contagem regressiva
var countDownDate = new Date("Jul 3, 2022 20:00:00").getTime(); //função retorna o valor numérico em milisegundos que corresponde a data especificada

// Atualiza a contagem regressiva a cada 1 segundo (1000 milisegundos)
var x = setInterval(function () {
  // modelo setInterval(function() {faz alguma coisa}, 1000);

  // Define a data de hoje
  var datenow = new Date().getTime(); //função retorna o valor numérico em milisegundos que corresponde a data de hoje

  // Calcular a distância entre a data de hoje e a data referência para a contagem regressiva
  var distance = countDownDate - datenow;

  // Cálculo dos tempos em dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); //math.floor faz arredondamento para o número inteiro inferior ao valor referenciado
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibir o resultado no elemento com o id "countdown"
  document.getElementById("countdown").innerHTML = days + " : " + hours + " : "
    + minutes + " : " + seconds;

  // Se a contagem regressiva chegar ao final, escrever uma mensagem na tela
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
