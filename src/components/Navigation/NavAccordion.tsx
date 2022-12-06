import { navData } from "./navData";

export const NavAccordion = () => {
  return (
    <div className="accordionContainer">
      {navData.map((item, index) => (
        <div className="itemBox" key={index}>
          <div className="titleBox">
            <div className="title">{item.title}</div>
            <span>+</span>
          </div>
          <div>
            {item.sections.map((section, index) => (
              <div key={index}>
                <div className="titleBox">
                <div>{section.header}</div>
                <span>+</span>
                </div>
                <div>
                  {section.pages.map((page, index) => (
                    <div className="pageBox" key={index}>
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
