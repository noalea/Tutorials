// make span from https://gist.github.com/gosseti/1629106ad8dc7e3823f31543ff1f4552#file-main-es5-js

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function makeSpans (selector) {
  var _document$querySelect = document.querySelectorAll(selector);
  var _document$querySelect2 = _toArray(_document$querySelect);
  var elements = _document$querySelect2.slice(0);

  return elements.map(function (element) {
    var text = element.innerText.split('');
    var spans = text.map(function (letter) {
      return '<span>' + letter + '</span>';
    }).join('');
    return element.innerHTML = spans;
  });
}

// usage with single selector
makeSpans('h1');
