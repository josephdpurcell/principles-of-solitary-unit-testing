(function() {
  // The countup utility. Any element with a number value and an attribute
  // of "data-countup" will get set to zero and then counted up to its original
  // value when it is shown.  The value of the data-counter attribute will be
  // the

  var counterIndex = 1;

  document.addEventListener('DOMContentLoaded', function() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-countup]'), function(el, i) {
      // If there's no ID, set one.
      el.id = el.id || 'counter-' + counterIndex++;
      runCounter(el.id, el.getAttribute('data-countup'));
    });
  });

  var runCounter = function(id, delay) {
    Reveal.addEventListener( 'fragmentshown', function( event ) {
      if (event.fragment.id === id) {
        var fragment = event.fragment;
        var max = parseInt(fragment.textContent);
        var step = parseInt(fragment.getAttribute('data-countup-step')) || 1;
        event.fragment.textContent = 0;
        var counter = function() {
          if (fragment.textContent < max) {
            fragment.textContent = Math.min(parseInt(fragment.textContent) + step, max);
            setTimeout(counter, delay);
          }
        };
        setTimeout(counter, delay);
      }
    });
  };

})();
