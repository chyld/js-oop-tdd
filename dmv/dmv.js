function Queue(){
  this.items = [];
}

Queue.prototype.enqueue = function(item){
  this.items.unshift(item);
};

Queue.prototype.dequeue = function(){
  return this.items.pop();
};

// ------------------------------------------- //
// ------------------------------------------- //
// ------------------------------------------- //

var DMV = function(agents){
  this.active = {};
  this.agents = new Queue();
  this.customers = new Queue();
  agents.forEach(agent => {
    this.agents.enqueue(agent);
  });
};

DMV.prototype.customersInLine = function(){
  return this.customers.items.slice().reverse();
};

DMV.prototype.enter = function(customer){
  return this.customers.enqueue(customer);
};

DMV.prototype.currentCustomerFor = function(agent){
  return this.active[agent] || null;
};

DMV.prototype.nextCustomer = function(){
  var customer = this.customers.dequeue();
  var agent = this.agents.dequeue();
  this.active[agent] = customer;
};

DMV.prototype.resolve = function(customer){
  var agent;
  for(var prop in this.active){
    if(this.active[prop] === customer){
      agent = prop;
      break;
    }
  }
  this.agents.enqueue(agent);
  this.active[agent] = null;
};

module.exports = DMV;
