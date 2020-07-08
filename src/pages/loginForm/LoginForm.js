import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined, LoginOutlined } from '@ant-design/icons';
import { userLoginFetch } from '../../actions/actions';

import { Container, RequiredStar, ButtonContainer } from './style';

const initialValues = {
  password: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  password: Yup.string().required('Пароль нужен'),
  email: Yup.string().email('Неправильная почта').required('Почту, пожалуйста'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values, { setFieldError }) => {
    dispatch(userLoginFetch(values, setFieldError));
  };

  return (
    <Container>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <h1>Вход</h1>

          <div>
            <label htmlFor="email">
              Электропочта
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="email">
              <Input
                id="email"
                name="email"
                placeholder="ivan@mail.ru"
                size="large"
                suffix={<MailOutlined />}
              />
            </Form.Item>
          </div>

          <div>
            <label htmlFor="pwd">
              Пароль
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="password">
              <Input.Password id="pwd" name="password" size="large" autoComplete="off" />
            </Form.Item>
          </div>

          <ButtonContainer>
            <SubmitButton
              loading={false}
              disabled={false}
              size="large"
              shape="round"
              block="true"
              icon={<LoginOutlined />}
            >
              Войти
            </SubmitButton>
          </ButtonContainer>
        </Form>
      </Formik>
      <div>
        <Link to="/signup">Зарегистрироваться</Link>
      </div>
    </Container>
  );
};

export default LoginForm;
