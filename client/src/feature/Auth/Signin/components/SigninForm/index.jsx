import React from "react";
import { Form, Icon, Input, Button } from "antd";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import animate from "../../../../../Assets/mobile-login-animate.svg";
const SigninFormComponent = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };

  const { Title } = Typography;

  return (
    // <Form onSubmit={handleSubmit} className={style.signinForm}>
    //   <h1 className={style.authHeader}>Sign in</h1>
    //   <Form.Item>
    //     {getFieldDecorator("email", {
    //       rules: [
    //         { required: true, message: "Please input your email!" },
    //         { type: "email", message: "The input is not valid E-mail!" }
    //       ]
    //     })(
    //       <Input
    //         prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
    //         placeholder="email"
    //       />
    //     )}
    //   </Form.Item>
    //   <Form.Item
    //     {...props.isError && {
    //       help: props.errorMessage,
    //       validateStatus: "error"
    //     }}
    //   >
    //     {getFieldDecorator("password", {
    //       rules: [{ required: true, message: "Please input your password!" }]
    //     })(
    //       <Input
    //         prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
    //         type="password"
    //         placeholder="Password"
    //       />
    //     )}
    //   </Form.Item>
    //   <Form.Item>
    //     <Button
    //       type="primary"
    //       loading={props.isLoading}
    //       style={{ width: "100%" }}
    //       htmlType="submit"
    //     >
    //       Sign in
    //     </Button>
    //     <div className={style.singupLinks}>
    //       <Link to="/signup">Create accaunt</Link> or{" "}
    //       <Link to="/restore-password">Forgot password</Link>
    //     </div>
    //   </Form.Item>
    // </Form>
    <Row>
      <Col span={12} style={{ marginTop: 60 }}>
        <Title
          level={1}
          style={{
            fontWeight: "bold",
            textShadow: "2px 2px rgba(0,0,0,0.2)",
            textAlign: "center",
            marginBottom: 50
          }}
        >
          Welcome Back!
        </Title>
        <Form
          name="normal_login"
          onSubmit={handleSubmit}
          className={style.signinForm}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your Email" }]}
            style={{
              width: "70%",
              marginLeft: 60
            }}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your Password!" }]}
            style={{
              width: "70%",
              marginLeft: 60
            }}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <div className={style.forgotPassword}>
            <a href="">Forgot password</a>
          </div>
          <Form.Item>
            <Button
              type="primary"
              loading={props.isLoading}
              style={{ width: "100%" }}
              htmlType="submit"
              style={{
                width: "70%",
                marginLeft: 60
              }}
            >
              Login
            </Button>
            <div className={style.singupLinks}>
              Don't have an account yet?
              <Link to="/signup"> Sign up</Link>
            </div>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12} className={style.card}>
        <object type="image/svg+xml" data={animate}>
          svg-animation
        </object>
      </Col>
    </Row>
  );
};

export const SigninForm = Form.create({ name: "signinForm" })(
  SigninFormComponent
);
