using ReactApp1.Server.Models.Dto;

namespace ReactApp1.Server.Contracts
{
    public interface IEmployeeRepository
    {

        Task<IEnumerable<EmployeeDto>> GetEmployee();
        Task<bool> CreateEmployee(EmployeeDto employeeDto);
        Task<bool> DeleteEmployee(int id);

    }
}
