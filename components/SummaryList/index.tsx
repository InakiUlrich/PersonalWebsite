import React from 'react'
import NestedList from '../NestedList'

const summaryTitle = "Summary";
const summaryList = "Software Engineer with over two years of professional experience and prior experience" 
                        + " in hardware, firmware, and management."

const SummaryList = () => {
  return (
    <NestedList title={summaryTitle} text={summaryList}/>
  )
}

export default SummaryList
