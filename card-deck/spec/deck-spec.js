var Card = require('../deck').Card
var Deck = require('../deck').Deck

describe('Card', function() {
  it('has a rank and suit', function () {
    var card = new Card('ace', 'spades')
    expect(card.rank).toEqual('ace')
    expect(card.suit).toEqual('spades')

    var card = new Card('king', 'diamonds')
    expect(card.rank).toEqual('king')
    expect(card.suit).toEqual('diamonds')
  })
})

describe('Deck', function() {

  it('starts off with an empty array of cards', function () {
    var deck = new Deck()

    expect(deck.cards).toEqual([])
  })

  it('can add card instances', function () {
    var aceSpades = new Card('ace', 'spades')
    var kingDiamonds = new Card('king', 'diamonds')

    var deck = new Deck()
    deck.add(aceSpades)
    deck.add(kingDiamonds)

    expect(deck.cards).toEqual([
      aceSpades,
      kingDiamonds
    ])
  })

  it('can filter cards by suit', function () {
    var aceSpades = new Card('ace', 'spades')
    var kingSpades = new Card('king', 'spades')
    var jackClubs = new Card('jack', 'clubs')
    var kingHearts = new Card('king', 'hearts')

    var deck = new Deck()
    deck.add(aceSpades)
    deck.add(kingSpades)
    deck.add(jackClubs)
    deck.add(kingHearts)

    expect(deck.filter('spades')).toEqual([
      aceSpades,
      kingSpades
    ])

    expect(deck.filter('clubs')).toEqual([jackClubs])
    expect(deck.filter('hearts')).toEqual([kingHearts])
  })

  it('can populate multiple cards', function () {
    var deck = new Deck()
    deck.populate([
      ['ace', 'spades'],
      ['king', 'hearts'],
      ['jack', 'clubs'],
    ])

    expect(deck.cards[0] instanceof Card)
      .toEqual(true)

    expect(deck.cards.length).toEqual(3)
    expect(deck.cards[0].rank).toEqual('ace')
    expect(deck.cards[0].suit).toEqual('spades')
  })

})
