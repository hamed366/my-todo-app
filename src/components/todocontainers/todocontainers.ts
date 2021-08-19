import './containers.scss';

function createToDoApp(){
    
    const div = document.createElement('div');
    div.classList.add('containertodo');
    return div;
}



document.body.appendChild(createToDoApp());