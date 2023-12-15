import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { Modal } from 'flowbite-react';

import { useState } from "react";


function QuoteCard({ quotes }) {

    const [openModal, setOpenModal] = useState(false);

    
    setTimeout(() => {
        setOpenModal(false);
      }, 2500);
      

    return (
        <>

            <div className='flex max-h-[580px] justify-between bg-Darkred shadow-inner hover:shadow-lg shadow-black hover:shadow-black p-5 mt-10 rounded-md'>

                <div className="bg-Bgblue max-w-md
           w-full p-10 rounded-md shadow-inner hover:shadow-lg shadow-black hover:shadow-black">

                    <header className="justify-between content-between">
                        <h2 className="text-2xl font-bold my-2">Cotizacion: {quotes.textArea} </h2>
                        <p className="text-slate-300 my-2">Precio Aproximado a Pagar: {quotes.dropDown}</p>
                        <div className="flex gap-x-2 items-center">

                            <button className="bg-Grayishblue hover:bg-Brown text-black px-4 hover:text-Grayishblue
                    py-2 rounded-md my-2" onClick={() => setOpenModal(true)}>Aceptar Oferta</button>

                            <Modal show={openModal} size="xl" onClose={() => setOpenModal(false)} popup>
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="text-center">
                                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-black " />
                                        <h3 className="mb-5 text-xl font-normal text-black">
                                            Excelente! Con que deseas realizar tu pago?
                                        </h3>
                                        <div className="flex justify-center gap-4">

                                            {/* <Link to="/toPaymentQuote">
                                                <button className="bg-green-800 hover:bg-green-600 text-white px-4
                    py-2 rounded-md" onClick={() => setOpenModal(false)}> Efectivo </button>
                                            </Link> */}

                                            <Link to="/toPaymentQuote">
                                                <button className="bg-green-800 hover:bg-green-600 text-white px-4
                    py-2 rounded-md w-[150px]" onClick={() => setOpenModal(false)}>
                                                    Tarjeta
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>

                        </div>
                    </header>
                </div>
            </div>
        </>
    );
};

export default QuoteCard;