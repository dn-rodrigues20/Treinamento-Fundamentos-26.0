const clubes = [
            { id: 1, nome: "São Paulo", preco: "R$ 2.500.000.000", desc: "Só não garantimos títulos recentes em sequência.", imagem: "assets/imgs/sao-paulo.svg" },
            { id: 2, nome: "Palmeiras", preco: "R$ 2.000.000.000", desc: "Avião da presidente vendido separadamente.", imagem: "assets/imgs/palmeiras.svg" },
            { id: 3, nome: "Corinthians", preco: "R$ 1.800.000.000", desc: "Acompanha uma arena incrível (e os boletos dela também).", imagem: "assets/imgs/corinthians.svg" },
            { id: 4, nome: "Santos", preco: "1.900.000.000", desc: "Acompanha as viúvas de Pelé e Neymar.", imagem: "assets/imgs/santos.svg"},
            { id: 5, nome: "Flamengo", preco: "R$ 2.800.000.000", desc: "Crise na Gávea inclusa no pacote premium.", imagem: "assets/imgs/flamengo.svg" },
            { id: 6, nome: "Fluminense", preco: "R$ 1.200.000.000", desc: "Atual campeão da América. Média de idade do elenco: 38 anos.", imagem: "assets/imgs/fluminense.svg" },
            { id: 7, nome: "Vasco", preco: "R$ 900.000.000", desc: "Acompanha calculadora de probabilidade de rebaixamento.", imagem: "assets/imgs/vasco.svg" },
            { id: 8, nome: "Botafogo", preco: "R$ 750.000.000", desc: "Disclaimer: é o time de futebol e não o bairro.", imagem: "assets/imgs/botafogo.svg" }, 
            { id: 9, nome: "Grêmio", preco: "R$ 1.150.000.000", desc: "O imortal que mais morreu. Série B inclusa.", imagem: "assets/imgs/gremio.svg" },
            { id: 10, nome: "Internacional", preco: "R$ 1.200.000.000", desc: "EdenilsooooooOOOOooOOOoon, 41 anos.", imagem: "assets/imgs/internacional.svg" },
            { id: 11, nome: "Atlético-MG", preco: "R$ 750.000.000", desc: "Garantia de fábrica até o próximo título do brasileirão.", imagem: "assets/imgs/atletico-mg.svg" },
            { id: 12, nome: "Cruzeiro", preco: "R$ 850.000.000", desc: "Se não comprar esse time hoje, pelo amor de Deus, né?", imagem:"assets/imgs/cruzeiro.svg" }
            ];

            const vitrine = document.getElementById('vitrine');
            let itensNoCarrinho = 0;
            const contador = document.getElementById('contador-carrinho');

            clubes.forEach(clube => {
                const divProduto = document.createElement('div');
                divProduto.className = 'card-clube';
                
                divProduto.innerHTML = `
                    <img src="${clube.imagem}" alt="Escudo do ${clube.nome}" class="img-clube">
                    <h2>${clube.nome}</h2>
                    <p><i>${clube.desc}</i></p>
                    <h3 style="color: green;">${clube.preco}</h3>
                    <button class="botaozin botaozin-add" onclick="adicionar()">Adicionar ao Carrinho</button>
                    <button class="botaozin botaozin-rem" onclick="remover()">Remover</button>
                `;
                
                vitrine.appendChild(divProduto);
            });

            function adicionar() {
                itensNoCarrinho++;
                contador.innerText = itensNoCarrinho;
            }

            function remover() {
                if (itensNoCarrinho > 0) {
                    itensNoCarrinho--;
                    contador.innerText = itensNoCarrinho;
                }
            }