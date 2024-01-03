document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.querySelector('.notes-container');
    const button = document.getElementById('btn');

    show();

    button.addEventListener('click', () => {
        const paragraph = document.createElement('p');
        const image = new Image();
        image.src = 'images/delete.png'
        image.classList.add('delete-image');
        paragraph.classList.add('input-box');
        paragraph.setAttribute('contenteditable', 'true');

        paragraph.appendChild(image);
        notesContainer.appendChild(paragraph);
    })

    notesContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.parentElement.remove();
            save();
        } else if (e.target.tagName === 'P') {
            notes = document.querySelectorAll('.input-box');
            notes.forEach(nt => {
                nt.onkeyup =() => {
                    save();
                }
            })
        }
    });

    function save () {
        localStorage.setItem('notes', notesContainer.innerHTML)
    }

    function show () {
        notesContainer.innerHTML = localStorage.getItem('notes');
    }
})