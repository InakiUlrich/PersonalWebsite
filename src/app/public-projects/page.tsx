import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import FadeInComponent from "../../../components/FadeInComponent";

export const metadata = {
  title: 'Inaki Ulrich',
  description: 'Page for my projects that are publicly available',
  icons: {
    icon: '/icon.ico',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" style={{ flex: 1 }}>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <div style={{ width: '50vw'}}>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://inakiulrich.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My personal website
                <FadeInComponent component={<Image
                    className="dark:invert"
                    src="/inakiulrich.com-pic.png"
                    alt="Image"
                    placeholder="blur"
                    blurDataURL="/inakiulrich.com-pic.png"
                    width={480}
                    height={280}
                    priority
                  />} />
                </a>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://inakiulrich.wixsite.com/smartshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mock E-commerce store
                <FadeInComponent component={<Image
                    className="dark:invert"
                    src="/smartshop-wix-pic.png"
                    alt="Image"
                    placeholder="blur"
                    blurDataURL="/smartshop-wix-pic.png"
                    width={480}
                    height={280}
                    priority
                  />} />
                </a>
              </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}