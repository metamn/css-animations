// http://codepen.io/agelber/pen/HkDvl

var el          = document.querySelector('.figure'),
    width       = el.clientWidth,
    height      = el.clientHeight,

    // THIS IS THE MOST IMPORTANT
    // - originally: 500
    perspective = 5000,
    rotateX     = 0,
    rotateY     = 0,
    scale       = 100,
    reverse     = false,

    // by cs
    isDown = true,
    lastX = 100,
    lastY = 100;

function scaleVal() {
  var strScale = scale.toString();
  if (scale >= 100) {
    return parseFloat(strScale[0] + '.' +  strScale.slice(1));
  }
  return parseFloat('0.' + strScale);
}

function updateTransform() {
  var pProp = 'perspective(' + perspective +  'px)',
      xProp = 'rotateX('     + rotateX     + 'deg)',
      yProp = 'rotateY('     + rotateY     + 'deg)',
      sProp = 'scale('       + scaleVal()  +    ')',
      props = [pProp, xProp, yProp, sProp].join(' ');

  // Use Modernizr here maybe ....
  el.style['transform'] = props;
}

document.addEventListener('mousemove', function(e) {
  if (isDown) {

    // speed of rotation, originally 180
    // - ie how fast to follow the cursor
    // - on Chrome 180 is optimal, on FF 18
    xMultiplier = 180 / height / scaleVal();
    yMultiplier = 180 / width  / scaleVal();

    rotateX += (lastY - e.clientY) * xMultiplier;
    rotateY += (lastX - e.clientX) * yMultiplier * (reverse ? 1 : -1);

    // full rotation or just semi rotation. originally was 360 (full)
    // - on small values (<90) the animation flicks
    rotateX  = Math.floor(rotateX % 360);
    rotateY  = Math.floor(rotateY % 360);

    reverse  = Math.abs(Math.floor(rotateX / 90) % 4) > 1;
    lastX    = e.clientX;
    lastY    = e.clientY;
    updateTransform();
  }
}, false);
