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
            document.getElementById("fundamentals-symbol").innerHTML = "Simbolo: " + symbol;
            document.getElementById("fundamentals-reportDate").innerHTML = "Fecha de reporte: " + reportDate;
            document.getElementById("fundamentals-fiscalDate").innerHTML = "Fecha fiscal: " + fiscalDate;
            document.getElementById("fundamentals-currentCash").innerHTML = "Efectivo actual: " + currentCash;
            document.getElementById("fundamentals-shortTermInvestments").innerHTML = "Inversion a corto Plazo: " + shortTermInvestments;
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