import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Footerr from "./components/Footerr";
import Products from "./components/Products";
import ShoppingBasket from "./components/ShoppingBasket";
import "./App.sass";
import { Layout } from "antd";
import ClientInfo from "./components/ClientInfo";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Navbar />
          <ShoppingBasket />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/form" element={<ClientInfo />} />
            <Route path="/aboutus" element={<Aboutus />} />
          </Routes>
        </Content>
        <Footer>
          <Footerr />
        </Footer>
      </Layout>
    </>
  );
}
export default App;
