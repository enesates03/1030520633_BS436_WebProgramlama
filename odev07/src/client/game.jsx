import React, { Component } from 'react';

export class Game extends Component {
    constructor(props){
      super(props);
      const cardArray = [
        {
          name: 'dog',
          img: 'images/dogDrawing.jpg',
        },
        {
          name: 'cat',
          img: 'images/catDrawing.jpg',
        },
        {
          name: 'dog',
          img: 'images/dogDrawing.jpg',
        }
      ];
      this.state={
        cardArray,
        game:{
          victory: false,
          defeat: false, 
        }
      }
    }

    componentDidMount() {
      this.startNewGame()
    }

    startNewGame = () => {
      this.setState({
        game:{
          victory: false,
          defeat: false, 
        },
        cardChosen:[],
        cardChosenId:[],
        heart:1,
        information: "Kedi kartını bulmak için kartın üzerine tıklamalısın."
      })
    } 
  
    flipCard = (id) => {
      this.state.cardArray.sort(() => 0.7 - Math.random()); // cardArray dizisinindeki elemanların yerlerini değiştirir
      this.setState({
        heart : this.state.heart + 1
      })
      if(this.state.heart <= 2){ // oyundaki canın değeri 2 den fazla ise kart seçimi yapamaz
        this.setState({
          cardChosen: this.state.cardArray[id].name, // seçilen kart adı cardChosen eklenir
          cardChosenId : id, // seçilen kart id cardChosenId eklenir
        })
      let showcard = document.getElementsByTagName("img")[id]; 
      showcard.setAttribute('src', this.state.cardArray[id].img); // seçilen kartı gösterir
      setTimeout(
        () => this.setState(this.checkForMatch), // 1 saniye sonra checkformatch fonksiyonuna çalışır
        1000
      );
      }
    }
  
    checkForMatch(){
      const imgCard = document.querySelectorAll('img');
      const optionOneId = this.state.cardChosenId; 
      const optionOne = this.state.cardChosen;
    
      if(optionOne === "cat"){ // kedi seçimi doğru ise bu koşula girer
        this.setState({
          heart : this.state.heart + 5,
          game: {victory:true}
        })
      }else{
        let again =<p>Yanlış seçim yaptın :( Geriye son 1 hakkın kaldı dikkatli ol!!</p>
        imgCard[optionOneId].setAttribute('src', 'images/galataTDrawing.jpg'); // yapılan seçim yanlış ise kartı geri çevirir
        this.setState({
          information : again
        })
        if(this.state.heart === 3){ // oyundaki canın değeri 3 olursa bu koşul çalışır ve oyun biter
          this.setState({
            game: {defeat: true}
          })
        }
      }
      this.setState({
        cardChosen:[], //seçilen kart adı sıfırlanır
        cardChosenId:[] //seçilen kart id sıfırlanır
      })
    }

    render(){
    const game = this.state.game;

    if(game.victory){
      return (
          <div className="gameArea">
              <h2>Kazandın!</h2>
              <div>
                <img src="images/catDrawing.jpg" className="card"></img>
                <p>Tebrik ederiz kediyi buldun:) Yeni bir oyun oynamak istersen butona tıklayabilirsin.</p>
                <button className="btn" onClick={this.startNewGame}>Yeni Oyun</button>
              </div>
          </div>
      );
    }

    if(game.defeat){
      return (
          <div className="gameArea">
              <h2>Hakkın Kalmadı, Kaybettin!</h2>
              <div>
                <p>Üzgünüm kediyi bulamadın :( Yeni bir oyun oynamak istersen butona tıklayabilirsin.</p>
                <button className="btn" onClick={this.startNewGame}>Yeni Oyun</button>
              </div>
          </div>
      );
    }

    return(
    <div class="main">
        <div class="gameArea">
          <img src="images/galataTDrawing.jpg" id="0" className="card" onClick={(e) => {this.flipCard(0)}}></img>
          <img src="images/galataTDrawing.jpg" id="1" className="card" onClick={(e) => {this.flipCard(1)}}></img>
          <img src="images/galataTDrawing.jpg" id="2" className="card" onClick={(e) => {this.flipCard(2)}}></img>
        </div>
        <div class="information">{this.state.information}</div>
    </div>
    )
  }
}
