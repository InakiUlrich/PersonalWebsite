import React from 'react'
import NestedList from '../NestedList';

const additionalWorkExperienceTitle = "Additional Work Experience";
const laMadelieneTitle = "La Madeliene French Bakery & Café, Gilbert, AZ: Server Assistant			2019 – 2020";
const sectorSevenTitle = "SectorSeven, Alexandria, MN: Technical Operations Lead 2017 – 2019";
const hookupCellularTitle = "Hookup Cellular, Phoenix, AZ: 2010 – 2017";
const hookupCellularGMTitle = "General Manager 2015 – 2017";
const hookupCellularLeadTitle = "Lead Repair Technician – Retail 2013 – 2015";
const hookupCellularQualityTitle = "Quality Control Manager 2011 – 2013";
const hookupCellularLCDTitle = "LCD Tester 2010 – 2011";

const laMadelieneBulletOne = "Prepped service, restocked inventory, washed dishes, and bussed tables.";
const sectorSevenBulletOne = "Trained, led, coached, and supervised a team of up to 10 mobile and electronics technicians on hardware, firmware, and software repairs.";
const sectorSevenBulletTwo = "Developed and implemented wholesale refurbishment processes and inventory systems.";
const hookupCellularGMBulletOne = "Researched, analyzed, purchased and sold wholesale electronics devices.";
const hookupCellularGMBulletTwo = "Led the refurbishment of wholesale devices.";
const hookupCellularGMBulletThree = "Coordinated eCommerce sales, retail sales, and marketing.";
const hookupCellularLeadBulletOne = "Led retail hardware, firmware, and software repairs for mobile and electronics devices.";
const hookupCellularLeadBulletTwo = "Point of escalation for all retail and repair related customer issues.";
const hookupCellularLeadBulletThree = "Provided customer service for both retail repairs and retail electronics and parts sales.";
const hookupCellularQualityBulletOne = "Trained, led, coached, and supervised a team of up to 12 LCD Testers.";
const hookupCellularQualityBulletTwo = "Developed and implemented testing procedures and inventory systems.";
const hookupCellularLCDBulletOne = "Tested LCDs for various smartphones and tablets.";

const laMadelieneBulletList = [laMadelieneBulletOne];
const sectorSevenBulletList = [sectorSevenBulletOne, sectorSevenBulletTwo];
const hookupCellularGMBulletList = [hookupCellularGMBulletOne, hookupCellularGMBulletTwo, hookupCellularGMBulletThree];
const hookupCellularLeadBulletList = [hookupCellularLeadBulletOne, hookupCellularLeadBulletTwo, hookupCellularLeadBulletThree];
const hookupCellularQualityBulletList = [hookupCellularQualityBulletOne, hookupCellularQualityBulletTwo];
const hookupCellularLCDBulletList = [hookupCellularLCDBulletOne];

const laMadelieneComponent = <NestedList title={laMadelieneTitle} textList={laMadelieneBulletList} />;
const sectorSevenComponent = <NestedList title={sectorSevenTitle} textList={sectorSevenBulletList} />;
const hookupCellularGMComponent = <NestedList title={hookupCellularGMTitle} textList={hookupCellularGMBulletList} />;
const hookupCellularLeadComponent = <NestedList title={hookupCellularLeadTitle} textList={hookupCellularLeadBulletList} />;
const hookupCellularQualityComponent = <NestedList title={hookupCellularQualityTitle} textList={hookupCellularQualityBulletList} />;
const hookupCellularLCDComponent = <NestedList title={hookupCellularLCDTitle} textList={hookupCellularLCDBulletList} />;

const hookupCellularComponents = [hookupCellularGMComponent, hookupCellularLeadComponent, hookupCellularQualityComponent, hookupCellularLCDComponent]
const hookupCellularComponent = <NestedList title={hookupCellularTitle} componentList={hookupCellularComponents}/>
const nestedComponents = [laMadelieneComponent, sectorSevenComponent, hookupCellularComponent];

const AdditionalWorkExperienceList = () => {
  return (
    <div>
      <NestedList title={additionalWorkExperienceTitle} componentList={nestedComponents}/>
    </div>
  )
}

export default AdditionalWorkExperienceList
