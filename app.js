function simularAhorros(montoInicial, tasaInteresAnual, meses) {
    let saldo = montoInicial;

    const tasaInteresMensual = tasaInteresAnual / 100 / 12;

    for (let i = 1; i <= meses; i++) {
      const intereses = saldo * tasaInteresMensual;
    saldo += intereses;
    }

    return saldo;
}

function ejecutarSimulacion() {
    const montoInicial = parseFloat(prompt("Ingrese el monto inicial de ahorros:"));
    const opcionInteres = parseInt(prompt("Seleccione una opción de tasa de interés:\n1. Baja (1%)\n2. Media (3%)\n3. Alta (5%)"));

    let tasaInteresAnual;
    if (opcionInteres === 1) {
    tasaInteresAnual = 1;
    } else if (opcionInteres === 2) {
    tasaInteresAnual = 3;
    } else if (opcionInteres === 3) {
    tasaInteresAnual = 5;
    } else {
    console.log("Opción inválida. Se utilizará la tasa de interés por defecto (3%).");
    tasaInteresAnual = 3;
    }

    const meses = parseInt(prompt("Ingrese la cantidad de meses a simular:"));

    const saldoFinal = simularAhorros(montoInicial, tasaInteresAnual, meses);
    alert(`Saldo final después de ${meses} meses: $${saldoFinal.toFixed(2)}`);
}

ejecutarSimulacion();