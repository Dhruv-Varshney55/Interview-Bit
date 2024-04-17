import React from "react";

function Contact() {
  return (
    <div style={{ display: "flex", padding: "20px", margin: "50px", flexDirection: "column" }}>
      <div style={{ padding: "30px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>Say Hello</h1>
        <h3 style={{ color: "#666", fontSize: "16px", textAlign: "center", marginBottom: "20px", lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </h3>
        <hr style={{ width: "100px", margin: "0 auto 20px", borderColor: "#ddd" }} />
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuKmO4P2Ix0O3Z1a8_0pdXjhXqlQZvEIbhjUNKi0MRTAEE2VtSUTcO16gpWpqbwMQkq4&usqp=CAU" alt="" style={{ height: "20px", width: "20px", marginRight: "10px" }} />
          <p style={{ color: "#333", fontSize: "14px", marginBottom: "0" }}>212 7th St SE, Washington, DC 20003, USA</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Wqc57gepw2IpotvnxZlC-ssssp6qNlOYPA&s" alt="" style={{ height: "20px", width: "20px", marginRight: "10px" }} />
          <p style={{ color: "#333", fontSize: "14px", marginBottom: "0" }}>info@example.com</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcv7LIT9H-uZNEYGULR1XaEdesRS5mIV0Wg&s" alt="" style={{ height: "20px", width: "20px", marginRight: "10px" }} />
          <p style={{ color: "#333", fontSize: "14px", marginBottom: "0" }}>123-456-7890/91</p>
        </div>
      </div>

      <div style={{ padding: "50px", height: "380px", width: "500px", borderRadius: "20px", position: "relative", margin: "auto", top: "80px", boxShadow: "0px 0px 20px 5px rgba(220, 220, 220, 0.5)" }}>
        <h1 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>Ask Your Queries</h1>
        <input type="email" placeholder="Your Email" style={{ padding: "10px", marginBottom: "10px", width: "100%", borderRadius: "5px", border: "1px solid lightPink", color: "black" }} />
        <input type="text" placeholder="Subject" style={{ padding: "10px", marginBottom: "10px", width: "100%", borderRadius: "5px", border: "1px solid lightPink", color: "black" }} />
        <textarea placeholder="Message" style={{ padding: "10px", marginBottom: "10px", width: "100%", minHeight: "100px", borderRadius: "5px", border: "1px solid lightPink", color: "black" }}></textarea>
        <br />
        <button style={{ backgroundColor: "lightPink", padding: "10px 20px", border: "none", borderRadius: "5px", color: "#fff", cursor: "pointer" }}>Send Message</button>

      </div>

    </div>
  )
}

export default Contact