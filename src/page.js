function bindEvent(elem, name, cb) {
    if (elem.addEventListener) {
        elem.addEventListener(name, cb);
    } else {
        elem.attachEvent('on'+name, cb);
    }
}

var tab = document.getElementById('cards'),
    link = document.getElementById('bmark');

bindEvent(document.getElementById('extmode'), 'click', function() {
    var elem = document.querySelectorAll('.togl');
    for (var i=0; i<elem.length; i++) {
        elem[i].style.display = (elem[i].style.display === 'none')?'':'none';
    }
});

bindEvent(document.getElementById('addcard'), 'click', function() {
    var src = tab.querySelector('tr:last-child'),
        row = src.cloneNode(true),
        inp = row.querySelector('input');
    inp.value = '';
    inp.className = '';
    src.parentNode.appendChild(row);
});

function toggleBmark(event) {
    var conf = {},
        rows = tab.querySelectorAll('tr');
    for (var i=1; i<rows.length; i++) {
        var inp = rows[i].querySelector('input'),
            card = inp.value || '_';
        conf[card] = rows[i].querySelector('select').value;
        inp.className = (event && !/^[0-9]{4}$/.test(card))?'err':'';
    }
    link.href = "javascript:(function(conf){"+code+"})("+JSON.stringify(conf)+");void(0)";
}

toggleBmark();
bindEvent(tab, 'change', toggleBmark);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59229421-1', 'auto');
ga('send', 'pageview');
