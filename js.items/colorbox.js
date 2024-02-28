/*                            Prot 10               */
const buttonconfigbg = document.getElementById('configbg');
const buttonconfigframe = document.getElementById('configframe');
const main = document.getElementById('rgbboxes');
const colorboxbg = document.querySelector('.colorboxbg');
const colorboxframe = document.querySelector('.colorboxframe');

buttonconfigbg.addEventListener('click', function(){
    if(colorboxbg.style.display === 'none' || colorboxbg.style.display === '')
    {
        colorboxbg.style.display = 'flex';
        main.style.display = 'flex';
        colorboxframe.style.display = 'none';
    }
    else
    {
        colorboxbg.style.display = 'none';
        main.style.display = 'none';
    }
});

buttonconfigframe.addEventListener('click', function(){
    if(colorboxframe.style.display === 'none' || colorboxframe.style.display === '')
    {
        colorboxframe.style.display = 'flex';
        main.style.display = 'flex';
        colorboxbg.style.display = 'none';
    }
    else
    {
        colorboxframe.style.display = 'none';
        main.style.display = 'none';
    }
});


const rbgbg=document.getElementById('redcolorbg');    //bg range inputs
const rbgbglb=document.getElementById('redlabelbg');
const gbgbglb=document.getElementById('greenlabelbg');
const gbgbg=document.getElementById('greencolorbg');
const bbgbg=document.getElementById('bluecolorbg');
const bbgbglb=document.getElementById('bluelabelbg');
const bgtar=document.querySelector('.con2');

    rbgbg.addEventListener('input', function(){
        updateRGBBG();
    });
    gbgbg.addEventListener('input', function(){
        updateRGBBG();
    });
    bbgbg.addEventListener('input', function(){
        updateRGBBG();
    });

    function updateRGBBG()
    {
        let r=rbgbg.value;
        let g=gbgbg.value;
        let b=bbgbg.value;
        bgtar.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
        bgtar.style.borderColor = 'rgb('+r+','+g+','+b+')';
        rbgbglb.textContent = r;
        gbgbglb.textContent = g;
        bbgbglb.textContent = b;
    }

const rframe=document.getElementById('redcolorframe');   //bg range inputs
const gframe=document.getElementById('greencolorframe');
const bframe=document.getElementById('bluecolorframe');
const rframelb=document.getElementById('redlabelframe');   //bg range inputs
const gframelb=document.getElementById('greenlabelframe');
const bframelb=document.getElementById('bluelabelframe');
const frametar=document.querySelector('.color');

    rframe.addEventListener('input', function(){
        updateRGBFrame();
    });
    gframe.addEventListener('input', function(){
        updateRGBFrame();
    });
    bframe.addEventListener('input', function(){
        updateRGBFrame();
    });

    function updateRGBFrame()
    {
        let r=rframe.value;
        let g=gframe.value;
        let b=bframe.value;
        const ele=document.querySelectorAll('.color');

            ele.forEach(ele =>
                {
                    ele.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
                });
        rframelb.textContent = r;
        gframelb.textContent = g;
        bframelb.textContent = b;
        //frametar.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }




