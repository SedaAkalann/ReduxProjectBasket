import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { store } from "./Redux/store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
