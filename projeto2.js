const prompt = require("prompt-sync")();

// declarando um objeto computador, e as possiveis jogadas

const computador = { 1: "Pedra", 2: "Papel", 3: "Tesoura" };
let rodadas;
let jogadaComp;
let win = 0;
let lose = 0;
let draw = 0;
let oldWin = 0
let oldLose = 0
let oldDraw = 0
let contTotal = 0;
let contFinal=0
let movimento;
let escolha;
let repete = false

// Nesse longo do-while fica o loop do jogo
do {
  //Esse primeiro laço vai pedir uma quantidade de rodadas e fazer a verificação se é um número
  do {
    rodadas = +prompt("Quantas rodadas iremos jogar? ");

    
    if (isNaN(rodadas)) {
      console.clear();
      console.log("A quantidade de jogadas deve ser um valor numérico. ");
    }
  } while (isNaN(rodadas));

  //Esse if, serve para testar se o jogador digitou o número igual ou menor que 0
  //Se ele digitou, o programa finaliza com uma mensagem
  if (rodadas <=0) {
    console.log("Você decidiu não jogar. FIM.");
    break;
  }


  // Essa função serve para comparar as jogadas do computador e do jogador
  function comparaJogadas() {
    if (movimento == 1 && jogadaComp == 2) {
      console.log("Você jogou Pedra e computador jogou papel. ");
      console.log("Você Perdeu!");
      lose++;
    } else if (movimento == 1 && jogadaComp == 3) {
      console.log("Você jogou Pedra e computador jogou Tesoura. ");
      console.log("Você Venceu!");
      win++;
    } else if (movimento == 2 && jogadaComp == 1) {
      console.log("Você jogou Papel e computador jogou Pedra. ");
      console.log("Você Venceu!");
      win++;
    } else if (movimento == 2 && jogadaComp == 3) {
      console.log("Você jogou Papel e computador jogou Tesoura. ");
      console.log("Você Perdeu!");
      lose++;
    } else {
      if (movimento == 1 && jogadaComp == 1) {
        console.log("Empate. Ambos jogaram Pedra");
        draw++;
      } else if (movimento == 2 && jogadaComp == 2) {
        console.log("Empate. Ambos jogaram Papel");
        draw++;
      } else {
        console.log("Empate. Ambos jogaram Tesoura.");
        draw++;
      }
    }
  }

  console.log("\tBem vindo ao jogo do Jo ken Pô!");
  console.log("\tDigite 1 para Pedra");
  console.log("\tDigite 2 para Papel");
  console.log("\tDigite 3 para Tesoura");

  //Esse laço vai inicializar a jogada randomica do computador e do jogador
  // Ele também faz a validação da jogada do jogador
  // E depois chama a função que faz a comparação das jogadas
  for (let i = 1; i <= rodadas; i++) {
    jogadaComp = Math.floor(Math.random(computador) * 3 + 1);
    do {
      movimento = +prompt("Qual a sua jogada? ");
      if (movimento != 1 && movimento != 2 && movimento != 3) {
        console.log("Não é uma jogada válida.");
        //console.clear()
      }
    } while (movimento != 1 && movimento != 2 && movimento != 3);

    comparaJogadas();
    contTotal++;
  }
// Aqui ele dá uma pontuação parcial ou final (dependendo se o jogador desejar continuar ou não)
  console.log(
    `Foram jogadas ${contTotal} rodadas. Você venceu ${win}, perdeu ${lose} e empatou ${draw}.`
  );
  if (win == lose) {
    console.log("Você e o computador empataram. Não houve campeão.");
  } else if (win > lose) {
    console.log("Você é o campeão.");
  } else {
    console.log("Infelizmente você perdeu. O computador é o campeão.");
  }

// Bem aqui ele faz a validação do primeiro loop do jogo, para verificar se o jogador deseja continuar
console.log()
  escolha = prompt(
    
    "Digite 'S' para continuar ou qualquer outra tecla para encerrrar o programa: "
  ).toUpperCase();
  if (escolha== 'S'){
    console.clear()
    oldDraw = oldDraw + draw
    oldLose =oldLose +lose
    oldWin = oldWin + win
    contFinal = contFinal+ contTotal
    contTotal=0
    win=0
    lose=0
    draw=0
    repete = true
  }
} while (escolha == "S");

// Ele só entra nessa condição se o jogador jogar mais de uma vez o jogo.
// Ele mostra a quantidade de jogos, a pontuação de cada um e quem foi que ganhou.
if (repete){
console.log(`Ao todo foram jogadas ${contFinal+contTotal} partidas.`)
console.log(`Você ganhou ${oldWin + win}.`)
console.log(`Você empatou ${oldDraw + draw}.`)
console.log(`Você perdeu ${oldLose + lose}.`)
  if(oldWin+win > oldLose+lose){
    console.log("Parabéns, você foi o GRANDE CAMPEÃO.")
  }else if(oldWin+win< oldLose+lose){
    console.log("Infelizmente você perdeu. O computador foi o grande campeão.")
  }else{
    console.log("O resultado final do jogo é: empate.")
  }
}
console.log("FIM. Obrigado por jogar.");
