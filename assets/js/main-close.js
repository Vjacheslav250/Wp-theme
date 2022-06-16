
// Закрытие верхнего меню //


document.addEventListener('DOMContentLoaded', function () {
  const close = function () {
    this.closest('._classes').style.display = 'none';
  }

  let elements = document.querySelectorAll('.close-informing');

  for (let e of elements) {
    e.addEventListener('click', close);
  }
});
