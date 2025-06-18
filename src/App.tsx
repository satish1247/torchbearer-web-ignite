
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Companies from "./pages/Companies";
import TBSolutions from "./pages/TBSolutions";
import TBAcademy from "./pages/TBAcademy";
import TBDigital from "./pages/TBDigital";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/tb-solutions" element={<TBSolutions />} />
          <Route path="/tb-academy" element={<TBAcademy />} />
          <Route path="/tb-digital" element={<TBDigital />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
