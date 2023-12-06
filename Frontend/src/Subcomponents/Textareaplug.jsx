import { Textarea, Button  } from "@material-tailwind/react";

function Textareaplug() {
    return (
        <>
            <div className="relative w-[20rem] ">
                <Textarea className="text-white " variant="static" placeholder="Your Comment" rows={8} />

                <div className="flex w-[100%] justify-between py-1.5">
                    
                    <div className="flex gap-2">
                        <Button size="sm" color="red" variant="text" className="rounded-md">
                            Cancel
                        </Button>
                        <Button size="sm" className="rounded-md">
                            Publicar Comentario
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Textareaplug;
