import Button from '../Button/Button';
import style from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {

       const onViaCallSubmit = () => {
        console.log("Via Call button clicked");
       }
  return (
    <section className={style.container}>
      <div className={style.contact_form}>
       <div className={style.top_btn}>
         <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
        <Button 
        onClick={onViaCallSubmit}
        text="VIA CALL" icon={<FaPhoneAlt fontSize={24} />} />
        </div>
        <Button 
        isOutline={true}
        text="VIA EMAIL FORM" 
        icon={<HiMail fontSize={24} />} />

        <form>
  <div className={style.form_control}>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" name="name" required />
  </div>
  <div className={style.form_control}>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" name="email" required />
  </div>
  <div className={style.form_control}>
    <label htmlFor="text">Text</label>
    <textarea id="text" name="text" rows="8" required />
  </div>
  <div style={{
    display: 'flex', 
    justifyContent: 'end',
  }}>
    <Button text="SUBMIT BUTTON" type="submit" />
  </div>
</form>

      </div>
      <div className={style.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>

  ) 
}

export default ContactForm