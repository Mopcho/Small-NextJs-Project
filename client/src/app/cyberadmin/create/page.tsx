'use client';
import { validateBlogContent, validateBlogTitle } from '@/lib/validations';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Range } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Create() {
  const { data: session } = useSession();
  const [formValues, setValues] = useState({
    title: '',
    content: '',
  });
  type ValueType = typeof formValues;
  type ErrorsType = Partial<Record<keyof ValueType, string>>;
  const [formErrors, setErrors] = useState<ErrorsType>({
    title: '',
    content: '',
  });
  const [touched, setTouched] = useState({
    title: false,
    content: false,
  });

  /**
   * Return an object containing the errors that has
   * the same symetry as formErros.
   */
  const validate = (values: ValueType) => {
    const errors: ErrorsType = {};
    const titleError = validateBlogTitle(values.title);
    if (titleError) {
      errors.title = titleError;
    }

    const blogContentError = validateBlogContent(values.content);
    if (blogContentError) {
      errors.content = blogContentError;
    }

    return errors;
  };

  /**
   * 1. Set values
   * 2. Set errors
   */
  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    const name = ev.currentTarget.name;

    console.warn(session);

    setValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      const errors = validate(updatedValues);
      setErrors(errors);
      return updatedValues;
    });
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.warn(formValues);
    console.warn(formErrors);
    console.warn(touched);

    // TODO: Send to server
  };

  /**
   * Set the touched fields. Used when you want to show
   * the errors to the user only after unfocus of the field.
   */
  const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [ev.currentTarget.name]: true });
  };

  /** @@@@@@@@@@@ END OF NORMAL FORM @@@@@@@@@@@ */

  // Because they have to be special >:(
  const handleQuillChange = (values: string) => {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, content: values };
      const errors = validate(updatedValues);
      setErrors(errors);
      return updatedValues;
    });
  };

  const handleQuillBlur = (previousSelection: Range) => {
    console.warn(previousSelection);
    setTouched({ ...touched, content: true });
  };

  return (
    <section className="h-full w-full py-8">
      <form className="blog-create-form" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title..."
          className="py-3 text-2xl px-3 text-center"
          value={formValues.title}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {touched.title && (
          <span className="text-custom-red">{formErrors.title}</span>
        )}

        <ReactQuill
          value={formValues.content}
          onChange={handleQuillChange}
          onBlur={handleQuillBlur}
          modules={{
            toolbar: {
              container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ align: [] }],
                // ['link', 'image'],
                ['clean'],
                [{ color: [] }],
              ],
            },
          }}
        />
        {touched.content && (
          <span className="text-custom-red">{formErrors.content}</span>
        )}

        <button
          type="submit"
          className="py-3 px-10 bg-custom-red text-white text-2xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
