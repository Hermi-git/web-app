document.addEventListener("DOMContentLoaded", function () {
  const addnote = document.getElementById("addbtn");
  const board = document.getElementById("board");
  const closebtn = document.getElementById("closebtn");
  const createbtn = document.getElementById("createbtn");
  const noteApp = document.getElementById("noteApp");
  const inputNote = document.getElementById("input-note");

  addnote.addEventListener("click", function () {
    board.style.display = "block";
    inputNote.focus();
  });

  closebtn.addEventListener("click", function () {
    board.style.display = "none";
    inputNote.value = "";
  });
  createbtn.addEventListener("click", function () {
    const noteValue = inputNote.value;
    const draftNote = document.createElement("div");
    draftNote.className = "note newnote";
    draftNote.textContent = noteValue;
    noteApp.appendChild(draftNote);
    

    const twobtn = document.createElement("div");
    twobtn.className = "divbtn";
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.className = "btnn";
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.className = "btnn";

    twobtn.appendChild(editbtn);
    twobtn.appendChild(deletebtn);
    draftNote.appendChild(twobtn);


    deletebtn.addEventListener("click", function () {
      event.stopPropagation();
      draftNote.remove();
    });

    editbtn.addEventListener("click", function () {
      event.stopPropagation();
      draftNote.remove();
      board.style.display = "block";
      inputNote.value = noteValue;
      createbtn.textContent = "Save";
    });
  draftNote.addEventListener("click", function () {
    const read = document.createElement("div");
    read.className = "reading";
    read.textContent = noteValue;
    const closebtn = document.createElement("button");
    closebtn.className = "btnn divbtn";
    closebtn.textContent = "close";
    read.appendChild(closebtn);
    noteApp.appendChild(read);

    closebtn.addEventListener("click", function () {
      read.remove();
    });
  });
    inputNote.value = "";
    board.style.display = "none";
  });
});


