'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lotto = function lotto() {
  var numbers = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var date = arguments.length <= 1 || arguments[1] === undefined ? new Date() : arguments[1];
  var winnings = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  var euroNumbers = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

  _classCallCheck(this, lotto);

  this.winningNumbers = numbers;
  this.date = date;
  this.winnings = [];
  this.euroNumbers = euroNumbers;
  this.winners = [];

  for (var i = 0; i < 13; i++) {
    if (i != 0) {
      var objectName = "rank" + i;
      var amount = winnings[objectName].prize;
      var winners = winnings[objectName].winners;
      var prizeInfo = new rank((amount / 100).toFixed(2), winners, objectName);
      this.winnings.push(prizeInfo);
    }
  }
};

var rank = function rank(prize, winners, name) {
  _classCallCheck(this, rank);

  this.name = name;
  this.prize = prize;
  this.winners = winners;
};