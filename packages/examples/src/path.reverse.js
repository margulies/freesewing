import freesewing from "freesewing";
import { box } from "./shared";

var pathReverse = {
  draft: function(part) {
    // prettier-ignore
    let {Point, points, Path, paths, Snippet, snippets, macro} = part.shorthand();

    points.B = new Point(10, 30);
    points.BCp2 = new Point(40, 20);
    points.C = new Point(90, 30);
    points.CCp1 = new Point(50, -30);

    paths.example = new Path()
      .move(points.B)
      .curve(points.BCp2, points.CCp1, points.C)
      .attr('data-text', 'I am the original path');

    paths.reverse = paths.example.reverse()
      .attr('data-text', 'I am the reversed path');

    return part;
  }
};

export default pathReverse;