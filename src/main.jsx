import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Compo/Home.jsx";
import PaymentCompo from "../../Context_Api/src/Compo/PaymentCompo.jsx";
import OrderSuccess from "../../Context_Api/src/Compo/Os.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/56", element: <Home /> },
      { path: "payment", element: <PaymentCompo /> },
      { path: "order-success", element: <OrderSuccess /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
