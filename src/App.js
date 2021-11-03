import "./App.css";
import store from "./store/store";
import { salvarCliente } from "./actions/actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [dados, setDados] = useState([]);
  var ds = useSelector((state) => state.clientes);

  useEffect(() => {}, []);

  function salvar(e) {
    e.preventDefault();
    dados.push({
      id: Math.random(),
      data: new Date().toLocaleDateString(),
      nome,
      telefone,
    });
    store.dispatch(salvarCliente(dados));
    setDados([...store.getState().clientes]);
        
  }

  return (
    <div className="App">
      <div className="container mt-5">

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <p className="text-center">Formulário de Cadastro</p>
            <form onSubmit={(e) => salvar(e)}>
              <div className="">
                <label htmlFor="nome" class="form-label">Nome</label>

                <div className="col-sm-12 col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    id="nome"
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <label htmlFor="telefone" class="form-label">Telefone</label>
                <div className="col-sm-12 col-lg-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="telefone"
                    id="telefone"
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className="btn btn-primary btn-lg mt-2">
                    salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3 mt-5">
            <p className="text-center">Tabela de Clientes</p>
            <table className="col-12 text-center">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Data</th>
                  <th>Nome</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {ds.map((cl) => (
                  <tr key={cl.id}>
                    <td>{cl.id}</td>
                    <td>{cl.data}</td>
                    <td>{cl.nome}</td>
                    <td>{cl.telefone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
