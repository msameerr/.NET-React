using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Contracts;
using ReactApp1.Server.Data;
using ReactApp1.Server.Models;
using ReactApp1.Server.Models.Dto;

namespace ReactApp1.Server.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {

        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        public EmployeeRepository(AppDbContext dbContext, IMapper mapper) 
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<IEnumerable<EmployeeDto>> GetEmployee()
        {

            try
            {
                IEnumerable<Employee> employeesObj = await _dbContext.Employees.ToListAsync();
                var employees = _mapper.Map<List<EmployeeDto>>(employeesObj);

                return employees;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Message : ", ex);
            }


        }
        public async Task<bool> DeleteEmployee(int id)
        {
            try
            {
                var employee = await _dbContext.Employees.FirstAsync(q => q.emp_id == id);
                _dbContext.Employees.Remove(employee);
                _dbContext.SaveChanges();

                return true;

            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> CreateEmployee([FromBody] EmployeeDto employeeDto)
        {
            try
            {
                var employee = _mapper.Map<Employee>(employeeDto);
                await _dbContext.Employees.AddAsync(employee);
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

  
    }
}

