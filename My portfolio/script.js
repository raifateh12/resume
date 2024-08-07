let hamburger = document.getElementById('hamburger');
let menu = document.querySelector('.menu');
hamburger.addEventListener('click',function()
{
    let hamIcon = this.querySelector('.hamburger-icon');
    let crossIcon = this.querySelector('.cross-icon');
    if(hamIcon.style.display==='none')
    {
       
        hamIcon.style.display='inline-block';
        menu.style.display='none';
        crossIcon.style.display='none';
    }
    else{

        crossIcon.style.display='inline-block';
        hamIcon.style.display='none';
        menu.style.display='block';

    }
}) 