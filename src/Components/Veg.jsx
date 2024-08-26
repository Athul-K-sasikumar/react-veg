import './Veg.css'
import e1 from '../../src/assets/images/e1.webp'
import p1 from '../../src/assets/images/p1.jpg'
import p3 from '../../src/assets/images/p3.jpg'
import p122 from '../../src/assets/images/p122.jpg'





function Veg() {
  return (
    <div>

<header className="he1">
    
    <input type="checkbox" id="check"/>
    <label for="check" className="icons">
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <i className="fa-solid fa-x" id="close-icon"></i>
    </label>
    <h1 id="hy1">Live Organic </h1> 
        <nav className="navbar">
          
          <a href="#he1">HOME</a>
          <a href="#cardh">BUY</a>
          <a href="#rrr">ABOUT US</a>
          
          <a href="">CONTACT US</a>
        </nav>
   </header>

   <div className="main-img"><img className="f1" src={e1} alt=""/></div>
   <h2 id="he1">Uses Of Organic</h2><br/>

   <div className="para">
    <img  id="hhhh" src={p1} alt=""/>
   <div className="para-content">
       <h1>Organic Vegetables</h1>
       <p>Organic vegetables offer a wealth of benefits and versatile uses in everyday cooking. Rich in essential nutrients and free from synthetic pesticides.</p> 
   </div>
   </div><br/><br/>
   <div className="para">
    <img src={p3} alt=""/>
   <div className="para-content">
    <h1>Organic Tomato</h1>
    <p> In addition to their culinary uses, tomatoes are packed with vitamins A and C, potassium, and antioxidants like lycopene, which contribute to heart health and skin vitality.</p>    
   </div>
   </div><br/><br/>
   
   <div className="para1">
    <h2>Farmers Corner</h2>
    <div> <p>We  work with hand picked organic farmers who believe in the cause</p></div>
    <img src={p122} alt=""/>
   </div><br/><br/>
   <div className="pup">
    <div className="pup1">
        <img src="./images/farm.jpg" alt=""/>
    </div>
    <div class="pup2">
        <img src="./images/farm2.jpg" alt=""/>
    </div>
       </div>
   <div className="about">
    <h2 id="rrr">About Us</h2>
    <p>
        Welcome to [Live Organic], your trusted source for the freshest and most nutritious organic vegetables. We are passionate about providing high-quality, organically grown produce that not only tastes great but also supports a healthier lifestyle and a sustainable environment.
      
        Our journey began with a simple belief: that everyone deserves access to fresh, healthy, and sustainably grown vegetables. We started [Your Company Name] with the goal of bridging the gap between farmers who grow organic produce and consumers who seek healthy food options. Today, we proudly partner with local farmers who share our commitment to organic farming practices. <br/>
      
        Sincerely,<br/>
        The [Live Organic] Team
      </p>
   </div><br/><br/>
  
   
  <h2 id="people">People</h2>
   <div className="gpe">
    
    <div><img src="./images/testimonial-removebg-preview.png" alt=""/>
        <h3>Sura Raj H</h3>
    </div>
    <div><img src="./images/testimonial-removebg-preview.png" alt=""/>
        <h3>Sura Raj H</h3>
    </div>
    <div><img src="./images/testimonial-removebg-preview.png" alt=""/>
        <h3>Sura Raj H</h3>
    </div><br/><br/>
    </div><br/><br/>
 
  <section className="footer">
    <div className="foot">
        <div className="column in">
            <h3>Elegant Interiors</h3>
            <p>"Quality craftsmanship and exceptional service, making your dream home a reality."</p>
            <div class="social">
                <i className='bx bxl-facebook-square'></i>
                <i className='bx bxl-instagram-alt' ></i>
                <i className='bx bxl-twitter' ></i>
                <i className='bx bxl-youtube' ></i>
            </div>
        </div>
        <div className="column">
            <div className="column-list">
                <ul>
                    <li className="col-head">Company Information</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Press & Media</li>
                    <li>Sustainability</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>

        <div className="column">
            <div className="column-list">
                <ul>
                    <li className="col-head">Customer Service</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Shipping Information</li>
                    <li>Returns & Exchanges</li>
                    <li>Warranty Information</li>
                </ul>
            </div>
        </div>
        <div class="column">
            <form>
                <label className="col-head">Further Enquiries</label><br/>
                <input type="email" placeholder="liveorganic@gmail.com"/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>

 </section>


        
    </div>
  )
}

export default Veg