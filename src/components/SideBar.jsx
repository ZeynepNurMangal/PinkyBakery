import React, { useEffect, useState } from 'react'
import productCard from '../data/products_data';
import { Checkbox, Col, Row } from 'antd';


function SideBar({ setProductList ,checkedAll}) {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesName = Array.from(new Set(productCard.map(({ category }) => category)));
    setCategories(categoriesName)
  }, []);


  return (
    <div className='sideBar'>
      <div className='filter'>
        <h3>Buradan Filtreleyebilirsin!</h3>
        <Checkbox.Group
          style={{
            width: '100%',
          }}
          onChange={((checkedValues) => setProductList(checkedValues))}
        >
          <Row>
            {
              categories.map((category, index) => {
                return <Col key={index} span={24}>
                  <Checkbox value={category}  >{category}</Checkbox>
                </Col>
              })
            }
                  <Checkbox value="hepsi" >Hepsi</Checkbox>


          </Row>
        </Checkbox.Group>
      </div>
    </div>
  )
}

export default SideBar
