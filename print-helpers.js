// Shared Print / Close behaviour for the report and print popups the app opens
// with window.open('') + document.write(). Those popups inherit the app's CSP,
// which has no script-src 'unsafe-inline', so inline <script> blocks and
// onclick="…" attributes in them are refused. They load this file instead:
//
//   <script src="<origin>/print-helpers.js" data-autoprint="400"></script>
//
//   data-autoprint="<ms>"  print automatically once the page and all of its
//                          images have loaded (or failed), after <ms> delay
//   data-print-action="print" | "close"   on any clickable element
//
// Build the tag with printHelpersScriptTag() in src/utils/printHelpersTag.ts.
(function () {
  var script = document.currentScript;

  document.addEventListener('click', function (e) {
    var target = e.target;
    var el = target && target.closest ? target.closest('[data-print-action]') : null;
    if (!el) return;
    var action = el.getAttribute('data-print-action');
    if (action === 'print') {
      window.print();
    } else if (action === 'close') {
      // A popup (or a tab with no history) closes; a page reached by
      // navigation goes back instead.
      if (window.opener || history.length <= 1) window.close();
      else history.back();
    }
  });

  if (!script || !script.hasAttribute('data-autoprint')) return;
  var delay = Number(script.getAttribute('data-autoprint')) || 0;

  function printSoon() {
    setTimeout(function () { window.print(); }, delay);
  }

  function printWhenImagesSettle() {
    var pending = Array.prototype.filter.call(document.images, function (img) {
      return !img.complete;
    });
    if (!pending.length) return printSoon();
    var left = pending.length;
    var settle = function () {
      left -= 1;
      if (left === 0) printSoon();
    };
    pending.forEach(function (img) {
      img.addEventListener('load', settle, { once: true });
      img.addEventListener('error', settle, { once: true });
    });
  }

  if (document.readyState === 'complete') printWhenImagesSettle();
  else window.addEventListener('load', printWhenImagesSettle);
})();
