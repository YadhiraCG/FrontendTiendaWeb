import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="flex items-center justify-between gap-2 bg-[#EAA51E] text-white py-1 px-5">
    {/* Logo */}
    <div>
      <img src="/logo.png" alt="logo" className="w-12 h-12 md:w-28 md:h-24" />
    </div>
  
    {/* Categorías */}
    <div>
      <select
        className="text-black rounded-md pr-8 pl-2 py-1 font-semibold text-[20px]"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Categorías
        </option>
        <option value="1" className="text-black">Opción 1</option>
        <option value="2" className="text-black">Opción 2</option>
        <option value="3" className="text-black">Opción 3</option>
      </select>
    </div>
  
    {/* Search */}
    <div className="flex items-center w-full max-w-md">
      <button className="bg-[#D9D9D9] text-white px-4 py-2 rounded-l-md hover:bg-[#D6D4D4]">
        <img src="/icons/search.svg" alt="search" className="w-6 h-6" />
      </button>
      <input
        type="text"
        placeholder="Buscar"
        className="w-full px-4 text-black py-2 bg-[#D9D9D9] rounded-r-md focus:outline-none"
      />
    </div>
  
    {/* Mi cuenta */}
    <Link to="/perfil" className="flex items-center gap-2 cursor-pointer">
      <img src="perfil.png" alt="" className="w-10 h-10 md:w-12 md:h-12 " />
      <h1 className="text-black font-semibold text-[19px] ">Mi cuenta</h1>
    </Link>
  
    {/* Carrito */}
    <Link to="/carrito" className="flex items-center gap-2 cursor-pointer">
      <img src="carrito.png" alt="" className="w-10 h-10 md:w-12 md:h-12" />
      <h1 className="text-black font-semibold text-[19px]">Carrito</h1>
    </Link>
  </header>
  
  );
}
