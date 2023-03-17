const startForm = document.getElementById('start-form');
const form = document.getElementById('travelForm');


startForm.addEventListener('click', () => {
    form.classList.toggle('active')
})
const bars = document.getElementById('bars');
const linkNav = document.querySelector('#links-nav');

bars.addEventListener('click', () => {
    linkNav.classList.toggle('active')

})
document.onclick = e => {
    if (e.target.id !== "bars" && e.target.id !==  "links-nav"   ){
        linkNav.classList.remove('active')

    }
    
}