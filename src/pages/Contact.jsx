import ContactHero from "../features/contact/ContactHero";
import ContactInfo from "../features/contact/ContactInfo";
import ContactForm from "../features/contact/ContactForm";
import ContactFooterNote from "../features/contact/ContactFooterNote";
import Maps from "../features/contact/Maps";
function Contact() {
  return (
    <main className="min-h-screen bg-[#FAF6EF]">
      <ContactHero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactInfo />

        <section className="mt-12 pb-16 lg:mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <ContactFooterNote />
            <ContactForm />
          </div>
          <div className="mt-12 lg:mt-16">
        <Maps/>
      </div>
        </section>
      </div>
      
    </main>
  );
}

export default Contact;