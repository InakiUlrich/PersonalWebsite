import React from 'react'
import NestedList from '../NestedList'

const professionalExperienceTitle = "Professional Experience";
const amazonTitle = "Amazon (Remote, RTO Feb 2023 Seattle, WA): Software Dev Engineer 2022 – 2024";
const hypeDocsTitle = "HypeDocs (Remote): Software Developer Intern  2021 – 2022";

const amazonBulletOne = "Led projects to migrate our team's services onto Amazon's latest internal authentication protocol and to programmatically delete customer data.";
const amazonBulletTwo = "Updated and added logic across stacks consisting of Spring Boot, Spring MVC, React, and Ruby on Rails.";
const amazonBulletThree = "Modernized CI/CD by leveraging AWS with tools such as CDK, LPT, CodeCommit, CodeBuild, CodePipeline, and CodeDeploy to detect more bugs earlier in production pipelines.";
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

const amazonComponent = <NestedList title={amazonTitle} textList={amazonBulletList} />;
const hypeDocsComponent = <NestedList title={hypeDocsTitle} textList={hypeDocsBulletList} />;

const nestedComponents = [amazonComponent, hypeDocsComponent];

const ProfessionalExperienceList = () => {
  return (
    <div>
      <NestedList title={professionalExperienceTitle} componentList={nestedComponents}/>
    </div>
  )
}

export default ProfessionalExperienceList
