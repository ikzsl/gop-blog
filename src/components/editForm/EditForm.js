import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, SubmitButton } from 'formik-antd';

import __ from 'lodash';
import { FileAddOutlined } from '@ant-design/icons';

import { articleEditFetch, setCurrentPage } from '../../actions/actions';

import { Container } from './style';

const validationSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  body: Yup.string(),
});

const initialValues = {
  title: '',
  description: '',
  body: '',
};

const EditForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentArticle = useSelector((state) => state.currentArticle);
  const {
    title, body, description, slug,
  } = currentArticle;

  const handleSubmit = async (values) => {
    const filteredValues = __.omitBy(values, __.isEmpty);
    // const newValues = { ...filteredValues, slug };
    await dispatch(articleEditFetch(filteredValues, slug));
    await dispatch(setCurrentPage(1));
    history.push('/');
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h1>Edit Article</h1>
          <div>
            <label htmlFor="title">title</label>
            <Form.Item name="title">
              <Input
                id="title"
                name="title"
                placeholder="title"
                size="large"
                defaultValue={title}
              />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="description">description</label>
            <Form.Item name="description">
              <Input
                id="description"
                name="description"
                placeholder="description"
                size="large"
                defaultValue={description}
              />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="body">body</label>
            <Form.Item name="body">
              <Input.TextArea
                id="body"
                name="body"
                placeholder="your text"
                size="large"
                defaultValue={body}
              />
            </Form.Item>
          </div>

          <div>
            <SubmitButton
              loading={false}
              disabled={false}
              size="large"
              shape="round"
              icon={<FileAddOutlined />}
            >
              Save changes
            </SubmitButton>
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default EditForm;
