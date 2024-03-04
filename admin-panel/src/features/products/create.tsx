import React from 'react'
import { Card, Col, Row } from 'antd'
import { useAppDispatch } from '../../app/hooks'
import { addProduct } from './productSlice'
import { useNavigate } from 'react-router-dom'
import FormComponent from './components/formComponent'

const Create: React.FC = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const onFinish = (values: any) => {
    dispatch(addProduct(values))
    navigate('/product/index')
  }

  return (
    <Card>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <FormComponent onFinish={onFinish} />
        </Col>
      </Row>
    </Card>
  )
}

export default Create
