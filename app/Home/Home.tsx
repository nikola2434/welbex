import { FC } from "react";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
