import './App.css'
import DashBoard from './dashboard/DashBoard'
import { mockCompanyDetails } from './mock'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockFinder from './stockfinder/StockFinder'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockFinder />}></Route>
          <Route path="/stocks" element={<StockFinder />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <DashBoard companyDetails={mockCompanyDetails} />
      <StockFinder /> */}
    </>
  )
}

export default App;
