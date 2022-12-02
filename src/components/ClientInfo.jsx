import React from 'react';
import cities from '../data/cities';
import { shoppingBasketStore } from "./Stores/ShoppingBasketStore";
import { observer } from "mobx-react-lite";

import { Button, Form, Input,  Select, Space, Card, Col, Row  } from 'antd';
import Ordered from './Ordered';



const { Option } = Select;


const ClientInfo = observer(() => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const cityList = cities.map((item, index) =>
    <Option key={index} value={item.isim}>{item.plaka +" "+ item.isim}</Option>)
    console.log('shoppingBasketStore', shoppingBasketStore)
  return (
    <div className="formClient">

      
  <div className="site-card-wrapper">
    <Row gutter={24}>
      <Col span={16}>
        <Card title="Teslimat Bilgileri" bordered={false}>
        <Form
        name="complex-form"
        disabled={shoppingBasketStore.isDisabledButton}
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        
      >
        
        <Form.Item label="İsim">
          <Space>
            <Form.Item
              name="isim"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Zorunlu alan.',
                },
              ]}
            >
              <Input
                style={{
                  width: 160,
                }}
                placeholder="İsminizi giriniz.."
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Soyİsim">
          <Space>
            <Form.Item
              name="isim"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Zorunlu alan.',
                },
              ]}
            >
              <Input
                style={{
                  width: 160,
                }}
                placeholder="Soyisminizi giriniz.."
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Adres">
          <Input.Group compact>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Şehir seçilmedi.',
                },
              ]}
            >
              <Select placeholder="Şehir seçiniz">

                {
                  cityList
                }
              </Select>
            </Form.Item>
            <Form.Item
              name={['address', 'açık adres']}
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Adres bilgisi gerekli.',
                },
              ]}
            >
              <Input
                style={{
                  width: '50%',
                }}
                placeholder="Teslimat adresi giriniz"
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          label="Telefon"
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                type: 'number',
              },
            ]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}
          >
            <Input placeholder="Telefon numarası giriniz.." />
          </Form.Item>

        </Form.Item>
        <Form.Item name={['user', 'clientNote']} label="Notunuz:">
        <Input.TextArea />
      </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button htmlType="submit"  submitButtonProps=
                {{ disabled: shoppingBasketStore.isDisabledButton }}>
            Siparişi Tamamla
          </Button>
        </Form.Item>
      </Form>
        </Card>
      </Col>
      <Col span={8}>
      <Ordered/>
      </Col>
      
    </Row>
  </div>
    </div>
  )
}
)
export default ClientInfo
