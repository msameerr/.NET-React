import { Link } from "react-router-dom"
import { EmployeeList } from "../components/employee-list"

export default function ViewEmployeesPage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Employee List</h1>
                <Link to="/create-employee">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Employee</button>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow">
                <EmployeeList />
            </div>
        </div>
    )
}

