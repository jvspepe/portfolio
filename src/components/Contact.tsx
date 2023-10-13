function Contact() {
  return (
    <section className="container mx-auto px-6 py-12 sm:px-0 md:py-24">
      <h4 className="text-lg uppercase">Contato</h4>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Seu Nome</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Seu E-mail</label>
        <input type="email" name="email" id="email" />
      </form>
    </section>
  );
}

export default Contact;
