function programaDescontos(cliente)
{
  let valorTotal = 0;
  let valorDesconto = 0;
  let valorFinal = 0;
  let cupom = '';
  let resultado = [];

  // calcula valor total sem desconto
  for (let i = 0; i < cliente.length; i++)
  {
      valorTotal = valorTotal + cliente[i].valor;
  }
 
  // calcula total de desconto aplicado
  for (let i = 0; i < cliente.length; i++)
  {
      // desconto de 50% se peça for mais que 200 reais
      if (cliente[i].valor > 200) {
        cliente[i].valor = cliente[i].valor * 0.5;
    }
    // desconto de 20% se peça for mais que 100 reais
    else if (cliente[i].valor > 100) {
        cliente[i].valor = cliente[i].valor * 0.2;
    }
    // desconto de 10% se peça for mais que 80 reais
    else if (cliente[i].valor > 80) {
      cliente[i].valor = cliente[i].valor * 0.1;
    }
    // desconto de 5% se peça for mais que 50 reais
    else if (cliente[i].valor > 50) {
        cliente[i].valor = cliente[i].valor * 0.05;
    }
    valorDesconto = valorDesconto + cliente[i].valor;
  }

  // calcula valor final com desconto aplicado
  valorFinal = valorTotal - valorDesconto;

  //verifica se cliente recebe cupom de 50 reais
  if(cliente.length > 10 || valorFinal > 800)
  { 
      cupom = 'Você ganhou um baita cupom de 50 reais na próxima compra :)';
  }

  // Lista final de resultados
  resultado = [valorTotal, valorDesconto, valorFinal, cupom];
  console.log(resultado);
}


/////////////////////////// DADOS //////////////////////////// 
   let clienteLilit = [
{produto: 'Bolsa pequena', valor: 49.0},
{produto: 'Cinto preto', valor: 22.0},
{produto: 'Jaqueta Jeans', valor: 300.0},
{produto: 'Calça preta', valor: 100.0},
{produto: 'Blusa simples', valor: 35.0},
{produto: 'Calça jeans clara', valor: 130.0},
{produto: 'Blusa preta gola alta', valor: 60.0},
{produto: 'Short verde canelado', valor: 80.0},
{produto: 'Salto agulha 39', valor: 250.0},
{produto: 'Ténis casual preto', valor: 120.0},
{produto: 'meia calça transparente', valor: 30.0}]

programaDescontos(clienteLilit)

    let clienteAdrielle = [
{produto: 'Cropped Preto', valor: 25.0},
{produto: 'Batom vermelho', valor: 10.0},
{produto: 'Meia calça preta', valor: 40.0},
{produto: 'Salto alto vermelho', valor: 100.0}]

programaDescontos(clienteAdrielle)

    let clienteEmanuelly = [
    {produto: 'Camisa xadrez', valor: 35.0},
    {produto: 'Bota preta', valor: 150.0},
    {produto: 'Meia calça vermelha', valor: 40.0},
    {produto: 'Camisa personalizada anime', valor: 120.0}]
    
    programaDescontos(clienteEmanuelly)

