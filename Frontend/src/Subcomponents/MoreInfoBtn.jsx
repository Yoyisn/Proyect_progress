import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

import imageMoreinfo from "../assets/assets/images/imageDomi3.avif";

function MoreInfoBtn() {
  return (
    <>
      <Popover>
        <PopoverHandler >
          <Button className="bg-Darkred w-[185px] h-[48px] uppercase text-Offwhite hover:bg-Brown font-bold shadow-lg shadow-Brown rounded-md">
            MAS INFORMACIÓN
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
              Mantenemos tus datos en total privacidad, ningún usuario ni técnico sabra tu dirección, Servitech se encarga de recibir tu equipo y llevarlo con el técnico apropiado, nos aseguramos de que tu equipo llegue en las condiciones planteadas y si no tuvo solución se entrega exactamente como se envia el equipo.
            </Typography>

          </div>

          <div className="h-[80%]  px-3 py-5">
            <img
              src={imageMoreinfo}
              alt="imageMoreinfo boton"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default MoreInfoBtn;
