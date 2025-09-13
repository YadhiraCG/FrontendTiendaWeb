const Footer = () => {
    return (
        <footer className="min-h-[20rem] bg-[#333333] text-white py-2 md:py-5 px-5">

            <div className="max-w-6xl mx-auto flex  -mt-3 justify-center gap-20" >

                <div className="flex-shrink-0 relative -left-13">
                    <img
                        src="/Logo(3)1.png"
                        className="w-auto h-15 sm:h-30 rounded-md"
                        alt="Logo Destinos"
                    />
                </div>

                {/* Columna 1 */}
                <div className="flex-shrink-0 relative -translate-x-10">
                    <ul className="flex flex-col mt-6 text-[0.8rem] sm:text-[1rem] space-y-1 ">
                        <li className="font-bold text-[1.2rem] mb-3">Conócenos</li> {/* Título */}
                        <li className="mb-2">

                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Nosotros</a>

                        </li>
                        <li className="mb-2">

                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Términos y condiciones</a>

                        </li>
                        <li className="mb-2">

                           <a href="https://wa.me/902320932" className="hover:text-gray-300">Politicas de privacidad</a>

                        </li>
                        <li className="mb-2">

                            <a href="https://wa.me/902320932" className="hover:text-gray-300">libro de reclamaciones</a>

                        </li>
                    </ul>
                </div>

                {/* Columna 2 */}
                <div className="flex-shrink-0 relative -translate-x-10">
                    <ul className="flex flex-col mt-6 text-[0.8rem] sm:text-[1rem] space-y-1 ">
                        <li className="font-bold text-[1.2rem] mb-3">Redes Sociales</li> {/* Título */}
                        <li className="mb-2">
                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Whatsapp</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Facebook</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Tik Tok</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Instagram</a>
                        </li>
                        <a className="mb-2">
                            <a href="https://wa.me/902320932" className="hover:text-gray-300">kick</a>
                        </a>
                    </ul>
                </div>

                {/* Columna 3 */}
                <div className="flex-shrink-0 relative -translate-x-10">
                    <ul className="flex flex-col mt-6 text-[0.8rem] sm:text-[1rem] space-y-1 ">
                        <li className="font-bold text-[1.2rem] mb-3">Mi Cuenta</li> {/* Título */}
                        <li className="mb-2">
                            
                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Pedidos</a>

                        </li>
                        <li className="mb-2">
                            
                            <a href="https://wa.me/902320932" className="hover:text-gray-300">Iniciar sesión</a>

                        </li>
                    </ul>
                </div>
            </div>
            {/* Texto centrado abajo */}
            <div className="mt-8 text-center">
                <h1>Created by <b>Cervera & Vega</b></h1>
            </div>
        </footer>
    );

}

export default Footer