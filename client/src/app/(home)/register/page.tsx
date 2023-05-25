'use client';

import { SignInButton } from '@/components/Buttons/SignIn';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateRepeatPassword,
} from '@/lib/validations';
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
            className="login-name"
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
            className="login-email"
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
            className="login-password"
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
            className="login-repeatPassword"
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
        <button className="login-submit" type="submit">
          Register
        </button>
        <SignInButton>Already have an account ? Sign in now !</SignInButton>
      </form>
    </section>
  );
}
