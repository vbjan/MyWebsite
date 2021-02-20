


/* TODO: Implement that portfolio item stays black after click*/
var firstClick = true;
function simple_show_hide(button_id,item_id){

    /*const portfolioButtonItems = document.querySelectorAll('.portfolio-item-wrapper')
    portfolioButtonItems.forEach( (portfolioButtonItem)=> {
        portfolioButtonItem.classList.remove('img-darken')
    })*/

    /* Show the item */
    const portfolioDescItems = document.querySelectorAll('.portfolio-item-desc-wrapper')
    portfolioDescItems.forEach( (portfolioDescItem)=> {
        /* PRE: everything was hidden -> show item_id */
        if(portfolioDescItem.id==item_id && (portfolioDescItem.style.display=="none" || firstClick==true)){
            portfolioDescItem.style.display="inherit";
            /*document.getElementById(button_id).classList.add('img-darken')*/
        }
        else {
            portfolioDescItem.style.display = "none";
        }
    })
    firstClick = false;

}

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        /*console.log(portfolioItem);*/
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

/* SOME IDEAS: */
/*
function every_item_is_hidden(){
    const portfolioDescItems = document.querySelectorAll('.portfolio-item-desc-wrapper')
    portfolioDescItems.forEach( (portfolioDescItem)=> {
        if(portfolioDescItem.style.display!="none"){
            return false;
        }
    })
    return true;
}

function find_shown_item_id(){
    const portfolioDescItems = document.querySelectorAll('.portfolio-item-desc-wrapper')
    portfolioDescItems.forEach( (portfolioDescItem)=> {
        if(portfolioDescItem.style.display!="none"){
            return portfolioDescItem.id;
        }
    })
    return false;
}*/

/*var clickedsth=false;
var clickedID = "none";
function show_hide(button_id,item_id){

    console.log(find_shown_item_id())
    var displayValue_item_id = document.getElementById(item_id).style.display;

    if (every_item_is_hidden()==true){
        document.getElementById(button_id).classList.add('img-darken')
        const portfolioDescItems = document.querySelectorAll('.portfolio-item-desc-wrapper')
        portfolioDescItems.forEach( (portfolioDescItem)=> {
            portfolioDescItem.style.display="none";
        })
        document.getElementById(item_id).style.display="inherit";
    }
    if( find_shown_item_id()==item_id){
        document.getElementById(button_id).classList.remove('img-darken')
        const portfolioDescItems = document.querySelectorAll('.portfolio-item-desc-wrapper')
        portfolioDescItems.forEach( (portfolioDescItem)=> {
            portfolioDescItem.style.display="none";
        })
    }
    else{

    }
}*/