import React from 'react'
import NestedList from '../NestedList'

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

const nestedComponents = [languagesComponent, databasesComponent, librariesAndFrameworksComponent, cloudComputingComponent];

const SkillsList = () => {
  return (
    <NestedList title={skillsTitle} componentList={nestedComponents}/>
  )
}

export default SkillsList
