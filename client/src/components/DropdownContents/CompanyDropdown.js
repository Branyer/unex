import React from "react"
import styled from "styled-components"
import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"
import {Link} from "react-router-dom";


const CompanyDropdownEl = styled.div`
  width: 25rem;
`

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> Web Desing and Development
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Search Engine Optimization
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Digital Advertising
            </a>
          </HeadingLink>
          <HeadingLink >
            <a href="/">
              <Icon /> Content Strategy &amp; Copywriting 
            </a>
          </HeadingLink>
      {/* </DropdownSection>
      <DropdownSection> */}
        {/* <div> */}
          {/* <Heading>
            <Icon />From the Blog
          </Heading> */}

          <HeadingLink>
            <a href="/">
              <Icon /> Photo &amp; Video Production
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Analytics and Reporting
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Email Marketing
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Website Maintenance
            </a>
          </HeadingLink> 
          </ul>
        {/* </div> */}
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default CompanyDropdown
