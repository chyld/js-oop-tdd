function Editor(){
  this.actions = [];
  this.current = -1;
}

Editor.prototype.write = function(str){
  this.current += 1;
  this.actions[this.current] = {
    type: 'write',
    data: str
  };
};

Editor.prototype.replace = function(old, neu){
  this.current += 1;
  this.actions[this.current] = {
    type: 'replace',
    data: {old: old, neu: neu}
  };
};

Editor.prototype.undo = function(str){
  this.current -= 1;
};

Editor.prototype.redo = function(str){
  this.current += 1;
};

Editor.prototype.toString = function(){
  var cache = '';

  for(var i = 0; i <= this.current; i++){
    var action = this.actions[i];
    if(action.type === 'write'){
      cache += action.data;
    }else{
      var regex = new RegExp(action.data.old, 'g');
      cache = cache.replace(regex, action.data.neu);
    }
  }

  return cache;
};

module.exports = Editor;
