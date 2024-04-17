import React from 'react'

function About() {
  return (
    <div>
      <div style={{
        backgroundImage: 'linear-gradient(to bottom, #f9f9f9, #dcdcdc)', padding: '100px', textAlign: 'center', fontFamily: 'Georgia, serif', // Change the font-family to a formal font
      }}>
        <h1 style={{ fontFamily: "cursive" }}>About Us</h1>
        <h4 style={{ fontSize: '1.2em', lineHeight: '1.6', fontFamily: "cursive" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.</h4>
      </div>
      <div style={{ display: "flex", margin: "150px" }}>
        <div style={{ position: "relative", bottom: "10px", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", backgroundColor: "#f9f9f9" }}>
          <h2 style={{ fontSize: "1.5em", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>We Are Your Favorite, <br />Online Store</h2>
          <h4 style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#666" }}>Dui habitasse provident eu etiam praesent placeat maiores <br /> temporibus, accumsan parturient autem, mi animi ipsa. Lobortis <br /> maxime quos, pellentesq. <br /> <br /> Ee platea animi commodo tincidunt ridiculus tempora, ornare <br /> lorem quam sit possimus? Quam cras facilisi officia fusce. Ac, <br /> excepteur excepteur fusce? Sunt minim expedita magnis!</h4>
        </div>

        <div>
          <div style={{ position: "relative", left: "70px", marginBottom: "20px", padding: "15px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", background: "#f9f9f9" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBPw6vr4LMIfLqPm0NUl0uhkZPctrFww1krLmQVqVNH44YSwVfotE7H-I4JKTXv7SBmc&usqp=CAU" alt="" style={{ height: "30px", width: "30px" }} />
            <h4 style={{ fontSize: "1.2em", lineHeight: "1.6", margin: "10px 0", color: "#333" }}>Eros Imperdie<br />
              We'll generate a sitemap for your <br /> site, submit it to search engine is <br /> and track.
            </h4>
          </div>
          <div style={{ marginBottom: "20px", padding: "15px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", background: "#f9f9f9", position: "relative", left: "70px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gL2u76gWQJ_CbzmpU7isFTZrv9sG9f83rw&usqp=CAU" alt="" style={{ height: '30px', width: '30px' }} />
            <h3 style={{ fontSize: "1.5em", fontWeight: "bold", margin: "10px 0", color: "#333" }}>Rerum Rutrum</h3>
            <h4 style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#666" }}>We’ll generate a sitemap for your <br /> site, submit it to search engine is <br /> and track.</h4>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "20px", padding: "15px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", background: "#f9f9f9", position: "relative", left: "160px" }}>
            <img style={{ height: "50px", position: "relative", bottom: "10px" }} src="data:image/jpeg;base64,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" alt="" />
            <h3 style={{ position: 'relative', bottom: "25px" }}>Proident Congu</h3>
            <h5 style={{ position: "relative", bottom: "30px" }}>We’ll generate a sitemap for your <br /> site, submit it to search engine is <br /> and track.</h5>
          </div>
          <div style={{ marginBottom: "20px", padding: "15px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", background: "#f9f9f9", position: "relative", left: "160px" }}>
            <img style={{ height: "50px", position: "relative" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLc2BpMfyTUqOQlQq-aWcVXHzwzsQ4nizv4Q&usqp=CAU" alt="" />
            <h3 style={{ position: 'relative' }}>Vero Maecenas</h3>
            <h4 style={{ position: "relative" }}>We’ll generate a sitemap for your <br /> site, submit it to search engine is <br /> and track.</h4>
          </div>
        </div>
      </div>

      <div>
        <h1 style={{ position: "relative", left: "650px", fontFamily: "cursive" }}>Meet Our Creative Team</h1>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px", position: "relative", left: "300px" }}>
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-14.jpg" alt="" />
            <h2>Amanda Lee</h2>
            <h3>Creative Head</h3>
          </div>
          <div style={{ margin: "10px", position: "relative", left: "300px" }}>
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/team-0.jpg" alt="" />
            <h2>Lee Stoner</h2>
            <h3>Marketing Head</h3>
          </div>
          <div style={{ margin: "10px", position: "relative", left: "300px" }}>
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/team-01.jpg" alt="" />
            <h2>Monica Gala</h2>
            <h3>Graphic Designer</h3>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", padding: "100px" }}>
        <div style={{ padding: "50px", backgroundColor: "#f9f9f9", textAlign: "center", fontFamily: "Georgia, serif", boxShadow: "0px 0px 20px 5px rgba(150, 150, 150, 0.5)" }}>
          <h1 style={{ color: "#333", fontSize: "2em", marginBottom: "20px" }}>Best Quality Printed T-Shirts & <br /> Mugs At Affordable Price!</h1>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ fontSize: "1.2em", marginBottom: "10px", position: "relative", display: "flex", alignItems: "center" }}>
              <span style={{ color: "#ff4d4d", fontSize: "1.5em", marginRight: "10px" }}>&#9829;</span> Personal Gifts
            </li>
            <li style={{ fontSize: "1.2em", marginBottom: "10px", position: "relative", display: "flex", alignItems: "center" }}>
              <span style={{ color: "#ff4d4d", fontSize: "1.5em", marginRight: "10px" }}>&#9829;</span> Corporate Gifts
            </li>
            <li style={{ fontSize: "1.2em", marginBottom: "10px", position: "relative", display: "flex", alignItems: "center" }}>
              <span style={{ color: "#ff4d4d", fontSize: "1.5em", marginRight: "10px" }}>&#9829;</span> Occasional Gifts
            </li>
          </ul>
        </div>

        <div style={{ padding: "50px", position: "relative", left: "180px", height: "250px", width: "500px", boxShadow: "0px 0px 20px 5px rgba(150, 150, 150, 0.5)" }}>
          <div style={{ padding: "10px", borderBottom: "0.5px solid lightPink", fontFamily: "cursive" }}>
            <h3>We Can Custom Design Your Ideas</h3>
          </div>
          <div style={{ padding: "10px", borderBottom: "0.5px solid lightPink", fontFamily: "cursive" }}>
            <h3>Your Payment Is Safe And Secured</h3>
          </div>
          <div style={{ padding: "10px", fontFamily: "cursive" }}>
            <h3>We Offer Discounts And Coupons</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About