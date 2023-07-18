
const tema = localStorage.getItem('tema') ?? 'light';

document.documentElement.setAttribute('data-theme', tema);

const btsComponentes = document.querySelectorAll('#chk');

btsComponentes.forEach(elRaiz => {
    elRaiz.classList.add(tema);
})

document.querySelector('#chk').addEventListener('click', () => {
    
    btsComponentes.forEach(elRaiz => {


    if (elRaiz.classList.contains('light')) {
        elRaiz.classList.replace('light', 'dark');
        localStorage.setItem('tema', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');

    } else {
        elRaiz.classList.replace('dark', 'light');
        localStorage.setItem('tema', 'light');
        document.documentElement.setAttribute('data-theme', 'light')
    }

    })


    

});