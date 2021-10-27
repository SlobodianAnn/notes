/* eslint no-plusplus: "error" */
import { createNote } from './localStorage';

const notesWrapper = document.querySelector('.notes__wrapper');
const addNoteButton = document.querySelectorAll('.createNote__btn');

let counter = 0;

addNoteButton.forEach((item) => {
  item.addEventListener('click', () => {
    counter += 1;
    notesWrapper.append(createNote(counter));
  });
});
