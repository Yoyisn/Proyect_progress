import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import imageRetroPc from "../assets/assets/images/image-retro-pcs.jpg";
import axios from "../Api/axios.js";

import Logo from "../assets/assets/images/image.png";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51OG8k5I4yMLMVXppG84B69h88yuMOzziJ5O5t79d1ATaG1sXxucMI2DJEDjQIjdAsrosxvI1QJY3drVkkKXKWxZJ001y5CfKH5"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
          amount: 1000,
        });

        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="bg-Bgbluelow "> Buy </button>
    </form>
  );
};

function PayLoads() {
  return (
    <>
      <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Darkred">
        <h1 className="flex font-abc text-6xl translate-y-[140px] justify-center">
          <Link to="/techProfile"> ServiTech </Link>
          <img className="flex h-[60px]" src={Logo} alt="Logo Servitecnicos" />
        </h1>

        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
          <img
            className="flex h-[26%] translate-y-[20px] rounded-l-lg shadow-inner hover:shadow-lg shadow-black hover:shadow-black"
            src={imageRetroPc}
            alt="Imagen compra subscripcion"
          />

          <div className="bg-Bgblue max-w-2xl w-full p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black mt-10 rounded-r-lg">
            <h1 className="text-center text-3xl font-bold my-2">
              {" "}
              Subscripcion Mensual{" "}
            </h1>

            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>

            <p className="text-center">
              {" "}
              Subscripcion mensual a ServiTech, 30 dias{" "}
            </p>

            <h3 className="text-center">Precio: 10 US</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayLoads;
