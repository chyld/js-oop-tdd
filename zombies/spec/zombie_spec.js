// var Zombie = require('../zombie')
// var Human = require('../human')

// describe('Zombie', ()=> {
//   it('has a name', ()=> {
//     var zombie = new Zombie('Jumper', 2)

//     expect(zombie.name).toEqual('Jumper')
//   });

//   it('can find humans', ()=> {
//     var zombie = new Zombie('Runner', 2)
//     var a = new Human('A', 12),
//         b = new Human('B', 68),
//         humans = [a, b]

//     zombie.search(humans)
//     expect(zombie.knownHumans[0].name).toEqual('A')
//   })

//   it('always finds the youngest human', ()=> {
//     var zombie = new Zombie('Twist', 2)
//     var a = new Human('A', 24),
//         b = new Human('B', 12),
//         c = new Human('C', 68),
//         humans = [a, b, c]

//     zombie.search(humans)
//     expect(zombie.knownHumans[0].name).toEqual('B')

//     var d = new Human('D', 48),
//         e = new Human('E', 32),
//         f = new Human('F', 20),
//         humans = [d, e, f]

//     zombie.search(humans)
//     expect(zombie.knownHumans[1].name).toEqual('F')
//   })
//   it('can eat humans', ()=> {
//     var zombie = new Zombie('Killer', 2)
//     var a = new Human('A', 12),
//         b = new Human('B', 68),
//         humans = [a, b]

//     zombie.search(humans)
//     zombie.eat()
//     expect(zombie.knownHumans.length).toEqual(0)
//   })

//   it('can gain health', ()=> {
//     var zombie = new Zombie('Killer', 2)
//     var a = new Human('A', 12),
//         b = new Human('B', 68),
//         humans = [a, b]

//     zombie.search(humans)
//     expect(zombie.health).toEqual(2)
//     zombie.eat()
//     expect(zombie.knownHumans.length).toEqual(0)
//     expect(zombie.health).toEqual(3)
//   })

//   it("can hear the human's plea", () => {
//     var zombie = new Zombie('Killer', 2)
//     var a = new Human('A', 12, 'Help! Help! Noooooo!'),
//         b = new Human('B', 68, 'Oh god why... Please, someone help me!'),
//         humans = [a, b]

//     zombie.search(humans)
//     expect(zombie.eat()).toEqual('Help! Help! Noooooo!')
//   })

//   it('can recall the sounds of its victims', () => {
//     var zombie = new Zombie('Killer', 2)
//     var a = new Human('A', 12, 'Help! Help! Noooooo!'),
//         humans = [a, b]

//     zombie.search(humans)
//     zombie.eat()

//     var b = new Human('B', 68, 'Oh god why... Please, someone help me!'),
//     humans = [b]

//     zombie.search(humans)
//     zombie.eat()
//     expect(zombie.recall()).toEqual(['Help! Help! Noooooo!', 'Oh god why... Please, someone help me!'])
//   })
// })
