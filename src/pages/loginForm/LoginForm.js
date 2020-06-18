import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined, LoginOutlined } from '@ant-design/icons';
import { userLoginFetch } from '../../actions/actions';
import './loginForm.scss';

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
    <div className="formContainer">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <h1>Вход</h1>

          <div className="formItem">
            <label htmlFor="email">
              Электропочта
              <span className="required-star"> *</span>
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

          <div className="formItem">
            <label htmlFor="pwd">
              Пароль
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="password">
              <Input.Password id="pwd" name="password" size="large" autoComplete="off" />
            </Form.Item>
          </div>

          <div className="formButtonsContainer">
            <SubmitButton
              loading={false}
              disabled={false}
              size="large"
              shape="round"
              icon={<LoginOutlined />}
              className="button"
            >
              Войти
            </SubmitButton>
          </div>
        </Form>
      </Formik>
      <div className="link-container">
        <Link to="/signup">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default LoginForm;
