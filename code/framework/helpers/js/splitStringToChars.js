var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');
var click = require('./../../helpers/js/click.js');

var splitStringToChars = function(sourceID, destinationID, linkURL, linkTitle) {
  linkURL = linkURL || '';
  linkTitle = linkTitle || '';

  var text = select(sourceID);
  var chars = text[0].innerHTML.split('');

  var ret = '';
  var link = '';

  if (linkURL != '') {
    var link = '<a href="' + linkURL + '" title="' + linkTitle + '">';
  }

  chars.loop(function(char, index) {
    if (link != '') { ret += link; }
    ret += '<span class="char char--' + index + '">' + char + '</span>';
    if (link != '') { ret += '</a>' }
  });

  var dest = select(destinationID);
  dest[0].innerHTML = ret;
}

module.exports = splitStringToChars;
