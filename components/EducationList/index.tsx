import React from 'react'
import NestedList from '../NestedList';

const educationTitle = "Education";
const asuTitle = "Arizona State University, Tempe, AZ 2022";
const cgccTitle = "Chandler-Gilber Community College, Chandler, AZ 2013";

const asuText = "B.S., Software Engineering 3.72 GPA, magna cumme laude";
const cgccText = "A.A., General Studies";

const asuComponent = <NestedList title={asuTitle} text={asuText} />;
const cgccComponent = <NestedList title={cgccTitle} text={cgccText} />;

const nestedComponents = [asuComponent, cgccComponent];

const EducationList = () => {
  return (
    <div>
      <NestedList title={educationTitle} componentList={nestedComponents}/>
    </div>
  )
}

export default EducationList
