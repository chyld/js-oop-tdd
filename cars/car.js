var Car = function(mpg){
  this.mpg = mpg;
  this.gallons = 0;
  this.miles = 0;
  this._trips = [];
};

Car.prototype.fill = function(gallons){
  this.gallons += gallons;
};

Car.prototype.drive = function(miles){
  this.miles += miles;
  this.gallons -= (miles / this.mpg);
  this._trips.push(miles);
};

Car.prototype.odometer = function(){
  return this.miles;
};

Car.prototype.trips = function(){
  return this._trips.map(function(t){
    return t + ' miles';
  });
};

module.exports = Car;
