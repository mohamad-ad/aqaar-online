import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import Root from "./Root";
import "./App.css";
import QuickPay from "./pages/QuickPay";
import EServices from "./pages/EServices";
import CoolingBill from "./pages/CoolingBill";
import MaintenanceCharge from "./pages/MaintenanceCharge";
import IRNOC from "./pages/IRNOC";
import FRNOC from "./pages/FRNOC";
import STNOC from "./pages/STNOC";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />

      <Route path="/quickpay" element={<QuickPay />} />
      <Route path="/maintenancecharge" element={<MaintenanceCharge />} />
      <Route path="/coolingbill" element={<CoolingBill />} />
      
      <Route path="/eservices" element={<EServices />}/>
      <Route path="/iRNOC" element={<IRNOC />} />
      <Route path="/fRNOC" element={<FRNOC />} />
      <Route path="/sTNOC" element={<STNOC />} />

      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
