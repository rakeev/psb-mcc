var codes = {
    'fuel': [5172, 5541, 5542, 5983],
    'avia': ['3000-3299', 4112, 4411, 4511],
    'groc': [5411, 5422, 5441, 5451, 5462, 5499, '5811-5814', 5921],
    'garm': [5094, 5137, 5139, 5331, 5611, 5621, 5631, 5641, 5651,
        5661, 5681, 5691, '5697-5699', 5931, 5944, 5949, 5950, 7296],
    'home': [1520, 1711, 1731, 1740, 1750, 1761, 1771, 1799, 2791, 2842, 5021, 5039,
        5046, 5051, 5065, 5072, 5074, 5085, 5198, 5200, 5211, 5231, 5251, 5261,
        '5712-5714', 5718, 5719, 5722, 7622, 7623, 7629, 7631, 7641, 7692, 7699]
};

var isBonus = function(mcc, cat) {
    return $.grep(codes[cat], function(val, idx) {
        var chunks = (val + '').split('-');
        if (chunks.length > 1) {
            return (mcc >= chunks[0]) && (mcc <= chunks[1]);
        }
        return (val == mcc);
    }).length > 0;
};

var updateLayout = function(content) {
    $.each(content.data.Transactions, function(idx, val) {
        var dat = val.Data.match(/[0-9]{6}\.\.([0-9]{4})/),
            row = $('*[data-id='+val.Id+']');
        if (!dat || !val.Mcc) {
            return true;
        }
        $.each(conf, function(card, cat) {
            var valid = (card == dat[1]) || (card == '_');
            if (!valid || !isBonus(val.Mcc, cat)) {
                return true;
            }
            var cell = row.find('td[data-amount]'),
                bon = Math.abs(cell.data('amount')*0.05).toFixed(2);
            cell.prepend('<b style="color: green" title="~'+bon+'">+5%</b> ');
        });
        row.find('td[data-category] .data').prepend('<b>'+val.Mcc+'</b> ');
    });
};

updateLayout(window.transactionsPage);
Meniga.EventBus.bind(Meniga.Transactions.Events.TransactionsListLoaded, updateLayout);
