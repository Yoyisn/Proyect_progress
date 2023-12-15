import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
  import maninPc from "../assets/assets/images/maninpc.png";

 function HelpBtn() {
  return (
    <>
      <Popover>
        <PopoverHandler >
          <Button className="text-left text-md font-normal text-white hover:bg-gray-100 hover:text-gray-700 w-[270px]">
            Ayuda
          </Button>
        </PopoverHandler>

        <PopoverContent className="z-[999] grid w-[35rem] grid-cols-2 overflow-hidden p-0  bg-Grayishblue">
          <div className="p-4">
            <Typography color="blue-gray" className="mb-2 text-2xl font-bold">
              Somos ServiTech
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="mb-14 text-xl text-blue-gray-800"
            >
              En su perfil, podrá acceder a la sección Teams, donde podrá visualizar sus vínculos de trabajo y así también registrar sus dificultades, ademas podra ver o subir sus problemas, asimismo, podrá acceder a las cotizaciones realizadas por los técnicos. Dichas cotizaciones son un precio aproximado al precio final del trabajo.
            </Typography>

          </div>

          <div className="h-[70%] mx-5 py-5">
            <img
              src={maninPc}
              alt="imageMoreinfo boton"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default HelpBtn;
