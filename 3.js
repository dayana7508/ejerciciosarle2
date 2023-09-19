// • Desarrollar en JavaScript un programa para la gestión reservas de un hotel,
// el cual, debe tener las siguientes características y consideraciones:
// • Un cliente puede reservar cualquier tipo de habitación: individual, doble y
// familiar.
// • Las habitaciones pueden ser para fumadores o no fumadores.
// • Las mascotas solo se aceptan en habitaciones familiares.
// • El hotel cuenta con 3 habitaciones de cada tipo.
// • No se puede exceder el número de personas por habitación: individual 2
// personas, 4 personas para doble y 6 personas para familiar.
// • El hotel necesita una estadística de las reservas: nombre de quien reserva,
// país de origen, número de personas, el periodo de la estadía, número de
// personas que están ocupando el hotel y si el huésped trajo mascota.

// Objeto que representa el cajero automático
const cajeroAutomatico = {
    encendido: false,
    saldoCuentas: {
      
      "123456789": 1000000,
      "987654321": 500000,
    },
    validarPIN(documento, pin) {
      
      return true; // Cambia a una lógica de validación real con el banco
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
  
  
  function cambiarEstadoCajero(estado) {
    cajeroAutomatico.encendido = estado;
    return `El cajero automático está ${estado ? "encendido" : "apagado"}.`;
  }
  
  
  const documento = "123456789"; // Documento de identidad del cliente
  const pin = "1234"; // PIN del cliente
  
  console.log(cambiarEstadoCajero(true)); // Encender el cajero
  console.log(cajeroAutomatico.realizarRetiro(documento, 150000)); // Realizar un retiro
  console.log(cajeroAutomatico.realizarDeposito(documento, 200000, "efectivo")); // Realizar un depósito en efectivo
  console.log(cajeroAutomatico.realizarTransferencia(documento, "987654321", 100000)); // Realizar una transferencia
  console.log(cajeroAutomatico.consultarSaldo(documento)); // Consultar saldo
  console.log(cambiarEstadoCajero(false)); // Apagar el cajero
  