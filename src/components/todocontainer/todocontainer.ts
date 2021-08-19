function createToDoApp(){
    
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.style.border = "2px solid black";
    div.style.width = "400px";
    div.style.height = "600px";
    div.style.margin = "0 auto";

    return div;




}



document.body.appendChild(createToDoApp());