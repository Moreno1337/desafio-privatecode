const filtros = document.querySelectorAll('.filtros__item');
const produtos = document.querySelectorAll('.produtos__item');
const pesquisa = document.querySelector('.pesquisa__input');
const tituloProdutos = document.querySelectorAll('.produtos__item-titulo');
const flechasFiltros = document.querySelectorAll('.filtros__botao');
const mascara = document.querySelector('.mascara');
const detalhes = document.querySelector('.detalhes');
const produtoPrincipaisDetalhes = document.querySelectorAll('[data-produtodetalhes]');
const produtoOpcoes = document.querySelector('.opcoes__scrollbar');
const detalhesValorTotal = document.querySelector('[data-detalhesvalortotal]');
const botaoAdicionarAoCarrinho = document.querySelector('.opcoes__botao');
const tabelaDoCarrinho = document.querySelector('.carrinho__tabela-flex');
const botaoFinalizar = document.querySelector('.carrinho__finalizar');
const telaDeEntrega = document.querySelector('.entrega');
const fecharAbaEntrega = document.querySelector('[data-fecharaba]');
const telaDeSucesso = document.querySelector('.sucesso');
const botaoContinuar = document.querySelector('.entrega__botao');
const formaEntrega = document.querySelector('#forma-entrega');
const inputCep = document.querySelector('#cep');
const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const inputsDeDelivery = document.querySelectorAll('[data-inputdelivery]');
const botaoSucesso = document.querySelector('.sucesso__botao');
const fecharAbaSucesso = document.querySelector('[data-fecharabasucesso]');

const especificacoesDosProdutos = {
    'pizza': {
        textoUm: '2 Sabores',
        opcoes: {
            opcaoUm: {
                produto: 'Frango c/ catupiry',
                valor: 'R$ 20,00'
            },
            opcaoDois: {
                produto: 'Quatro queijos',
                valor: 'R$ 30,00'
            },
            opcaoTres: {
                produto: 'Portuguesa',
                valor: 'R$ 25,00'
            },
            opcaoQuatro: {
                produto: 'Marguerita',
                valor: 'R$ 20,00'
            },
            opcaoCinco: {
                produto: 'Strogonoff de frango',
                valor: 'R$ 25,00'
            },
            opcaoSeis: {
                produto: 'Strogonoff de carne',
                valor: 'R$ 30,00'
            },
            opcaoSete: {
                produto: 'Pepperoni',
                valor: 'R$ 25,00'
            },
            opcaoOito: {
                produto: 'Calabresa',
                valor: 'R$ 20,00'
            },
            opcaoNove: {
                produto: 'Especial da casa',
                valor: 'R$ 35,00'
            }
        }
    },

    'combo': {
        textoUm: 'Combo',
        opcoes: {
            opcaoUm: {
                produto: 'X-Salada + Coca lata',
                valor: 'R$ 30,00'
            },
            opcaoDois: {
                produto: 'X-Salada + Guaraná lata',
                valor: 'R$ 30,00'
            },
            opcaoTres: {
                produto: 'X-Bacon + Coca lata',
                valor: 'R$ 32,50'
            },
            opcaoQuatro: {
                produto: 'X-Bacon + Guaraná lata',
                valor: 'R$ 32,50'
            },
            opcaoCinco: {
                produto: 'X-Tudo + Coca lata',
                valor: 'R$ 35,00'
            },
            opcaoSeis: {
                produto: 'X-Tudo + Guaraná lata',
                valor: 'R$ 35,00'
            },
        }       
    },

    'hamburguer': {
        textoUm: 'Hamburguer',
        opcoes: {
            opcaoUm: {
                produto: 'X-Salada',
                valor: 'R$ 25,00'
            },
            opcaoDois: {
                produto: 'X-Bacon',
                valor: 'R$ 25,00'
            },
            opcaoTres: {
                produto: 'X-Calabresa',
                valor: 'R$ 27,50'
            },
            opcaoQuatro: {
                produto: 'X-Tudo',
                valor: 'R$ 27,50'
            },
        }
    },

    'refrigerante': {
        textoUm: 'Refrigerante',
        opcoes: {
            
        }
    },

    'suco': {
        textoUm: 'Suco',
        opcoes: {
            opcaoUm: {
                produto: 'Uva',
                valor: 'R$ 10,00'
            },
            opcaoDois: {
                produto: 'Laranja',
                valor: 'R$ 7,00'
            },
            opcaoTres: {
                produto: 'Maracujá',
                valor: 'R$ 10,00'
            },
            opcaoQuatro: {
                produto: 'Limão',
                valor: 'R$ 7,00'
            },
            opcaoCinco: {
                produto: 'Groselha',
                valor: 'R$ 6,00'
            },
            opcaoSeis: {
                produto: 'Melancia',
                valor: 'R$ 9,00'
            },
        }
    },

    'acai': {
        textoUm: 'Açaí',
        opcoes: {
            
        }
    }
};

let contadorBotoes = 8;

mascara.addEventListener('click', () => {
    if(telaDeSucesso.id.includes('esconde')) {
        mascara.setAttribute('id', 'esconde');
    }

    if(!detalhes.id.includes('esconde')){
        detalhes.setAttribute('id', 'esconde');
    } else if(!telaDeEntrega.id.includes('esconde')) {
        telaDeEntrega.setAttribute('id', 'esconde');
    }
});

fecharAbaEntrega.addEventListener('click', () => {
    mascara.setAttribute('id', 'esconde');

    if(!telaDeEntrega.id.includes('esconde')) {
        telaDeEntrega.setAttribute('id', 'esconde');
    } 
});

// FILTRO POR CATEGORIA -----------------------------------------------

filtros.forEach( (filtro) => {
    filtro.addEventListener('click', (event) => {

        contadorBotoes = event.target.dataset.filtronumero;
        const filtro = event.target.dataset.filtro;

        produtos.forEach( (produto) => {

            if(filtro == 'todos') {
                produto.style.display = 'block';
            } else {
                if(produto.dataset.produto == filtro) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            }
        });

    });
});

// FILTRO POR CLICK NOS BOTÕES "FLECHA" -------------------------------

flechasFiltros.forEach( (flecha) => {

    flecha.addEventListener('click', (event) => {

        const botao = event.currentTarget.dataset.filtro;

        if(botao == 'botao-direita') {
            
            if(contadorBotoes <= 6) {
                contadorBotoes++;
            } else {
                contadorBotoes = 1;
            }

            produtos.forEach( (produto) => {
                if(contadorBotoes != 7) {
                    if(produto.dataset.filtronumero == contadorBotoes) {
                        produto.style.display = 'block';
                    } else {
                        produto.style.display = 'none';
                    }
                } else {
                    produto.style.display = 'block';
                }
            });


        } else {

            if(contadorBotoes == 8) {
                contadorBotoes = contadorBotoes - 2;
            } else if(contadorBotoes >= 2) {
                contadorBotoes--;
            } else {
                contadorBotoes = 7;
            }

            produtos.forEach( (produto) => {
                if(contadorBotoes != 7) {
                    if(produto.dataset.filtronumero == contadorBotoes) {
                        produto.style.display = 'block';
                    } else {
                        produto.style.display = 'none';
                    }
                } else {
                    produto.style.display = 'block';
                }
            });

        }
    });
});

// FILTRO POR BARRA DE PESQUISA ---------------------------------------

pesquisa.addEventListener('input', (event) => {
    const pesquisaValue = event.target.value.toLowerCase().trim();

    tituloProdutos.forEach( (titulo) => {
        const visivel = titulo.textContent.toLowerCase().trim().includes(pesquisaValue);
        if(visivel) {
            titulo.parentNode.style.display = 'block';
        } else {
            titulo.parentNode.style.display = 'none';
        }
    });
});

// TELA DE ADIÇÃO AO CARRINHO -----------------------------------------

produtos.forEach( (produto) => {
    produto.addEventListener('click', () => {
        
        const tituloProduto = produto.children[1].textContent;
        const precoProduto = produto.children[2].textContent;
        const tipoDeProduto = produto.dataset.produto;
        
        mascara.removeAttribute('id', 'esconde');
        detalhes.removeAttribute('id', 'esconde');
        document.body.scrollIntoView();
        
        produtoPrincipaisDetalhes.forEach( (detalhe) => {
            if(detalhe.dataset.produtodetalhes == 'titulo') {
                detalhe.textContent = tituloProduto;
            } else if(detalhe.dataset.produtodetalhes == 'preco') {
                detalhe.textContent = precoProduto;
            } else if(detalhe.dataset.produtodetalhes == 'texto-um') {
                detalhe.textContent = especificacoesDosProdutos[tipoDeProduto].textoUm;
            }
        });
        
        let opcoes = Object.values(especificacoesDosProdutos[tipoDeProduto].opcoes);
        let contador = 0;
        
        opcoes.forEach( (opcao) => {

            let opcaoTemplate = `
            <p class="coluna-scrollbar scrollbar__produto">${opcao.produto}</p>
            <p class="coluna-scrollbar" data-detalhesvalor>${opcao.valor}</p>
            <div class="coluna-scrollbar scrollbar__flex">
                <button class="quantidade__botao-menos" data-detalhesbotao="menos">-</button>
                    <p data-detalhesquantidade="${opcao.valor.replace(/\D+/g, '')}">0</p>
                <button class="quantidade__botao-mais" data-detalhesbotao="mais">+</button>
            </div>
            `;

            const div = document.createElement('div');
            div.classList.add('grid-template', 'scrollbar__corpo');
            if(contador % 2 == 0) {
                div.setAttribute('id', 'par');
            }
            contador++;
            div.innerHTML = opcaoTemplate;
            produtoOpcoes.appendChild(div);
            
        });
        
        detalhesValorTotal.textContent = precoProduto;
        
        const detalhesBotoes = document.querySelectorAll('[data-detalhesbotao]');

        let valorTotalString = detalhesValorTotal.textContent.replace(/\D{3}/g, ''); 
        valorTotalString = valorTotalString.replace(/,/g, '.');

        detalhesBotoes.forEach( (botao) => {
            botao.addEventListener('click', (event) => {
                let paiDoBotao = event.target.parentNode;
                let quantidade = parseInt(paiDoBotao.children[1].textContent);
                let precoParaSerSomado = 0;
                
                if(event.target.dataset.detalhesbotao == 'menos') {
                    if(quantidade >= 1) {
                        paiDoBotao.children[1].textContent = quantidade - 1;
                    }
                } else {
                    paiDoBotao.children[1].textContent = quantidade + 1;
                }

                let quantidadesAtuais = document.querySelectorAll('[data-detalhesquantidade]');
                
                quantidadesAtuais.forEach( (quantidadeAtual) => {

                    precoParaSerSomado = precoParaSerSomado + quantidadeAtual.innerHTML * parseFloat(quantidadeAtual.dataset.detalhesquantidade/100);

                });


                let valorTotalSomado = parseFloat(valorTotalString) + precoParaSerSomado;
                let valorTotalSomadoString = valorTotalSomado.toFixed(2);
                valorTotalSomadoString = 'R$ ' + valorTotalSomadoString;

                detalhesValorTotal.innerHTML = valorTotalSomadoString;
                
            });
            
        });

    });
});

// AÇÃO NO BOTÃO DE ADICIONAR AO CARRINHO -----------------------------

let contadorDois = 0;
let botoesDeQuantidadeNoCarrinho;

botaoAdicionarAoCarrinho.addEventListener('click', () => {
    
    let listaDeOpcoes = produtoOpcoes.querySelectorAll('.scrollbar__corpo');
    let tituloDoProduto = document.querySelector('[data-produtodetalhes="titulo"]').innerHTML;

    let templateParaNovoItemNoCarrinho = `
        <div class="tabela__pedido tabela__pedido-descricao coluna">
            <h3>${tituloDoProduto}</h3>
        </div>
        <div class="tabela__pedido coluna remove">
            <p>${detalhesValorTotal.innerHTML}</p>
        </div>
        <div class="tabela__pedido coluna">
            <button class="quantidade__botao-menos" data-carrinhobotao="menos">-</button>
            <p data-carrinhoquantidade="${detalhesValorTotal.innerHTML.replace(/\D+/g, '')}">1</p>
            <button class="quantidade__botao-mais" data-carrinhobotao="mais">+</button>
        </div>
        <div class="tabela__pedido coluna remove">
            <p data-carrinhototal>${detalhesValorTotal.innerHTML}</p>
        </div>
    `

    let divItemCarrinho = document.createElement('div');
    divItemCarrinho.classList.add('carrinho__tabela');
    divItemCarrinho.setAttribute('data-carrinhoitem','item');
    if(contadorDois % 2 == 0) {
        divItemCarrinho.setAttribute('id', 'par');
    }
    contadorDois++
    divItemCarrinho.innerHTML = templateParaNovoItemNoCarrinho; 

    let descricaoDoItemDoCarrinho = divItemCarrinho.querySelector('.tabela__pedido-descricao');

    listaDeOpcoes.forEach( (opcaoDaLista) => {
        if(opcaoDaLista.lastElementChild.children[1].innerHTML > 0) {
            let pDescricao = document.createElement('p');
            pDescricao.classList.add('pedido__descricao');
            pDescricao.innerHTML = `${opcaoDaLista.lastElementChild.children[1].innerHTML}x - ${opcaoDaLista.firstElementChild.innerHTML}`;
            descricaoDoItemDoCarrinho.appendChild(pDescricao);
            console.log(pDescricao)
        }
    });
    
    let tabelaDeItensNoCarrinho = tabelaDoCarrinho.firstElementChild;
    tabelaDeItensNoCarrinho.appendChild(divItemCarrinho);

    produtoOpcoes.innerHTML = `
        <div class="grid-template scrollbar__cabecalho">
            <h3 class="coluna-scrollbar">Produto</h3>
            <h3 class="coluna-scrollbar">Valor</h3>
            <h3 class="coluna-scrollbar scrollbar__quantidade">Quantidade</h3>
        </div>
    `;

    mascara.setAttribute('id', 'esconde');
    detalhes.setAttribute('id', 'esconde');

    botoesDeQuantidadeNoCarrinho = document.querySelectorAll('[data-carrinhobotao]');
    let precoParaSerSomado = 0;
    let valorTotalDeCadaItem = document.querySelectorAll('[data-carrinhototal]');

    valorTotalDeCadaItem.forEach( (valorDoItem) => {
        precoParaSerSomado = precoParaSerSomado + (valorDoItem.innerHTML.replace(/\D+/g, '')/100);
    });

    precoParaSerSomado = 'R$ ' + precoParaSerSomado.toFixed(2);

    botoesDeQuantidadeNoCarrinho.forEach( (botao) => {
        if(!botao.dataset.eventlistener) {
            botao.setAttribute('data-eventlistener', 'true');
            botao.addEventListener('click', (event) => {
                let paiDoBotao = event.target.parentNode;
                let quantidade = parseInt(paiDoBotao.children[1].textContent);
                const valorTotalUnitarioString = paiDoBotao.parentNode.children[3].firstElementChild;
                let valorTotalUnitario = 0;
                
                if(event.target.dataset.carrinhobotao == 'menos') {
                    if(valorTotalUnitarioString.innerHTML.replace(/\D+/g, '') != paiDoBotao.children[1].dataset.carrinhoquantidade) {
                        if(quantidade >= 2) {
                            paiDoBotao.children[1].textContent = quantidade - 1;
                            valorTotalUnitario = (quantidade - 1) * (parseFloat(paiDoBotao.children[1].dataset.carrinhoquantidade)/100);
                        }
                    } else {
                        valorTotalUnitario = parseFloat(paiDoBotao.children[1].dataset.carrinhoquantidade)/100;
                    }
                } else {
                    paiDoBotao.children[1].textContent = quantidade + 1;
                    valorTotalUnitario = (quantidade + 1) * (parseFloat(paiDoBotao.children[1].dataset.carrinhoquantidade)/100);
                }
                
                valorTotalUnitarioString.innerHTML = 'R$ ' + valorTotalUnitario.toFixed(2);


                let quantidadesAtuaisNoCarrinho = document.querySelectorAll('[data-carrinhoquantidade]');
                let somaDoMultiplicadorDeQuantidade = 0

                quantidadesAtuaisNoCarrinho.forEach( (quantidadeAtual) => {

                    somaDoMultiplicadorDeQuantidade = somaDoMultiplicadorDeQuantidade + (quantidadeAtual.innerHTML * parseFloat(quantidadeAtual.dataset.carrinhoquantidade/100));
    
                });

                somaDoMultiplicadorDeQuantidade = 'R$ ' + somaDoMultiplicadorDeQuantidade.toFixed(2);
                valorTotalNoCarrinho.innerHTML = somaDoMultiplicadorDeQuantidade;
            });

        }
    });

    let valorTotalNoCarrinho = document.querySelector('[data-carrinhovalortotal]');
    valorTotalNoCarrinho.innerHTML = precoParaSerSomado;


});

// ENTREGA ------------------------------------------------------------

botaoFinalizar.addEventListener('click', () => {

    mascara.removeAttribute('id', 'esconde');
    telaDeEntrega.removeAttribute('id', 'esconde');
    document.body.scrollIntoView();

});

formaEntrega.addEventListener('click', () => {
    if(formaEntrega.children[1].selected) {
        inputsDeDelivery.forEach( (input) => {
            input.style.display = 'none';
            telaDeEntrega.style.height = '300px';
            botaoContinuar.style.marginTop = '2rem';
        });
    } else {
        inputsDeDelivery.forEach( (input) => {
            input.style.display = 'flex';
        });
    }
});

inputCep.addEventListener('blur', () => {
    
    const cep = inputCep.value.replace(/\D/g, '');
    const urlViaCep = `https://viacep.com.br/ws/${cep}/json/`
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };
    
    if(!inputCep.validity.patternMismatch && !inputCep.validity.valueMissing) {
        fetch(urlViaCep, options).then(response => response.json()).then(data => {
            if(data.erro) {
                alert('Não foi possível buscar este CEP, por favor, tente novamente.');
                return;
            }
            if(data.bairro.typeOf == 'object') {
                let bairros = Object.values(data.bairro);
                bairros.forEach( (b) => {
                    let option = document.createElement('option');
                    option.setAttribute('value', data.b);
                    option.innerHTML = data.b;
                    bairro.appendChild(option);
                })
            } else {
                let option = document.createElement('option');
                option.setAttribute('value', data.bairro);
                option.innerHTML = data.bairro
                bairro.appendChild(option);
            }
            logradouro.value = data.logradouro;
            cidade.value = data.localidade;
            estado.value = data.uf;
            return;
        });
    }
    
});

botaoContinuar.addEventListener('click', (event) => {
    event.preventDefault();
    fecharAbaSucesso.scrollIntoView();

    const itensDoCarrinho = document.querySelectorAll('[data-carrinhoitem]');
    let produtos = [];

    itensDoCarrinho.forEach( (item) => {
        let nome = item.firstElementChild.firstElementChild.innerHTML;
        let quantidade = parseInt(item.children[2].children[1].innerHTML);
        let valor = parseFloat(item.lastElementChild.firstElementChild.innerHTML.replace(/\D{3}/g, ''));

        produtos.push({nome, quantidade, valor});

    });

    let cidade = document.querySelector('#cidade').value;
    let estado = document.querySelector('#estado').value;
    let bairro = document.querySelector('#bairro').lastChild.innerHTML;
    let complemento = document.querySelector('#complemento').value;
    let referencia = document.querySelector('#referencia').value;
    let endereco = document.querySelector('#logradouro').value;
    let numero = document.querySelector('#numero').value;
    let cep = document.querySelector('#cep').value;
    let valor_total = parseFloat(document.querySelector('[data-carrinhovalortotal]').innerHTML.replace(/\D{3}/g, ''));

    let pedidoJSON = {produtos, cidade, estado, bairro, complemento, referencia, endereco, numero, cep, valor_total};
    console.log(pedidoJSON);
    pedidoJSON = JSON.stringify(pedidoJSON);

    const urlApi = 'http://localhost:3000/pedidos/';
    const options2 = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: `${pedidoJSON}`
    };

    if(formaEntrega.children[0].selected) {
        if(!document.querySelector('#cidade').validity.valueMissing && 
            !document.querySelector('#estado').validity.valueMissing && 
            !document.querySelector('#logradouro').validity.valueMissing && 
            !document.querySelector('#numero').validity.valueMissing && 
            !document.querySelector('#cep').validity.valueMissing) {

                fetch(urlApi, options2);
                telaDeEntrega.setAttribute('id', 'esconde');
                telaDeSucesso.removeAttribute('id', 'esconde');
        } else {
            alert('Preencha os campos para poder continuar.')
        }
    } else {
        fetch(urlApi, options2);
        telaDeEntrega.setAttribute('id', 'esconde');
        telaDeSucesso.removeAttribute('id', 'esconde');
    }
});

botaoSucesso.addEventListener('click', () => {
    history.go(0);
});

fecharAbaSucesso.addEventListener('click', () => {
    history.go(0);
});
