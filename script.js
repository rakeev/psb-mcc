function isFuel(mcc) {
    return [5172, 5541, 5542, 5983].indexOf(mcc) >= 0;
}
function isGrocery(mcc) {
    return [5411, 5422, 5441, 5451, 5462, 5499, 5921, 5811, 5812, 5813, 5814].indexOf(mcc) >= 0;
}
function isClothes(mcc) {
    return [5094, 5137, 5139, 5331, 5611, 5621, 5631, 5651, 5661, 5681, 5691, 5697, 5698, 5699, 5931, 5944, 5949, 5950, 7296, 5641].indexOf(mcc) >= 0;
}
function isHome(mcc) {
    return [1520, 1711, 1731, 1740, 1750, 1761, 1771, 1799, 2791, 2842, 5021, 5039, 5046, 5051, 5065, 5072, 5074, 5085, 5198, 5200, 5211, 5231, 5251, 5261, 5712, 5713, 5714, 5718, 5719, 5722, 7622, 7623, 7629, 7631, 7641, 7692, 7699].indexOf(mcc) >= 0;
}
function isAvia(mcc) {
    return ((mcc >= 3000) && (mcc < 3300)) || [4112, 4411, 4511].indexOf(mcc) >= 0;
}

var isBonus = function(mcc) {
    return false;
}, updateLayout = function(content) {
    $.each(content.data.Transactions, function(idx, val) {
        if (!val.Mcc) {
            return true;
        }
        var row = $('*[data-id='+val.Id+']');
        row.find('td[data-category] .data').prepend('<b>'+val.Mcc+'</b> ');
        if (isBonus(val.Mcc)) {
            row.find('td[data-amount]').prepend('<b style="color: green">+5%</b> ');
        }
    });
};
updateLayout(window.transactionsPage);
Meniga.EventBus.bind(Meniga.Transactions.Events.TransactionsListLoaded, updateLayout);
