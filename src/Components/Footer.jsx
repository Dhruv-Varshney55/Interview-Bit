function Footer() {
  return (
    <div>
      <div style={{ display: "flex", padding: "20px", backgroundColor: "#6c7a89", color: "white", fontFamily: "cursive", borderBottom: "1px solid white", }}>
        <div style={{ marginRight: "100px", position: "relative", left: "150px" }}>
          <h2>Custom Print Store</h2>
          <i style={{ marginRight: "10px" }} className="fa-brands fa-instagram"></i>
          <i style={{ marginRight: "10px" }} className="fa-brands fa-twitter"></i>
          <i style={{ marginRight: "10px" }} className="fa-brands fa-linkedin"></i>
          <i style={{ marginRight: "10px" }} className="fa-brands fa-facebook"></i>
        </div>
        <div style={{ marginRight: "100px", position: "relative", left: "200px" }}>
          <h2>Get in Touch with Us for <br /> the Best Quality Custom <br /> Prints & Supplies.</h2>
          <h4>Qui dolore ipsum quia dolor sit <br /> amet, consec tetur adipisci velit, <br /> sed quia non numquam eius modi <br /> tempora incidunt lores ta porro <br /> ame.</h4>
        </div>
        <div style={{ marginRight: "100px", position: "relative", left: "200px" }}>
          <h2>Quick Links</h2>
          <p>Know More About Us</p>
          <p>Visit Store</p>
          <p>Lets connect</p>
        </div>
        <div style={{ marginRight: "100px", position: "relative", left: "200px" }}>
          <h2>Important Links</h2>
          <p>Privacy policy</p>
          <p>Shipping Details</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#6c7a89", color: "white", fontFamily: "cursive", position: "relative", bottom: "20px" }}>
        <div><p style={{ marginLeft: "170px"}}>Copyright</p>
        <i style={{ marginLeft: "250px", position: "relative", bottom: "22px" }} className="fa-solid fa-copyright"></i></div>
        <p style={{ position: "relative", float: "right", bottom: "50px", right: "60px" }}>Powered By Custom Printing</p>
      </div>
    </div>
  );
}

export default Footer;