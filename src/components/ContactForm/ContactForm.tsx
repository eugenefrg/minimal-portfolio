import { Button, Form, Input, message } from "antd";
import React from "react";

/**
 * encode the request body from form data.
 * @param data the form data
 * @returns the encoded request body
 */
function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
}

/**
 * send the email to the server.
 * @param values the form values
 */
const handleFinish = (values: any) => {
  fetch(`/`, {
    method: `POST`,
    headers: { "Content-Type": `application/x-www-form-urlencoded` },
    body: encode({
      ...values,
    }),
  })
    .then(() => message.success(`Thanks for reaching out!`))
    .catch((error) => message.error(error.message));
};

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      data-netlify="true"
      onFinish={handleFinish}
      layout="vertical"
      requiredMark="optional"
      size="large"
      name="contact"
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="message" label="Message" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
