import { FormProvider, useForm } from "react-hook-form";
import { CheckoutContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewCheckoutFormData,
  newCheckoutFormValidationSchema,
  OrderDetails,
} from "./OrderDetails";
import { Cart } from "./Cart";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { orderDetails, updateOrderDetails } = useContext(OrderContext);
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: undefined,
      addr2: "",
      neighborhood: "",
      city: "",
      state: "",
      paymentMethod: "Cartão de Crédito",
      ...orderDetails,
    },
  });
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    newCheckoutForm.handleSubmit((data) => {
      updateOrderDetails(data);
      navigate("/success");
      newCheckoutForm.reset();
    })();
  };

  return (
    <main>
      <CheckoutContainer>
        <FormProvider {...newCheckoutForm}>
          <OrderDetails />
          <Cart onConfirmOrder={handleConfirmOrder} />
        </FormProvider>
      </CheckoutContainer>
    </main>
  );
}
