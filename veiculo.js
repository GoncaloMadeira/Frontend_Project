const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (id) {
fetch(`https://638e58dcaefc455fb2bb50a8.mockapi.io/Cars?id=${id}`)
.then(response => response.json())
.then(data => {
const car = data.filter(c => c.id === id)[0];
console.log(car);

const marcaElement = document.getElementById('marca');
const marca_tabelaElement = document.getElementById('tabela_marca');
const modeloElement = document.getElementById('modelo');
const modelo_tabelaElement = document.getElementById('tabela_modelo');
const precoElement = document.getElementById('preco');
const PrecoFormatado = car.preco.toLocaleString('pt-BR');
const precoElement2 = document.getElementById('tabela_preco');
const PrecoFormatado2 = car.preco.toLocaleString('pt-BR');
const numerochassiElement = document.getElementById('numerochassi');
const tipodechassiElement = document.getElementById('tipodechassi');
const estadoElement = document.getElementById('estado');
const anofabricoElement = document.getElementById('anofabrico');
const anofabrico_tabelaElement = document.getElementById('anofabrico_tabela');
const numerokmElement = document.getElementById('numerokm');
const numerokmFormatado = car.numerokm.toLocaleString('pt-BR');
const numerokm_tabelaElement = document.getElementById('tabela_numerokm');
const numerokm_tabelaFormatado = car.numerokm.toLocaleString('pt-BR');
const potenciaElement = document.getElementById('potencia');
const capacidadeElement = document.getElementById('capacidade');
const combustivelElement = document.getElementById('combustivel');
const combustivel_tabelaElement = document.getElementById('tabela_combustivel');
const corexteriorElement = document.getElementById('corexterior');
const transmissaoElement = document.getElementById('transmissao');
const portasElement = document.getElementById('portas');
const sensoresElement = document.getElementById('sensores');
const tipofaroisElement = document.getElementById('tipofarois');
const carousel = document.querySelector('.carousel');
const indicatorsContainer = document.querySelector('.carousel-indicators');
const indicatorsList = document.createElement('ul');
const controlsContainer = document.querySelector('.carousel-controls');
const prevControl = document.createElement('a');
const prevControlIcon = document.createElement('span');
const prevControlText = document.createElement('span');
const nextControl = document.createElement('a');
const nextControlIcon = document.createElement('span');
const nextControlText = document.createElement('span');
const carouselInner = document.querySelector('.carousel-inner');
const itenssegurancaElement = document.getElementsByClassName("itensseguranca")[0];
const seguranca = data[0].seguranca;
for (const item of seguranca) {
const segurancaElement = document.createElement("p");
segurancaElement.innerHTML = item;
segurancaElement.id = "seguranca";
itenssegurancaElement.appendChild(segurancaElement);
}



marcaElement.innerHTML = car.marca;
modeloElement.innerHTML = car.modelo;
marca_tabelaElement.innerHTML = car.marca;
modelo_tabelaElement.innerHTML = car.modelo;
precoElement.innerHTML = PrecoFormatado + ' €';
precoElement2.innerHTML = PrecoFormatado2 + ' €';
numerochassiElement.innerHTML = car.numerochassi;
tipodechassiElement.innerHTML = car.tipodechassi;
estadoElement.innerHTML = car.estado;
anofabricoElement.innerHTML = car.anofabrico;
anofabrico_tabelaElement.innerHTML = car.anofabrico;
numerokmElement.innerHTML = numerokmFormatado + ' Km';
numerokm_tabelaElement.innerHTML = numerokm_tabelaFormatado + ' Km';
potenciaElement.innerHTML = car.potencia;
capacidadeElement.innerHTML = car.capacidade;
combustivelElement.innerHTML = car.combustivel;
combustivel_tabelaElement.innerHTML = car.combustivel;
corexteriorElement.innerHTML = car.corexterior;
transmissaoElement.innerHTML = car.transmissao;
portasElement.innerHTML = car.portas;
sensoresElement.innerHTML = car.sensores;
tipofaroisElement.innerHTML = car.tipofarois;


for (let i = 0; i < car.imagens.length; i++) {
const item = document.createElement('div');
item.className = 'carousel-item';
if (i === 0) {
item.classList.add('active');
}

const img = document.createElement('img');
img.className = 'd-block w-100 fotosviaturas';
img.src = car.imagens[i];
img.alt = `Slide ${i + 1}`;
item.appendChild(img);


carousel.appendChild(item);
}


for (let i = 0; i < car.imagens.length; i++) {

const item = document.createElement('li');

item.setAttribute('data-target', '#carouselExampleIndicators');

item.setAttribute('data-slide-to', i);

if (i === 0) {
item.classList.add('active');
}


indicatorsList.appendChild(item);
}


indicatorsContainer.appendChild(indicatorsList);
prevControl.setAttribute('href', '#carouselExampleIndicators');
prevControl.setAttribute('role', 'button');
prevControl.setAttribute('data-slide', 'prev');
prevControl.classList.add('carousel-control-prev');
prevControlIcon.classList.add('carousel-control-prev-icon');
prevControl.appendChild(prevControlIcon);
prevControlText.innerHTML = 'Anterior';



});
} else {
console.error('ID não especificado');
}

$('.carousel').carousel({
        pause: true,
        interval: false
    });

function openUrl(id, value) {

location.href = `comparar_veiculos.html?id=${value}`;
}

document.getElementById("comparar").onclick = function() {
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
openUrl(this.id, id);
};
