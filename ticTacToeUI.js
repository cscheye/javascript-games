(function(root) {
  var TTT = root.TTT = ( root.TTT || {} );

  var UI = TTT.UI = function ($el) {
    this.$el = $el;
  }


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
  }

})(this);