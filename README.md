# light-writer-js
A simple write effect library.

<a href="https://yusufcanli.github.io/projects/light-writer-js/" target="_blank">DEMO</a>

First add an element with <b>lwriter</b> class. For text use <b>writer</b> attribute. You can increase elements.

```HTML
<input writer="hello" class="lwriter" type="text">
<div writer="friends" class="lwriter"></div>
```
After that add <b>lwriter.js</b> script:

```HTML
<script src="lwriter.js"></script>
```

Then run effect with this call. Example: 

```Javascript
window.addEventListener('load', function(){
    setTimeout(function () {
        lwriter();
    }, 2000);
});

```
With <b>lwspeed</b> attribute, you can set writing speed.

```HTML
<div writer="i'm fast" lwspeed="100" class="lwriter"></div>
<div writer="i'm slow" lwspeed="500" class="lwriter"></div>
```

For writing direction, use <b>lwalign</b> attribute.

```HTML
<div writer="Center" lwalign="center" class="lwriter"></div>
<div writer="Right" lwspeed="right" class="lwriter"></div>
```

# VERSION 2
You don't need jQuery anymore.

Example usage:

```Javascript
Lwriter({
    el: '#selector',
    speed: 500,
    direction: 'left',
    text: 'Hi! I'm Light Writer!'
});

```
