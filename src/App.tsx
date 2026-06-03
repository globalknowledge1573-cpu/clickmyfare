import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";

function getPage() {
  const path = window.location.pathname;
  if (path === "/privacy") return <Privacy />;
  if (path === "/terms") return <Terms />;
  if (path === "/refund-policy") return <Refund />;
  return <Home />;
}

export default function App() {
  return getPage();
}
