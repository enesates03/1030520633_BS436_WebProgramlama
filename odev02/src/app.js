document.addEventListener('DOMContentLoaded', () => {
    //seçim yapılacak kartlar
    const cardArray = [
      {
        name: 'dog',
        img: 'images/catDrawing.jpg',
      },
      {
        name: 'cat',
        img: 'images/dogDrawing.jpg',
      },
      {
        name: 'dog',
        img: 'images/catDrawing.jpg',
      }
    ];
  
    cardArray.sort(() => 0.5 - Math.random());
  
    const grid = document.querySelector('.gameArea');
    let cardChosen = [];
    let cardChosenId = [];
    let heart = 0;
  
    //kartları oluşturma
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/galataTDrawing.jpg');
        card.setAttribute('data-id', i);
        card.setAttribute('class', 'card');
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
      }
    }
  
    //doğru kartı seçim için kontrolü
    function checkForMatch() {
      const imgCard = document.querySelectorAll('img');
      const optionOneId = cardChosenId[0];

      if (cardChosen[0] === 'cat' ){
        //alert('Tebrikler doğru kartı buldun...');
        document.getElementById("mesId").style.display = "none";
        document.getElementById("againId").style.display = "none";
        document.getElementById("winId").style.display = "inline";
        heart = heart +5; // oyuncu ilk seçtiği kartı doğru bulursa oyunda tekrar kart seçimini engellemek için canı artırıyoruz
      } else {
        imgCard[optionOneId].setAttribute('src', 'images/galataTDrawing.jpg');
        //alert('Üzgünüm bulamadın tekrar dene...');
        document.getElementById("mesId").style.display = "none";
        document.getElementById("againId").style.display = "inline";
         if(heart === 2){
            document.getElementById("mesId").style.display = "none";
            document.getElementById("againId").style.display = "none";
            document.getElementById("loseId").style.display = "inline";
          }
        }
      cardChosen = [];
      cardChosenId = [];
    }
  
    //kartların seçilmesi
    function flipCard() {
      heart = heart + 1;
      if( heart <= 2) { //can hakkı en fazla 2 tane 2 kere kart seçimi yapmasını sağlar
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length ===1) {
          setTimeout(checkForMatch, 700);
        }
      }
    }

    createBoard();
  });