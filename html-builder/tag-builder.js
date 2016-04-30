function TagBuilder(tag, selfClosing){
  this.tag = tag;
  this.selfClosing = selfClosing;
  this.attributes = [];
  this.classes = [];
}

TagBuilder.prototype.setInnerHTML = function(text){
  this.innerHTML = text;
};

TagBuilder.prototype.addAttribute = function(attribute, value){
  if(attribute === 'class'){
    this.addClass(value);
  }else{
    var o = {};
    o[attribute] = value;
    this.attributes.push(o);
  }
};

TagBuilder.prototype.addClass = function(value){
  this.classes.push(value);
};

TagBuilder.prototype.toString = function(){
  var attributes = this.attributes.reduce(function(str, o){
    var key = Object.keys(o)[0];
    var val = o[key];
    return str + ( ' ' + key + '="' + val + '"');
  }, '');

  var classes = '';
  if(this.classes.length){
    classes = ' class="' + this.classes.join(' ') + '"';
  }

  var tag = this.tag;
  var inner = this.innerHTML || '';
  var open  = '<'  + tag + classes + attributes +   '>';
  var close = '</' + tag +                '>';
  var self  = '<'  + tag + classes + attributes + ' />';

  if(this.selfClosing){
    return self;
  }else{
    return open + inner + close;
  }
};

module.exports = TagBuilder;
