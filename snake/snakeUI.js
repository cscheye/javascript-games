(function(root) {
  var S = root.S = ( root.S || {} );

  var SnakeUI = S.SnakeUI = function($el) {
    this.$el = $el;
    this.board = new S.Board();
    this.snake = this.board.snake;
  };
  var KEYMAP = S.KEYMAP = {37: 'W', 38:'N', 39:'E', 40:'S'}

  SnakeUI.prototype.start = function() {
    $(window).on("keydown",this.handleKeyEvent.bind(this));
    setInterval(this.step.bind(this), 500);
  };

  SnakeUI.prototype.handleKeyEvent = function (event) {
    var keynum = event.which;
    this.snake.dir = KEYMAP[keynum] || this.snake.dir;
  };

  SnakeUI.prototype.step = function() {
    this.snake.move();
    this.render();
  };

  SnakeUI.prototype.render = function() {
    this.$el.html(this.board.displayString());
    _.each(this.snake.segments, function(coord, idx) {
      var tagId = '#' + coord.i + '_' + coord.j;
      $(tagId).toggleClass('snake');
    })
  };

})(this);