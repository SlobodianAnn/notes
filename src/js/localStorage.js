import { createNote } from './createNote';

let textArea = document.querySelectorAll('.textarea_note');
const noteWrapper = document.querySelector('.notes__wrapper');

document.addEventListener('change', () => setItemsToLocalStorage());

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
