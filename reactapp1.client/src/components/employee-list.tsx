"use client"

import { useState, useEffect } from "react"
import type { Employee } from "../types/employee"
import { employeeService } from "../services/employee-service"

export function EmployeeList() {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchEmployees = async () => {
        try {
            setLoading(true)
            const data = await employeeService.getAll()
            setEmployees(data)
            setError(null)
        } catch (err) {
            setError("Failed to fetch employees")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchEmployees()
    }, [])

    const handleDelete = async (id: number) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            try {
                await employeeService.delete(id)
                setEmployees((prev) => prev.filter((emp) => emp.emp_id !== id))
                alert("Employee deleted successfully")
            } catch (err) {
                alert("Failed to delete employee")
                console.error(err)
            }
        }
    }

    if (loading) {
        return <div className="text-center py-8">Loading employees...</div>
    }

    if (error) {
        return (
            <div className="text-center py-8 text-red-500">
                Error: {error}
                <button className="ml-4 px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200" onClick={fetchEmployees}>
                    Retry
                </button>
            </div>
        )
    }

    if (employees.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">No employees found. Create some employees to see them here.</div>
        )
    }

    return (
        <div className="w-full overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {employees.map((employee) => (
                        <tr key={employee.emp_id}>
                            <td className="px-6 py-4 whitespace-nowrap font-medium">{employee.emp_id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.Name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.Age}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.Role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <button
                                    className="text-red-600 hover:text-red-900"
                                    onClick={() => handleDelete(employee.emp_id)}
                                    aria-label="Delete employee"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

