
document.addEventListener('DOMContentLoaded', () => {
    
    // Connect to websocket
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
    // When connected, configure form input
    socket.on('connect', () => {
        document.querySelector('#submit').disabled = true;
        document.querySelector('#new-note').onkeyup = () => {
            if (document.querySelector('#new-note').value.length > 0 ) 
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
        };
        document.querySelector('form').onsubmit = () => {
            const note = document.querySelector('#new-note').value;
            document.querySelector('#new-note').value = '';
            document.querySelector('#submit').disabled = true;
            socket.emit('submit note', { 'text': note } );
            return false;
        };
    });

    socket.on("all notes", data => {
        creatediv(data);
    });

});

function creatediv(note) {
        // Create new note for grids
        const new_div = document.createElement('div');
        const txtfield = document.createElement('p');
        txtfield.setAttribute("contenteditable", "true");
        txtfield.innerHTML = note;
        const close = document.createElement('a');
        close.setAttribute("onclick", "javascript:this.parentElement.remove();");
        close.className = 'close';
        close.innerHTML = 'x';
        new_div.appendChild(txtfield);
        new_div.appendChild(close);
        document.querySelector('#container').append(new_div);
}

