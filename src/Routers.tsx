import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Main from "./main";
import SampleList from "./samplelist";
import Textbox from "./textbox";
import Date from "./date";
import Password from "./password";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/samplelist" element={<SampleList />} />
          <Route
            path="/textbox"
            element={<Textbox testMessage="testMessageです" />}
          />
          <Route path="/date" element={<Date />} />
          <Route path="/password" element={<Password />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
