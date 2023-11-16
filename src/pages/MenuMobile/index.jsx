import { Container, Content, Search } from "./styles.js";

import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FiX, FiSearch } from "react-icons/fi";

export function MenuMobile({ search }) {
  const { user } = useAuth();
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <div className="header">
        <Link onClick={handleBack}>
          <FiX size={30} />
        </Link>
        <h2>Menu</h2>
      </div>
      <Content>
        {user.isAdmin ? (
          <div className="content">
            <Search>
              <label>
                <FiSearch size={24} />
                <input
                  type="text"
                  placeholder="Busque por pratos ou ingredientes"
                  onChange={(e) => {
                    search(e.target.value);
                  }}
                />
              </label>
            </Search>
            <Link to="/createdish">
              <ButtonText className="button" title="Novo Prato">
                Novo Prato
              </ButtonText>
            </Link>
            <Link to="/">
              <ButtonText
                className="button"
                title="Sair"
                onClick={signOut}
              ></ButtonText>
            </Link>
          </div>
        ) : (
          <div className="content">
            <Search>
              <label>
                <FiSearch size={24} />
                <input
                  type="text"
                  placeholder="Busque por pratos ou ingredientes"
                  onChange={(e) => {
                    search(e.target.value);
                  }}
                />
              </label>
            </Search>

            <Link to="/">
              <ButtonText className="button" title="Sair" onClick={signOut}></ButtonText>
            </Link>
          </div>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
