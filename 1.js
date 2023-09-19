// Construya un algoritmo con JavaScript” para las estadísticas de atención de una
// universidad teniendo en cuenta los siguientes requisitos:
// 1. Hay dos módulos de atención: terminal para llamada telefónica y oficina.
// 2. El sistema brinda las estadísticas de todo el proceso de atención:
// • Cantidad de usuarios atendidos.
// • Atendidos por día y especificación por segmento (Estudiante – docente) en
// cada uno de los módulos de atención.
// • Se permite trasferir de módulo de atención y se debe generar estadística de
// esta trasferencia. 


let totalUsuariosAtendidos = 0;
let atendidosPorDia = {};
let atendidosPorSegmento = {
  estudiante: {
    terminal: 0,
    oficina: 0,
  },
  docente: {
    terminal: 0,
    oficina: 0,
  },
};
let trasferencias = 0;


function atenderUsuario(modulo, segmento) {
  totalUsuariosAtendidos++;
  const fechaActual = new Date().toLocaleDateString();

  
  if (!atendidosPorDia[fechaActual]) {
    atendidosPorDia[fechaActual] = {
      total: 0,
      terminal: 0,
      oficina: 0,
    };
  }
  atendidosPorDia[fechaActual].total++;
  atendidosPorDia[fechaActual][modulo]++;

  // Registrar la atención por segmento
  atendidosPorSegmento[segmento][modulo]++;
}


function transferirUsuario() {
  trasferencias++;
}

atenderUsuario("terminal", "estudiante");
atenderUsuario("oficina", "docente");
transferirUsuario();
atenderUsuario("terminal", "estudiante");


console.log("Estadísticas de Atención de la Universidad:");
console.log("Total de Usuarios Atendidos:", totalUsuariosAtendidos);
console.log("Atendidos por Día:", atendidosPorDia);
console.log("Atendidos por Segmento:", atendidosPorSegmento);
console.log("Número de Transferencias:", trasferencias);