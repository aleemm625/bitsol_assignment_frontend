import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CreateEditUserForm = (props) => {
  const { handleSubmit, styles, isCreateUser, initialValues } = props;

  const validationSchema = Yup.object().shape({
    //   id: Yup.string().required('ID is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    role: Yup.string().required('Role is required'),
    phoneNo: Yup.string().required('Phone No is required'),
    addresses: Yup.array().of(
      Yup.object().shape({
        addressLine1: Yup.string(),
        addressLine2: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        country: Yup.string(),
      }),
    ),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className={styles.field}>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                disabled={isCreateUser ? false : true}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="role">Role:</label>
              <Field
                as="select"
                id="role"
                name="role"
                disabled={isCreateUser ? false : true}
              >
                <option value="">Select a role</option>
                <option value="admin">admin</option>
                <option value="normal">normal</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phoneNo">Phone No:</label>
              <Field type="text" id="phoneNo" name="phoneNo" />
              <ErrorMessage
                name="phoneNo"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label>Addresses:</label>
              <hr />
              <FieldArray name="addresses">
                {({ push, remove }) => (
                  <div>
                    {values.addresses.map((_, index) => (
                      <div key={index}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <label>Address 1:</label>
                          <div onClick={() => remove(index)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </div>
                        </div>
                        <Field name={`addresses[${index}].addressLine1`} />
                        <ErrorMessage
                          name={`addresses[${index}].addressLine1`}
                          component="div"
                          className={styles.error}
                        />
                        <label>Address 2:</label>
                        <Field name={`addresses[${index}].addressLine2`} />
                        <ErrorMessage
                          name={`addresses[${index}].addressLine2`}
                          component="div"
                          className={styles.error}
                        />
                        <label>City:</label>
                        <Field name={`addresses[${index}].city`} />
                        <ErrorMessage
                          name={`addresses[${index}].city`}
                          component="div"
                          className={styles.error}
                        />
                        <label>State:</label>
                        <Field name={`addresses[${index}].state`} />
                        <ErrorMessage
                          name={`addresses[${index}].state`}
                          component="div"
                          className={styles.error}
                        />
                        <label>Country:</label>
                        <Field name={`addresses[${index}].country`} />
                        <ErrorMessage
                          name={`addresses[${index}].country`}
                          component="div"
                          className={styles.error}
                        />
                        {/* <button type="button" >
                          Remove
                        </button> */}

                        <hr />
                      </div>
                    ))}
                    <button
                      style={{ marginTop: '10px' }}
                      type="button"
                      onClick={() =>
                        push({
                          addressLine1: '',
                          addressLine2: '',
                          city: '',
                          state: '',
                          country: '',
                        })
                      }
                    >
                      Add Address
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

            <button type="submit">
              {isCreateUser ? 'Create User' : 'Edit User'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEditUserForm;
