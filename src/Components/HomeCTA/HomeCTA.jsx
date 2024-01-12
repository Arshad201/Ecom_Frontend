import CtaImage from "../../assets/images/CTA_image.jpg";
import "./HomeCTA.css"

const HomeCTA = () => {
  return (
    <div className="HomeCTA">
      <div className="wrapper">
        <div className="textBox">
        <h2>"TONES: Community-Inspired Fashion"</h2>
        <p>
          It all began with a shared desire within the vibrant community of Vizag. The inception of our YouTube channel was fueled by a collective passion for educating and inspiring people about lifestyle and fashion by Mr. Ganesh Bugatha.
          <br/>
          <br/>

        From this communal spirit emerged "Tones," a distinctive merchandise line born out of The Fashion Verge community. Rooted in the ethos of celebrating diverse skin "tones" and body "tones," Tones has evolved into a brand that resonates with the collective identity of our community. It is a testament to our shared values and a reflection of the inclusivity that defines us.
        <br/>
        <br/>

        Tones isn't just a brand; it's a representation of the rich tapestry of our community, a celebration of individuality, and a nod to the diverse beauty that exists in every shade and form. As we continue this journey, Tones stands as a symbol of unity, where fashion becomes a language that speaks to everyone, regardless of background or appearance.  
        </p>
        <button>SHOP THE COLLECTION NOW!</button>
        </div>
        <div className="imgBox">
            <img src={CtaImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeCTA
