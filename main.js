let button = document.getElementById('button-that-change-divs-color');

if (null !== button) {
    button.addEventListener('click', () => {
        let divs = document.getElementsByTagName('div');
        if (divs.length) {
            for (let div of divs) {
                div.classList.toggle('red');
            }
        } else {
            console.info('Divs not found! Nothing to change!');
        }
        divs = undefined;
    })
} else {
    console.error('Button that change divs color not found!');
}