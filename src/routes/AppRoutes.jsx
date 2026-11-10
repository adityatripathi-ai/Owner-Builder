
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ResourcesPage from "../pages/ResourcesPage";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/about"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />
        <Route
        path="/services"
        element={
          <MainLayout>
            <ServicesPage />
          </MainLayout>
        }
      />
      <Route
  path="/resources"
  element={
    <MainLayout>
      <ResourcesPage />
    </MainLayout>
  }
/>

 <Route
  path="/contact"
  element={
    <MainLayout>
      <ContactUs />
    </MainLayout>
  }
/>
    </Routes>
  );
};

export default AppRoutes;
