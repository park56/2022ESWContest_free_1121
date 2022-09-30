import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import Loding from 'components/common/Loading';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RecoilRoot>
    <Suspense fallback={<Loding/>}>
      <App/>
    </Suspense>
  </RecoilRoot>
);
