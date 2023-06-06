import { Navbar, Welcome, Footer, Services, Transactions, Services2 } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Services2 />
    <Transactions />
    <Footer />
  </div>
);

export default App;
