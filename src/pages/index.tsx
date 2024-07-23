import Cart from "@/components/Cart";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Footer />
      <Cart />
    </Container>
  );
};

export default Main;
