# light-writer-js
A simple write effect library.

First add an input (or textarea) with <b>lwriter</b> class. For text use <b>writer</b> attribute. You can increase inputs.

```HTML
<input writer="hello" class="lwriter" type="text">
<input writer="friends" class="lwriter" type="text">
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
