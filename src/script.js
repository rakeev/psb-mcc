var updateLayout = function(content) {
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
