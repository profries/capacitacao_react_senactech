window.onload = trataOnload;

function trataOnload() {
    buscaProdutos();
    setInterval(buscaProdutos, 5000);
}

const buscaProdutos = function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const listaProdutos = JSON.parse(this.responseText);            
        console.log(listaProdutos[0]);
        carregarProdutos(listaProdutos[0]);
    }
    xhttp.open("GET", "http://localhost:3000/produtos", true);
    xhttp.send();
    
}

const carregarProdutos = (produto) => {
    const htmlProduto = ` 
    <div class="w3-col l4 m6 s12 w3-container w3-padding-16">
        <div class="w3-card">
            <div class="w3-container w3-center">
                <img src="${produto.imagem}" style="width: 70%">
                <h5>${produto.nome}</h5>
                <h3 class="w3-blue">
                    ${'R$ '+
                    produto.preco.toLocaleString('pt-br', 
                    {minimusFractioDigits: 2})}
                </h3>
            </div>
        </div>
    </div>
    `;
    document.querySelector("#produtos").innerHTML = htmlProduto;
}



