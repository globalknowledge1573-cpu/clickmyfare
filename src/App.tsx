import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import LondonBusiness from "./pages/LondonBusiness";
import DubaiBusiness from "./pages/DubaiBusiness";

function getPage() {
  const path = window.location.pathname;
  if (path === "/privacy") return <Privacy />;
  if (path === "/terms") return <Terms />;
  if (path === "/refund-policy") return <Refund />;
  if (path === "/business-class-colombo-london") return <LondonBusiness />;
  if (path === "/business-class-colombo-dubai") return <DubaiBusiness />;
  return <Home />;
}

export default function App() {
  return getPage();
}
