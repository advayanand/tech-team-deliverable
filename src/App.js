import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import petr from './assets/petr.png';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='app-flex-container'>
        <div className='app-form-container'>
          <Form onSuccess={() => {
            console.log('here');
            toast.success('Form submitted successfully');
          }}/>
        </div>
        <div className='petr-icon-container'>
          <img className='petr-icon' src={petr} ></img>
        </div>
      </div>
      <div className='animation'>

      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
