/* eslint no-plusplus: "error" */
import { createNote } from './createNote';

const notesWrapper = document.querySelector('.notes__wrapper');
const addNoteButton = document.querySelectorAll('.createNote__btn');

const arrayNotes = document.querySelectorAll('.textarea_note');
const lengthNotes = arrayNotes.length;

let lastIndexNote = lengthNotes < 1 ? 0 : lengthNotes - 1;

if (!document.querySelector('.notes__block')) {
  notesWrapper.append(createNote(lastIndexNote));
}
addNoteButton.forEach((item) => {
  item.addEventListener('click', () => {
    lastIndexNote += 1;
    notesWrapper.append(createNote(lastIndexNote));
  });
});
