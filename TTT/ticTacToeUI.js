(function(root) {
  var TTT = root.TTT = ( root.TTT || {} );

  var UI = TTT.UI = function ($el) {
    this.$el = $el;
    this.game = new TTT.Game();
  };


  UI.prototype.makeBoard = function () {
    var htmlString = '';
    var counter = 0;

    function _make3divs(row){
      var result = '';
      for(var i = 0; i < 3; i++){
        result += '<div class="square" id=' + row + i + '></div>';
      }
      return result;
    }

    _.times(3, function() {
      htmlString += '<div class="row">';
      htmlString += _make3divs(counter);
      htmlString += '</div>'
      counter++;
    })

    this.$el.html(htmlString);
  };

  UI.prototype.setUpHandlers = function () {
    this.$el.on('click', '.square', this.clickSquare.bind(this));
    // set up a listener on the board
    // with a callback function that takes which square was clicked on
  }

  UI.prototype.updateSquares = function(board, winner) {
    if (board) {
      for(var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          var squareId = '#' + i + j;
          $(squareId).css('background-color', board[i][j]);
        }
      }
    } else {
      alert('Invalid Move');
    }

    if (winner) {
      alert("Congrats " + winner + "!")
    }
  };

  UI.prototype.clickSquare = function(event) {
    var $square = $(event.target);
    var squareCoords = $square.attr('id').split('');
    this.game.turn(squareCoords, this.updateSquares.bind(this));
  }


})(this);