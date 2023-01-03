import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Header() {
  const { productsList } = useContext(OrderContext);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" onClick={handleLogoClick} />
        <nav>
          <NavLink to="/checkout" title="Home">
            <MapPin size={22} weight="fill" />
            <span>Indaiatuba, SP</span>
          </NavLink>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
            <span>
              {productsList
                .map(({ qty }) => qty)
                .reduce((acc, curr) => acc + curr, 0)}
            </span>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
}
