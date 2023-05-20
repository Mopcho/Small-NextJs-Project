'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Create() {
  const [value, setValue] = useState('');
  return (
    <section className="h-full w-full py-8">
      <form className="blog-create-form">
        <input
          name="title"
          type="text"
          placeholder="Title..."
          className="py-3 text-2xl px-3 text-center"
        ></input>

        <ReactQuill value={value} onChange={setValue} />

        <button className="py-3 px-10 bg-custom-red text-white text-2xl">
          Submit
        </button>
      </form>
    </section>
  );
}
