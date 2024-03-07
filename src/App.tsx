import "./App.css";
import CalculateSavings from "./components/CalculateSavings";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div className="">
        <h1>Jackson's savings interest calculator</h1>
        <CalculateSavings />
      </div>
      <Footer/>
    </>
  );
}

export default App;
