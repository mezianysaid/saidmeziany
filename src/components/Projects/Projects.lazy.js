import React, { lazy, Suspense } from 'react';

const LazyProjects = lazy(() => import('./Projects'));
const width=window.innerWidth
const height = window.innerHeight


const Projects = props => (
  <Suspense fallback={null}>
    <LazyProjects {...props} width={width} height={height} />
  </Suspense>
);

export default Projects;
