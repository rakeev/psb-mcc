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
    var row = tab.querySelector('tr:last-child');
    row.parentNode.appendChild(row.cloneNode(true));
});

function toggleBmark() {
    var conf = {},
        rows = tab.querySelectorAll('tr');
    for (var i=1; i<rows.length; i++) {
        var card = rows[i].querySelector('input').value || '_';
        conf[card] = rows[i].querySelector('select').value;
    }
    link.href = "javascript:(function(conf){"+code+"})("+JSON.stringify(conf)+");void(0)";
}

toggleBmark();
bindEvent(tab, 'change', toggleBmark);
