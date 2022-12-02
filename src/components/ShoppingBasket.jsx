import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { shoppingBasketStore } from "./Stores/ShoppingBasketStore";
import { Button, Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from 'antd';

import Ordered from './Ordered';






const ShoppingBasket = observer(() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        navigate('/form')
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="myBasket">
            <Button className="shoppingBasketBtn" onClick={showModal}>Sepetim
                <a href="/">
                    <Badge count={shoppingBasketStore.shoppingItems.length} size="small">
                        <ShoppingCartOutlined />
                    </Badge>
                </a>

            </Button>
            <Modal
                
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Sepeti Onayla"
                cancelText="İptal"
                okButtonProps=
                {{ disabled: shoppingBasketStore.isDisabledButton }}
            >
               <Ordered/>
              
            </Modal>
        </div>
    );
});
export default ShoppingBasket;

