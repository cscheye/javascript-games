(function(root) {
  var S = root.S = ( root.S || {} );

  var Snake = S.Snake = function () {
    this.dir = 'E';
    this.segments = [new S.Coord(10,10)];
  };

  Snake.prototype.move = function() {
    var firstSegment = this.segments[0];
    this.segments.unshift(firstSegment.plus(this.dir));
    this.segments.pop();
  };

  Snake.prototype.hasSegmentAt = function(i, j) {
    var hasSegment = false;
    _.each(this.segments, function(coord) {
       if(coord.i === i && coord.j === j) {
         hasSegment = true;
       }
    });
    return hasSegment;
  };
})(this);