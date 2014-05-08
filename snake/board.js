(function(root){
  var S = root.S = ( root.S || {} );

  var Board = S.Board = function() {
    this.snake = new S.Snake();
    this.apples = [];
  };

  var DIM_I = 20;
  var DIM_J = 20;

  Board.prototype.render = function() {
    var displayString = '';
    for (var i = 0; i < DIM_I; i++){
      for (var j = 0; j < DIM_J; j++){
        if (this.snake.hasSegmentAt(i, j)) {
          displayString += 'S';
        } else {
          displayString +='.'
        }
      }
      displayString += '\n';
    }
    return displayString;
  }

})(this);