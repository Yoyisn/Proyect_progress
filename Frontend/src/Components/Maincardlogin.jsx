import img2 from "../assets/assets/images/image-top-laptops.jpg";
import { useTasks } from "../Context/TasksContext";
import { Link } from "react-router-dom";

const Maincardlogin = () => {
  
  const { tasks } = useTasks();

  return (
    <>
      <div className="">
        {tasks.map((task) => (
          <article
            key={task._id}
            className="flex transition hover:shadow-xl bg-Bgblue shadow-Bgblue pb-4 mt-2 mr-3"
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-Grayishblue ">
                <span>2023</span>
                <span className="w-px flex-1 bg-gray-900/10 "></span>
                <span>Oct 10</span>
              </time>
            </div>

            <div className="mt-1 hidden sm:block sm:basis-56">
              <img
                className="aspect-square h-full w-full object-cover"
                alt="laptop"
                src={img2}
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6">
                <Link to="">
                  <h3 className="font-bold uppercase text-Grayishblue">
                    {task.title}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-Grayishblue">
                  {task.description}
                </p>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-Grayishblue">
                  {task.dispositive}
                </p>
              </div>

              <div className="mr-2 sm:flex sm:items-end sm:justify-end">
                <Link
                  to=""
                  className="block bg-green-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-green-900"
                >
                  ESTADO
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Maincardlogin;
