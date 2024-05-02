import Loader from "@/components/shared/Loader";
import React from "react";

const PageContainer = ({ children, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return children;
};

export default PageContainer;
