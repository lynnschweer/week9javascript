

// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner

//52 cards in a deck (rank/name value, suite, value, way to shuffle, way to pass out cards)

//players (name, score, hand)

//deck class should have: 3 arrays to store cards, ranks, and suites

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "Hearts ♥",
            "Spades ♠",
            "Diamonds ♦",
            "Clubs"
        ];
    }

    // Method to create a deck
    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1
                };
                this.deck.push(card);
                console.log(card);  // Log each card as it's added
            }
        }
    }

    // Method to shuffle the deck
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); 
            // Swap the cards at indices i and j
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

class Game {
    constructor() {
this.player1 = {
    name: "Player1",
    score: 0,
    hand: []
}
this.player2= {
    name: "Player2",
    score: 0,
    hand: []
}
    }

//method to play the game - pass out cards, x amount of turns, award points based on card.value, log the winnter

playGame() {
//instantiate a new deck, create a deck, then shuffle the deck
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

    //deck is a class, deck.deck is an array with 52 shuffled cards
    while(deck.deck.length !==0) {
//push out 52 cards til there's no more cards
        //returns first item in array and remove it bc we don't want repeats of cards
this.player1.hand.push(deck.deck.shift())
this.player2.hand.push(deck.deck.shift())
    }

  //actualy playing the game
  for(let i=0; i < this.player1.hand.length; i++) {

    if(this.player1.hand[i].value>this.player2.hand[i].value) {
        this.player1.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Player 1 wins a point!
            Current score: p1 ${this.player1.score}, ${this.player2.score}
            `)
    } else if (this.player2.hand[i].value>this.player1.hand[i].value) {
        this.player2.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Player 2 wins a point!
            Current score: p1 ${this.player1.score}, ${this.player2.score}
            `)
        } else console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Tie: no points awarded
            Current score: p1 ${this.player1.score}, ${this.player2.score}
            `)

            if (this.player1.score>this.player2.score) {
                console.log("Player 1 wins")
            } else if (this.player2.score>this.player1.score) {
                console.log("Player 2 wins")
            } else {
                console.log("Tie")
            }
            
  }
}


}


// Testing the class
const game = new Game
game.playGame()
