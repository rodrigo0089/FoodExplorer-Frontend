import { Container, Content, Form } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Textarea } from "../../components/Textarea";

import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";

export function CreateDish() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert("Este ingrediente não é inválido!");
    } else {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  async function handleNewDish() {
    if (!image) {
      return alert("Você não inseriu uma imagem para o prato!");
    }

    if (!title) {
      return alert("Você não informou o nome do prato!");
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente!");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!"
      );
    }

    if (!category) {
      return alert("Você não selecionou a categoria do prato!");
    }

    if (!price) {
      return alert("Você não informou o preço do prato!");
    }

    if (!description) {
      return alert("Você não informou uma descrição para o prato!");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api
      .post("/dishes", formData)
      .then(alert("Prato adicionado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar o prato!");
        }
      });

    setLoading(false);
  }

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <header>
            <Link to="/">
              <ButtonText title="voltar" icon={RiArrowLeftSLine} />
            </Link>
            <h1>Adicionar prato</h1>
            <div className="titleMobile"><h2>Novo prato</h2></div>
          </header>

          <div className="details">
            <div className="dishImage">
              <p>Imagem do Prato</p>
              <label htmlFor="image">
                <FiUpload size={24} />
                Selecione uma imagem
              </label>
              <Input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <div className="dish">
              <p>Nome</p>
              <Input
                placeholder="Salada Caesar"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="dishCategory">
              <p>Categoria</p>
              <select
                defaultValue={"default"}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="default" disabled>
                  Selecione a categoria
                </option>
                <option value="dishes">Refeições</option>
                <option value="drinks">Bebidas</option>
                <option value="dessert">Sobremesas</option>
              </select>
            </div>
          </div>

          <div className="ingredientsTag">
            <div>
              <p>Ingredientes</p>
              <div className="ingredients">
                {ingredients.map((ingredient, index) => (
                  <IngredientsTag
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

                <IngredientsTag
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>

            <div className="price">
              <p>Preço</p>
              <Input
                placeholder="R$ 00,00"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="textarea">
            <p>Descrição</p>
            <Textarea
              placeholder="Descreva o conteúdo do prato"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </Form>
        <div className="saveButton">
          <Button
            title={"Salvar alterações"}
            onClick={handleNewDish}
            disabled={loading}
          />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
