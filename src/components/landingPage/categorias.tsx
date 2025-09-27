export function Categorias() {
    const categories = [
      { id: 1, name: "Electrodomésticos", image: "/categorias/electrodomesticos/tele.png" },
      { id: 2, name: "Verduras", image: "categorias/verduras/vegetales.png" },
      { id: 3, name: "Vinos", image: "categorias/vinos/vinos.png" },
      { id: 4, name: "Combos", image: "categorias/combos/combo.png" },
      { id: 5, name: "Belleza", image: "categorias/belleza/belleza.jpg" },
    ];
  
    return (
      <div className="flex justify-center gap-16 my-6 mt-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="flex flex-col items-center focus:outline-none"
          >
            <div className="w-37 h-35 rounded-full overflow-hidden cursor-pointer border-gray-300 shadow-md hover:scale-105 transition-transform bg-white flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="mt-2 text-[16px] font-semibold text-[#333333]">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    );
  }
  