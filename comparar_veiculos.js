const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const urlParams2 = new URLSearchParams(window.location.search);
const id2 = urlParams2.get('id2');

if (id) {
    fetch(`https://638e58dcaefc455fb2bb50a8.mockapi.io/Cars?id=${id}`)
        .then(response => response.json())
        .then(data => {
            const car = data[0];
            if (car) {
                const marcaElement = document.getElementById('marca1');
                const modeloElement = document.getElementById('modelo1');
                const combustivelElement = document.getElementById('combustivel1');
                const numerochassiElement = document.getElementById('numerochassi1');
                const PrecoFormatado = car.preco.toLocaleString('pt-BR');
                const precoElement = document.getElementById('preco1');
                const tipodechassiElement = document.getElementById('tipodechassi1');
                const estadoElement = document.getElementById('estado1');
                const anofabricoElement = document.getElementById('anofabrico1');
                const numerokmElement = document.getElementById('numerokm1');
                const numerokmFormatado = car.numerokm.toLocaleString('pt-BR');
                const potenciaElement = document.getElementById('potencia1');
                const capacidadeElement = document.getElementById('capacidade1');
                const corexteriorElement = document.getElementById('corexterior1');
                const transmissaoElement = document.getElementById('transmissao1');
                const portasElement = document.getElementById('portas1');
                const sensoresElement = document.getElementById('sensores1');
                const tipofaroisElement = document.getElementById('tipofarois1');
                const itenssegurancaElement = document.getElementsByClassName("itensseguranca1")[0];
                const seguranca = data[0].seguranca;

                for (const item of seguranca) {
                    const segurancaElement = document.createElement("p");
                    segurancaElement.innerHTML = item;
                    segurancaElement.id = "seguranca1";
                    itenssegurancaElement.appendChild(segurancaElement);
                }
                marcaElement.innerHTML = car.marca;
                modeloElement.innerHTML = car.modelo;
                combustivelElement.innerHTML = car.combustivel;
                numerochassiElement.innerHTML = car.numerochassi;
                precoElement.innerHTML = PrecoFormatado + ' €';
                tipodechassiElement.innerHTML = car.tipodechassi;
                estadoElement.innerHTML = car.estado;
                anofabricoElement.innerHTML = car.anofabrico;
                numerokmElement.innerHTML = numerokmFormatado + ' Km';
                potenciaElement.innerHTML = car.potencia;
                capacidadeElement.innerHTML = car.capacidade;
                corexteriorElement.innerHTML = car.corexterior;
                transmissaoElement.innerHTML = car.transmissao;
                portasElement.innerHTML = car.portas;
                sensoresElement.innerHTML = car.sensores;
                tipofaroisElement.innerHTML = car.tipofarois;

                const option1 = `<option value="${id}">${car.marca} ${car.modelo}</option>`;
                $("#select1").append(option1);
            }

        });

    if (id2) {
        fetch(`https://638e58dcaefc455fb2bb50a8.mockapi.io/Cars?id=${id2}`)
            .then(response2 => response2.json())
            .then(data2 => {
                const car2 = data2[0];
                if (car2) {
                    const marcaElement2 = document.getElementById('marca2');
                    const modeloElement2 = document.getElementById('modelo2');
                    const combustivelElement2 = document.getElementById('combustivel2');
                    const numerochassiElement2 = document.getElementById('numerochassi2');
                    const PrecoFormatado2 = car2.preco.toLocaleString('pt-BR');
                    const precoElement2 = document.getElementById('preco2');
                    const tipodechassiElement2 = document.getElementById('tipodechassi2');
                    const estadoElement2 = document.getElementById('estado2');
                    const anofabricoElement2 = document.getElementById('anofabrico2');
                    const numerokmElement2 = document.getElementById('numerokm2');
                    const numerokmFormatado2 = car2.numerokm.toLocaleString('pt-BR');
                    const potenciaElement2 = document.getElementById('potencia2');
                    const capacidadeElement2 = document.getElementById('capacidade2');
                    const corexteriorElement2 = document.getElementById('corexterior2');
                    const transmissaoElement2 = document.getElementById('transmissao2');
                    const portasElement2 = document.getElementById('portas2');
                    const sensoresElement2 = document.getElementById('sensores2');
                    const tipofaroisElement2 = document.getElementById('tipofarois2');
                    const itenssegurancaElement2 = document.getElementsByClassName("itensseguranca2")[0];
                    const seguranca2 = data2[0].seguranca;

                    for (const item2 of seguranca2) {
                        const segurancaElement2 = document.createElement("p");
                        segurancaElement2.innerHTML = item2
                        segurancaElement2.id = "seguranca2";
                        itenssegurancaElement2.appendChild(segurancaElement2);
                    }


                    marcaElement2.innerHTML = car2.marca;
                    modeloElement2.innerHTML = car2.modelo;
                    combustivelElement2.innerHTML = car2.combustivel;
                    numerochassiElement2.innerHTML = car2.numerochassi;
                    precoElement2.innerHTML = PrecoFormatado2 + ' €';
                    tipodechassiElement2.innerHTML = car2.tipodechassi;
                    estadoElement2.innerHTML = car2.estado;
                    anofabricoElement2.innerHTML = car2.anofabrico;
                    numerokmElement2.innerHTML = numerokmFormatado2 + ' Km';
                    potenciaElement2.innerHTML = car2.potencia;
                    capacidadeElement2.innerHTML = car2.capacidade;
                    corexteriorElement2.innerHTML = car2.corexterior;
                    transmissaoElement2.innerHTML = car2.transmissao;
                    portasElement2.innerHTML = car2.portas;
                    sensoresElement2.innerHTML = car2.sensores;
                    tipofaroisElement2.innerHTML = car2.tipofarois;

                }

            });
    }
}


const selectElement3 = document.querySelector("#select1");

fetch("https://638e58dcaefc455fb2bb50a8.mockapi.io/Cars")
    .then(response => response.json())
    .then(cars => {
        cars.forEach(car => {

            const optionElement = document.createElement("option");

            optionElement.value = car.id;
            optionElement.text = `${car.marca} ${car.modelo}`;

            selectElement3.appendChild(optionElement);

        });
    });


const selectElement4 = document.querySelector("#select2");

fetch("https://638e58dcaefc455fb2bb50a8.mockapi.io/Cars")
    .then(response => response.json())
    .then(cars => {
        cars.forEach(car => {

            const optionElement = document.createElement("option");

            optionElement.value = car.id;
            optionElement.text = `${car.marca} ${car.modelo}`;

            selectElement4.appendChild(optionElement);

        });
    });



const formElement = document.querySelector("#form");
const submitButton = document.querySelector("#submit-button");


submitButton.addEventListener("click", event => {
    
    formElement.submit();
});
