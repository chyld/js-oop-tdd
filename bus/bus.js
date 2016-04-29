var Passenger = require('./passenger');

var Bus = function(capacity){
  this.capacity = capacity;
  this.passengers = [];
};

Bus.prototype.vacancies = function(){
  return this.capacity - this.passengers.length;
};

Bus.prototype.board = function(passenger, fare){
  this.passengers.push({passenger: passenger, fare: fare});
};

Bus.prototype.passengerNames = function(){
  return this.passengers.map(function(x){
    return x.passenger.name + ' (' + x.passenger.id + ')';
  });
};

Bus.prototype.switchSeats = function(p1, p2){
  var i1 = findPassenger(p1, this.passengers);
  var i2 = findPassenger(p2, this.passengers);
  var tmp = this.passengers[i1];
  this.passengers[i1] = this.passengers[i2];
  this.passengers[i2] = tmp;
};

Bus.prototype.paidFares = function(){
  return this.passengers.reduce(function(total, curr){
    return total + curr.fare;
  }, 0);
};

module.exports = Bus;

function findPassenger(p, passengers){
  for(var i = 0; i < passengers.length; i++){
    if(passengers[i].passenger.id === p.id){
      return i;
    }
  }
}
