import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import Hjem from "./Sider/Hjem/Hjem";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
                <App />
            }
          >
            <Route path="" element={<Hjem />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default Router

