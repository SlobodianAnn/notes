// delete function

document.addEventListener('DOMSubtreeModified', () => deleteNote());

function deleteNote() {
  const arrayNotes = document.querySelectorAll('.notes__block');

  arrayNotes.forEach((note) => {
    note.addEventListener('click', (e) => {
      const target = e.target;
      if (target.className === 'delete__btn') {
        const id = note.querySelector('textarea').id;
        note.remove();
        localStorage.removeItem(id);
      }
    });
  });
}
deleteNote();
