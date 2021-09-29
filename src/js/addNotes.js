const notesWrapper = document.querySelector('.notes__wrapper');
const addNoteButton = document.querySelectorAll('.createNote__btn');
const noteBlock = document.querySelector('.notes__block');

let counter = 1;
addNoteButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    counter++;
    const newNote = noteBlock.cloneNode(true);
    newNote.querySelector('.textarea_note').id = counter;
    newNote.querySelector('.textarea_note').value = '';
    notesWrapper.append(newNote);
  });
});
