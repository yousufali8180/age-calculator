const notesContainer = document.querySelector('.notes-container');
const CreateBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes(){
        notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorge(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}


CreateBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img =document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/1.png';
    notesContainer.appendChild(inputBox).appendChild(img);
    
})

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorge();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            nt.onkeyup = function(){
                updateStorge();
            }
        })
    }
})