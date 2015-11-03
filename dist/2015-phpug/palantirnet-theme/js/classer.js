(function() {
  // Classer utility. When a fragment with data-classer is shown, some other
  // element withthe ID specified with data-classer will get the class specified
  // by data-classer-class added to it. When the fragment is hidden the class
  // will be removed.

  var classerIndex = 1;

  document.addEventListener('DOMContentLoaded', function() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-classer]'), function(el, i) {
      // If there's no ID, set one.
      el.id = el.id || 'classer-' + classerIndex++;
      runClasser(el.id, el.getAttribute('data-classer'), el.getAttribute('data-classer-class'));
    });
  });

  var runClasser = function(id, targetId, targetClass) {
    if (!targetId || !targetClass) {
      return;
    }
    Reveal.addEventListener('fragmentshown', function(event) {
      if (event.fragment.id === id) {
        document.getElementById(targetId).classList.add(targetClass);
      }
    });
    Reveal.addEventListener('fragmenthidden', function(event) {
      if (event.fragment.id === id) {
        document.getElementById(targetId).classList.remove(targetClass);
      }
    });
  };

})();

