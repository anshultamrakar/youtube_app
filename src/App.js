
import Header from "./compenents/Header";
import Body from "./compenents/Body";
import VideoWatch from "./compenents/VideoWatch";
import {createBrowserRouter , RouterProvider} from "react-router-dom"


const approuter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>
  },
  {
    path : "/watch",
    element : <VideoWatch/>
  }
])

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
