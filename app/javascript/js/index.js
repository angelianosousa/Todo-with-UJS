document.querySelector('#tasks').addEventListener("ajax:success", (e) => {

  if (e.target && e.target.className === 'close') {
    const listItem = e.target.closest('li');
    const modals   = listItem.querySelectorAll('.modal');
    modals.forEach((modal) => {
      if (modal.style.display == 'block') {
        modal.style.display = 'none';
      }
    })
  }

  if (e.target && e.target.className === 'show-buttons') {
    const listItem      = e.target.closest('li');
    const modal         = listItem.querySelector('.show-task');
    modal.style.display = 'block';
  }

  if (e.target && e.target.className === 'edit-buttons') {
    const listItem      = e.target.closest('li');
    const modal         = listItem.querySelector('.edit-task');
    modal.style.display = 'block';
  }

  if (e.target && e.target.className === 'task-edit') {
    const listItem      = e.target.closest('li');
    const modal         = listItem.querySelector('.edit-task');
    modal.style.display = 'none';
  }
});