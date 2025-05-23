function Sales() {
  const vendas = [
    { data: "02/04/2025 12:30", pedido: "#1042", itens: "2x Tradicional, 1x Bacon", total: "R$ 27,50", forma: "Dinheiro" },
    { data: "02/04/2025 12:15", pedido: "#1041", itens: "1x Completo, 1x Refri", total: "R$ 18,00", forma: "Cartão" },
    { data: "02/04/2025 11:48", pedido: "#1040", itens: "3x Tradicional", total: "R$ 22,50", forma: "PIX" },
    { data: "02/04/2025 11:30", pedido: "#1039", itens: "1x Bacon, 1x Refri", total: "R$ 19,00", forma: "Dinheiro" },
  ];

  return (
    <section id="vendas" className="bg-white p-4 rounded shadow my-8">
      <h2 className="text-red-700 border-b pb-2 mb-4 font-semibold">Registro de Vendas</h2>
      <div className="my-4">
        <img src="https://via.placeholder.com/1160x300" alt="Gráfico de Vendas" className="w-full h-72 object-cover"/>
      </div>
      <button className="bg-orange-500 hover:bg-red-700 text-white py-2 px-4 rounded mb-4">Nova Venda</button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-2">Data/Hora</th>
            <th className="p-2">Nº Pedido</th>
            <th className="p-2">Itens</th>
            <th className="p-2">Total</th>
            <th className="p-2">Forma Pagto</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((venda, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="p-2">{venda.data}</td>
              <td className="p-2">{venda.pedido}</td>
              <td className="p-2">{venda.itens}</td>
              <td className="p-2">{venda.total}</td>
              <td className="p-2">{venda.forma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Sales;
