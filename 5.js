// Desarrollar en JavaScript los siguientes algoritmos que den solución a la problemática
// planteada.
// Implementar una clase en JavaScript, la cual tenga los siguientes atributos y métodos.
// Atributos:
// ● Código.
// ● Descripción.
// ● Precio de compra.
// ● Precio de venta.
// ● Cantidad en bodega.
// ● Cantidad mínima requerida en bodega.
// ● Cantidad máxima de inventario permitida.
// ● Porcentaje de Descuento.
// Métodos:
// ● Solicitar pedido: devuelva true si debe solicitar el producto al proveedor y false en
// caso contrario.
// ● Calcular total a pagar: devuelva la cantidad total a pagar al proveedor dado una
// cantidad de unidades de compra.
// Adicionalmente se desea dos subclases para los siguientes tipos de productos:
// ● Prendas de vestir (como lo son blusas, jeans, camisas, etc.) el cual debe tener los
// siguientes parámetros adicionales:
// ○ Talla: S, M, L, etc.
// ○ Permite planchado: verdadero o falso.
// ● Calzado (como lo son tenis, calzado formal, sandalias, etc.) el cual debe tener el
// siguiente parámetro adicional:
// ○ Talla: 35, 36, 37, etc.
// Diseñar un programa que:
// ● Consulte el número de productos de tipo de prendas de vestir a manejar.
// ● Consulte el número de productos de tipo calzado a manejar.
// ● Cree en una estructura de datos (arrays, map, set), los productos de prendas de
// vestir en el cual se guardarán las instancias de cada uno de ellos.
// ● Cree una estructura de datos (arrays, map, set) de productos de calzado en el cual
// se guardarán las instancias de cada uno de ellos.


class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinima = cantidadMinima;
      this.cantidadMaxima = cantidadMaxima;
      this.descuento = descuento;
    }
  
    solicitarPedido() {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalAPagar(cantidadUnidadesCompra) {
      return cantidadUnidadesCompra * this.precioCompra;
    }
  }
  
  class PrendaVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento, talla, permitePlanchado) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento);
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento, talla) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento);
      this.talla = talla;
    }
  }
  
  
  function crearProductos(numPrendasDeVestir, numCalzado) {
    const productos = [];
  
    for (let i = 1; i <= numPrendasDeVestir; i++) {
      productos.push(
        new PrendaVestir(
          `PV${i}`,
          `Prenda de Vestir ${i}`,
          50, // Precio de compra
          100, // Precio de venta
          20, // Cantidad en bodega
          10, // Cantidad mínima requerida en bodega
          50, // Cantidad máxima de inventario permitida
          0.1, // Porcentaje de Descuento
          `Talla ${i}`, // Talla
          i % 2 === 0 // Permite planchado (alternando entre verdadero y falso)
        )
      );
    }
  
    for (let i = 1; i <= numCalzado; i++) {
      productos.push(
        new Calzado(
          `CZ${i}`,
          `Calzado ${i}`,
          40, // Precio de compra
          80, // Precio de venta
          15, // Cantidad en bodega
          5, // Cantidad mínima requerida en bodega
          30, // Cantidad máxima de inventario permitida
          0.15, // Porcentaje de Descuento
          `Talla ${i}` // Talla
        )
      );
    }
  
    return productos;
  }
  
  
  const productos = crearProductos(3, 2);
  
  console.log("Productos:");
  console.log(productos);
  