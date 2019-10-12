function runOnKeys(func, ...codes) {
  let downedCodes = new Set();
  let clearId;

  document.onkeydown = function({keyCode}) {
    if (!codes.includes(keyCode)) return;

    if (downedCodes.size === 0) {
      downedCodes.add(keyCode);

      clearId = setTimeout(() => downedCodes.clear(), 300);
    } else {
      downedCodes.add(keyCode);

      if (downedCodes.size === codes.length) {
        func();
        clearTimeout(clearId);
        downedCodes.clear();
      }
    }
  };
}
