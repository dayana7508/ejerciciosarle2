// El software que se desarrollará controlará un cajero automático (ATM) a través de una
// simulación usando el lenguaje de programación JavaScript.
// • El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente
// que inserte su documento de identidad y su pin de 4 dígitos, los cuales se
// enviarán al banco para su validación como parte de cada transacción. El
// cliente podrá entonces realizar una o más transacciones. El menú se
// mostrará en la consola hasta que el cliente indique que no desea realizar
// más transacciones.
// • El cajero automático debe ser capaz de proporcionar los siguientes servicios
// al cliente:
// • Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta
// adecuada vinculada al documento de identidad, en múltiplos de $50000. Se
// debe obtener la aprobación del banco antes de entregar efectivo.
// • Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al
// documento de identidad, consistente en efectivo y/o cheques. El cliente
// ingresará el monto del depósito en el cajero automático e indicar si es
// efectivo o cheque.
// • Un cliente debe poder realizar una transferencia de dinero entre dos
// cuentas cualesquiera vinculadas a al documento de identidad.
// • Un cliente debe poder realizar una consulta de saldo de cualquier cuenta
// vinculada al documento de identidad.
// • El cajero automático comunicará al cliente los resultados de cada
// transacción dependiendo de su tipo. Ejemplo “retiro exitoso, puede tomar x
// dinero de la bandeja principal”
// • Si el banco determina que el PIN del cliente no es válido, se le pedirá al
// cliente que vuelva a ingresar el PIN antes de que se pueda continuar con la
// transacción. Si el cliente no puede ingresar correctamente el PIN después
// de tres intentos saldrá de la aplicación.
// • El cajero automático tendrá un panel de operador con un interruptor que
// permitirá apagar o encender el cajero. 
// Objeto que representa el cajero automático
const cajeroAutomatico = {
    encendido: false,
    saldoCuentas: {
      
      "123456789": 1000000,
      "987654321": 500000,
    },
    validarPIN(documento, pin) {
      
      return true; 
    },
    realizarRetiro(documento, monto) {
      if (!this.encendido) {
        return "El cajero automático está apagado.";
      }
      if (!this.validarPIN(documento, pin)) {
        return "PIN no válido. Intente nuevamente más tarde.";
      }
      if (monto % 50000 !== 0) {
        return "El monto debe ser múltiplo de $50000.";
      }
      if (this.saldoCuentas[documento] < monto) {
        return "Saldo insuficiente.";
      }
      this.saldoCuentas[documento] -= monto;
      return `Retiro exitoso. Puede tomar $${monto} de la bandeja principal.`;
    },
    realizarDeposito(documento, monto, tipo) {
      if (!this.encendido) {
        return "El cajero automático está apagado.";
      }
      if (!this.validarPIN(documento, pin)) {
        return "PIN no válido. Intente nuevamente más tarde.";
      }
      if (tipo === "efectivo") {
        this.saldoCuentas[documento] += monto;
      }
      
      return "Depósito exitoso.";
    },
    realizarTransferencia(origen, destino, monto) {
      if (!this.encendido) {
        return "El cajero automático está apagado.";
      }
      if (!this.validarPIN(origen, pin)) {
        return "PIN no válido. Intente nuevamente más tarde.";
      }
      if (this.saldoCuentas[origen] < monto) {
        return "Saldo insuficiente para la transferencia.";
      }
      this.saldoCuentas[origen] -= monto;
      this.saldoCuentas[destino] += monto;
      return "Transferencia exitosa.";
    },
    consultarSaldo(documento) {
      if (!this.encendido) {
        return "El cajero automático está apagado.";
      }
      if (!this.validarPIN(documento, pin)) {
        return "PIN no válido. Intente nuevamente más tarde.";
      }
      const saldo = this.saldoCuentas[documento];
      return `Saldo disponible: $${saldo}`;
    },
  };
  
  // Función para encender/apagar el cajero automático
  function cambiarEstadoCajero(estado) {
    cajeroAutomatico.encendido = estado;
    return `El cajero automático está ${estado ? "encendido" : "apagado"}.`;
  }
  
  // Ejemplo de uso:
  const documento = "123456789"; // Documento de identidad del cliente
  const pin = "1234"; // PIN del cliente
  
  console.log(cambiarEstadoCajero(true)); // Encender el cajero
  console.log(cajeroAutomatico.realizarRetiro(documento, 150000)); // Realizar un retiro
  console.log(cajeroAutomatico.realizarDeposito(documento, 200000, "efectivo")); // Realizar un depósito en efectivo
  console.log(cajeroAutomatico.realizarTransferencia(documento, "987654321", 100000)); // Realizar una transferencia
  console.log(cajeroAutomatico.consultarSaldo(documento)); // Consultar saldo
  console.log(cambiarEstadoCajero(false)); // Apagar el cajero
  