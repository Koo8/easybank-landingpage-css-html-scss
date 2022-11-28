const burger_btn = document.querySelector("#burger");
const header = document.querySelector('.header');
const hidden_elements = document.querySelectorAll('.hidden');

burger_btn.addEventListener('click', ()=> {
    console.log('clicked.');
    header.classList.toggle('show');
    hidden_elements.forEach( ele => {
        ele.classList.toggle('hidden');
        ele.classList.toggle('open');
    }

    )
    // menu[0].classList.toggle('show');
    // burger_btn.classList.toggle('close-icon');
})
