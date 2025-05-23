function Inventory() {
  const items = [
    { nome: "Pão de Hot Dog", qtd: 12, unidade: "un", data: "02/04/2025" },
    { nome: "Salsicha", qtd: 45, unidade: "un", data: "01/04/2025" },
    { nome: "Molho de Tomate", qtd: 2, unidade: "kg", data: "28/03/2025" },
    { nome: "Batata Palha", qtd: 1, unidade: "kg", data: "30/03/2025" },
    { nome: "Milho Verde", qtd: 8, unidade: "latas", data: "25/03/2025" },
  ];

  return (
    <section id="estoque" className="bg-white p-4 rounded shadow my-8">
      <h2 className="text-red-700 border-b pb-2 mb-4 font-semibold">Gestão de Estoque</h2>
      <div className="mb-4">
        <label htmlFor="search" className="block font-semibold mb-1">Pesquisar Item:</label>
        <input type="text" id="search" placeholder="Digite o nome do item..." className="w-full border rounded p-2"/>
      </div>
      <button className="bg-orange-500 hover:bg-red-700 text-white py-2 px-4 rounded mb-4">Adicionar Novo Item</button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-2 text-left">Item</th>
            <th className="p-2 text-left">Quantidade</th>
            <th className="p-2 text-left">Unidade</th>
            <th className="p-2 text-left">Última Compra</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="p-2">{item.nome}</td>
              <td className={`p-2 ${item.qtd <= 12 ? 'text-red-700 font-bold' : ''}`}>{item.qtd}</td>
              <td className="p-2">{item.unidade}</td>
              <td className="p-2">{item.data}</td>
              <td className="p-2"><button className="bg-orange-500 text-white px-2 py-1 rounded">Editar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Inventory;
