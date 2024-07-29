
import Header from "./compenents/Header";
import Body from "./compenents/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./compenents/MainContainer";
import VideoWatch from "./compenents/VideoWatch";


const approuter  = createBrowserRouter([
 {
  path : "/",
  element : <Body/>,
  children : [{
    path : "/",
    element : <MainContainer/>
  },
  {
    path : "/watch",
    element : <VideoWatch/>
  }

]
 }
])

function App() {
  return (
    <div className="App">
      <Header/>
      <RouterProvider router = {approuter}/>
    </div>
  );
}

export default App;
