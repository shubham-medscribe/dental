import { Provider } from "react-redux";
import RoutesRoot from "./routes/Routes";

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
      
        <BrowserRouter>
          <RoutesRoot />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
