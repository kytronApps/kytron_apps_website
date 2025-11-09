import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/Hero";
import AppsSection from "@/components/AppsSection";
import Portfolio from "@/components/Portfolio";
import BookPage from "@/components/TattooBookerPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
          </Layout>
        }
      />
      <Route
        path="/apps"
        element={
          <Layout>
            <AppsSection />
          </Layout>
        }
      />
      <Route
        path="/portfolio"
        element={
          <Layout>
            <Portfolio />
          </Layout>
        }
      />
      <Route
        path="/book"
        element={
          <Layout>
            <BookPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;