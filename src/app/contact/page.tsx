// app/contact/page.tsx h
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: "#1f1f1f" }}>
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
