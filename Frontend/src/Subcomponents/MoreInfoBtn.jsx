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
            More Info
          </Button>
        </PopoverHandler>

        <PopoverContent className="z-[999] grid w-[28rem] grid-cols-2 overflow-hidden p-0  bg-Grayishblue">
          <div className="p-4">
            <Typography color="blue-gray" className="mb-2 text-lg font-bold">
              Somos Servitech
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="mb-14 font-normal text-blue-gray-800"
            >
              Mantenemos tus datos en total privacidad, ningun usuario ni tecnico sabra tu direccion, Servitech se encarga de recibir tu equipo y llevarlo con el tecnico apropiado, nos aseguramos de que tu equipo llegue en las condicionaes planteadas y si no tuvo solucion se entrega exactamente como se envia el equipo.
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
