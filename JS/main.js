const startForm = document.getElementById('start-form');
const form = document.getElementById('travelForm');


startForm.addEventListener('click', function handleClick() {
    const initialText = 'Start';

    if (startForm.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        startForm.innerHTML ='<span>Close</span>';
        form.classList.toggle('active')
    } else {
        startForm.textContent = initialText;
        form.classList.toggle('active')
    }
});

const bars = document.getElementById('bars');
const linkNav = document.querySelector('#links-nav');

bars.addEventListener('click', () => {
    linkNav.classList.toggle('active')

})
document.onclick = e => {
    if (e.target.id !== "bars" && e.target.id !== "links-nav") {
        linkNav.classList.remove('active')

    }

}