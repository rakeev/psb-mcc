var bonus = {"fuel":"function(mcc){return[5172,5541,5542,5983].indexOf(mcc)>=0}","groc":"function(mcc){return[5411,5422,5441,5451,5462,5499,5921,5811,5812,5813,5814].indexOf(mcc)>=0}","garm":"function(mcc){return[5094,5137,5139,5331,5611,5621,5631,5651,5661,5681,5691,5697,5698,5699,5931,5944,5949,5950,7296,5641].indexOf(mcc)>=0}","home":"function(mcc){return[1520,1711,1731,1740,1750,1761,1771,1799,2791,2842,5021,5039,5046,5051,5065,5072,5074,5085,5198,5200,5211,5231,5251,5261,5712,5713,5714,5718,5719,5722,7622,7623,7629,7631,7641,7692,7699].indexOf(mcc)>=0}","avia":"function(mcc){return mcc>=3e3&&mcc<3300||[4112,4411,4511].indexOf(mcc)>=0}"}, script = "var%20updateLayout%3Dfunction(a)%7B%24.each(a.data.Transactions%2Cfunction(a%2Ct)%7Bif(!t.Mcc)return!0%3Bvar%20n%3D%24(%22*%5Bdata-id%3D%22%2Bt.Id%2B%22%5D%22)%3Bn.find(%22td%5Bdata-category%5D%20.data%22).prepend(%22%3Cb%3E%22%2Bt.Mcc%2B%22%3C%2Fb%3E%20%22)%2CisBonus(t.Mcc)%26%26n.find(%22td%5Bdata-amount%5D%22).prepend('%3Cb%20style%3D%22color%3A%20green%22%3E%2B5%25%3C%2Fb%3E%20')%7D)%7D%3BupdateLayout(window.transactionsPage)%2CMeniga.EventBus.bind(Meniga.Transactions.Events.TransactionsListLoaded%2CupdateLayout)%3B";
