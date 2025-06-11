import FadeInComponent from "../../../components/FadeInComponent";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Image from "next/image";
import NestedList from '../../../components/NestedList'

export const metadata = {
  title: 'About me',
  description: 'About page for my personal website',
  icons: {
    icon: '/icon.ico',
  },
};

const summaryTitle = "Summary";
const summaryList = "IT professional with over a decade of information systems and over two years of software" 
                        + " engineering experience."

const skillsTitle = "Technical Skills";
const languagesId = "languagesComponent";
const languagesTitle = "Programming Languages"; 
const languagesText = "C#, Java, JavaScript, TypeScript, HTML, CSS, Ruby, Swift, C++, C, Python";
const databasesId = "databasesComponent";
const databasesTitle = "Databases";
const databasesText = "DynamoDB, MongoDB, Firebase, MySQL, SQLite";
const librariesAndFrameworksId = "librariesAndFrameworksComponent";
const librariesAndFrameworksTitle = "Libraries/Frameworks";
const librariesAndFrameworksText = ".NET, Spring Boot, Spring MVC, React, Next, Vite, Three.js, Express, Ruby on Rails, Cypress, Selenium";
const cloudComputingId = "cloudComputingComponent";
const cloudComputingTitle = "Cloud Computing";
const cloudComputingText = "AWS S3, SNS, SES, SQS, EC2, API Gateway, CDK, LPT, CloudFront, CloudWatch, Route 53, Amplify, IAM";

const languagesComponent = <NestedList key={languagesId} title={languagesTitle} text={languagesText} />;
const databasesComponent = <NestedList key={databasesId} title={databasesTitle} text={databasesText} />;
const librariesAndFrameworksComponent = <NestedList key={librariesAndFrameworksId}title={librariesAndFrameworksTitle} text={librariesAndFrameworksText} />;
const cloudComputingComponent = <NestedList key={cloudComputingId} title={cloudComputingTitle} text={cloudComputingText} />;

const nestedSkillsComponents = [languagesComponent, databasesComponent, librariesAndFrameworksComponent, cloudComputingComponent];

const professionalExperienceTitle = "Professional Experience";
const amazonId = "amazonComponent";
const amazonTitle = "Amazon (Remote, RTO Feb 2023 Seattle, WA): Software Dev Engineer 2022 – 2024";
const hypeDocsId = "hypceDocsComponent";
const hypeDocsTitle = "HypeDocs (Remote): Software Developer Intern  2021 – 2022";

const amazonBulletOne = "Led projects to migrate our team's services onto Amazon's latest internal authentication protocol and to programmatically delete customer data.";
const amazonBulletTwo = "Developed in Agile teams across microservices consisting of .NET, Spring Boot, Spring MVC, React, and Ruby on Rails.";
const amazonBulletThree = "Integrated CI/CD by leveraging AWS with tools such as CDK, LPT, CodeCommit, CodeBuild, CodePipeline, and CodeDeploy to detect bugs earlier in production pipelines.";
const amazonBulletFour = "Implemented backend interactions with AWS DynamoDB, Aurora (MySQL), S3, SNS, SQS, CloudWatch and API Gateway.";
const amazonBulletFive = "Composed Selenium and Cypress UI and integration tests enabling the onboarding of new clients and advanced features.";
const amazonBulletSix = "Optimized already existing Cypress UI tests, reducing flakiness by more than 90%.";
const amazonBulletSeven = "Performed in depth host analysis, cutting team operational costs.";
const amazonBulletEight = "Contributed to code reviews and team discussions on topics including daily standups, operational readiness, designs on both existing and new systems, and knowledge sharing.";

const hypeDocsBulletOne = "Designed and implemented an admin dashboard utilizing React, HTML/CSS and Apex Charts while pulling data in a Firebase database with a Netlify backend.";

const amazonBulletList = [amazonBulletOne, amazonBulletTwo, amazonBulletThree, amazonBulletFour, amazonBulletFive, amazonBulletSix, 
    amazonBulletSeven, amazonBulletEight
];
const hypeDocsBulletList = [hypeDocsBulletOne];

const amazonComponent = <NestedList key={amazonId} title={amazonTitle} textList={amazonBulletList} />;
const hypeDocsComponent = <NestedList key={hypeDocsId}  title={hypeDocsTitle} textList={hypeDocsBulletList} />;

const laMadelieneId = "laMadelieneComponent";
const laMadelieneTitle = "La Madeliene French Bakery & Café, Gilbert, AZ: Server Assistant			2019 – 2020";
const sectorSevenId = "sectorSevenComponent";
const sectorSevenTitle = "SectorSeven, Alexandria, MN: Technical Operations Lead 2017 – 2019";
const hookupCellularId = "hookupCellularComponent";
const hookupCellularTitle = "Hookup Cellular, Phoenix, AZ: 2010 – 2017";
const hookupCellularGMId = "hookupCellularGMComponent";
const hookupCellularGMTitle = "General Manager 2015 – 2017";
const hookupCellularLeadId = "hookupCellularLeadComponent";
const hookupCellularLeadTitle = "Lead Repair Technician – Retail 2013 – 2015";
const hookupCellularQualityId = "hookupCellularQualityComponent";
const hookupCellularQualityTitle = "Quality Control Manager 2011 – 2013";
const hookupCellularLCDId = "hookupCellularLCDComponent";
const hookupCellularLCDTitle = "LCD Tester 2010 – 2011";

const laMadelieneBulletOne = "Prepped service, restocked inventory, washed dishes, and bussed tables.";
const sectorSevenBulletOne = "Trained, led, coached, and supervised a team of up to 10 mobile and electronics technicians on hardware, firmware, and software repairs.";
const sectorSevenBulletTwo = "Developed and implemented wholesale refurbishment processes and inventory systems.";
const hookupCellularGMBulletOne = "Researched, analyzed, purchased and sold wholesale electronics devices.";
const hookupCellularGMBulletTwo = "Led the refurbishment of wholesale devices.";
const hookupCellularGMBulletThree = "Coordinated eCommerce sales, retail sales, and marketing.";
const hookupCellularGMBulletFour = "Provided support for internal infrastructure.";
const hookupCellularLeadBulletOne = "Led hardware, firmware, and software repairs for mobile and electronics devices.";
const hookupCellularLeadBulletTwo = "Point of escalation for all customer devices, internal devices, and customer issues.";
const hookupCellularLeadBulletThree = "Provided customer service for both retail repairs and retail electronics and parts sales.";
const hookupCellularQualityBulletOne = "Trained, led, coached, and supervised a team of up to 12 LCD Testers.";
const hookupCellularQualityBulletTwo = "Developed and implemented testing procedures and inventory systems.";
const hookupCellularLCDBulletOne = "Tested LCDs for mobile and electronics devices.";

const laMadelieneBulletList = [laMadelieneBulletOne];
const sectorSevenBulletList = [sectorSevenBulletOne, sectorSevenBulletTwo];
const hookupCellularGMBulletList = [hookupCellularGMBulletOne, hookupCellularGMBulletTwo, hookupCellularGMBulletThree, hookupCellularGMBulletFour];
const hookupCellularLeadBulletList = [hookupCellularLeadBulletOne, hookupCellularLeadBulletTwo, hookupCellularLeadBulletThree];
const hookupCellularQualityBulletList = [hookupCellularQualityBulletOne, hookupCellularQualityBulletTwo];
const hookupCellularLCDBulletList = [hookupCellularLCDBulletOne];

const laMadelieneComponent = <NestedList key={laMadelieneId} title={laMadelieneTitle} textList={laMadelieneBulletList} />;
const sectorSevenComponent = <NestedList key={sectorSevenId} title={sectorSevenTitle} textList={sectorSevenBulletList} />;
const hookupCellularGMComponent = <NestedList key={hookupCellularGMId} title={hookupCellularGMTitle} textList={hookupCellularGMBulletList} />;
const hookupCellularLeadComponent = <NestedList key={hookupCellularLeadId} title={hookupCellularLeadTitle} textList={hookupCellularLeadBulletList} />;
const hookupCellularQualityComponent = <NestedList key={hookupCellularQualityId} title={hookupCellularQualityTitle} textList={hookupCellularQualityBulletList} />;
const hookupCellularLCDComponent = <NestedList key={hookupCellularLCDId} title={hookupCellularLCDTitle} textList={hookupCellularLCDBulletList} />;

const hookupCellularComponents = [hookupCellularGMComponent, hookupCellularLeadComponent, hookupCellularQualityComponent, hookupCellularLCDComponent]
const hookupCellularComponent = <NestedList key={hookupCellularId} title={hookupCellularTitle} componentList={hookupCellularComponents}/>

const nestedProfessionalExperienceComponents = [amazonComponent, hypeDocsComponent, laMadelieneComponent, sectorSevenComponent, hookupCellularComponent];

const relevantProjectsTitle = "Relevant Projects";
const ongoingId = "ongoingComponent";
const ongoingTitle = "Current ongoing projects 2025";
const personalWebsiteId = "personalWebsiteComponent";
const personalWebsiteTitle = "Personal Website 2025";
const smartShopId = "smartShopComponent";
const smartShopTitle = "Smartshop 2025";
const bestSportingId = "bestSportingComponent";
const bestSportingTitle = "Best Sporting 2021";

const ongoingBulletOne = "Designing, researching, and developing an aggregation website utilizing React, Vite, ASP.NET Core MVC, Python, and MySQL.";
const ongoingBulletTwo = "Designing and developing a React, Next, Three.js, Express, DynamoDB e-commerce site.";
const personalWebsiteBulletOne = "Built this personal website utilizing React, Next, and Three.js.";
const personalWebsiteBulletTwo = "Deployed this website via AWS with Route 53, Amplify, SES, CloudWatch, and IAM integrations."
const smartShopBulletOne = "Developed a mock e-commerce store utilizing Wix and GenAI.";
const bestSportingBulletOne = "Launched a mock website for browsing and purchasing sporting goods.";
const bestSportingBulletTwo = "Utilized Node with React and HTML/CSS for the frontend and an Express backend tied into a MongoDB database.";
const bestSportingBulletThree = "Hosted with Heroku and Cloudflare and secured with Auth0, PayPal, and Cloudflare.";

const ongoingBulletList = [ongoingBulletOne, ongoingBulletTwo];
const personalWebsiteBulletList = [personalWebsiteBulletOne, personalWebsiteBulletTwo];
const smartShopBulletList = [smartShopBulletOne];
const bestSportingBulletList = [bestSportingBulletOne, bestSportingBulletTwo, bestSportingBulletThree];

const ongoingComponent = <NestedList key={ongoingId} title={ongoingTitle} textList={ongoingBulletList} />;
const personalWebsiteComponent = <NestedList key={personalWebsiteId} title={personalWebsiteTitle} textList={personalWebsiteBulletList} />;
const smartShopComponent = <NestedList key={smartShopId} title={smartShopTitle} textList={smartShopBulletList} />;
const bestSportingComponent = <NestedList key={bestSportingId} title={bestSportingTitle} textList={bestSportingBulletList} />;

const nestedRelevantProjectsComponents = [ongoingComponent, personalWebsiteComponent, smartShopComponent, bestSportingComponent];

const educationTitle = "Education";
const asuId = "asuComponent";
const asuTitle = "Arizona State University, Tempe, AZ 2022";
const cgccId = "cgccComponent";
const cgccTitle = "Chandler-Gilbert Community College, Chandler, AZ 2013";

const asuText = "B.S., Software Engineering 3.72 GPA, magna cumme laude";
const cgccText = "A.A., General Studies";

const asuComponent = <NestedList key={asuId} title={asuTitle} text={asuText} />;
const cgccComponent = <NestedList key={cgccId} title={cgccTitle} text={cgccText} />;

const nestedEducationComponents = [asuComponent, cgccComponent];

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
              <FadeInComponent component={<NestedList title={summaryTitle} text={summaryList}/>} />
              <FadeInComponent component={<NestedList title={skillsTitle} componentList={nestedSkillsComponents}/>} />
              <FadeInComponent component={<NestedList title={professionalExperienceTitle} 
                componentList={nestedProfessionalExperienceComponents}/>} />
              <FadeInComponent component={<NestedList title={relevantProjectsTitle} 
                componentList={nestedRelevantProjectsComponents}/>} />
              <FadeInComponent component={<NestedList title={educationTitle} componentList={nestedEducationComponents}/>} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}