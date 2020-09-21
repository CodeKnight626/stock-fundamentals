// DOM manipulation
$(document).ready(function() {
    //Variables defined to contruct a url to look for data
    var sandbox = "https://sandbox.iexapis.com/stable/stock/"
    var cloud = "https://cloud.iexapis.com/stable/stock/"
    var plataform = sandbox
    var sandboxToken = "?token=Tsk_3e712c8573f749c3aaed5e9d47a56b08"
    var cloudToken = "?token=pk_fef2e5ad5efe46e7982adb5b5857c043"
    var token = sandboxToken

    //Variables where we'll store data
    var marketCap = 0
    var PE = ""
    var EPS = 0
    var ShsOutstand = ""
    var income = ""
    var PEG = ""
    var ShsFloat = ""
    var shortFloat = ""
    var sales = ""
    var PCFP =  ""
    var ROE = ""
    var targetPrice = ""
    var bookSh = ""
    var quickRatio = ""
    var grossMargin = ""
    var RSI14 =""
    var cashSh = ""
    var currentRatio =""
    var operMargin = ""
    var beta = ""
    var dividend = 0
    var debtEq = ""
    var profitMargin = ""
    var ATR = ""
    var dividendPercentage = ""
    var LTDebtEq = ""
    var Volatility = ""
    var price = ""
    var longTermDebt = ""
    var shareholderEquity = ""
    var inventory = ""
    var currentAssets = ""
    var totalCurrentLiabilities = ""
    var pegRatio = ""
    var currentRatio = ""
    var cashFlow = ""
    var netIncome = ""

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
            break;
            }
        }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

        //Get the symbol that's the user is looking for
        var symbol = document.getElementById("symbol").value

        //URLs used to get data
        var statsUrl = plataform + symbol + "/stats" + token
        var EarningsUrl =  plataform + symbol + "/earnings" + token
        var intradaypricesUrl =  plataform + symbol + "/intraday-prices" + token
        var dividendUrl = plataform + symbol + "/dividends" + token
        var advancedStatsUrl = plataform + symbol + "/advanced-stats" + token
        var balanceUrl = plataform + symbol + "/balance-sheet" + token
        var cashFlowUrl = plataform + symbol + "/cash-flow" + token
        var priceTargetUrl = plataform + symbol + "/price-target" + token

        $ajaxUtils.sendGetRequest(priceTargetUrl, function (res) {
            targetPrice = res.priceTargetAverage
            document.getElementById("targetPriceAns").innerHTML = targetPrice;
        });
        sleep(100);


        $ajaxUtils.sendGetRequest(cashFlowUrl, function (res) {
            cashFlow = res.cashflow[0].cashFlow
            netIncome = res.cashflow[0].netIncome
            document.getElementById("incomeAns").innerHTML = netIncome;
        });
        sleep(100);

        $ajaxUtils.sendGetRequest(statsUrl, function (res) {
            marketCap = res.marketcap
            ShsOutstand = res.sharesOutstanding
            console.log(marketCap)
            console.log(cashFlow)
            document.getElementById("marketCapAns").innerHTML = marketCap;
            document.getElementById("shsOutstandAns").innerHTML = ShsOutstand;
            document.getElementById("PFCFAns").innerHTML = parseFloat(marketCap / cashFlow).toFixed(2);
        });
        sleep(100);

        $ajaxUtils.sendGetRequest(dividendUrl, function (res) {
            console.log(dividendUrl)
            dividend = res[0].amount
            document.getElementById("dividendAns").innerHTML = dividend;
        });
        sleep(25);

        $ajaxUtils.sendGetRequest(EarningsUrl, function (res) {
            EPS = res.earnings[0].actualEPS
            document.getElementById("EPSAns").innerHTML = EPS;
        });
        sleep(200);

        $ajaxUtils.sendGetRequest(intradaypricesUrl, function (res) {
            price = res[0].close
            document.getElementById("priceAns").innerHTML = price;
            document.getElementById("PRAns").innerHTML = price / EPS;
            document.getElementById("dividendYieldAns").innerHTML = parseFloat((dividend/price) * 100).toFixed(2) + "%";
        });
        sleep(100);


        $ajaxUtils.sendGetRequest(advancedStatsUrl, function (res) {
            debtEq = res.debtToEquity
            pegRatio = res.pegRatio
            document.getElementById("debtToEqAns").innerHTML = debtEq;
            document.getElementById("pegRatioAns").innerHTML = pegRatio;
        });
        sleep(100);

        $ajaxUtils.sendGetRequest(balanceUrl, function (res) {
            longTermDebt = res.balancesheet[0].longTermDebt
            shareholderEquity = res.balancesheet[0].shareholderEquity
            inventory = res.balancesheet[0].inventory
            currentAssets = res.balancesheet[0].currentAssets
            totalCurrentLiabilities = res.balancesheet[0].totalCurrentLiabilities
            currentRatio = currentAssets / totalCurrentLiabilities
            LTDebtEq = longTermDebt / shareholderEquity
            quickRatio = (currentAssets - inventory) / totalCurrentLiabilities
            
            document.getElementById("currentRatioAns").innerHTML = parseFloat(currentRatio).toFixed(2);
            document.getElementById("LTDebtEqAns").innerHTML = parseFloat(LTDebtEq).toFixed(2);
            document.getElementById("quickRatioAns").innerHTML = parseFloat(quickRatio).toFixed(2);
        });
        sleep(50);

        //document.getElementById("marketCapAns").innerHTML = marketCap;
        /*document.getElementById("dividendAns").innerHTML = dividend;
        document.getElementById("dividendYieldAns").innerHTML = parseFloat((dividend/price) * 100).toFixed(2) + "%";
        document.getElementById("EPSAns").innerHTML = EPS;
        document.getElementById("priceAns").innerHTML = price;
        document.getElementById("PRAns").innerHTML = price / EPS;*/

        /*
      	var symbol = document.getElementById("symbol").value
        var url = "https://sandbox.iexapis.com/stable/stock/" + symbol + "/balance-sheet?token=Tsk_3e712c8573f749c3aaed5e9d47a56b08"
        //var url = "https://www.difmarkets.com/es/articulos/que-es-el-market-cap-de-las-empresas-capitalizacion/"
        console.log(url)

        // Call server to get the name
        $ajaxUtils.sendGetRequest(url, function (res) {
            var answer = res
            console.log(answer)
            var symbol = res.symbol
            var reportDate = res.balancesheet[0].reportDate
            var fiscalDate = res.balancesheet[0].fiscalDate
            var currentCash = res.balancesheet[0].currentCash
            var shortTermInvestments = res.balancesheet[0].shortTermInvestments
            var receivables = res.balancesheet[0].receivables
            var inventory = res.balancesheet[0].inventory
            var otherCurrentAssets = res.balancesheet[0].otherCurrentAssets
            var currentAssets = res.balancesheet[0].currentAssets
            var longTermInvestments = res.balancesheet[0].longTermInvestments
            var propertyPlantEquipment = res.balancesheet[0].propertyPlantEquipment
            var goodwill = res.balancesheet[0].goodwill
            var intangibleAssets = res.balancesheet[0].intangibleAssets
            var otherAssets = res.balancesheet[0].otherAssets
            var totalAssets = res.balancesheet[0].totalAssets
            var accountsPayable = res.balancesheet[0].accountsPayable
            var currentLongTermDebt = res.balancesheet[0].currentLongTermDebt
            var otherCurrentLiabilities = res.balancesheet[0].otherCurrentLiabilities
            var totalCurrentLiabilities = res.balancesheet[0].totalCurrentLiabilities
            var longTermDebt = res.balancesheet[0].longTermDebt
            var otherLiabilities = res.balancesheet[0].otherLiabilities

            var minorityInterest = res.balancesheet[0].minorityInterest
            var totalLiabilities = res.balancesheet[0].totalLiabilities
            var commonStock = res.balancesheet[0].commonStock
            var retainedEarnings = res.balancesheet[0].retainedEarnings
            var treasuryStock = res.balancesheet[0].treasuryStock

            var capitalSurplus = res.balancesheet[0].capitalSurplus
            var shareholderEquity = res.balancesheet[0].shareholderEquity
            var netTangibleAssets = res.balancesheet[0].netTangibleAssets

            document.getElementById("fundamentals-symbol").innerHTML = "Simbolo: " + symbol;
            document.getElementById("fundamentals-reportDate").innerHTML = "Fecha de reporte: " + reportDate;
            document.getElementById("fundamentals-fiscalDate").innerHTML = "Fecha fiscal: " + fiscalDate;
            document.getElementById("fundamentals-currentCash").innerHTML = "Efectivo actual: " + currentCash;
            document.getElementById("fundamentals-shortTermInvestments").innerHTML = "Inversion a corto Plazo: " + shortTermInvestments;
            document.getElementById("fundamentals-receivables").innerHTML = "Recibibles: " + receivables;
            document.getElementById("fundamentals-inventory").innerHTML = "Inventario: " + inventory;
            document.getElementById("fundamentals-otherCurrentAssets").innerHTML = "Otros activos cirulantes: " + otherCurrentAssets;
            document.getElementById("fundamentals-currentAssets").innerHTML = "Activos cirulantes: " + currentAssets;
            document.getElementById("fundamentals-longTermInvestments").innerHTML = "Inversion a largo a plazo: " + longTermInvestments;
            document.getElementById("fundamentals-propertyPlantEquipment").innerHTML = "Propiedad de planta: " + propertyPlantEquipment;
            document.getElementById("fundamentals-goodwill").innerHTML = "Voluntad: " + goodwill;
            document.getElementById("fundamentals-intangibleAssets").innerHTML = "Activos Intangibles: " + intangibleAssets;
            document.getElementById("fundamentals-otherAssets").innerHTML = "Otros activos: " + otherAssets;
            document.getElementById("fundamentals-totalAssets").innerHTML = "Activos totales: " + totalAssets;
            document.getElementById("fundamentals-accountsPayable").innerHTML = "Cuentas Pagables: " + accountsPayable;
            document.getElementById("fundamentals-currentLongTermDebt").innerHTML = "Deuda a largo plazo actual: " + currentLongTermDebt;
            document.getElementById("fundamentals-otherCurrentLiabilities").innerHTML = "Otros pasivos actuales: " + otherCurrentLiabilities;
            document.getElementById("fundamentals-totalCurrentLiabilities").innerHTML = "Pasivos totales actuales: " + totalCurrentLiabilities;
            document.getElementById("fundamentals-longTermDebt").innerHTML = "Deuda a largo plazo: " + longTermDebt;
            document.getElementById("fundamentals-otherLiabilities").innerHTML = "Otros pasivos: " + otherLiabilities;


            document.getElementById("fundamentals-minorityInterest").innerHTML = "Intereses minotarios: " + minorityInterest;
            document.getElementById("fundamentals-totalLiabilities").innerHTML = "Pasivos totales: " + totalLiabilities;
            document.getElementById("fundamentals-commonStock").innerHTML = "Acciones comunes: " + commonStock;
            document.getElementById("fundamentals-retainedEarnings").innerHTML = "Ganancias retenidas: " + retainedEarnings;
            document.getElementById("fundamentals-treasuryStock").innerHTML = "Acciones de tesoreria: " + treasuryStock;


            document.getElementById("fundamentals-capitalSurplus").innerHTML = "Excedente de capital: " + capitalSurplus;
            document.getElementById("fundamentals-shareholderEquity").innerHTML = "Patrimonio de los accionistas: " + shareholderEquity;
            document.getElementById("fundamentals-netTangibleAssets").innerHTML = "activos tangibles netos: " + netTangibleAssets;
        });*/
    });
});