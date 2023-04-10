function subtracao() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let sub = (n1 - n2)
    alert(sub)
}

function multiplicacao() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value

    let mul = (n1 * n2 * n3)
    alert(mul)
}

function divisao() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    if (n2 == 0) {
        alert("Não é divisivel")
    }
    else {

        let div = (n1 / n2)
        alert(div)
    }
}

function mponderada() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let mpond = ((n1 * 2) + (n2 * 3)) / (2 + 3)
    alert(mpond)
}

function desconto() {
    let valor = document.getElementById("valorproduto").value

    let desc = valor - (valor * 0.1)
    alert(desc)
}

function salariofinal() {
    let fixo = document.getElementById("fixo").value
    let venda = document.getElementById("venda").value
    let comissao = venda * 0.04

    let salariofinal = Number(fixo) + Number(comissao)
    alert(`O salario final é: R$${salariofinal} e a comissão é: R$${comissao}`)
}

function p15() {
    const peso = document.getElementById("peso").value;
    const pesonovo = (peso + (peso * 0.15))
    const final = pesonovo//.toFixed(2);
    alert(`A pessoa se engordar 15% terá ${final}`)
}

function peso20() {
    const peso = document.getElementById("peso").value;
    const pesonovo = (peso - (peso * 0.2))
    const final = pesonovo.toFixed(2);
    alert(`A pessoa se emagrecer 20% terá ${final}`)
}

function grama() {
    const peso = document.getElementById("peso").value;
    const pesonovo = peso * 1000
    alert(`Uma pessoa de ${peso}Kg terá ${pesonovo}g`)
}

function areatrapezio() {
    const baseM = document.getElementById("maior").value;
    const basem = document.getElementById("menor").value;
    const h = document.getElementById("altura").value;

    const area = ((baseM + basem) * h) / 2
    alert(`A área é: ${area.toFixed(2)}`)
}

function areaquadrado() {
    const ladoquadrado = document.getElementById("lado").value;

    const area = ladoquadrado ** 2
    alert(`A área é: ${area.toFixed(2)}`)
}

function arealosango() {
    const diagM = document.getElementById("maior").value;
    const diagm = document.getElementById("menor").value;

    const area = (diagM * diagm) / 2
    alert(`A área é: ${area.toFixed(2)}`)
}

function quantsal() {
    const salariomin = document.getElementById("minimo").value;
    const salario = document.getElementById("salario").value;

    const quant = salario / salariomin
    alert(`O funcionário recebe: ${quant.toFixed(2)} salários minimos`)
}

function tabuada() {
    const num = document.getElementById("num").value;
    const valor = []
    for (let i = 0; i <= 10; i++) {
        valor.push(num * i)
    }
    alert(`
${num} x 0 = ${valor[0]}
${num} x 1 = ${valor[1]}
${num} x 2 = ${valor[2]}
${num} x 3 = ${valor[3]}
${num} x 4 = ${valor[4]}
${num} x 5 = ${valor[5]}
${num} x 6 = ${valor[6]}
${num} x 7 = ${valor[7]}
${num} x 8 = ${valor[8]}
${num} x 9 = ${valor[9]}
${num} x 10 = ${valor[10]}
`)
}

function idades() {
    const nasc = document.getElementById("nascimento").value;
    const atual = document.getElementById("atual").value;

    const idadea = atual - nasc
    const idadem = idadea * 12
    const idaded = idadea * 365
    const idadesem = idadea * 52
    alert(`Você tem ${idadea} anos, ${idadem} meses, ${idaded} dias e ${idadesem} semanas`)
}


function multa() {
    const sal = document.getElementById("salario").value;
    const m1 = document.getElementById("multa1").value;
    const m2 = document.getElementById("multa2").value;

    const total = sal - ((m1 * 1.02) + (m2 * 1.02))
    alert(`Restará R$${total} do salário de João.`)
}

function hipotenusa() {
    const c1 = document.getElementById("cateto1").value;
    const c2 = document.getElementById("cateto2").value;

    const h = Math.sqrt((c1 ** 2) + (c2 ** 2))
    alert(`A hipotenusa dos catetos ${c1} e ${c2} é ${h}.`)
}

function circulo() {
    const r = document.getElementById("raio").value;

    const c = 2 * Math.PI * r
    const a = Math.PI * (r ** 2)
    const v = (Math.PI * (r ** 3)) / 4
    alert(`
    O comprimento é ${c.toFixed(2)}
    A área é ${a.toFixed(2)}
    O volume é ${v.toFixed(2)}`)
}

function temperaturaF() {
    const c = document.getElementById("celsius").value;

    const f = 1.8 * c + 32

    alert(`${c}°C é o mesmo que ${f.toFixed(2)}°F`)
}

function energia() {
    const d1 = document.getElementById("dimensao1").value;
    const d2 = document.getElementById("dimensao2").value;

    const a = d1 * d2
    const p = a * 18

    alert(`A área do comodo é ${a.toFixed(2)} e utilizará ${p.toFixed(2)}`)
}

function distanciaponta() {
    let angg = document.getElementById("angulo").value;
    const dist = document.getElementById("distancia").value;
    let angr = angg * Math.PI/180;

    const escada = Number(dist) / Number(Math.cos(angr))

    alert(`A medida da escada é ${escada.toFixed(2)}`)
}

function salarioT() {
    const hora = document.getElementById("horas").value;
    const minimo = document.getElementById("minimo").value;
    const extra = document.getElementById("extras").value;
    
    const vhora = (hora*(minimo/8))
    const vextra = (extra*(minimo/4))
    const salariobruto =  hora * vhora
    const salarioextra =  extra * vextra
    const salario = salariobruto + salarioextra

    alert(`O salário a receber é de R$${salario.toFixed(2)}`)
}

function poligono() {
    const n = document.getElementById("nlado").value;
    
    const nd = n * ((n - 3)/2)

    alert(`O número de diagonais do polígono é ${nd}`)
}


function angtriangulo() {
    const ang1 = document.getElementById("ang1").value;
    const ang2 = document.getElementById("ang2").value;
    
    const ang3 = 180 - ang1 - ang2

    alert(`O valor do terceiro ângulo é ${ang3}`)
}

function cambio() {
    const v = document.getElementById("valor").value;
    
    const dolar = v * 1.80
    const alemao = v * 2.00
    const libra = v * 3.57

    alert(`
    Real: ${v.toFixed(2)}
    Dolar: ${dolar.toFixed(2)}
    Marco Alemão: ${alemao.toFixed(2)}
    Libra Esterlina: ${libra.toFixed(2)}
    `)
}

function horamin() {
    const hora = document.getElementById("h").value;
    const min = document.getElementById("min").value;
    
    const hpmin = Number(hora) * 60
    const tmin = Number(min) + hpmin
    const minpseg = tmin * 60

    alert(`
    Horas convertidas em minutos: ${hpmin}
    Total minutos: ${tmin}
    Minutos convertidos em segundos: ${minpseg}
    `)
}