// Layout.jsx
function Products() {
    const productos = [
        { id: 1, nombre: "Vegetales", precio: "S/ 10.00", imagen: "/categorias/verduras/vegetales.png" },
        { id: 2, nombre: "Vino Blanco", precio: "S/ 12.00", imagen: "/categorias/vinos/vino-blanco.png" },
        { id: 3, nombre: "Televisor smart 50'", precio: "S/ 1200.00", imagen: "/categorias/electrodomesticos/tele.png" },
        { id: 4, nombre: "Vino El Enemigo", precio: "S/ 5.00", imagen: "/categorias/vinos/El-enemigo.png" },
        { id: 5, nombre: "Combo de Vinos", precio: "S/ 80.00", imagen: "/categorias/combos/combo.png" },
        { id: 6, nombre: "Vino Rose", precio: "S/ 150.00", imagen: "/categorias/vinos/vino-rose.png" },
        { id: 7, nombre: "Vino", precio: "S/ 150.00", imagen: "/categorias/vinos/vino.png" },
        { id: 8, nombre: "Combo", precio: "S/ 150.00", imagen: "/categorias/vinos/vinos.png" },
        { id: 9, nombre: "Vegetales", precio: "S/ 10.00", imagen: "/categorias/verduras/vegetales.png" },
        { id: 10, nombre: "Televisor smart 50'", precio: "S/ 1200.00", imagen: "/categorias/electrodomesticos/tele.png" },
    ];

    return (
        <div className="flex flex-col md:flex-row w-full m-0 p-0">
            {/* Barra lateral: Categorías */}
            <aside className="w-full md:w-1/6 bg-gray-100 p-4 mb-4 md:mb-0">
                <h3 className="text-lg font-bold mb-3">Frutas y Verduras</h3>
                <select className="px-2 py-1 w-full mb-2">
                    <option className="hover:text-blue-500 cursor-pointer">Categoria</option>
                </select>
                <select className="px-2 py-1 w-full mb-2">
                    <option className="hover:text-blue-500 cursor-pointer">Sub - categoria</option>
                </select>
                <select className="px-2 py-1 w-full mb-2">
                    <option className="hover:text-blue-500 cursor-pointer">Marca</option>
                </select>
                <select className="px-2 py-1 w-full mb-4">
                    <option className="hover:text-blue-500 cursor-pointer">Tipo de Producto</option>
                </select>
                <div>
                    <h3 className="text-lg font-bold my-3">Precio</h3>
                    <input type="range" className="w-full"/>
                </div>
            </aside>

            <div className="flex-1 ml-4">
                {/* Mensaje de resultados */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold mt-5">
                        Resultado de la búsqueda:
                    </h3>

                    {/* Derecha: agrupar Ordenar por y select */}
                    <div className="flex items-center space-x-2 mr-5 -mb-4">
                        <h3 className="text-lg font-semibold">Ordenar por:</h3>
                        <select className="px-2 py-1 border rounded w-30">
                            <option className="hover:text-blue-500 cursor-pointer">Relevancia</option>
                            <option className="hover:text-blue-500 cursor-pointer">Precio: de menor a mayor</option>
                            <option className="hover:text-blue-500 cursor-pointer">Precio: de mayor a menor</option>
                            <option className="hover:text-blue-500 cursor-pointer">Novedades</option>
                        </select>
                    </div>
                </div>

                {/* Contenido principal: Productos */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-gray-50 pl-0 pr-4 py-4 rounded-lg shadow-md w-full">
                    {productos.map((prod) => (
                        <div
                            key={prod.id}
                            className="bg-white p-2 rounded shadow flex flex-col items-center w-full sm:w-auto h-auto"
                        >
                            <div className="flex justify-center items-center w-full h-40 sm:h-48 md:h-52 lg:h-56">
                                <img
                                    src={prod.imagen}
                                    alt={prod.nombre}
                                    className="w-64 h-50 object-contain"
                                />
                            </div>
                            <h4 className="font-bold">{prod.nombre}</h4>

                            {/* Precio y botón + */}
                            <div className="flex justify-between items-center w-full px-2 mt-2 mb-3">
                                {prod.precio && (
                                    <span className="text-gray-700 font-bold">{prod.precio}</span>
                                )}
                                <span className="bg-[#EAA51E] text-[#F5F5F5] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer font-bold hover:bg-[#EAA51E] hover:text-white hover:scale-105">
                                    +
                                </span>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Products;

