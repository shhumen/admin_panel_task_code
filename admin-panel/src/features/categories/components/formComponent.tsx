import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
}

interface FormComponentProps {
  onFinish: (values: any) => void
  initialValues?: any
}

const FormComponent: React.FC<FormComponentProps> = (props) => {
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
          name={'categoryName'}
          label='Kategori Adı'
          rules={[{ required: true }]}
        >
          <Input />
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
