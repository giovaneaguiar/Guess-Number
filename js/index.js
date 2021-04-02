const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        //Math random gera um valor aleatório de acordo com o máximo permitido;
        //No nosso caso, a variável max possui 10.
        //Math.round arrendonda os valores, ou seja, não vem valor decimal (quebrado).
        return Math.round(Math.random() * this.max);
    }

};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value

};

function handleSubmit(e) {
      e.preventDefault();
      //Comando para não recarregar a página quando enviar o formulário
      let kick = document.getElementById('kick').value;
      if(!kick){
      //Se eu não tiver um chute, não deixar o usuário continuar e manda um alerta.
      alert('Digite algum valor!')
      return;
      };

      updateAttempt(attempt, ++Guess.attemptsNumber);
      
      if(numberDrawn == kick) {
          //Se o número que a máquina pensou for igual ao chute do usuário
          playAgain();
          status.innerHTML = 'Parabéns, você acertou!';
          result.style.transition = '0.4s';
          result.style.backgroundColor = '#3FBF3F';
          result.style.color = '#fff';
          status.style.color = '#fff';
          clear();
      } else if(numberDrawn > kick){
      //Se o número que a máquina pensou for maior que o chute do usuário
      status.innerHTML = 'O número é maior!';
      status.style.color =  '#FF0000';
      clear();
      } else if (numberDrawn < kick){
        status.innerHTML = 'O número é menor!';
        status.style.color =  '#FF0000';
        clear();
      }
};

// Função para mostrar o botão de jogar novamente.
function playAgain() {
    document.getElementById('btn-Restart').style.display = 'flex';
};

// Função para recarregar a página.
function restart(){
 document.location.reload(true);
};

//Limpar o campo quando chutar o número
function clear() {
 document.getElementById('kick').value = '';
};