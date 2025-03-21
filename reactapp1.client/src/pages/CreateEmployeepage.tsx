import { Link } from "react-router-dom"
import { EmployeeForm } from "../components/employee-form";

export default function CreateEmployeePage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-6">
                <Link to="/view-employees">
                    <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Back to Employees</button>
                </Link>
            </div>

            <h1 className="text-2xl font-bold mb-6 text-center">Create New Employee</h1>

            <EmployeeForm />
        </div>
    )
}
