(function(root){
  var S = root.S = ( root.S || {} );

  var Board = S.Board = function() {
    this.snake = new S.Snake();
    this.apples = [];
  };

  var DIM_I = 20;
  var DIM_J = 20;

  Board.prototype.displayString = function() {
    var displayString = '';
    for (var i = 0; i < DIM_I; i++){
      for (var j = 0; j < DIM_J; j++){
        displayString += "<div class='square' id='" + i + "_" + j + "'></div>"
      }
    }
    return displayString;
  }
})(this);