const text = [
    '3D MODELING',
    'CODING',
    'CYBER SECURITY',
    'NETWORKING',
    'TEXTURE WORK',
    'SOFTWARE ENGINEERING',
    'HARDWARE ENGINEERING'
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing').textContent = letter + '_';

    if (letter.length === currentText.length) {
        count++;
        index = 0;

        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
})();

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('boot-screen').style.display = 'none';
    }, 4000);
});
