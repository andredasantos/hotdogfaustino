function Header() {
  return (
    <header className="bg-red-700 text-white p-4 flex flex-col md:flex-row md:justify-between items-center shadow">
      <h1 className="text-xl font-bold">Hot Dog Faustino - Gestão</h1>
      <nav className="mt-2 md:mt-0">
        <ul className="flex gap-4">
          <li><a href="#dashboard" className="hover:bg-orange-500 px-2 py-1 rounded">Dashboard</a></li>
          <li><a href="#estoque" className="hover:bg-orange-500 px-2 py-1 rounded">Estoque</a></li>
          <li><a href="#vendas" className="hover:bg-orange-500 px-2 py-1 rounded">Vendas</a></li>
          <li><a href="#relatorios" className="hover:bg-orange-500 px-2 py-1 rounded">Relatórios</a></li>
          <li><a href="#configuracoes" className="hover:bg-orange-500 px-2 py-1 rounded">Configurações</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
