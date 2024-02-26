
// import './App.css';
import Navbar from './ReactProject/portfolionav';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
    </div>
  );
}

export default App;
// import React from "react";
// import "./App.css";
// import Form from "./components/Form";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import WeatherAndNews from "./components/WeatherAndNews";
// import moment from "moment-timezone";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: true,

//       newsValue: "",
//       weatherValue: ""
//     };
//   }

//   handleNews = async (data) => {
//     this.setState({
//       newsValue: data
//     });
//   };

//   handleWeather = async (data) => {
//     this.setState({
//       weatherValue: data
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="main-container">
//           <div className="form-container">
//             <Form
//               newsValue={this.state.newsValue}
//               weatherValue={this.state.weatherValue}
//             />
//             <ToastContainer transition={Bounce} className="toast-background" />
//           </div>
//           <div className="body-container">
//             <WeatherAndNews />
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
