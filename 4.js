// Se necesita simular en JavaScript la atención de clientes a través de la asignación de
// turnos en un banco. Se debe usar arreglos o objetos dependiendo del algoritmo que
// diseñe. Y tener en cuenta las siguientes restricciones y requisitos.
// • Hay tres tipos de clientes: cliente preferencial, cliente general y cliente que no
// tiene cuenta en el banco
// • Hay dos tipos de atención: caja o asesoría.
// • Los de atención de caja se clasifican en depósitos y retiros.
// • El banco cuenta con 5 cajas, de las cuales la 1 y 2 están reservadas para retiros.
// • Aquellos clientes presenciales se atienden primero de los demás tipos.
// • La caja 5 es solo asesoría.
// • A medida que se atienden clientes se va liberando las cajas y distribuyendo entre
// los usuarios de las colas.

// Definir el objeto Banco y sus propiedades
const banco = {
    cajas: [
      { numero: 1, tipo: "retiro", disponible: true },
      { numero: 2, tipo: "retiro", disponible: true },
      { numero: 3, tipo: "caja", disponible: true },
      { numero: 4, tipo: "caja", disponible: true },
      { numero: 5, tipo: "asesoria", disponible: true },
    ],
    colas: {
      preferencial: [],
      general: [],
      sinCuenta: [],
    },
  };
  
  // Función para asignar un turno a un cliente
  function asignarTurno(tipoCliente, tipoAtencion) {
    const cajaDisponible = banco.cajas.find((caja) => caja.disponible);
  
    if (!cajaDisponible) {
      return "Todas las cajas están ocupadas. Espere su turno.";
    }
  
    // Atender a clientes presenciales primero
    if (tipoCliente === "presencial") {
      if (banco.colas.preferencial.length > 0) {
        const cliente = banco.colas.preferencial.shift();
        return atenderCliente(cliente, cajaDisponible, tipoAtencion);
      } else if (banco.colas.general.length > 0) {
        const cliente = banco.colas.general.shift();
        return atenderCliente(cliente, cajaDisponible, tipoAtencion);
      } else if (banco.colas.sinCuenta.length > 0) {
        const cliente = banco.colas.sinCuenta.shift();
        return atenderCliente(cliente, cajaDisponible, tipoAtencion);
      }
    } else {
      // Atender a clientes no presenciales
      if (banco.colas[tipoCliente].length > 0) {
        const cliente = banco.colas[tipoCliente].shift();
        return atenderCliente(cliente, cajaDisponible, tipoAtencion);
      }
    }
  
    return "No hay clientes en cola para atender.";
  }
  
  // Función para atender a un cliente en una caja
  function atenderCliente(cliente, caja, tipoAtencion) {
    if (caja.disponible) {
      caja.disponible = false;
      return `Atendiendo a ${cliente} en ${tipoAtencion} - Caja ${caja.numero}`;
    }
  }
  
  // Ejemplo de uso:
  banco.colas.preferencial.push("Cliente1");
  banco.colas.general.push("Cliente2");
  banco.colas.sinCuenta.push("Cliente3");
  banco.colas.preferencial.push("Cliente4");
  
  console.log(asignarTurno("presencial", "retiro"));
  console.log(asignarTurno("preferencial", "caja"));
  console.log(asignarTurno("sinCuenta", "caja"));
  