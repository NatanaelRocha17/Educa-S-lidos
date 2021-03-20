
const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "aranhaceu.jpg",
  'ceu.jpg',
  'cristo.jpg',
  'estatuadaliber.jpg',
  'pordosol.jpg',
  'toreeifel.jpg',
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/lampada.jpg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim da Renderização HTML */

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));

function carregar(){
  window.location.reload();
} 

function verificar(){
  var questai1 = document.getElementsByName("pri")
  var questao2 = document.getElementsByName("seg")
  var res = document.getElementById("res")
  var resposta
  var vetres = []
  res.innerHTML = ''
  res.style.textAlign = 'center'
  if(questai1[0].checked){
    resposta = 1
    vetres[0] = ''
  }else{
    vetres[0] = '1ª QUESTÃO - Indentificação <br>'
    resposta = 0
  }
  if(questao2[2].checked){
    resposta = resposta + 1
    vetres[1] =''
  }else{
    vetres[1] = '2ª QUESTÃO - A-E-I-O-U <BR>' 
  }

  res.innerHTML += `Sua Pontuação foi ${resposta} de 10 questões <br> <br>`
  if(resposta != 2){
    res.innerHTML += '<b>RESPOSTAS CERTAS DAS QUESTÕES QUE VOCÊ ERROU<b> <BR> <br>'
    for(i = 0; i < 2; i++){
      res.innerHTML += `${vetres[i]}`
    }
  }
 




}