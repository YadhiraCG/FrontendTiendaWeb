// Layout.jsx
function Products() {
    return (
        <div className="flex w-full m-0 p-0">
            {/* Barra lateral: Categorías */}
            <aside className="w-1/6 bg-gray-100 p-4">
                <h3 className="text-lg font-bold mb-3">Frutas y Verduras</h3>
                <select className="px-2 py-1 w-full">
                    <option className="hover:text-blue-500 cursor-pointer">Categoria</option>
                </select>
                <select className="px-2 py-1 w-full">
                    <option className="hover:text-blue-500 cursor-pointer">Sub - categoria</option>
                </select>
                <select className="px-2 py-1 w-full">
                    <option className="hover:text-blue-500 cursor-pointer">Marca</option>
                </select>
                <select className="px-2 py-1 w-full">
                    <option className="hover:text-blue-500 cursor-pointer">Tipo de Producto</option>
                </select>
                <div>
                    <h3 className="text-lg font-bold my-3">Precio</h3>
                    <input type="range" />
                </div>
            </aside>

            <div className="flex-1 ml-4">
                {/* Mensaje de resultados */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                        Resultado de la búsqueda:
                    </h3>

                    {/* Derecha: agrupar Ordenar por y select */}
                    <div className="flex items-center space-x-2 mr-5 ">
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
                <section className="grid grid-cols-5 gap-4 bg-gray-50 pl-0 pr-4 py-4 rounded-lg shadow-md w-full">
                    <div className="bg-white p-1 rounded shadow w-60 h-80">
                        <div className="flex justify-center items-center">
                            <img src="/vegetales.png" alt="" className="w-64 h-50 object-contain" />
                        </div>
                        <h4 className="font-bold">Producto 1</h4>
                        <p>Descripción del producto</p>
                    </div>
                    <div className="bg-white p-1 rounded shadow w-60 h-80">
                        <div className="flex justify-center items-center">
                            <img src="/vegetales.png" alt="" className="w-64 h-50 object-contain" />
                        </div>
                        <h4 className="font-bold">Producto 2</h4>
                        <p>Descripción del producto</p>
                    </div>
                    <div className="bg-white p-1 rounded shadow w-60 h-80">
                        <div className="flex justify-center items-center">
                            <img src="/tele.png" alt="" className="w-64 h-50 object-contain" />
                        </div>
                        <h4 className="font-bold">Producto 3</h4>
                        <p>Descripción del producto</p>
                    </div>
                    <div className="bg-white p-1 rounded shadow w-60 h-80">
                        <div className="flex justify-center items-center">
                            <img src="/combo.png" alt="" className="w-64 h-50 object-contain" />
                        </div>
                        <h4 className="font-bold">Producto 4</h4>
                        <p>Descripción del producto</p>
                    </div>
                    <div className="bg-white p-1 rounded shadow w-60 h-80">
                        <div className="flex justify-center items-center">
                            <img src="/vino.png" alt="" className="w-64 h-50 object-contain" />
                        </div>
                        <h4 className="font-bold">Producto 5</h4>
                        <p>Descripción del producto</p>
                    </div>
                    <div className="bg-white p-1 rounded shadow w-60 h-80">
                        <div className="flex justify-center items-center">
                            <img src="/vinos.png" alt="" className="w-64 h-50 object-contain" />
                        </div>
                        <h4 className="font-bold">Producto 6</h4>
                        <p>Descripción del producto</p>
                    </div>
                </section>
            </div>
        </div>

    );

}

export default Products;
