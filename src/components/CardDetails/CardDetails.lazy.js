import React, { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

const LazyCardDetails = lazy(() => import("./CardDetails"));

const CardDetails = () => {
  const location = useLocation();
  // const {data}=route
  const data = location.state.item;
  const props = { data };

  return (
    <Suspense fallback={null}>
      <LazyCardDetails props={props} />
    </Suspense>
  );
};

export default CardDetails;
