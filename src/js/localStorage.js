let textArea = document.querySelectorAll('.textarea_note');
const noteWrapper = document.querySelector('.notes__wrapper');

document.addEventListener('change', () => setItemsToLocalStorage());

document.addEventListener('DOMSubtreeModified', () => deleteNote());

// setItems to LocalStorage
function setItemsToLocalStorage() {
  textArea = document.querySelectorAll('.textarea_note');
  textArea.forEach((item) => {
    localStorage.setItem(item.id, item.value);
  });
}

// fill notes after realod
const arrayOfKeysLocalStorage = Object.keys(localStorage).sort();

arrayOfKeysLocalStorage.forEach((key, index) => {
  const exisitingNote = document.querySelector(`#note${index}`);
  if (key.includes('note')) {
    // eslint-disable-next-line radix
    const indexNote = parseInt(key.match(/\d+/));
    const newNote = createNote(indexNote, localStorage.getItem(`note${indexNote}`));
    noteWrapper.append(newNote);
  } else if (document.querySelector(`#note${index}`)) {
    exisitingNote.value = localStorage.getItem(`note${index}`);
  }
});

// createNote
function createNote(id, value = '') {
  const div = document.createElement('div');
  div.classList.add('notes__block');

  const deleteBtn = document.createElement('div');
  deleteBtn.classList.add('delete__btn');

  const textAreaBlock = document.createElement('textarea');
  textAreaBlock.classList.add('textarea_note');
  textAreaBlock.id = `note${id}`;
  textAreaBlock.value = value;

  div.append(textAreaBlock);
  div.append(deleteBtn);
  return div;
}

// delete function

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

// eslint-disable-next-line import/prefer-default-export
export { createNote };

// todo: split files and functions
