import { useState } from "react";
import { navData } from "./navData";

export const NavAccordion = () => {
    const [sections, setSections] = useState<null | number>(null);
    const [pages, setPages] = useState<null | number>(null);

    const toggleSections = (titleIndex: number) => {
        if (sections === titleIndex) {
            setSections(null);
        } else {
            setSections(titleIndex);
        }
    }

  return (
    <div className="accordionContainer">
      {navData.map((item, titleIndex) => (
        <div className="itemBox" key={titleIndex}>
          <div className="titleBox" onClick={() => toggleSections(titleIndex)}>
            <div className="title">{item.title}</div>
            <span>{sections === titleIndex ? "-" : "+"}</span>
          </div>
          <div>
            {item.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={sections === titleIndex ? "" : "collapsed"}>
                <div className="titleBox">
                <div>{section.header}</div>
                <span>+</span>
                </div>
                <div>
                  {section.pages.map((page, pageIndex) => (
                    <div className="pageBox collapsed" key={pageIndex}>
                      {page}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
