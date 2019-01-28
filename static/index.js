
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('#submit').disabled = true;
    document.querySelector('#new-note').onkeyup = () => {
        if (document.querySelector('#new-note').value.length > 0 ) 
        document.querySelector('#submit').disabled = false;
    else
        document.querySelector('#submit').disabled = true;
    };
    document.querySelector('form').onsubmit = () => {
        document.querySelector('#submit').disabled = true;
    };
});

/* function creatediv(note, index) {
        // Create grid for new submitted note
        //const template = Handlebars.compile("<div class=\"notes-grid-{{ index }}\"><p contenteditable=\"true\">{{ value }}></p><a href=\"#\" onclick=\"javascript:this.parentElement.remove();\" class=\"close\"></a></div>");
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
        //const content = template({'index': index, 'value': note});
        document.querySelector('#container').append(new_div);
}

*/
