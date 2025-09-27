import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

type Option = {
  id: number;
  name: string;
  image: string;
};

export default function Header() {
  const options: Option[] = [
    { id: 1, name: "Opción 1", image: "/icons/search.svg" },
    { id: 2, name: "Opción 2", image: "/icons/search.svg" },
    { id: 3, name: "Opción 3", image: "/icons/search.svg" },
  ];


  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between bg-[#EAA51E] text-white py-1 px-8">
      {/* Logo */}
      <Link to="/">
        <img
          src="/logos/logo.png"
          alt="logo"
          className="w-12 h-12 md:w-33 md:h-20 py-1"
        />
      </Link>

      {/* Categorías */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-48 rounded-md px-4 py-2 text-sm font-medium text-[#121212] text-[20px] tracking-wide"
        >
           Categorías          
           <img src="/icons/chevronDown.svg" alt="Chevron down" className="w-6 h-6 " />
        </button>

        {open && (
          <div className="absolute mt-2 w-48 rounded-md bg-white shadow-lg ring-opacity-5 z-50">
            <ul className="py-1">
              {options.map((opt) => (
                <li
                  key={opt.id}
                  onClick={() => {
                    setOpen(false);
                     navigate(`/products`);
                  }}
                  className="flex justify-between items-center px-4 py-2 text-[16px] text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <img src={opt.image} alt={opt.name} className="w-5 h-5" />
                  <span>{opt.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search */}
      <div className="flex items-center w-full max-w-2xl shadow-sm">
        <button className="bg-[#f5f5f5] text-white px-2 py-2 rounded-l-xl hover:bg-[#ededed]">
          <img src="/icons/search.svg" alt="search" className="w-8 h-8" />
        </button>
        <input
          type="text"
          placeholder="Buscar"
          className="w-full px-4 text-black py-3 bg-[#f5f5f5] rounded-r-xl focus:outline-none"
        />
      </div>

     {/* Botones*/}
      <div className="flex items-center gap-8 cursor-pointer">
        {/* Mi cuenta */}
        <Link to="/perfil" className="flex items-center gap-1 cursor-pointer hover:scale-102">
          <img
            src="icons/user.svg"
            alt=""
            className="w-10 h-10 md:w-11 md:h-11 "
          />
          <h1 className="text-[#121212] font-medium text-[18px] tracking-wide">
            Mi cuenta
          </h1>
        </Link>

        {/* Carrito */}
        <Link to="/carrito" className="flex items-center gap-1 cursor-pointer hover:scale-102">
          <img
            src="icons/shopping.svg"
            alt=""
            className="w-10 h-10 md:w-10 md:h-10"
          />
          <h1 className="text-[#121212] font-medium text-[18px] tracking-wide">
            Carrito
          </h1>
        </Link>
      </div>
    </header>
  );
}
