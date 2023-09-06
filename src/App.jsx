import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
        <h1>dkfkdksdkfks</h1>
      </div>
    </>
  );
}

export default App;
