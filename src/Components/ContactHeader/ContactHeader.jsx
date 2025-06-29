import style from './ContactHeader.module.css';
const ContactHeader = () => {
  return (
    <div className={`container ${style.contact_section}`}>
      <h1>CONTACT US</h1>
      
      <p>
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
        WEATHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU 
        REACH OUT TO US THOUGHT THE CONTACT FORM OF THIS PAGE, OR MY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
    </div>
  );
};

export default ContactHeader;