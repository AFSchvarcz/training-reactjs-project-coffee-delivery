import {
  ImgContainer,
  InfoContainer,
  InfoItem,
  SuccessContainer,
} from "./styles";
import illustration from "../../assets/illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Success() {
  const { orderDetails } = useContext(OrderContext);
  return (
    <main>
      <SuccessContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <InfoContainer>
            <InfoItem bgColor={defaultTheme.colors.purple}>
              <span>
                <MapPin size={22} weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em{" "}
                  <strong>{`${orderDetails?.street}, ${orderDetails?.number}`}</strong>
                </p>
                <p>{`${orderDetails?.neighborhood} - ${orderDetails?.city}, ${orderDetails?.state}`}</p>
              </div>
            </InfoItem>
            <InfoItem bgColor={defaultTheme.colors.yellow}>
              <span>
                <Timer size={22} weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </InfoItem>
            <InfoItem bgColor={defaultTheme.colors["yellow-dark"]}>
              <span>
                <CurrencyDollar size={22} weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{orderDetails?.paymentMethod}</strong>
                </p>
              </div>
            </InfoItem>
          </InfoContainer>
          <ImgContainer>
            <img src={illustration} alt="" />
          </ImgContainer>
        </div>
      </SuccessContainer>
    </main>
  );
}
