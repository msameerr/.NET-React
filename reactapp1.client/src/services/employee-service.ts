import type { Employee } from "../types/employee"

// Base URL for your API
const API_URL = "/api/employees"

export const employeeService = {
    // Get all employees
    async getAll(): Promise<Employee[]> {
        const api_url = "http://localhost:7288/Employee";

        try {
            const response = await fetch(api_url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 204) {
                console.warn("No employees found (204 No Content)");
                return []; // ? Return an empty array instead of calling response.json()
            }

            if (!response.ok) {
                throw new Error(`Failed to fetch employees: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error fetching employees:", error);
            throw error;
        }
    },



    // Create new employee
    async create(employee: Omit<Employee, "id">): Promise<Employee> {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employee),
        })

        if (!response.ok) {
            throw new Error("Failed to create employee")
        }

        return response.json()
    },


    // Delete employee
    async delete(id: number): Promise<void> {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })

        if (!response.ok) {
            throw new Error("Failed to delete employee")
        }
    },
}

