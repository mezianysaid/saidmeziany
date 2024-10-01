import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./Home'));
const About = lazy(()=> import ('../AboutUs/AboutUs.lazy'))
const Home = props => {
  const width = window.innerWidth
  const height = window.innerHeight

  return(
    <Suspense fallback={null}>
    <LazyHome {...props} width={width} height={height} />
    <About/>
  </Suspense>
  )
};

export default Home;
