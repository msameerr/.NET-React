import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Employee Management System</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Link to="/view-employees" className="w-full">
                    <button className="w-full h-32 flex flex-col items-center justify-center gap-2 border rounded-lg hover:bg-gray-100">
                        <span className="text-lg">View Employees</span>
                    </button>
                </Link>

                <Link to="/create-employee" className="w-full">
                    <button className="w-full h-32 flex flex-col items-center justify-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <span className="text-lg">Create Employee</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

