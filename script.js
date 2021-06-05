container.onclick = function(event) {
  if (event.target.className != 'remove-button') return;

  pane = event.target.closest('.pane');
  pane.remove();
};
