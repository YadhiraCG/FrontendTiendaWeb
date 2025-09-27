import { PromoSlider } from "../components/landingPage/promoSlider";
import { Categorias } from "../components/landingPage/categorias";
import { ProductosCategoria } from "../components/landingPage/productos";
export function LandingPage() {
  return (
    <>
      <section className="bg-[#ffffff] min-h-screen mb-1">
      <div>
      <PromoSlider /> 
      </div>
      <div className="px-5 py-10 flex flex-col items-center justify-center">
        <Categorias /> 
      </div>   
      <div>
        <ProductosCategoria />
        </div>     
      </section>
    </>
  );
}

