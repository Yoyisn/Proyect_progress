import img2 from '../assets/assets/images/image-top-laptops.jpg'
import { Link } from 'react-router-dom';

const Maincardlogin = () => {
    return (
        <>
            <div>
                <article
                    className="flex bg-white max-w-lg w-full transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25"
                >
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                        >
                            <span>2022</span>
                            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                            <span>Oct 10</span>
                        </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56">
                        <img
                            className="aspect-square h-full w-full object-cover"
                            alt="laptop"
                            src={img2}
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                        <div
                            className="border-s border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                        >
                            <Link
                                to="">
                                <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                                    Arreglo teclado Portatil Hp
                                </h3>
                            </Link>

                            <p
                                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id non ut consequatur necessitatibus maiores quos distinctio voluptate praesentium! Incidunt, molestiae magnam id ex suscipit eos quos nisi possimus a at.
                            </p>
                        </div>

                        <div className="sm:flex sm:items-end sm:justify-end">
                            <Link
                                to=""
                                className="block bg-green-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-green-900"
                            >
                                Arreglado
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Maincardlogin
