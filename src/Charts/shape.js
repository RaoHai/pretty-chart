import G2 from '@ali/g2';
const Shape = G2.Shape;
const Util = G2.Util;

function getFillAttrs(cfg) {
  const attrs = Util.mix({
    fill: cfg.color,
    fillOpacity: cfg.opacity
  }, cfg.style);
  return attrs;
}

function getActiveCfg(type) {
  if (!type || type.indexOf('line') === -1) {
    return Global.activeShape.area;
  }
  return Global.activeShape.hollowArea;
}

function getRectPath(points, collapse = true) {
  const path = [];
  for (let i = 0; i < points.length; i++) {
    var point = points[i];
    if (point) {
      const action = i === 0 ? 'M' : 'L';
      path.push([action, point.x, point.y]);
    }
  }
  const first = points[0];
  path.push(['L', first.x, first.y]);
  if (collapse) {
    path.push(['z']);
  }
  return path;
}

// type = 'top' | 'bottom' | 'both'
function addRadius(r, path, type = 'both') {
  const result = [];
  const length = path[1][2] - path[0][2];
  const radius = Math.min(length, r);
  result.push(path[0]);
  result.push(path[1]);

  if (type === 'bottom' || type === 'both') {
    result.push(['A', r, r, 1, 0, 1, path[2][1], path[2][2]]);
  } else {
    result.push(path[2]);
  }

  result.push(path[3]);

  if (type === 'top' || type === 'both') {
    result.push(['A', r, r, 1, 0, 1, path[4][1], path[4][2]]);
  } else {
    result.push(path[4]);
  }
  return result;
}

function curryChain(...funcs) {
  return (...args) => {
    let result = null;
    for (let i = 0; i < funcs.length; i++) {
      if (i === 0) {
        result = funcs[i](...args);
      } else {
        result = funcs[i](result);
      }
    }
    return result;
  }
}

Shape.registShape('interval', 'radiusInterval', {
  getActiveCfg: function(type) {
    return getActiveCfg(type);
  },
  getShapePoints(cfg) {
    const width = cfg.size / 2;
    const { x, y, y0 } = cfg;
    return [
      { x: x - width, y: y[0]},
      { x: x - width, y: y0},
      { x: x - width, y: y[1]},
      { x: x + width, y: y[1]},
      { x: x + width, y: y0},
      { x: x + width, y: y[0]}
    ];
  },
  drawShape(cfg, container) {
    var points = cfg.points;
    var colors = cfg.color;
    var attrs = getFillAttrs(cfg);
    let path = getRectPath([
      cfg.points[0],
      cfg.points[2],
      cfg.points[3],
      cfg.points[5],
    ]);
    path = this.parsePath(path, false); // 将 0 - 1 的值转换为画布坐标

    const processUpperPath = curryChain(
      getRectPath, 
      this.parsePath.bind(this), 
      (paths) => addRadius(cfg.size / 2, paths, 'top')
    );
    
    const upperPath = processUpperPath([
      cfg.points[0],
      cfg.points[1],
      cfg.points[4],
      cfg.points[5],
    ]);


    const processLowerPath = curryChain(
      getRectPath, 
      this.parsePath.bind(this), 
      (paths) => addRadius(cfg.size / 2, paths, 'bottom')
    );

    const upperShape = container.addShape('path', {
      attrs: {...attrs, path: upperPath, fill: colors[0] }
    });

    const lowerPath = processLowerPath([
      cfg.points[1],
      cfg.points[2],
      cfg.points[3],
      cfg.points[4],
    ]);

    const lowerShape = container.addShape('path', {
      attrs: {...attrs, path: lowerPath, fill: colors[1] }
    })
    
    return container.addShape('path', {
      attrs: {
        path: addRadius(cfg.size / 2, path),
        stroke: colors[2],
        lineWidth: 0,
      }
    });
  }
});