var ParkingLot = function(spaces){
  this.spaces = Array(spaces).fill('(empty)');
  this._vacancies = spaces;
};

ParkingLot.prototype.vacancies = function(){
  return this._vacancies;
};

ParkingLot.prototype.park = function(license){
  this._vacancies -= 1;
  var index = this.spaces.indexOf('(empty)');
  this.spaces[index] = license;
};

ParkingLot.prototype.leave = function(license){
  this._vacancies += 1;
  var index = this.spaces.indexOf(license);
  this.spaces[index] = '(empty)';
};

ParkingLot.prototype.compact = function(){
  var lot = new ParkingLot(this.spaces.length).spaces;
  var count = -1;

  this.spaces.forEach(function(license){
    if(license !== '(empty)'){
      count += 1;
      lot[count] = license;
    }
  });

  this.spaces = lot;
};

ParkingLot.prototype.summary = function(){
  return this.spaces.map(function(license, index){
    return 'Position ' + (index + 1) + ': ' + license;
  });
};

module.exports = ParkingLot;
