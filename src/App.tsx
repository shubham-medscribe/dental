import { Provider } from "react-redux";
import RoutesRoot from "./routes/Routes";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
// Create a QueryClient
const queryClient = new QueryClient();

// Create the persister for sessionStorage using the native API
const sessionStoragePersister = createSyncStoragePersister({
  storage: window.sessionStorage, // Use native sessionStorage
});

// Setup query client persistence
persistQueryClient({
  queryClient,
  persister: sessionStoragePersister,
});

function App() {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
        {/* <Login/> */}
        <BrowserRouter>
          <RoutesRoot />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
