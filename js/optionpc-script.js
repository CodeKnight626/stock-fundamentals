// DOM manipulation
$(document).ready(function() {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

      	var symbol = document.getElementById("symbol").value
        var url = "https://sandbox.iexapis.com/stable/stock/" + symbol + "/balance-sheet?token=Tsk_3e712c8573f749c3aaed5e9d47a56b08"
        console.log(url)

        // Call server to get the name
        $ajaxUtils.sendGetRequest(url, function (res) {
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
        });
      });

/*
	// Funcion llamada al presionar el boton submit de la forma, Inicia los calculos
	$("#calculadora").submit(function(e) {
		$.getJSON('https://sandbox.iexapis.com/stable/stock/twtr/price?token=Tsk_fdabbc5eda5e478da380f1649f35dc34', function(data) {
    		// JSON result in `data` variable
		});

		document.getElementById("pie-chart").style.visibility = "visible";
		document.getElementById("bar-chart").style.visibility = "visible";

		// Cambiamos el valor de la etiqueta y mostramos el monto total
		document.getElementById("valor-futuro").innerHTML = "Total = " + parseFloat(futureValue).toFixed(2);
		e.preventDefault();
	});*/
});