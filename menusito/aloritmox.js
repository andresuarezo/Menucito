var cambios= function Izquierda(){
    let i=0 ;
             var papa= Object.create(document.getElementById('iseria'));
             var madre= papa.__proto__.children;
             var tio = Object.create(document.getElementById('dseria'));
                var tia= tio.__proto__.children;
             var bodi = document.getElementById('todo');
            var adentros= document.getElementsByClassName('adentros');
           var lagos = document.getElementsByClassName('lagos')
            
           
        for(i ; i<=madre.length;i++){
            // for(let j=0; j <= papa.__proto__.children[i].classList.length;j++){
           if (madre[0].className==='tal active'){
               madre[0].className='tal';
              
               tia[0].className='tal';
               tia[2].className='tal active';
    madre[1].className='tal active';
    bodi.style.background = "#275227ec";
              $(adentros).removeClass('delbor');
              $(lagos).removeClass('delbor');
              $(document.getElementsByTagName('i')).removeClass('claroso');
              $(adentros).addClass('losbor');
              $(lagos).addClass('losbor');
              $(adentros).addClass('adentrosu')
              $(document.getElementsByTagName('i')).addClass('verdarte');
              $(document.getElementsByTagName('header')).removeClass('cabecitar');
              $(document.getElementsByTagName('header')).addClass('cabecitav');
  
   
           }else if(madre[1].className==='tal active'){
              madre[1].className='tal';
              tia[2].className='tal';
               tia[1].className='tal active';
              madre[2].className='tal active';
                bodi.style.background = "#3f3cf0e0";
                $(adentros).removeClass('losbor');
                $(lagos).removeClass   ('losbor');
                $(adentros).removeClass('adentrosu');
                $(document.getElementsByTagName('i')).removeClass('verdarte');
                $(adentros).addClass('losborazul');
                $(adentros).addClass('adentrosd');
                $(lagos).addClass   ('losborazul');
                $(document.getElementsByTagName('i')).addClass('azulorsa');
                $(document.getElementsByTagName('header')).removeClass('cabecitav');
                $(document.getElementsByTagName('header')).addClass('cabecita');

           }else{
               madre[2].className='tal';
               tia[1].className='tal';
               tia[0].className='tal active';
               console.log(tia);
               madre[0].className='tal active'
               bodi.style.background = "#e0aaaae0";
               $(adentros).removeClass('losborazul');
               $(adentros).removeClass('adentrosd');
               $(lagos).removeClass   ('losborazul');
               $(document.getElementsByTagName('i')).removeClass('azulorsa');
               $(adentros).addClass('delbor');
               $(document.getElementsByTagName('i')).addClass('claroso');
               $(lagos).addClass   ('delbor');
               $(document.getElementsByTagName('header')).removeClass('cabecita');
               $(document.getElementsByTagName('header')).addClass('cabecitar');
           }
         
       
           
        }
        return madre;
       
         
      
};


var dcambios= function Derecha(){
    let i=0 ;
             var papa= Object.create(document.getElementById('iseria'));
             var madre= papa.__proto__.children;
             var tio = Object.create(document.getElementById('dseria'));
                var tia= tio.__proto__.children;
             var bodi = document.getElementById('todo');
            var adentros= document.getElementsByClassName('adentros');
           var lagos = document.getElementsByClassName('lagos')
            
           
        for(i ; i<=tia.length;i++){
            // for(let j=0; j <= papa.__proto__.children[i].classList.length;j++){
           if (tia[0].className==='tal active'){
               tia[0].className='tal';
              
               madre[0].className='tal';
               madre[2].className='tal active';
    tia[1].className='tal active';
    bodi.style.background = "#3f3cf0e0";
    
              $(adentros).removeClass('delbor');
              $(lagos).removeClass('delbor');
              $(document.getElementsByTagName('i')).removeClass('claroso');
              $(adentros).addClass('losborazul');
              $(lagos).addClass('losborazul');
              $(adentros).addClass('adentrosd')
              $(document.getElementsByTagName('i')).addClass('azulorsa');
              $(document.getElementsByTagName('header')).removeClass('cabecitar');
              $(document.getElementsByTagName('header')).addClass('cabecita');
  
   
           }else if(tia[1].className==='tal active'){
              tia[1].className='tal';
              madre[2].className='tal';
              madre[1].className='tal active';
              tia[2].className='tal active';
              bodi.style.background = "#275227ec";
              
                $(adentros).removeClass('losborazul');
                $(lagos).removeClass   ('losborazul');
                $(adentros).removeClass('adentrosd');
                $(document.getElementsByTagName('i')).removeClass('azulorsa');
                $(adentros).addClass('losbor');
                $(adentros).addClass('adentrosu');
                $(lagos).addClass   ('losbor');
                $(document.getElementsByTagName('i')).addClass('verdarte');
                $(document.getElementsByTagName('header')).removeClass('cabecita');
                $(document.getElementsByTagName('header')).addClass('cabecitav');
    

           }else{
               tia[2].className='tal';
               madre[1].className='tal';
               madre[0].className='tal active';
               console.log(tia);
               tia[0].className='tal active'
               bodi.style.background = "#e0aaaae0";
              
               $(adentros).removeClass('losbor');
               $(adentros).removeClass('adentrosu');
               $(lagos).removeClass   ('losbor');
               $(document.getElementsByTagName('i')).removeClass('verdarte');
               $(adentros).addClass('delbor');
               $(document.getElementsByTagName('i')).addClass('claroso');
               $(lagos).addClass   ('delbor');
               $(document.getElementsByTagName('header')).removeClass('cabecitav');
               $(document.getElementsByTagName('header')).addClass('cabecitar');
   
           }
         
       
           
        }
        return tia;
       
         
      
};

var encor= document.getElementsByClassName('carousel-control-next');
var ancor= document.getElementsByClassName('carousel-control-prev');
ancor.onclick=cambios();
encor.onclick= dcambios();
