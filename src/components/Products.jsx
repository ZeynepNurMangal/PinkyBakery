import { useState } from 'react';
import SideBar from './SideBar';
import productCard from '../data/products_data';
import { PlusSquareOutlined } from '@ant-design/icons';
import { shoppingBasketStore } from "./Stores/ShoppingBasketStore";
import { Avatar, Card } from 'antd';
import { Layout } from 'antd';
const {Sider, Content } = Layout;
const { Meta } = Card;

function Products() {
  const [products, setProducts] = useState(productCard);
 
  const checkedCategories = (checkedValues) => {
    if(!checkedValues.includes("hepsi")){
      const filtered = productCard.filter((product) =>
      checkedValues.includes(product.category)
    );
    setProducts(filtered) 
    } else {
      
      setProducts(productCard)
    }
  
  };
  const listItems = products.map((item, index) =>
    <Card key={index} hoverable onClick={() => console.log(item.category)}
      style={{
        width: 300,
        margin: 10
      }}
      cover={
        <img
          alt="example"
          src={item.thumb}
        />
      }
      actions={[
        <PlusSquareOutlined key="shoppingcard" style={{ fontSize: '25px', color: 'pink' }} onClick={()=>shoppingBasketStore.addItemShoppingBasket(item)} /> ,

      ]}
    >
      <Meta
        avatar={<Avatar src="https://ih1.redbubble.net/image.4288857650.9236/poster,620x508,f8f8f8-pad,600x600,f8f8f8.jpg" />}
        title={item.productName}
        description={item.price + item.currency}
      />
           <Meta
       
        description={item.category}
      />

    </Card>

  );
  return (

    <div className='mainContent'>
 

    <Layout>
      <Sider><SideBar setProductList={(e) => checkedCategories(e)}  /></Sider>
      <Layout>
       
        <Content><h3 className='productsHead'>Ürünlerimiz</h3><div className="content">
        
      {listItems}
        </div>
    </Content>
        
      </Layout>
    </Layout>
  </div>
      
      
      
    
  )
}

export default Products
