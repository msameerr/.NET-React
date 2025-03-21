"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { employeeService } from "../services/employee-service"

interface EmployeeFormProps {
    onSuccess?: () => void
}

export function EmployeeForm({ onSuccess }: EmployeeFormProps) {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        role: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.age || !formData.role) {
            alert("All fields are required")
            return
        }

        try {
            setIsSubmitting(true)
            await employeeService.create({
                name: formData.name,
                age: Number.parseInt(formData.age),
                role: formData.role,
            })

            alert("Employee created successfully")

            // Reset form
            setFormData({ name: "", age: "", role: "" })

            // Call onSuccess callback if provided
            if (onSuccess) {
                onSuccess()
            } else {
                // Navigate to view employees page
                navigate("/view-employees")
            }
        } catch (error) {
            alert("Failed to create employee")
            console.error("Error creating employee:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full max-w-md mx-auto border rounded-lg shadow-sm p-6 bg-white">
            <div className="mb-4">
                <h2 className="text-xl font-bold">Create Employee</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter employee name"
                            required
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="age" className="block font-medium">
                            Age
                        </label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter employee age"
                            min="18"
                            max="100"
                            required
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="role" className="block font-medium">
                            Role
                        </label>
                        <input
                            id="role"
                            name="role"
                            type="number"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Enter employee role"
                            required
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                    >
                        {isSubmitting ? "Creating..." : "Create Employee"}
                    </button>
                </div>
            </form>
        </div>
    )
}

