import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ViewEmployeesPage from "./pages/ViewEmployeespage"
import CreateEmployeePage from "./pages/CreateEmployeepage"
import HomePage from "./pages/HomePage"

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/view-employees" element={<ViewEmployeesPage />} />
                    <Route path="/create-employee" element={<CreateEmployeePage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App

