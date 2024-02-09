let share_profile = document.getElementById('share_profile');
let showcase = document.getElementById('shareModal');
let shareSheet = document.getElementById('mainShare');
let shareModal = document.getElementById('shareModal');
let closeBtn = document.getElementById('closeBtn');

function visibility(){
    shareSheet.classList.remove('scale-0');
    shareSheet.classList.add('scale-100');
    showcase.classList.remove('opacity-0');
    showcase.classList.remove('pointer-events-none');
    showcase.classList.add('opacity-100');

}

function invisibility(){
    shareSheet.classList.remove('scale-100');
    shareSheet.classList.add('scale-0');
    showcase.classList.remove('opacity-100');
    showcase.classList.add('opacity-0');
    showcase.classList.add('pointer-events-none');

};

share_profile.addEventListener('click', function(){
    visibility();
});

shareModal.addEventListener('click', function(){
    invisibility();
});

closeBtn.addEventListener('click', function(){
    invisibility();
});