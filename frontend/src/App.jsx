import "./App.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogForm from "./pages/admin/Blog/BlogForm";
import BusinessOperationsPage from "./pages/Business/BusinessOperationsPage";
import FinancialManagementPage from "./pages/Financial/FinancialManagementPage";
import CustomerRelationsPage from "./pages/customer/CustomerRelationsPage";
import TechnologyAndInnovationPage from "./pages/tech/TechnologyAndInnovationPage";
import TermsConditions from "./pages/footer-pages/TermsConditions";
import Licensing from "./pages/footer-pages/Licensing";
import DiscordServer from "./pages/footer-pages/DiscordServer";
import LoginPage from "./pages/admin/Login/LoginPage";
import Blog from "./pages/Blog/Blog";
import Policy from "./pages/footer-pages/Policy";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="business-operations" element={<BusinessOperationsPage />} />
        <Route path="financial-management" element={<FinancialManagementPage />} />
        <Route path="customer-relations" element={<CustomerRelationsPage />} />
        <Route path="technology-and-innovation" element={<TechnologyAndInnovationPage />} />

        <Route path="discord-server" element={<DiscordServer />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />
        <Route path="licensing" element={<Licensing />} />
        <Route path="privacy-policy" element={<Policy />} />
        <Route path="admin">
          <Route path="create-blog" element={<BlogForm />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
