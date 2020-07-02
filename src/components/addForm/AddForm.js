import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, Input, Table, SubmitButton, AddRowButton,
} from 'formik-antd';
import { FileAddOutlined, TagOutlined } from '@ant-design/icons';

import { articlePostFetch, setCurrentPage } from '../../actions/actions';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('required'),
  description: Yup.string().required('required'),
  body: Yup.string().required('required'),
  tagList: Yup.array(),
});

const initialValues = {
  title: '',
  description: '',
  body: '',
  tagList: [''],
};

const AddForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values, { setFieldError }) => {
    dispatch(articlePostFetch(values, setFieldError));
    dispatch(setCurrentPage(1));
    history.push('/');
  };

  const handleClickButton = (evt) => {
    evt.preventDefault();
    document.getElementById('addTagButton').click();
  };

  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <h1>Create Article</h1>
          <div className="formItem">
            <label htmlFor="title">
              title
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="title">
              <Input id="title" name="title" placeholder="title" size="large" />
            </Form.Item>
          </div>
          <div className="formItem">
            <label htmlFor="description">
              description
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="description">
              <Input id="description" name="description" placeholder="description" size="large" />
            </Form.Item>
          </div>
          <div className="formItem">
            <label htmlFor="body">
              body
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="body">
              <Input.TextArea id="body" name="body" placeholder="your text" size="large" />
            </Form.Item>
          </div>
          <div className="formItem">
            <Table
              name="tagList"
              rowKey={(row) => `${row.id}`}
              size="small"
              pagination={false}
              columns={[
                {
                  title: 'Tags',
                  key: 'tag',
                  render: (text, record, i) => (
                    <Input
                      name={`tagList[${i}]`}
                      placeholder="Телепатия"
                      size="large"
                      suffix={<TagOutlined />}
                      onPressEnter={handleClickButton}
                      autoFocus
                    />
                  ),
                },
              ]}
            />

            <AddRowButton
              name="tagList"
              createNewRow={(text) => text || ''}
              size="large"
              type="primary"
              className="skillsButton"
              id="addTagButton"
            >
              Добавить суперспособность
            </AddRowButton>
          </div>

          <div className="formButtonsContainer">
            <SubmitButton
              loading={false}
              disabled={false}
              size="large"
              shape="round"
              icon={<FileAddOutlined />}
              className="button"
            >
              Add article
            </SubmitButton>
          </div>
        </Form>
      </Formik>
      <div className="link-container">
        <span>Уже зарегистрировались? </span>
        <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};

export default AddForm;
