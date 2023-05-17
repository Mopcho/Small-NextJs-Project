export default function Contact() {
  return (
    <section className="flex justify-center flex-1 items-center custom-container bg-custom-black">
      <form className="contact-form-layout">
        <input className="contact-firstname" placeholder="Firstname..."></input>
        <input className="contact-lastname" placeholder="Lastname..."></input>
        <textarea
          className="contact-message"
          placeholder="Leave me a message..."
        ></textarea>
        <button className="contact-submit">Contact Me</button>
      </form>
    </section>
  );
}
