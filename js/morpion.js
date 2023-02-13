var cases = document.getElementsByClassName("board");

document.addEventListener('click', (e) => {
    let elementId = e.target.id;
    let element = document.getElementById(elementId);

    
     if (elementId != "fond") {
        element.style.background = 'no-repeat url("../img/croix.png")';
     }

    if (!element.classList.contains('clicked')) {
        //addImg();
        console.log(elementId);
        element.classList.add('clicked');
    }
    // console.log("An element was clicked.");
}
);

function addImg(){
     let elementId = e.target.id;
    let element = document.getElementById(elementId);

    element.style.background = 'no-repeat url("../img/croix.png")';
    
}