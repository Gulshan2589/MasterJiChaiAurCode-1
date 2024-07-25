import { Routes, Route } from "react-router-dom";
import OTPForm from "./Component/OTPForm/OTPForm";
import DND from "./Component/DND/DND";
import DataTable from "./Component/DataTable/DataTable"
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<OTPForm />} />
        <Route path="/course-list" element={<DND />} />
        <Route path="/batches" element={<DataTable />} />
      </Routes>
  );
}

export default App;
