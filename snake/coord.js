(function(root) {
  var S = root.S = ( root.S || {} );

  var Coord = S.Coord = function (i, j) {
    this.i = i;
    this.j = j;
  };

  Coord.prototype.plus = function(dir) {
    switch(dir) {
    case 'N':
      return new Coord(this.i - 1, this.j);
      break;
    case 'E':
      return new Coord(this.i, this.j + 1);
      break;
    case 'S':
      return new Coord(this.i + 1, this.j);
      break;
    case 'W':
      return new Coord(this.i, this.j - 1);
      break;
    default:
      return this
      break;
    }
  };
})(this);