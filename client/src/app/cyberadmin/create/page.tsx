export default function Create() {
  return (
    <section className="h-full w-full py-8">
      <form className="blog-create-form">
        <div className="blog-create-title blog-create-formfield">
          <label htmlFor="title" className="text-3xl">
            Title
          </label>
          <input name="title" type="text" className="w-full p-2"></input>
        </div>

        <div className="blog-create-textarea blog-create-formfield">
          <label htmlFor="content" className="text-3xl">
            Content
          </label>
          <textarea
            name="content"
            className="w-full p-2 h-full resize-none"
          ></textarea>
        </div>

        <button className="py-3 px-10 bg-custom-red text-white text-2xl">
          Review
        </button>
      </form>
    </section>
  );
}
