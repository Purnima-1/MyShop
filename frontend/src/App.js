import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = () => {
  return (
    <>
    <Header/>
      <Container>
    <main>
    <h1>Welcome to MyShop</h1>
    </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
