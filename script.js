let resultados = []

const calcular = function(){
    if (document.getElementById('valor1').value == ""
        || document.getElementById('valor2').value == "") {
            alert('preencha os valores corretamente')
    } else {
        let valor1 = parseFloat(document.getElementById('valor1').value)
        let valor2 = parseFloat(document.getElementById('valor2').value)
        
        let resultado = 1 - valor1 / valor2
    
        document.getElementById('resultado').value = resultado.toFixed(2)
    
        let newResultado = [valor1, valor2, resultado]
        resultados.push(newResultado)
    
        lerResutaldos()
    }
}

const lerResutaldos = function(){
    for (let i = 0; i < resultados.length; i++){
        console.log('Valor 1: ' + resultados[i][0] + ' Valor 2: ' + resultados[i][1] + ' = ' + resultados[i][2])
    }
}