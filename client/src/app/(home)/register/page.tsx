'use client';

import { SignInButton } from '@/components/Buttons/SignIn';
import Spinner from '@/components/Spinner/Spinner';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateRepeatPassword,
} from '@/lib/validations';
import classNames from 'classnames';
import { FormikErrors, FormikValues, useFormik } from 'formik';
import { signIn } from 'next-auth/react';

export default function Register() {
  const validate = (values: FormikValues) => {
    const errors: FormikErrors<typeof values> = {};

    const emailError = validateEmail(values.email);
    if (emailError) {
      errors.email = emailError;
    }

    const nameError = validateName(values.name);
    if (nameError) {
      errors.name = nameError;
    }

    const passwordError = validatePassword(values.password);
    if (passwordError) {
      errors.password = passwordError;
    }

    const repeatPasswordError = validateRepeatPassword(
      values.password,
      values.repeatPassword
    );
    if (repeatPasswordError) {
      errors.repeatPassword = repeatPasswordError;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      repeatPassword: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        const res = await fetch('/api/register/', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          alert((await res.json()).message);
          return;
        }

        signIn(undefined, { callbackUrl: '/' });
      } catch (error: unknown) {
        let message;
        if (error instanceof Error) message = error.message;
        console.error(error);
        alert(message);
      }
    },
  });

  return (
    <section className="flex justify-center flex-1 items-center custom-container bg-custom-black">
      <form className="login-form-layout" onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className="flex flex-col">
          Name
          <input
            className={classNames(
              'login-name',
              formik.errors.name && formik.touched.name ? 'error-input' : null
            )}
            placeholder="Name..."
            name="name"
            type="text"
            autoComplete="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          ></input>
          {formik.touched.name && (
            <span className="text-custom-red">{formik.errors.name}</span>
          )}
        </label>
        <label htmlFor="email" className="flex flex-col">
          Email
          <input
            className={classNames(
              'login-email',
              formik.errors.email && formik.touched.email ? 'error-input' : null
            )}
            placeholder="Email..."
            name="email"
            type="email"
            autoComplete="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></input>
          {formik.touched.email && (
            <span className="text-custom-red">{formik.errors.email}</span>
          )}
        </label>
        <label htmlFor="password" className="flex flex-col">
          {' '}
          Password
          <input
            className={classNames(
              'login-password',
              formik.errors.password && formik.touched.password
                ? 'error-input'
                : null
            )}
            placeholder="Password..."
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          ></input>
          {formik.touched.password && (
            <span className="text-custom-red">{formik.errors.password}</span>
          )}
        </label>
        <label htmlFor="repeatPassword" className="flex flex-col">
          {' '}
          Repeat Password
          <input
            className={classNames(
              'login-repeatPassword',
              formik.errors.repeatPassword && formik.touched.repeatPassword
                ? 'error-input'
                : null
            )}
            placeholder="Password..."
            name="repeatPassword"
            type="password"
            autoComplete="current-password"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.repeatPassword && (
            <span className="text-custom-red">
              {formik.errors.repeatPassword}
            </span>
          )}
        </label>
        <button
          className="login-submit flex justify-center items-center"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <Spinner className="h-10 w-10"></Spinner>
          ) : (
            'Register'
          )}
        </button>
        <SignInButton>Already have an account ? Sign in now !</SignInButton>
      </form>
    </section>
  );
}
