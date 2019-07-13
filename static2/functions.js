var modal = document.getElementById('l_b_mod');
var modal2 = document.getElementById('l_b_mod2');
var modal3 = document.getElementById('l_b_mod3');
var modal4 = document.getElementById('l_b_mod4');
var modal5 = document.getElementById('l_b_mod5');
var modal6 = document.getElementById('l_b_mod6');
var modal7 = document.getElementById('l_b_mod7');
var modal8 = document.getElementById('l_b_mod8');
var modalBtn = document.getElementById('modalBtn');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
var modalBtn5 = document.getElementById('modalBtn5');
var modalBtn6 = document.getElementById('modalBtn6');
var modalBtn7 = document.getElementById('modalBtn7');
var modalBtn8 = document.getElementById('modalBtn8');
var closeBtn = document.getElementsByClassName('close_b')[0];
var closeBtn2 = document.getElementsByClassName('close_b2')[0];
var closeBtn3 = document.getElementsByClassName('close_b3')[0];
var closeBtn4 = document.getElementsByClassName('close_b4')[0];
var closeBtn5 = document.getElementsByClassName('close_b5')[0];
var closeBtn6 = document.getElementsByClassName('close_b6')[0];
var closeBtn7 = document.getElementsByClassName('close_b7')[0];
var closeBtn8 = document.getElementsByClassName('close_b8')[0];


modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
modalBtn4.addEventListener('click', openModal4);
modalBtn5.addEventListener('click', openModal5);
modalBtn6.addEventListener('click', openModal6);
modalBtn7.addEventListener('click', openModal7);
modalBtn8.addEventListener('click', openModal8);
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);
closeBtn5.addEventListener('click', closeModal5);
closeBtn6.addEventListener('click', closeModal6);
closeBtn7.addEventListener('click', closeModal7);
closeBtn8.addEventListener('click', closeModal8);
window.addEventListener('click', outsideClick);
window.addEventListener('click', outsideClick2);
window.addEventListener('click', outsideClick3);
window.addEventListener('click', outsideClick4);
window.addEventListener('click', outsideClick5);
window.addEventListener('click', outsideClick6);
window.addEventListener('click', outsideClick7);
window.addEventListener('click', outsideClick8);



function openModal() {
    modal.style.display = 'block';
}

function openModal2() {
    modal2.style.display = 'block';
}

function openModal3() {
    modal3.style.display = 'block';
}

function openModal4() {
    modal4.style.display = 'block';
}

function openModal5() {
    modal5.style.display = 'block';
}

function openModal6() {
    modal6.style.display = 'block';
}

function openModal7() {
    modal7.style.display = 'block';
}

function openModal8() {
    modal8.style.display = 'block';
}


function closeModal() {
    modal.style.display = 'none';
}

function closeModal2() {
    modal2.style.display = 'none';
}

function closeModal3() {
    modal3.style.display = 'none';
}

function closeModal4() {
    modal4.style.display = 'none';
}

function closeModal5() {
    modal5.style.display = 'none';
}

function closeModal6() {
    modal6.style.display = 'none';
}

function closeModal7() {
    modal7.style.display = 'none';
}

function closeModal8() {
    modal8.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal){
        modal.style.display = 'none';
    }
}

function outsideClick2(e) {
    if (e.target == modal2){
        modal2.style.display = 'none';
    }
}

function outsideClick3(e) {
    if (e.target == modal3){
        modal3.style.display = 'none';
    }
}

function outsideClick4(e) {
    if (e.target == modal4){
        modal4.style.display = 'none';
    }
}

function outsideClick5(e) {
    if (e.target == modal5){
        modal5.style.display = 'none';
    }
}

function outsideClick6(e) {
    if (e.target == modal6){
        modal6.style.display = 'none';
    }
}

function outsideClick7(e) {
    if (e.target == modal7){
        modal7.style.display = 'none';
    }
}

function outsideClick8(e) {
    if (e.target == modal8){
        modal8.style.display = 'none';
    }
}