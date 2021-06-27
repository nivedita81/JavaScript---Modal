let openModal = document.getElementById('open-modal');
let overLay = document.getElementById('overlay');
let closeModal = document.getElementById('close-modal');

overLay.style.display = 'none';
openModal.addEventListener('click', function(){
    overLay.style.display = 'block';
})

closeModal.addEventListener('click', function(){
    overLay.style.display = 'none';
})