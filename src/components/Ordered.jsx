import React from 'react'
import { shoppingBasketStore } from "./Stores/ShoppingBasketStore";
import { Card, Avatar } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";

const { Meta } = Card;

const Ordered = observer(() => {
    const basketItem = shoppingBasketStore.shoppingItems.map((item, index) =>

        <div className="shopList-card">

            <Card key={item.id}
            >
                <Meta
                    avatar={<Avatar src={item.thumb} />}
                    title={item.productName}
                    description={`${item.price}₺`}
                />

                <DeleteOutlined style={{ fontSize: '20px', color: 'pink', marginLeft: '90%' }} onClick={() => shoppingBasketStore.removeItemShoppingBasket(item, item.id)} />


            </Card>
        </div>)
    return (
        <Card title={`Sepet Detaylarım (${shoppingBasketStore.shoppingItems.length})`} bordered={false}>
            {
                basketItem

            }
            <Card
            >
                <Meta

                    title="Toplam ödenecek tutar :"
                    description={shoppingBasketStore.shoppingItems.length ? `${shoppingBasketStore.totalPrice}₺` : "0"}
                />

            </Card>
        </Card>
    )
})

export default Ordered
