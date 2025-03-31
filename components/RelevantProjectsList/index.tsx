import React from 'react'
import NestedList from '../NestedList';

const relevantProjectsTitle = "Relevant Projects";
const ongoingId = "ongoingComponent";
const ongoingTitle = "Current ongoing projects 2025";
const personalWebsiteId = "personalWebsiteComponent";
const personalWebsiteTitle = "Personal Website 2025";
const bestSportingId = "bestSportingComponent";
const bestSportingTitle = "Best Sporting 2021";

const ongoingBulletOne = "Building out the first of two interweaving projects utilizing React, Next, ASP.NET, TypeScript, C#, and MySQL.";
const personalWebsiteBulletOne = "Built this personal website utilizing React, Next, TypeScript, and Threejs.";
const bestSportingBulletOne = "Launched a mock website for browsing and purchasing sporting goods.";
const bestSportingBulletTwo = "Utilized Node with React and HTML/CSS for the frontend and an Express backend tied into a MongoDB database.";
const bestSportingBulletThree = "Hosted with Heroku and Cloudflare and secured with Auth0, PayPal, and Cloudflare.";

const ongoingBulletList = [ongoingBulletOne];
const personalWebsiteBulletList = [personalWebsiteBulletOne];
const bestSportingBulletList = [bestSportingBulletOne, bestSportingBulletTwo, bestSportingBulletThree];

const ongoingComponent = <NestedList key={ongoingId} title={ongoingTitle} textList={ongoingBulletList} />;
const personalWebsiteComponent = <NestedList key={personalWebsiteId} title={personalWebsiteTitle} textList={personalWebsiteBulletList} />;
const bestSportingComponent = <NestedList key={bestSportingId} title={bestSportingTitle} textList={bestSportingBulletList} />;

const nestedComponents = [ongoingComponent, personalWebsiteComponent, bestSportingComponent];

const RelevantProjectsList = () => {
  return (
    <div>
      <NestedList title={relevantProjectsTitle} componentList={nestedComponents}/>
    </div>
  )
}

export default RelevantProjectsList
