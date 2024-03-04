import React, { useEffect } from 'react'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useNavigate } from 'react-router-dom'
import { fetchCategories } from '../../categories/categorySlice'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
}

interface FormComponentProps {
  onFinish: (values: any) => void
  initialValues?: any
}

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.category.list)

  console.log(categories)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const { onFinish, initialValues } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
  }, [initialValues])

  return (
    <>
      <Form
        form={form}
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Form.Item name={'_id'}>
          <Input style={{ display: 'none' }} />
        </Form.Item>

        <Form.Item
          name={'productName'}
          label='Product Adı'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={'unitPrice'}
          label='Product Qiymeti'
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={'unitsInStock'}
          label='Product Stock'
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={'categoryId'}
          label='Product Categories'
          rules={[{ required: true }]}
        >
          <Select
            style={{ width: '70%' }}
            placeholder='Categories'
            options={categories?.map((category) => ({
              value: category?._id,
              label: category?.categoryName,
            }))}
          />
        </Form.Item>
        <Form.Item name={'description'} label='Açıklama'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit' style={{ float: 'right' }}>
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default FormComponent
