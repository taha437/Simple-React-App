import React, { useEffect } from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPasswordRequest } from "../actions";
import { Row, Col, Typography, Form, Input, Button } from "antd";
import animate from "../../../../Assets/account-animate.svg";

const SetPassword = props => {
  const { Title } = Typography;

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={style.SetPasswordWrapper}>
      <Row>
        <Row>
          <Col span={24}>
            <object
              type="image/svg+xml"
              data={animate}
              className={style.animate}
              viewbox="0 0 1200 1200"
            >
              svg-animation
            </object>
          </Col>
        </Row>
        <Row>
          <Col offset={5} span={24}>
            <Title level={2}>Please enter your new password</Title>
          </Col>
        </Row>
        <Row>
          <Form
            name="set_password"
            onSubmit={handleSubmit}
            className={style.setPasswordForm}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="password"
              style={{
                width: "50%",
                marginLeft: "190px"
              }}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                loading={props.isLoading}
                style={{ width: "100%" }}
                htmlType="submit"
                onClick={handleSubmit}
                style={{
                  width: "30%",
                  marginLeft: "260px"
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Row>
    </div>
  );
};

SetPassword.propTypes = {};

const mapStateToProps = state => ({});

export const SetPasswordContainer = withRouter(
  connect(mapStateToProps, { setPasswordRequest })(SetPassword)
);
