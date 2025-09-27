import { Link } from "react-router-dom";

export function ProductosCategoria() {
  const categorias = [
    {
      id: 1,
      nombre: "Variado",
      productos: [
        { id: 1, nombre: "Televisor", precio: "S/ 1200.00", imagen: "categorias/electrodomesticos/tele.png" },
        { id: 2, nombre: "Vegetales", precio: "S/ 10.00", imagen: "categorias/verduras/vegetales.png" },
        { id: 3, nombre: "Vinos", precio: "S/ 30.00", imagen: "categorias/vinos/vinos.png" },
        { id: 4, nombre: "Combos", precio: "S/ 80.00", imagen: "categorias/combos/combo.png" },
        { id: 5, nombre: "Cosméticos", precio: "S/ 150.00", imagen: "categorias/belleza/belleza.jpg" },
      ],
    },
    {
      id: 2,
      nombre: "Vinos",
      productos: [
        { id: 6, nombre: "Vino El enemigo", precio: "S/ 5.00", imagen: "categorias/vinos/El-enemigo.png" },
        { id: 7, nombre: "Vino Rose", precio: "S/ 8.00", imagen: "categorias/vinos/vino-rose.png" },
        { id: 8, nombre: "Vino Blanco", precio: "S/ 12.00", imagen: "categorias/vinos/vino-blanco.png" },
      ],
    },
  ];

  return (
    <section className="p-6 space-y-12">
      {categorias.map((cat) => {
        const productosLimitados = cat.productos.slice(0, 5);

        return (
          <div key={cat.id}>
            {/* Nombre de la categoría */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{cat.nombre}</h2>
              <Link
                to={`/products`}
                className="text-[#EAA51E] font-semibold hover:underline"
              >
                Ver más ➝
              </Link>
            </div>

            {/* Productos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {productosLimitados.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#f5f5f5] rounded-lg shadow p-2 flex flex-col items-center"
                >
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="w-34 h-34 object-cover rounded-md mb-2"
                  />
                  <p className="text-[15px] font-semibold text-[#333333]">{prod.nombre}</p> 

                  {/* Precio y + en esquinas */}
                  <div className="flex justify-between items-center w-full mt-2">
                    <span className="text-gray-700 font-bold">{prod.precio}</span>
                    <span className="bg-[#EAA51E] text-[#F5F5F5] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer font-bold hover:bg-[#EAA51E] hover:text-white hover:scale-105">
                      +
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
