import { Textarea, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

function Textareaplug() {

    const {
        handleSubmit
      } = useForm();
      

    const onSubmit = handleSubmit((data) => {
        signin(data);
      });

    return (
        <>
            <div className="relative w-[20rem] ">
                <form onSubmit={onSubmit}>
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
                </form>
            </div>
        </>
    );
};

export default Textareaplug;
