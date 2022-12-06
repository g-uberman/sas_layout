import { useState } from "react";
import { navData } from "./navData";
import { Add, Remove } from "@mui/icons-material";

export const NavAccordion = () => {
  const [sections, setSections] = useState<null | number>(null);
  const [pages, setPages] = useState<null | number>(null);

  const toggleSections = (titleIndex: number) => {
    if (sections === titleIndex) {
      setSections(null);
    } else {
      setSections(titleIndex);
    }
  };

  const togglePages = (sectionIndex: number) => {
    if (pages === sectionIndex) {
      setPages(null);
    } else {
      setPages(sectionIndex);
    }
  };

  return (
    <div className="accordionContainer">
      {navData.map((item, titleIndex) => (
        <div className="itemBox" key={titleIndex}>
          <div className="titleBox" onClick={() => toggleSections(titleIndex)}>
            <div className="title">{item.title}</div>
            <span>{sections === titleIndex ? <Remove /> : <Add />}</span>
          </div>
          <div>
            <div className={sections === titleIndex ? "" : "collapsed"}>
              <div className="titleBox">
                <div>{item.title}</div>
              </div>
            </div>
            {item.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={sections === titleIndex ? "" : "collapsed"}
              >
                <div
                  className="titleBox"
                  onClick={() => togglePages(sectionIndex)}
                >
                  <div>{section.header}</div>
                  {section.pages.length > 0 && (
                    <span>{pages === sectionIndex ?<Remove /> : <Add />}</span>
                  )}
                </div>
                <div className={pages === sectionIndex ? "" : "collapsed"}>
                  {section.pages.map((page, pageIndex) => (
                    <div className="pageBox" key={pageIndex}>
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
