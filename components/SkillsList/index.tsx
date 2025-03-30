import React from 'react'
import NestedList from '../NestedList'

const skillsTitle = "Technical Skills";
const languagesTitle = "Programming Languages"; 
const languagesText = "Java, JavaScript, TypeScript, HTML/CSS, Ruby, Swift, C#, C++, C, Python";
const databasesTitle = "Databases";
const databasesText = "DynamoDB, MongoDB, Firebase, MySQL, SQLite";
const librariesAndFrameworksTitle = "Libraries/Frameworks";
const librariesAndFrameworksText = "Spring Boot, Spring MVC, React, Next, Express, Ruby on Rails, Cypress, Selenium";
const cloudComputingTitle = "Cloud Computing";
const cloudComputingText = "AWS S3, SNS, SQS, EC2, API Gateway, CDK, LPT, CloudFront, CloudWatch";

const languagesComponent = <NestedList title={languagesTitle} text={languagesText} />;
const databasesComponent = <NestedList title={databasesTitle} text={databasesText} />;
const librariesAndFrameworksComponent = <NestedList title={librariesAndFrameworksTitle} text={librariesAndFrameworksText} />;
const cloudComputingComponent = <NestedList title={cloudComputingTitle} text={cloudComputingText} />;

const nestedComponents = [languagesComponent, databasesComponent, librariesAndFrameworksComponent, cloudComputingComponent];

const SkillsList = () => {
  return (
    <NestedList title={skillsTitle} componentList={nestedComponents}/>
  )
}

export default SkillsList
