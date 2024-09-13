// Optional: close popover when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.container')) {
      document.querySelectorAll('.popover').forEach(function(popover) {
        popover.style.display = 'none';
      });
    }
  });
  