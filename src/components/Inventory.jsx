import { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


function Inventory() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [novoItem, setNovoItem] = useState({ nome: '', quantidade: '', preco: '' });
  const [estoque, setEstoque] = useState([
    { nome: 'Pão', quantidade: 50, preco: 0.5 },
    { nome: 'Salsicha', quantidade: 30, preco: 1 },
    { nome: 'Molho', quantidade: 20, preco: 0.75 }
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState({ nome: '', quantidade: '', preco: '' });

  const [vendas, setVendas] = useState([
    { dataHora: '02/04/2025 12:30', numero: '#1042', itens: '2x Tradicional, 1x Bacon', total: 27.5, formaPagamento: 'Dinheiro' },
    { dataHora: '02/04/2025 12:15', numero: '#1041', itens: '1x Completo, 1x Refri', total: 18.0, formaPagamento: 'Cartão' }
  ]);

  const [pedido, setPedido] = useState({ itens: '', total: '', formaPagamento: 'Dinheiro' });
  const [modalPedidoAberto, setModalPedidoAberto] = useState(false);

  const abrirModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
    setModalIndex(null);
  };

  const confirmarExclusao = () => {
    const novoEstoque = estoque.filter((_, i) => i !== modalIndex);
    setEstoque(novoEstoque);
    fecharModal();
  };

  const adicionarItem = (e) => {
    e.preventDefault();
    setEstoque([...estoque, { 
      nome: novoItem.nome, 
      quantidade: parseInt(novoItem.quantidade), 
      preco: parseFloat(novoItem.preco) 
    }]);
    setNovoItem({ nome: '', quantidade: '', preco: '' });
  };

  const iniciarEdicao = (index) => {
    setEditIndex(index);
    setEditItem(estoque[index]);
  };

  const salvarEdicao = () => {
    const atualizado = [...estoque];
    atualizado[editIndex] = { 
      nome: editItem.nome, 
      quantidade: parseInt(editItem.quantidade), 
      preco: parseFloat(editItem.preco) 
    };
    setEstoque(atualizado);
    setEditIndex(null);
  };

  const abrirModalPedido = () => setModalPedidoAberto(true);
  const fecharModalPedido = () => setModalPedidoAberto(false);

  const adicionarVenda = (e) => {
    e.preventDefault();
    const novaVenda = {
      dataHora: new Date().toLocaleString('pt-BR'),
      numero: `#${1043 + vendas.length}`,
      itens: pedido.itens,
      total: parseFloat(pedido.total),
      formaPagamento: pedido.formaPagamento
    };
    setVendas([novaVenda, ...vendas]);
    setPedido({ itens: '', total: '', formaPagamento: 'Dinheiro' });
    fecharModalPedido();
  };

  return (
    <section id="estoque">
      <button onClick={abrirModalPedido}>Fazer Pedido</button>

      <h2>Estoque</h2>

      <form onSubmit={adicionarItem} style={{ marginBottom: '1rem' }}>
        <input 
          type="text" 
          placeholder="Item" 
          value={novoItem.nome}
          onChange={(e) => setNovoItem({ ...novoItem, nome: e.target.value })}
          required
        />
        <input 
          type="number" 
          placeholder="Quantidade" 
          value={novoItem.quantidade}
          onChange={(e) => setNovoItem({ ...novoItem, quantidade: e.target.value })}
          required
        />
        <input 
          type="number" 
          step="0.01"
          placeholder="Preço" 
          value={novoItem.preco}
          onChange={(e) => setNovoItem({ ...novoItem, preco: e.target.value })}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {estoque.map((item, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td>
                    <input value={editItem.nome} onChange={(e) => setEditItem({ ...editItem, nome: e.target.value })} />
                  </td>
                  <td>
                    <input type="number" value={editItem.quantidade} onChange={(e) => setEditItem({ ...editItem, quantidade: e.target.value })} />
                  </td>
                  <td>
                    <input type="number" step="0.01" value={editItem.preco} onChange={(e) => setEditItem({ ...editItem, preco: e.target.value })} />
                  </td>
                  <td>
                    <button onClick={salvarEdicao}>Salvar</button>
                    <button onClick={() => setEditIndex(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.nome}</td>
                  <td>{item.quantidade}</td>
                  <td>R$ {item.preco.toFixed(2)}</td>
                  <td>
                    <button onClick={() => iniciarEdicao(index)}>Editar</button>
                    <button onClick={() => abrirModal(index)}>Excluir</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
        <h2>Gráfico de Quantidade em Estoque</h2>
        <Bar
        data={{
            labels: estoque.map(item => item.nome),
            datasets: [
            {
                label: 'Quantidade',
                data: estoque.map(item => item.quantidade),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
            ]
        }}
        options={{
            responsive: true,
            plugins: {
            legend: {
                display: true
            }
            }
        }}
        />

      <h2>Registro de Vendas</h2>
      <table>
        <thead>
          <tr>
            <th>Data/Hora</th>
            <th>Nº Pedido</th>
            <th>Itens</th>
            <th>Total</th>
            <th>Forma Pagto</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((venda, index) => (
            <tr key={index}>
              <td>{venda.dataHora}</td>
              <td>{venda.numero}</td>
              <td>{venda.itens}</td>
              <td>R$ {venda.total.toFixed(2)}</td>
              <td>{venda.formaPagamento}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Tem certeza que deseja excluir {estoque[modalIndex].nome}?</p>
            <button onClick={confirmarExclusao}>Sim</button>
            <button onClick={fecharModal}>Cancelar</button>
          </div>
        </div>
      )}

      {modalPedidoAberto && (
        <div className="modal">
          <div className="modal-content">
            <h3>Novo Pedido</h3>
            <form onSubmit={adicionarVenda}>
              <input
                type="text"
                placeholder="Itens (ex: 2x Tradicional, 1x Bacon)"
                value={pedido.itens}
                onChange={(e) => setPedido({ ...pedido, itens: e.target.value })}
                required
              />
              <input
                type="number"
                step="0.01"
                placeholder="Total"
                value={pedido.total}
                onChange={(e) => setPedido({ ...pedido, total: e.target.value })}
                required
              />
              <select
                value={pedido.formaPagamento}
                onChange={(e) => setPedido({ ...pedido, formaPagamento: e.target.value })}
              >
                <option>Dinheiro</option>
                <option>Cartão</option>
                <option>PIX</option>
              </select>
              <button type="submit">Confirmar</button>
              <button type="button" onClick={fecharModalPedido}>Cancelar</button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background: white;
          padding: 1rem;
          border-radius: 8px;
        }
        button {
          margin: 0 0.25rem;
        }
        form input, form select {
          display: block;
          margin: 0.5rem 0;
        }
      `}</style>
    </section>
  );
}

export default Inventory;
