import MoreInfo from "../Subcomponents/MoreInfoBtn";
import imageMobile from "../assets/assets/images/Tecnico.png";
import imageDesktop from "../assets/assets/images/Tecnico.png";
import imgMoto from "../assets/assets/images/imgMoto.png";
import flecha from "../assets/assets/images/flecharoja.png";



const MainArticle = () => {
  return (
    <>
      <section className="">
        <div className="flex justify-between ">

          <picture className="flex translate-x-8 py-10 h-[400px] m-[1px] ">
            <source media="(max-width: 640px)" srcSet={imgMoto} />
            <source media="(min-width: 641px)" srcSet={imgMoto} />
            <img src={imgMoto} alt="Articulo principal img" />
          </picture>

          <img className="translate-y-[150px] h-[50px] m-2 " src={flecha} alt="flecha hacia la derecha" />

          <picture className="flex py-10 h-[400px] m-[1px]">
            <source media="(max-width: 640px)" srcSet={imageMobile} />
            <source media="(min-width: 641px)" srcSet={imageDesktop} />
            <img src={imageMobile} alt="Articulo principal img" />
          </picture>
        </div>

        <div className="sm:flex pb-3">
          <div className="flex-1 py-5 sm:py-5">
            <h2 className="px-1 text-[30px] font-bold sm:text-[40px] leading-none text-Grayishblue">
              ¡Revive tus equipos con<br />los mejores técnicos de la Web!
            </h2>
          </div>
          <div className="flex-1 py-2 sm:py-9">
            <p className=" text-[13px] mb-10 sm:text-[15px]
             text-Grayishblue font-bold">
              Registrate y pide solución a tus problemas técnicos, miraremos en nuestro catalogo de técnicos al que se adapte mejor a tu solución, paga como necesites y espera tu equipo; ¡pide y te llegará a tu casa!
            </p>
            <MoreInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainArticle;
