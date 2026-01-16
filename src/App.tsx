import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home, NotFound, Quiz } from "./pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/quiz/:skillId" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
