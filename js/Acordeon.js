acordeon.addEventListener('click', function(event){

    if(event.target.className === 'acrd-item-name'){

      
let oldItem = document.querySelector('.acrd-item-name.active');

        oldItem.classList.remove('active');

      event.target.classList.toggle('active');

      
      
    } ;
     
  });



 
  
      