import React, { useEffect } from 'react';
import { DataProvider } from './store';
import './assets/css/utilities.css'
import 'antd/dist/antd.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './routes'
import { FullScreenLayout, MainLayout } from './components';
import { LoginPage, HomePage, QRPage } from './containers';
function App() {

  useEffect(() => {
    document.title = 'QR'
  }, [])

  return (
    <div >
      <DataProvider>
        <BrowserRouter>
          <Switch>
            <PublicRoute path="/login" layout={FullScreenLayout}>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute exact path="/" layout={FullScreenLayout}>
              <HomePage/>
            </PrivateRoute>
            <PrivateRoute path="/sessions/:id/qr" layout={FullScreenLayout}>
              <QRPage/>
            </PrivateRoute>
            <PublicRoute layout={FullScreenLayout}>
              page not found
            </PublicRoute>
          </Switch>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
