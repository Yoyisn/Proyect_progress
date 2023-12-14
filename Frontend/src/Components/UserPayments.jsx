import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import imageDomi2 from "../assets/assets/images/imageDomi2.jpg";
import Logo from "../assets/assets/images/image.png";
import { loadStripe } from "@stripe/stripe-js";

import { Link } from "react-router-dom";
import { Modal } from 'flowbite-react';
import axios from "../Api/axios.js";

import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51OG8k5I4yMLMVXppG84B69h88yuMOzziJ5O5t79d1ATaG1sXxucMI2DJEDjQIjdAsrosxvI1QJY3drVkkKXKWxZJ001y5CfKH5"
);

const CheckoutForm = () => {

    const [isModalOpen, setModalOpen] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  setTimeout(() => {
    setModalOpen(false);
    }, 2500);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post("/checkOut", {
          id,
          amount: 2000,
        });

        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="bg-Bgbluelow " onClick={ () => (
        <div>
            <Modal show={isModalOpen} size="md" onClose={() => setModalOpen(false)} popup>
                 <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Tu pago ha sido exitoso
                            </h3>
                        </div>
                </Modal.Body>
            </Modal>
        </div>
      )}> Buy </button>
    </form>
    </div>
    </>
  );
};

function UserPayments() {
  return (
    <>
      <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Darkred">
        <h1 className="flex font-abc text-6xl translate-y-[140px] justify-center">
          <Link to="/profile"> ServiTech </Link>
          <img className="flex h-[60px]" src={Logo} alt="Logo Servitecnicos" />
        </h1>

        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
          <img
            className="flex h-[30%] translate-y-[20px] rounded-l-lg shadow-inner hover:shadow-lg shadow-black hover:shadow-black"
            src={imageDomi2}
            alt="Imagen compra subscripcion"
          />

          <div className="bg-Bgblue max-w-2xl w-full p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black mt-10 rounded-r-lg">
            <h1 className="text-center text-3xl font-bold my-2">
              {" "}
              Pagar Arreglo y aceptar oferta{" "}
            </h1>

            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>

          </div>
        </div>
      </div>
    </>
  );
}

export default UserPayments;
