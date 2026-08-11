let $ = document.querySelector.bind(document);
const menu = $("#menu");

const toggleMenu = (e) =>{
    if (menu.open){
        menu.close();
    }
    else{
        menu.show();
    }
}