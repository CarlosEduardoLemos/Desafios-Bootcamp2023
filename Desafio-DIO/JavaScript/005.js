// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

while (true) {
    const valor = parseFloat(gets());
  
    if (valor > 0) {
      const saldoAtual = 0; // Supondo que o saldo inicial é 1000
      const novoSaldo = saldoAtual + valor;
      print("Deposito realizado com sucesso!");
      print("Saldo atual: R$ " + novoSaldo.toFixed(2))
      break; // Sai do loop após um valor válido ser informado.
    } else if (valor < 0) {
      print("Valor invalido! Digite um valor maior que zero.");
      break;
    } else {
      print("Encerrando o programa...");
      break; // Sai do loop quando o usuário digita zero ou valor negativo.
    }
  }
  