import React from "react";
import { Form, Input, Button } from "antd";
import style from "./index.module.scss";

const setPasswordFormComponent = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
       if (props.isTokenValid) {
          values.token = props.token;
          props.onSubmit(values);
        } else {
          props.resendToken({ token: props.token });
        }
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className={style.authHeader}>{props.isTokenValid ? "Set password" : "Your Token has expired "}</h1>
      {!props.isTokenValid && <h3 className={style.authHeader}>Click the button to generate a new token</h3>}
        {props.isTokenValid && (<Form.Item
            {...props.passIsError && {
              help: props.passErrorMessage,
              validateStatus: "error"
            }}
            name="password"
            rules={[{ required: true, message: "Please enter your Password!" }]}
            {...(props.isError && {
              help: props.errorMessage,
              validateStatus: "error"
            })}
          >
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your password!" }
              ]
            })(<Input type="password" placeholder="Password" />)}
          </Form.Item>)}
        <Form.Item>
          <Button
            loading={props.isLoading}
            type="primary"
            style={{ width: "100%" }}
            htmlType="submit"
          >
          {props.isTokenValid ? "Submit" : "Resend"}
        </Button>
        </Form.Item>
      </Form>
  );
};

export const SetPasswordForm = Form.create({ name: "setPasswordForm" })(
  setPasswordFormComponent
);
