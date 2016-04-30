var Directory = function(name){
  this.name = name;
  this.files = new Tree();
};

Directory.prototype.ls = function(){
  console.log('files:', this.files);
};

Directory.prototype.write = function(filename, contents){
  this.files.add(new Node({
    filename: filename,
    contents: contents
  }));
};

module.exports = Directory;

// ------------------------------------------- //
// ------------------------------------------- //
// ------------------------------------------- //

function Node(data){
  this.data = data;
  this.next = null;
  this.prev = null;
}

function Tree(){
  this.root = null;
}

Tree.prototype.inorder = function(){
  if(!this.root){
    return [];
  }else if(!this.root.prev && !this.root.next){
    return [this.root.data];
  }else{
    return inorder(this.root);
  }
};

function inorder(node){
  if(node.prev){
    var p = [].concat(inorder(node.prev));
  }

  var c = 3;

  if(node.next){
    var n = [].concat(inorder(node.next));
  }
}

Tree.prototype.add = function(node){
  if(!this.root){
    this.root = node;
  }else{
    add(this.root, node);
  }
};

function add(head, node){
  if(node.data.filename < head.data.filename){
    if(!head.prev){
      head.prev = node;
    }else{
      add(head.prev, node);
    }
  }else{
    if(!head.next){
      head.next = node;
    }else{
      add(head.next, node);
    }
  }
}
