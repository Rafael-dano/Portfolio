function Contact() {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-2 border" />
          <input type="email" placeholder="Your Email" className="p-2 border" />
          <textarea placeholder="Your Message" className="p-2 border"></textarea>
          <button type="submit" className="bg-blue-600 text-white p-2">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  