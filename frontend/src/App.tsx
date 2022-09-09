import Header from './componentes/header'
import SalesCard from './componentes/salesCard'
import NotificationButton from "./componentes/notificationButton"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        <section id="sales">
          <div className="dsmeta-container">

            <SalesCard />

          </div>
        </section>
      </main>
    </>
  )
}

export default App
