import React, { Suspense } from "react";
import Layout from "./components/templates/Layout/Layout";
import "./styles/variables.css";

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>TaxCalculator</Suspense>
    </Layout>
  );
};
export default App;
