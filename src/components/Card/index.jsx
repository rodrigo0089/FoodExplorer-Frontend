import { Container, Content, PurchaseCard } from "./styles.js";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

import { PiPencilSimple } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import imagePlaceholder from "../../assets/image-not-found-icon.svg";

export function Card({ data, ...rest }) {
  const { user } = useAuth();

  const imageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imagePlaceholder;



  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity > 19) {
      alert("Somente 20 unidades por cliente");
      return;
    }
    setQuantity((count) => count + 1);
  };

  const decrease = () => {
    if (quantity < 2) {
      alert("A quantidade mínima é 1 unidade");
      return;
    }
    setQuantity((count) => count - 1);
  };

  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <Content>
          <div className="container">
          <Link to={`/editDish/${data.id}`}>
              <Button className="linkButton" title="" icon={PiPencilSimple} />
            </Link>
            
            <img src={imageURL} alt="Imagem do prato" />
            <Link to={`/details/${data.id}`}>
              <h3 className="product-title">
                {data.title}
                {" >"}
              </h3>
            </Link>
            <p className="description">{data.description}</p>
            <h1 className="price">R$ {data.price}</h1>
            
          </div>
        </Content>
      ) : (
        <Content>
          <div className="container">
            <img src={imageURL} alt="Imagem do prato" />
            <Link to={`/details/${data.id}`}>
              <h3 className="product-title">
                {data.title}
                {" >"}{" "}
              </h3>
            </Link>
            <p className="description">{data.description}</p>
            <h1 className="price">R$ {data.price}</h1>

            <PurchaseCard>
              <div className="counter">
                <ButtonText icon={FiMinus} onClick={decrease} />
                <span>{quantity.toString().padStart(2, "0")}</span>
                <ButtonText icon={FiPlus} onClick={increase} />
              </div>

              <Button
                className="includeButton"
                title="incluir"
              />
            </PurchaseCard>
          </div>
        </Content>
      )}
    </Container>
  );
}
