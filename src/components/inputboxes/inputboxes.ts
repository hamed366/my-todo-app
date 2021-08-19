import './inputboxes.scss';
function createTexArea() {
    const txtarea = document.createElement('textarea');
    txtarea.classList.add('todo-class-area');
    txtarea.placeholder="enter...";

    return txtarea;
}

document.body.appendChild(createTexArea());