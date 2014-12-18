var cat = document.getElementById('cat'),
    link = document.getElementById('bmark');

function toggleBmark() {
    link.href = "javascript:(function(cat){"+code+"})('"+cat.value+"');void(0)";
}

toggleBmark();
if (cat.addEventListener) {
    cat.addEventListener('change', toggleBmark);
} else {
    cat.attachEvent('onchange', toggleBmark);
}
