import { Container, Content, Form } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Textarea } from "../../components/Textarea";

import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";

export function EditDish() {
  const navigate = useNavigate();

  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [data, setData] = useState(null);

  const [image, setImage] = useState();

  function handleAddIngredient() {
    if (newIngredient.length < 2) {
      return alert(
        "Você está tentando inserir um nome de ingrediente inválido!"
      );
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

  async function handleUpdateDish() {
    if (!image) {
      return alert("Você não carregou a nova imagem do prato!");
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
      .put(`/dishes/${params.id}`, formData)
      .then(alert("Prato atualizado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao atualizar o prato!");
        }
      });

    setLoading(false);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);

      const { title, description, category, price, ingredients } =
        response.data;
      setTitle(title);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredients.map((ingredient) => ingredient.name));
    }

    fetchDish();
  }, []);

  async function handleRemoveDish() {
    setLoadingDelete(true);
    const isConfirm = confirm("Tem certeza que deseja remover este item?");

    if (isConfirm) {
      await api.delete(`/dishes/${params.id}`).then(() => {
        alert("Item removido com sucesso!");
        navigate("/");
        setLoadingDelete(false);
      });
    } else {
      return;
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        {data && (
          <Form>
            <header>
              <Link to="/">
                <ButtonText title="voltar" icon={RiArrowLeftSLine} />
              </Link>
              <h1>Editar prato</h1>
            </header>

            <div className="details">
              <div className="dishDetails">
                <div className="dishImage">
                  <p>Imagem do Prato</p>

                  <label htmlFor="image">
                    <FiUpload size={24} />
                    Selecione uma imagem
                  </label>
                  <input
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                <div className="dishCategory">
                  <p>Categoria</p>

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="default" disabled>
                      Selecione a categoria
                    </option>
                    <option value="dishes">Refeição</option>
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="textarea">
              <p>Descrição</p>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </Form>
        )}

        <div className="button">
          <Button
            className="deleteButton"
            title={"Excluir prato"}
            onClick={handleRemoveDish}
            disabled={loadingDelete}
          />
          <Button
            className="savingButton"
            title={"Salvar alterações"}
            onClick={handleUpdateDish}
            disabled={loading}
          />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
