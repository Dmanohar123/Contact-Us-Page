
import './App.css'
import ContactForm from './Components/ContactForm/ContactForm';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navigation from './Components/Navigation/Navigation';

function App() {

return(
  <div className='app_container'>
    <Navigation />  
    <main className='main_container'>
      <ContactHeader />
      <ContactForm />
    </main>
  </div>
)

}

export default App;

      
 