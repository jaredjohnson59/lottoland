'use strict';

class lotto {



    constructor(numbers = 0, date = new Date(), winnings = 0, euroNumbers = 0) {
      this.winningNumbers = numbers;
      this.date = date;
      this.winnings = [];
      this.euroNumbers = euroNumbers;
      this.winners = [];

      for (var i = 0; i < 13; i++) {
        if(i != 0)
        {
        var objectName = "rank" + i;
        var amount = winnings[objectName].prize;
        var winners = winnings[objectName].winners;
        var prizeInfo = new rank((amount/100).toFixed(2), winners, objectName);
        this.winnings.push(prizeInfo);
        }

      }
    }


}

class rank {
  constructor(prize, winners, name){
  this.name = name;
  this.prize = prize;
  this.winners = winners;
  }
}
