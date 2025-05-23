function Dashboard() {
  return (
    <section id="dashboard" className="grid gap-4 md:grid-cols-3 my-8">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-red-700 border-b pb-2 mb-4 font-semibold">Resumo do Dia</h2>
        <div className="flex justify-between mb-2"><span>Vendas Hoje:</span><span className="font-bold text-orange-500">R$ 1.245,00</span></div>
        <div className="flex justify-between mb-2"><span>Clientes Atendidos:</span><span className="font-bold text-orange-500">78</span></div>
        <div className="flex justify-between"><span>Itens em Falta:</span><span className="font-bold text-orange-500">3</span></div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-red-700 border-b pb-2 mb-4 font-semibold">Itens com Baixo Estoque</h2>
        <ul className="list-disc pl-5">
          <li>Pão de Hot Dog</li>
          <li>Molho de Tomate</li>
          <li>Batata Palha</li>
        </ul>
        <button className="mt-4 bg-orange-500 hover:bg-red-700 text-white py-2 px-4 rounded">Fazer Pedido</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-red-700 border-b pb-2 mb-4 font-semibold">Top Vendas</h2>
        <ol className="list-decimal pl-5">
          <li>Hot Dog Tradicional</li>
          <li>Hot Dog Completo</li>
          <li>Hot Dog Bacon</li>
        </ol>
      </div>
    </section>
  );
}

export default Dashboard;
