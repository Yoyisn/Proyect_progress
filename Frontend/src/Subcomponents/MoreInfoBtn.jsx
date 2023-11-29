import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

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
              Material Tailwind
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="mb-14 font-normal text-blue-gray-800"
            >
              Material Tailwind is an easy to use components library for
              Tailwind CSS and Material Design. It features multiple React and
              HTML components, all written with Tailwind CSS classes and
              Material Design guidelines.
            </Typography>
            
          </div>

          <div className="min-h-full !w-full p-3">
            <img
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default MoreInfoBtn;
