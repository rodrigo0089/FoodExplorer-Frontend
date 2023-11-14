import { Container, Content, Logo, Search, Logout, Button } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";

import logo from "../../assets/logo.svg";

export function Header({ search }) {
  const { user } = useAuth();
  const { signOut } = useAuth();


  return (
    <Container>
      <Content>
        <Logo>
          {user.isAdmin ? (
            <div className="logo">
               <Link to="/menumobile">
              <div
                className="menu-mobile"
                id="menu-mobile"
                >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
                </Link>

              <Link to="/">
                <img src={logo} alt="" />
                <div className="logo-admin">
                  <h1>food explorer</h1>
                  <p>admin</p>
                </div>
              </Link>
            </div>
          ) : (
            <div className="logo">
              <Link to="/menumobile">
              <div
                className="menu-mobile"
                id="menu-mobile"
                >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
                </Link>
              <Link to="/">
                <img src={logo} alt="" />
                <h1>food explorer</h1>
              </Link>
            </div>
          )}
        </Logo>

        <div className="nav-menu" id="nav-menu">
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

          {user.isAdmin ? (
            <Link to="/createdish">
            <Button type="button">
              Novo Prato
            </Button>
            </Link>
          ) : (
            <Link to="#">
              <Button type="button">
                <BsReceipt size={24} />
                Pedidos <span>(0)</span>
              </Button>
            </Link>
          )}

          <Logout to="/" onClick={signOut}>
            <FiLogOut />
          </Logout>
        </div>
      </Content>
    </Container>
  );
}
