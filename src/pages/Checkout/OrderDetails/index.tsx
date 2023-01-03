import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { defaultTheme } from "../../../styles/themes/default";
import {
  AddressContainer,
  CustomRadioButton,
  OrderDetailsContainer,
  PaymentMethodConatiner,
} from "./styles";
import * as zod from "zod";
import { useContext } from "react";
import { OrderContext } from "../../../contexts/OrderContext";

export const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(9),
  street: zod.string().min(1),
  number: zod.number(),
  addr2: zod.string().optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().length(2),
  paymentMethod: zod.string().min(1),
});

export type NewCheckoutFormData = zod.infer<
  typeof newCheckoutFormValidationSchema
>;

export function OrderDetails() {
  const { register } = useFormContext();
  const { orderDetails } = useContext(OrderContext);
  return (
    <OrderDetailsContainer>
      <form action="">
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <header>
            <MapPinLine size={22} color={defaultTheme.colors["yellow-dark"]} />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <div>
            <input
              type="text"
              placeholder="CEP"
              required
              {...register("cep")}
            />
            <input
              type="text"
              placeholder="Rua"
              required
              {...register("street")}
            />
            <input
              type="number"
              placeholder="Número"
              required
              {...register("number", { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Complemento (opcional)"
              {...register("addr2")}
            />
            <input
              type="text"
              placeholder="Bairro"
              required
              {...register("neighborhood")}
            />
            <input
              type="text"
              placeholder="Cidade"
              required
              {...register("city")}
            />
            <input
              type="text"
              placeholder="UF"
              required
              {...register("state")}
            />
          </div>
        </AddressContainer>
        <PaymentMethodConatiner>
          <header>
            <CurrencyDollar size={22} color={defaultTheme.colors.purple} />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <div>
            <CustomRadioButton>
              <input
                id="creditCard"
                type="radio"
                value="Cartão de Crédito"
                defaultChecked={
                  !orderDetails ||
                  orderDetails?.paymentMethod === "Cartão de Crédito"
                }
                {...register("paymentMethod")}
              />
              <label htmlFor="creditCard">
                <CreditCard size={22} color={defaultTheme.colors.purple} />
                CARTÃO DE CRÉDITO
              </label>
            </CustomRadioButton>
            <CustomRadioButton>
              <input
                id="debitCard"
                type="radio"
                value="Cartão de Débito"
                defaultChecked={
                  orderDetails?.paymentMethod === "Cartão de Débito"
                }
                {...register("paymentMethod")}
              />
              <label htmlFor="debitCard">
                <Bank size={22} color={defaultTheme.colors.purple} />
                CARTÃO DE DÉBITO
              </label>
            </CustomRadioButton>
            <CustomRadioButton>
              <input
                id="money"
                type="radio"
                value="Dinheiro"
                defaultChecked={orderDetails?.paymentMethod === "Dinheiro"}
                {...register("paymentMethod")}
              />
              <label htmlFor="money">
                <Money size={22} color={defaultTheme.colors.purple} />
                DINHEIRO
              </label>
            </CustomRadioButton>
          </div>
        </PaymentMethodConatiner>
      </form>
    </OrderDetailsContainer>
  );
}
