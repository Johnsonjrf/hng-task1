
import styles from "./style.module.css";
const logo3 = require("./images/Zuri-Logo.png");
const logo4 = require("./images/Footer-text.png");
const logo5 = require("./images/Side.png");






const Contact = () => {
    return ( 
        <div>
            <div className={styles.contact}>
            <div className={styles.subcontact}>
                <div className={styles.fit}>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind</p>
                </div>
                
                <form >
                    <div className={styles.flip}>
                        <div className={styles.subflip}>
                            <label className={styles.pi}>First name</label>
                            <input type="text" minLength="3" id={styles["first_name"]} name="firstname" placeholder="Enter your first name" required></input>
                        </div>
                        <div className={styles.subflip}>
                            <label className={styles.pi}>Last name</label>
                            <input type="text" minLength="3" id={styles["last_name"]} name="lastname" placeholder="Enter your last name" required></input>
                        </div>
                    
                    </div>
                    <label>Email</label>
                    <input type="email" minLength="5" id={styles["email"]} name="email" placeholder="Yourname@email.com"  required ></input>
                    <label className={styles.pi}>Message</label>
                    <textarea  type="textarea" minLength="30" id={styles["message"]} rows="4" cols="70" name="text" placeholder="send me a message and i'll reply you as soon as possible"></textarea>
                    <div className={styles.last}>
                        <input type="checkbox" id={styles.check} name="checkbox" value="click" required></input>
                        <label className={styles.pil}>You agree to providing your data to zuri who may contact you.</label>
                    </div>
                    <input type="submit" id={styles["btn__submit"]} value="Send Message"></input>
                    
                    
                </form>
            </div>
            
            
        </div>
        <div className={styles.footer}>
            <img src={logo3} alt="footer"></img>
            <img src={logo4} alt="footer"></img>
            <img src={logo5} alt="footer"></img>
        </div>
        </div>
        
        
        
     );
}
 
export default Contact;