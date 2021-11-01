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

// eslint-disable-next-line import/prefer-default-export
export { createNote };
