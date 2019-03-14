function runOnKeys(func, ...codes) {
  let downedCodes = [];
  let downedId;

  document.onkeydown = function(evt) {
    if (evt.keyCode === codes[0]) {
      clearTimeout(downedId);
      downedCodes.push(codes[0]);

      downedId = setTimeout(() => {
        downedCodes.length = 0;
      }, 100);
    } else if (codes.includes(evt.keyCode) && downedCodes.length !== 0) {
      downedCodes.push(evt.keyCode);

      if (downedCodes.length === codes.length) {
        func();
      }
    }
  };
}
