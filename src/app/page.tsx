import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Laptop from "../../components/Laptop";

export default function Home() {
  return (
    <>
    <Header />
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" style={{ flex: 1 }}>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div style={{ width: '50vw'}}>
            <div className="main-page-title">Builder, Leader, Innovator.</div>
            <div className="font-[family-name:var(--font-geist-mono)]" style={{textAlign: 'center'}}>
              Hi, my name&apos;s Inaki.  I&apos;m a tech professional with a portfolio ranging from large tech companies
              to small startups and personal projects.  I enjoy all aspects of the stack and appreciate the time you
              have taken to visit my personal website.
            </div>
            <Laptop />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                className="dark:invert"
                src="/personal_pic.png"
                alt="Image"
                placeholder="blur"
                blurDataURL="/personal_pic.png"
                width={480}
                height={280}
                priority
              />
              </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
