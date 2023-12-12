import { Textarea, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

function Textareaplug() {

    const { handleSubmit, register } = useForm();
      

    const onSubmit = handleSubmit( async (data) => {
        console.log(data);
      });

    return (
        <>
            <div className="relative w-[20rem] ">
                <form onSubmit={onSubmit}>
                    <Textarea {...register("descriptionQuote", { required: true }) } className="text-white " variant="static" placeholder="Your Comment" rows={8}/>

                    <div className="flex w-[100%] justify-between py-1.5">

                        <div className="flex gap-2">
                            <Button size="sm" className="rounded-md">
                                Publicar Comentario
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Textareaplug;
