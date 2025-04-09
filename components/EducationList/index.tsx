import React from 'react'
import NestedList from '../NestedList';

const educationTitle = "Education";
const asuId = "asuComponent";
const asuTitle = "Arizona State University, Tempe, AZ 2022";
const cgccId = "cgccComponent";
const cgccTitle = "Chandler-Gilbert Community College, Chandler, AZ 2013";

const asuText = "B.S., Software Engineering 3.72 GPA, magna cumme laude";
const cgccText = "A.A., General Studies";

const asuComponent = <NestedList key={asuId} title={asuTitle} text={asuText} />;
const cgccComponent = <NestedList key={cgccId} title={cgccTitle} text={cgccText} />;

const nestedComponents = [asuComponent, cgccComponent];

const EducationList = () => {
  return (
    <div>
      <NestedList title={educationTitle} componentList={nestedComponents}/>
    </div>
  )
}

export default EducationList
