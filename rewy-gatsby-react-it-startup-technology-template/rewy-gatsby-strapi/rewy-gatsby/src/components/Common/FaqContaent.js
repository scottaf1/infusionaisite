import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    strapiFaq {
      faqList {
        id
        uuid
        title
        shortDescription {
          data {
            shortDescription
          }
        }
      }
    }
  }
`

const FaqContaent = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiFaq: { faqList },
  } = data

  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              {faqList.map(faqData => (
                <AccordionItem uuid={faqData.uuid} key={faqData.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{faqData.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ReactMarkdown>
                      {faqData.shortDescription.data.shortDescription}
                    </ReactMarkdown>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default FaqContaent
