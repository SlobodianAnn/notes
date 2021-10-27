let textArea = document.querySelectorAll('.textarea_note');
const noteWrapper = document.querySelector('.notes__wrapper');

document.addEventListener('change', () => setItemsToLocalStorage());

// setItems to LocalStorage
function setItemsToLocalStorage() {
  textArea = document.querySelectorAll('.textarea_note');
  textArea.forEach((item) => {
    item.addEventListener('change', () => {
      localStorage.setItem(`${item.id}`, item.value);
    });
  });
}

// fill notes after realod
const arrayOfKeysLocalStorage = Object.keys(localStorage).sort();

arrayOfKeysLocalStorage.forEach((key, index) => {
  const exisitingNote = document.querySelector(`#note${index}`);
  if (key === `note${index}` && !exisitingNote) {
    const newNote = createNote(index, localStorage.getItem(`note${index}`));
    noteWrapper.append(newNote);
  } else if (document.querySelector(`#note${index}`)) {
    exisitingNote.value = localStorage.getItem(`note${index}`);
  }
});

// createNote
function createNote(id, value = '') {
  const div = document.createElement('div');
  div.classList.add('notes__block');

  const textAreaBlock = document.createElement('textarea');
  textAreaBlock.classList.add('textarea_note');
  textAreaBlock.id = `note${id}`;
  textAreaBlock.value = value;

  div.append(textAreaBlock);
  return div;
}

// eslint-disable-next-line import/prefer-default-export
export { createNote };

// to do: fix saving info
// to do: id note starts from 0 when reload page
// split files and functions
