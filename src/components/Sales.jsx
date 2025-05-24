function Sales() {
  const vendas = [
  ];

  return (
    <section id="vendas" className="bg-white p-4 rounded shadow my-8">
      <div className="my-4">
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
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
