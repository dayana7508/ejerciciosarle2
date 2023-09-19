// Una subasta o remate es una venta organizada basado en la competencia directa, y
// generalmente pública, es decir, a aquel comprador que pague la mayor cantidad de
// dinero o de bienes a cambio del producto.
// Hacer en JavaScript una simulación de subasta que cumpla con las siguientes
// características:
// 1. Se podrá registrar los productos a subastar almacenados (id del producto, nombre
// del producto, fecha y precio inicial de subasta).
// 2. Cada persona puede pujar por el producto que desea, indicando la fecha, el
// producto y el valor ofrecido.
// 3. Se puede ver la lista de productos registrados.
// 4. La lista de ofertas por producto.
// 5. Seleccionar una oferta ganadora.

class Producto {
    constructor(id, nombre, fecha, precioInicial) {
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.precioInicial = precioInicial;
      this.ofertas = [];
    }
  
    registrarOferta(ofertante, valorOferta) {
      if (valorOferta > this.precioInicial) {
        this.ofertas.push({ ofertante, valorOferta });
        return true;
      } else {
        return false;
      }
    }
  
    obtenerOfertas() {
      return this.ofertas;
    }
  
    seleccionarGanador() {
      if (this.ofertas.length === 0) {
        return "No hay ofertas para este producto.";
      }
  
      const ofertaGanadora = this.ofertas.reduce((maxOferta, oferta) => {
        return oferta.valorOferta > maxOferta.valorOferta ? oferta : maxOferta;
      });
  
      return `El ganador de la subasta para "${this.nombre}" es ${ofertaGanadora.ofertante} con una oferta de $${ofertaGanadora.valorOferta}.`;
    }
  }
  
  class Subasta {
    constructor() {
      this.productos = [];
    }
  
    registrarProducto(id, nombre, fecha, precioInicial) {
      const producto = new Producto(id, nombre, fecha, precioInicial);
      this.productos.push(producto);
    }
  
    listarProductos() {
      return this.productos.map((producto) => producto.nombre);
    }
  
    listarOfertasPorProducto(productoNombre) {
      const producto = this.productos.find((p) => p.nombre === productoNombre);
      if (producto) {
        return producto.obtenerOfertas();
      } else {
        return "Producto no encontrado.";
      }
    }
  
    realizarOferta(productoNombre, ofertante, valorOferta) {
      const producto = this.productos.find((p) => p.nombre === productoNombre);
      if (producto) {
        const ofertaRegistrada = producto.registrarOferta(ofertante, valorOferta);
        if (ofertaRegistrada) {
          return "Oferta registrada con éxito.";
        } else {
          return "La oferta debe ser mayor que el precio inicial.";
        }
      } else {
        return "Producto no encontrado.";
      }
    }
  
    seleccionarGanador(productoNombre) {
      const producto = this.productos.find((p) => p.nombre === productoNombre);
      if (producto) {
        return producto.seleccionarGanador();
      } else {
        return "Producto no encontrado.";
      }
    }
  }
  
  
  const subasta = new Subasta();
  
  subasta.registrarProducto(1, "iPhone 13", "2023-09-25", 1000);
  subasta.registrarProducto(2, "MacBook Pro", "2023-09-30", 1500);
  
  console.log("Lista de productos:");
  console.log(subasta.listarProductos());
  
  console.log("Ofertas por iPhone 13:");
  console.log(subasta.listarOfertasPorProducto("iPhone 13"));
  
  console.log(subasta.realizarOferta("iPhone 13", "Comprador1", 1100));
  console.log(subasta.realizarOferta("iPhone 13", "Comprador2", 1200));
  
  console.log(subasta.seleccionarGanador("iPhone 13"));
  
  console.log(subasta.realizarOferta("MacBook Pro", "Comprador3", 1600));
  console.log(subasta.seleccionarGanador("MacBook Pro"));
  