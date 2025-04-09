import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ContactForm from "../../../components/ContactForm";

export const metadata = {
  title: 'Contact me',
  description: 'Contact page for my personal website',
  icons: {
    icon: '/icon.ico',
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
        <div className="main-page-title">Contact Form</div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" style={{ flex: 1 }}>
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}