import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import bannerImg from "../../../assets/banner-img.svg";
import { LabeledIcon } from "../../../components/LabeledIcon";
import {
  BannerContainer,
  BannerContentContainer,
  BannerIconsContainer,
  BannerImage,
} from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <BannerContentContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <BannerIconsContainer>
            <LabeledIcon
              variant="yellow-dark"
              icon={<ShoppingCart weight="fill" />}
              label="Compra simples e segura"
            />
            <LabeledIcon
              variant="base-text"
              icon={<Package weight="fill" />}
              label="Embalagem mantém o café intacto"
            />
            <LabeledIcon
              variant="yellow"
              icon={<Timer weight="fill" />}
              label="Entrega rápida e rastreada"
            />
            <LabeledIcon
              variant="purple"
              icon={<Coffee weight="fill" />}
              label="O café chega fresquinho até você"
            />
          </BannerIconsContainer>
        </BannerContentContainer>
        <BannerImage src={bannerImg} alt="" />
      </div>
    </BannerContainer>
  );
}
