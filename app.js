// Buena suerte

const input = document.querySelector('#text');

input.addEventListener('input', function(event){
    console.log(event.target.value.length);
    document.querySelector('#text-length').textContent = event.target.value.length;
})