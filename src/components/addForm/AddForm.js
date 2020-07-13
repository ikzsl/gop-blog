import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, Input, Table, SubmitButton, AddRowButton, RemoveRowButton,
} from 'formik-antd';
import { FileAddOutlined, TagOutlined, DeleteOutlined } from '@ant-design/icons';

import { articlePostFetch, setCurrentPage } from '../../actions/actions';

import {
  InputContainer,
  ButtonContainer,
  Container,
  SubmitButtonContainer,
  RequiredStar,
} from './style';

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
    await dispatch(articlePostFetch(values, setFieldError));
    await dispatch(setCurrentPage(1));
    history.push('/');
  };

  const handleClickButton = (evt) => {
    evt.preventDefault();
    document.getElementById('addTagButton').click();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Container>
        <Form>
          <h1>Create new article</h1>
          <div>
            <label htmlFor="title">
              title
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="title">
              <Input id="title" name="title" placeholder="title" size="large" />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="description">
              description
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="description">
              <Input id="description" name="description" placeholder="description" size="large" />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="body">
              body
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="body">
              <Input.TextArea id="body" name="body" placeholder="your text" size="large" />
            </Form.Item>
          </div>
          <div>
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
                    <InputContainer>
                      <Input
                        name={`tagList[${i}]`}
                        placeholder="tag"
                        size="large"
                        suffix={<TagOutlined />}
                        onPressEnter={handleClickButton}
                        autoFocus
                      />
                      <ButtonContainer>
                        <RemoveRowButton name="tagList" icon={<DeleteOutlined />} index={i} />
                      </ButtonContainer>
                    </InputContainer>
                  ),
                },
              ]}
            />
            <ButtonContainer>
              <AddRowButton
                name="tagList"
                createNewRow={(text) => text || ''}
                size="large"
                type="primary"
                block="true"
                id="addTagButton"
              >
                Add tag
              </AddRowButton>
            </ButtonContainer>
          </div>

          <SubmitButtonContainer>
            <SubmitButton
              loading={false}
              disabled={false}
              size="large"
              shape="round"
              block="true"
              icon={<FileAddOutlined />}
            >
              Send
            </SubmitButton>
          </SubmitButtonContainer>
        </Form>
      </Container>
    </Formik>
  );
};

export default AddForm;
