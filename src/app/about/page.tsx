import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SummaryList from "../../../components/SummaryList";
import SkillsList from "../../../components/SkillsList";
import ProfessionalExperienceList from "../../../components/ProfessionalExperienceList";
import RelevantProjectsList from "../../../components/RelevantProjectsList";
import EducationList from "../../../components/EducationList";
import AdditionalWorkExperienceList from "../../../components/AdditionalWorkExperienceList";
import FadeInComponent from "../../../components/FadeInComponent";

export const metadata = {
  title: 'About me',
  description: 'About page for my personal website',
  icons: {
    icon: '/icon.ico',
  },
};

export default function About() {
  return (
    <>
      <Header />
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" style={{ flex: 1 , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Image
                  className="dark:invert"
                  src="/personal_pic.png"
                  alt="Image"
                  width={280}
                  height={280}
                  priority
                  style={{ alignSelf: 'center' }}
                />
            <div>
              <FadeInComponent component={<SummaryList />} />
              <FadeInComponent component={<SkillsList />} />
              <FadeInComponent component={<ProfessionalExperienceList />} />
              <FadeInComponent component={<RelevantProjectsList />} />
              <FadeInComponent component={<EducationList />} />
              <FadeInComponent component={<AdditionalWorkExperienceList />} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}