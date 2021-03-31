import React, { Component } from 'react';

export class Game extends Component {
    constructor(props){
        super(props);
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
          this.state={
              cardArray,
              cardChosen:[],
              cardChosenId:[],
              information: "Kedi kartını bulmak için kartın üzerine tıklamalısın.",
              heart:1
        }
      }
  
      flipCard = (id) => { 
        this.state.cardArray.sort(() => 0.7 - Math.random()); // cardArray dizisinindeki elamların yerlerini değiştirir
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
          alert("dogru");
          let win = <p>Kazandın!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin.</p>;
          this.setState({
            information : win,
            heart : this.state.heart + 5
          })
        }else{
          alert("yanlis");
          let again =<p>Yanlış seçim yaptın :( Geriye son 1 hakkın kaldı dikkatli ol!!</p>;
          imgCard[optionOneId].setAttribute('src', 'images/galataTDrawing.jpg'); // yapılan seçim yanlış ise kartı geri çevirir
          this.setState({
            information : again
          })
          if(this.state.heart === 3){ // oyundaki canın değeri 3 olursa bu koşul çalışır ve oyun biter
            alert("hakkin bitti")
            let lose =<p>Kaybettin :( Yeni bir oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin.</p>;
            this.setState({
              information : lose
            })
          }
        }
        this.setState({
          cardChosen:[], //seçilen kart adı sıfırlanır
          cardChosenId:[] //seçilen kart id sıfırlanır
        })
      }
      
      render(){
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
