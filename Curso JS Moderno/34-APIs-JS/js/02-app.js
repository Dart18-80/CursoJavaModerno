//Preciamente vimos getclientRect, que nos premitia identificar cuando un elemento esta visible, 
//Existe otra API llamada Intersection Observer

document.addEventListener('DOMContentLoaded', () =>{
    const observe = new IntersectionObserver( entries =>{
        if(entries[0].isIntersecting){
            console.log('Ya esta visible');
        }
    });

    observe.observe(document.querySelector('.premium'));

});