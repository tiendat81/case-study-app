import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const PageNotFound = lazy(() => import('components/PageNotFound'));
const Counter = lazy(() => import('features/Counter'));
const Employee = lazy(() => import('features/Employee'));
const Header = lazy(() => import('components/Header'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/employee" component={Employee} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
