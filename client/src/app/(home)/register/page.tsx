'use client';

import { SignInButton } from '@/components/Buttons/SignIn';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '@/lib/validations';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

interface FormErrors {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  repeatPassword?: string | null;
}

interface ValidateFieldProps {
  fieldData: {
    name: string;
    value: string;
  };
  setOnNullOnly?: boolean;
}

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    repeatPassword: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: null,
    name: null,
    password: null,
    repeatPassword: null,
  });
  const onFormSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    try {
      const foundError = validateAll();

      if (foundError) {
        return;
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: '/' });
    } catch (error) {
      console.error(error);
    }
  };

  const validateAll = (): boolean => {
    let foundError = false;
    foundError
      ? (foundError = validateField({
          fieldData: { name: 'email', value: formData.email },
        }))
      : validateField({ fieldData: { name: 'email', value: formData.email } });
    foundError
      ? (foundError = validateField({
          fieldData: { name: 'name', value: formData.name },
        }))
      : validateField({ fieldData: { name: 'name', value: formData.name } });
    foundError
      ? (foundError = validateField({
          fieldData: { name: 'password', value: formData.password },
        }))
      : validateField({
          fieldData: { name: 'password', value: formData.password },
        });
    foundError
      ? (foundError = validateField({
          fieldData: { name: 'repeatPassword', value: formData.repeatPassword },
        }))
      : validateField({
          fieldData: { name: 'repeatPassword', value: formData.repeatPassword },
        });

    return foundError;
  };

  const validateFieldHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    validateField({
      fieldData: {
        name: ev.currentTarget.name,
        value: ev.currentTarget.value,
      },
    });
  };

  // TODO: Refactor this to remove it's cognitive complexity
  const validateField = ({
    fieldData,
    setOnNullOnly = false,
  }: ValidateFieldProps): boolean => {
    const name = fieldData.name;
    const value = fieldData.value;

    let errorFound = false;

    if (name === 'email') {
      const emailError = validateEmail(value);
      if (emailError && !setOnNullOnly) {
        setFormErrors({ ...formErrors, email: emailError });
        errorFound = true;
      } else if (!emailError) {
        setFormErrors({ ...formErrors, email: null });
      }
    }

    if (name === 'name') {
      const nameErrors = validateName(value);
      if (nameErrors && !setOnNullOnly) {
        setFormErrors({ ...formErrors, name: nameErrors });
        errorFound = true;
      } else if (!nameErrors) {
        setFormErrors({ ...formErrors, name: null });
      }
    }

    if (name === 'password') {
      const passwordError = validatePassword(value);
      if (passwordError && !setOnNullOnly) {
        setFormErrors({ ...formErrors, password: passwordError });
        errorFound = true;
      } else if (!passwordError) {
        setFormErrors({ ...formErrors, password: null });
      }
    }

    if (name === 'repeatPassword') {
      if (formData.password !== null && formData.password !== value) {
        if (!setOnNullOnly) {
          setFormErrors({
            ...formErrors,
            repeatPassword: 'Repeat password does not match password',
          });
          errorFound = true;
        }
      } else {
        setFormErrors({
          ...formErrors,
          repeatPassword: null,
        });
      }
    }

    return errorFound;
  };

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const name = ev.currentTarget.name;
    const value = ev.currentTarget.value;

    validateField({ fieldData: { name, value }, setOnNullOnly: true });

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="flex justify-center flex-1 items-center custom-container bg-custom-black">
      <form className="login-form-layout" onSubmit={onFormSubmit}>
        <label htmlFor="email" className="flex flex-col">
          Name
          <input
            className="login-name"
            placeholder="Name..."
            name="name"
            type="text"
            autoComplete="username"
            value={formData.name}
            onBlur={validateFieldHandler}
            onChange={onChangeHandler}
          ></input>
          <span className="text-custom-red">{formErrors.name}</span>
        </label>
        <label htmlFor="email" className="flex flex-col">
          Email
          <input
            className="login-email"
            placeholder="Email..."
            name="email"
            type="email"
            autoComplete="username"
            value={formData.email}
            onBlur={validateFieldHandler}
            onChange={onChangeHandler}
          ></input>
          <span className="text-custom-red">{formErrors.email}</span>
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
            value={formData.password}
            onBlur={validateFieldHandler}
            onChange={onChangeHandler}
          ></input>
          <span className="text-custom-red">{formErrors.password}</span>
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
            value={formData.repeatPassword}
            onBlur={validateFieldHandler}
            onChange={onChangeHandler}
          ></input>
          <span className="text-custom-red">{formErrors.repeatPassword}</span>
        </label>
        <button className="login-submit">Register</button>
        <SignInButton></SignInButton>
      </form>
    </section>
  );
}
