let resultados = []

const calcular = function(){
    if (document.getElementById('valor1').value == ""
        || document.getElementById('valor2').value == "") {
            alert('preencha os valores corretamente')
    } else {
        let valor1 = parseFloat(document.getElementById('valor1').value)
        let valor2 = parseFloat(document.getElementById('valor2').value)
        
        let resultado = valor1 - valor2
    
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

let resultadoss = []

const calcularr = function(){
    if (document.getElementById('valor4').value == ""
        || document.getElementById('valor3').value == "") {
            alert('preencha os valores corretamente')
    } else {
        let valor3 = parseFloat(document.getElementById('valor3').value)
        let valor4 = parseFloat(document.getElementById('valor4').value)
        
        let resultadoe = valor3 + valor4
    
        document.getElementById('resultadoe').value = resultadoe.toFixed(2)
    
        let newiResultado = [valor3, valor4, resultadoe]
        resultadoss.push(newiResultado)
    
        lerResutaldoss()
    }
}

const lerResutaldoss = function(){
    for (let i = 0; i < resultadoss.length; i++){
        console.log('Valor 3: ' + resultadoss[i][0] + ' Valor 4: ' + resultadoss[i][3] + ' = ' + resultadoss[i][4])
    }
}

let resultadosss = []

const calcularrr = function(){
    if (document.getElementById('valor5').value == ""
        | document.getElementById('valor6').value == "") {
            alert('preencha os valores corretamente')
    } else {
        let valor5 = parseFloat(document.getElementById('valor5').value)
        let valor6 = parseFloat(document.getElementById('valor6').value)
        
        let resultadoq = valor5 - valor6
    
        document.getElementById('resultadoq').value = resultadoq.toFixed(2)
    
        let newwResultado = [valor5, valor6, resultadoq]
        resultadosss.push(newwResultado)
    
        lerResutaldosss()
    }
}

const lerResutaldosss = function(){
    for (let i = 0; i < resultadosss.length; i++){
        console.log('Valor 5: ' + resultadosss[i][0] + ' Valor 6: ' + resultadosss[i][5] + ' = ' + resultadosss[i][6])
    }
}
