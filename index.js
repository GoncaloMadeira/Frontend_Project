fetch('https://638e58dcaefc455fb2bb50a8.mockapi.io/Cars')
.then(response => response.json())
.then(cars => {
const parentElement = document.getElementById('parent');

const filteredCars = cars.filter(function(car) {
return car.imagens[0] != null && car.imagens[0] !== undefined && /\.(jpeg|jpg|bmp|png)$/i.test(car.imagens[0]);
});


const lastThreeCars = filteredCars.slice(-3);

parentElement.innerHTML += `
${lastThreeCars.map(car => {

const KMsFormatados = car.numerokm.toLocaleString('pt-BR');
const PrecoFormatado = car.preco.toLocaleString('pt-BR');

return `
<div class="col-lg-4 pb-5" id="viaturas">
<a href="veiculo.html?id=${car.id}" class="link-veiculo">
<div class="main-box">
<img src="${car.imagens[0]}" class="size" id="imagem">
<h4 class="py-4"><span id="marca">${car.marca}</span> <span id="modelo">${car.modelo}</span></h4>
<div class="preco"><h3>${PrecoFormatado} €</h3></div>
<div class="second-box d-flex justify-content-center pt-5">
  <div class="combustivel">
    <i class="fa-solid fa-gas-pump lead"></i>
    <p class="h5" id="tipo_combustivel"><strong>${car.combustivel}</strong></p>
  </div>
  <div class="ano">
    <i class="fa-solid fa-calendar-days lead"></i>
    <p class="h5" id="ano_matricula"><strong>${car.anofabrico}</strong></p>
  </div>
  <div class="km">
    <i class="fa-solid fa-road lead"></i>
    <p class="h5" id="km_actuais"><strong>${KMsFormatados} Km</strong></p>
  </div>
</div>
</div>
</a>
</div>
`;
}).join('')}
`;
});
