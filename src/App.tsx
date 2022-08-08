import { GlobalStyles } from "./styles/GlobalStyles"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import LayoutProfile from './components/LayoutProfile'
import Messages from './components/Messages'

export default function App() {
  return (
    <>
    <Router>
        <div className="container">
        <Routes>
            <Route path="/profile" element={<LayoutProfile />} />
            <Route path="/messages" element={<Messages />} />
        </Routes>
        </div>
      </Router>
    <GlobalStyles />
    </>
  )
  
}

