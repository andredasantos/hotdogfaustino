import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Sales from "./components/Sales";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <Dashboard />
        <Inventory />
        <Sales />
      </main>
      <Footer />
    </div>
  );
}

export default App;
