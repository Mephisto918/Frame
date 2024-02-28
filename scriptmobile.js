const colorSelect = document.getElementById('colorframe');  //frame
const target=document.getElementById('color');


function changeColorFr(value)
{
    const ele=document.querySelectorAll('.color');

    ele.forEach(ele =>
        {
            ele.style.backgroundColor = value;
        });
}

const bgcolor=document.getElementById('colorbg');  //bg
const targetbg=document.querySelector('.con2'); //yawa walay . piste

function changeColorBG(value)
{
    targetbg.style.borderColor= value;
    targetbg.style.backgroundColor= value;
}

const resval=document.getElementById('consize');     //container size
const con=document.querySelectorAll('.con, .con2');

    resval.addEventListener('input', function () 
    {
        const value = parseInt(this.value);
        const percentsizedaw= 0.25;
        
        con.forEach(con =>{
            con.style.height = value + 'px';
            con.style.width = value + 'px';
            con.style.marginTop = (value+percentsizedaw) - value + '%';
            
            

            const borderSize= value*percentsizedaw;
            con.style.borderWidth =borderSize +'px';
        });
    });


const imgsize = document.getElementById('imgsize');  
const photsize = document.getElementById('photo');
    imgsize.addEventListener('input', function () {
     const value = parseInt(this.value);
        photsize.style.backgroundSize  = value + '%';
    });

    
/*   prot 8 log || has no security restrictions because File API  */   
const imgFile = document.getElementById('imgFile');
const photo = document.getElementById('photo');

imgFile.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        photo.style.backgroundImage = `url(${e.target.result})`;
    };
    
    reader.readAsDataURL(file);
});

/*  prot 8 log || has security restrictions because FileReader API
const imgFile = document.getElementById('imgFile');
const applybt = document.getElementById('apply');
const imgtar = document.getElementById('photo');

applybt.addEventListener('click', function(){
    if(imgFile.files.length > 0)
    {
        const file = imgFile.files[0];
        const reader = new FileReader();

        reader.onload = function(e)
        {
            imgtar.style.backgroundImage = 'url(${e.target.result})';
        };
        reader.readAsDataURL(file);
    }

});
*/


const imghor = document.getElementById('imghor');   //image location control
const imgver = document.getElementById('imgver');
const phototar = document.getElementById('photo');
    
        imghor.addEventListener('input', function () 
        {
             updateBGPos();
        });
        imgver.addEventListener('input', function () 
        {
             updateBGPos();
        });
        function updateBGPos()
        {
            let x=imghor.value;
            let y=imgver.value;
            phototar.style.backgroundPosition  = x+'% '+y+'%';
        }

document.addEventListener('DOMContentLoaded', function() {   //to set the input range at the middle upon loading the browser
    const ranger = document.querySelectorAll('#imghor, #imgver');
    ranger.forEach(range =>{
        range.value = range.max/2;
    });
});



const inputrange=document.getElementById('consize');   //media query alternatives for range input values

function updateRangeWithScreen() /* prot 8 */ 
{
    if(window.innerWidth <= 690 )/* mobile scaling */ 
    {
        inputrange.setAttribute('min', '200' );
        inputrange.setAttribute('max','335');
        inputrange.setAttribute('value', '150');
    }
    else
    {
        inputrange.setAttribute('min', '300' );
        inputrange.setAttribute('max','475');
        inputrange.setAttribute('value', '300');
    }
}
updateRangeWithScreen();
window.addEventListener('resize', updateRangeWithScreen);










