// Função para realizar o saque
function realizarSaque(saldoDisponivel, valorSaque) {
    if (valorSaque <= saldoDisponivel) {
        saldoDisponivel -= valorSaque;
        return { sucesso: true, novoSaldo: saldoDisponivel };
    } else {
        return { sucesso: false };
    }
}

// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

// Realizar o saque
const resultadoSaque = realizarSaque(saldoTotal, valorSaque);

// Condições para impressão da saída
if (resultadoSaque.sucesso) {
    print(`Saque realizado com sucesso. Novo saldo: ${resultadoSaque.novoSaldo}`);
} else {
    print("Saldo insuficiente. Saque nao realizado!");
}
