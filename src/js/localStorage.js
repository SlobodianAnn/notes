const textArea = document.querySelectorAll('.textarea_note');

textArea.forEach((item) => {
  item.addEventListener('change', function () {
    localStorage.setItem(`note ${item.id}`, item.value);
  });

  if (localStorage.getItem(`note ${item.id}`)) {
    item.value = localStorage.getItem(`note ${item.id}`);
  }
});
