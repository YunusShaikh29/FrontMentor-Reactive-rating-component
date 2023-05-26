'use strict'

const ratingBtnEl = document.querySelectorAll('.rating_btn');

ratingBtnEl.forEach(btn => {
    btn.addEventListener('click', _ =>{
        localStorage.setItem('user_selected_rating', btn.textContent)
    })
})