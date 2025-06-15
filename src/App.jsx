import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
