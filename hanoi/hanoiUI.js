(function(root) {
  var H = root.H = ( root.H || {} );

  var HanoiUI = H.HanoiUI = function ($el) {
    this.$el = $el;
    this.game = new Hanoi.Game();
    this.chosenTowers = [];
  };

  HanoiUI.prototype.render = function () {
    var htmlString = '';
    _.each(this.game.towers, function(tower, towNum) {
      htmlString += '<div class="tower" id="tower' + towNum + '">';
      _.each(tower, function(disk) {
        htmlString += '<div class="disk" id="disk' + disk + '"></div>';
      });
      htmlString += '</div>'
    });

    this.$el.html(htmlString);
  };

  HanoiUI.prototype.setUpHandlers = function() {
    this.$el.on('click', '.tower', this.clickTower.bind(this));
  };

  HanoiUI.prototype.clickTower = function() {
    var $tower = $(event.target);
    var towerId = $tower.attr('id')
    var towerNum = towerId[towerId.length - 1]
    this.chosenTowers.push(towerNum);

    $tower.toggleClass('highlighted')

    if (this.chosenTowers.length === 2){
      this.game.takeTurn(this.chosenTowers, this.moveCallback.bind(this));
      this.chosenTowers = [];
    }
  };

  HanoiUI.prototype.moveCallback = function (moveValid, gameWon) {
    this.render();

    if (!moveValid){
      alert("Invalid Move");
    }

    if (gameWon) {
      alert("Congrats, you won!");
    }
  };


})(this);