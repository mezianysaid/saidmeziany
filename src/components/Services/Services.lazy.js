import React, { lazy, Suspense } from 'react';
const LazyServices = lazy(() => import('./Services'));

const Services = props => {
  const _services = [
    {
      "title":"🌐 Custom Web Application Development",
    },
    {
      "title":"🎨 Responsive and Elegant User Interfaces",
    },
    {
      "title":"📱 Custom Mobile Application Development",
    },
    {
      "title":"🛠 API Integration and Third-Party Services",
    },
    {
      "title":"🚀 Performance Optimization",
    },
    {
      "title":"    Deep Learning & Machine Learning",
    },
  ]
  return(
    <Suspense fallback={null}>
    <LazyServices {...props} _services={_services}  />
  </Suspense>
  )
}

export default Services;
