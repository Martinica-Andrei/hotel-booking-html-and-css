let $ = document.querySelector.bind(document);
const header = $("#header");
const menu = $("#menu");

const toggleMenu = (e) =>{
    const headerClass = "header-full";
    const overflowHiddenClass = "overflow-hidden";
    if (menu.open){
        menu.close();
        header.classList.remove(headerClass);
        document.documentElement.classList.remove(overflowHiddenClass);
    }
    else{
        menu.show();
        menu.scrollTop = 0;
        header.classList.add(headerClass);
        document.documentElement.classList.add(overflowHiddenClass);
    }
}