import React from 'react';
import Footer from '../components/Footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      check: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('Psst!... Your First Name'),
      lastName: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('Hey! Here... Your Last Name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('sshhh... Your Email'),
      message: Yup.string().required('You forgot the message box innit?'),
      check: Yup.array().required('Yoo!... Check me!!!'),
    }),
  });

  console.log(formik.errors);

  return (
    <div className='contact container'>
      <div className='contact_container'>
        <h1 className='error'>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={formik.handleSubmit}>
          <div className='names'>
            <div className='firstName m'>
              <label htmlFor='name'>First name</label>
              <input
                type='text'
                name='firstName'
                id='first_name'
                placeholder='Enter your first name'
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? 'error'
                    : ''
                }
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <small className='red'>{formik.errors.firstName}</small>
              )}
            </div>
            <div className='lastName m'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                id='last_name'
                name='lastName'
                className={
                  formik.touched.lastName && formik.errors.lastName
                    ? 'error'
                    : ''
                }
                placeholder='Enter your last name'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <small className='red'>{formik.errors.lastName}</small>
              )}
            </div>
          </div>
          <div className='email m'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className={
                formik.touched.email && formik.errors.email ? 'error' : ''
              }
              placeholder='yourname@gmail.com'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <small className='red'>{formik.errors.email}</small>
            )}
          </div>
          <div className='message m'>
            <label htmlFor='message'>Message</label>
            <input
              type='text'
              id='message'
              name='message'
              className={
                formik.touched.message && formik.errors.message ? 'error' : ''
              }
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Send me a message and Ill reply you as soon as possible...'
            />
            {formik.touched.message && formik.errors.message ? (
              <small className='red'>{formik.errors.message}</small>
            ) : (
              ''
            )}
          </div>
          <div className='checkbox m'>
            <label className='checking' htmlFor='checkbox'>
              You agree to providing your data to Abdul who may contact you.
            </label>
            <input
              type='checkbox'
              id='check'
              name='check'
              value='checked'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.check && formik.errors.check ? (
              <small className='red'>{formik.errors.check}</small>
            ) : (
              ''
            )}
          </div>
          <div className='button'>
            <button id='btn__submit' type='submit'>
              Send message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
