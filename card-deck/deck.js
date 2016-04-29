module.exports.Card = function(rank, suit){
  this.rank = rank;
  this.suit = suit;
};

module.exports.Deck = function(){
  this.cards = [];
};

module.exports.Deck.prototype.add = function(card){
  this.cards.push(card);
};

module.exports.Deck.prototype.filter = function(suit){
  return this.cards.filter(function(card){
    return card.suit === suit;
  });
};

module.exports.Deck.prototype.populate = function(list){
  this.cards = this.cards.concat(list.map(function(item){
    return new module.exports.Card(item[0], item[1]);
  }));
};
