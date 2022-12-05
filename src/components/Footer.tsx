import starAlliance from "./../images/star-alliance.png";

export const Footer = () => {
  return (
    <div id="footer">
      <section>
        <p>
          <strong>SAS 2020</strong>
          <br />
          SAS AB, registration number 556606-8499,
          <br />
          SE-195 87
          <br />
          Stockholm, Sweden
        </p>
      </section>
      <section className="links">
        <span>Book a trip with SAS</span>
        <div className="divider"></div>
        <span>Contacts</span>
        <div className="divider"></div>
        <span>SAS Cargo</span>
        <div className="divider"></div>
        <span>Usage of cookies</span>
        <div className="divider"></div>
        <span>Terms and conditions</span>
      </section>
      <section id="imageWrapper">
        <img src={starAlliance} />
      </section>
    </div>
  );
};
