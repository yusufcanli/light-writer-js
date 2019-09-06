function Lwriter(o) {
    if (typeof o.speed == "undefined" || typeof o.speed == "string") {
        console.log('Light Writer: speed is not set or invalid.');
        o.speed = 500;
    }
    var el = document.querySelector(o.el);
    el.style.width = 'max-content';
    el.innerText = '';
    var len = o.text.length - 1;
    if (o.direction == 'right') {
        el.style.borderLeft = '1px solid black';
    } else {
        el.style.borderRight = '1px solid black';
    }

    for (var i = 0; i <= len; i++) {
        ((i) => {
            setTimeout(() => {
                el.innerText += o.text[i];
            }, o.speed * (i + 1))
        })(i)
    }



}

Lwriter({
    el: '#dnm',
    speed: 500,
    direction: 'left',
    text: 'selam'
});

Lwriter({
    el: '#dnm2',
    speed: 500,
    direction: 'right',
    text: 'merhaba'
});