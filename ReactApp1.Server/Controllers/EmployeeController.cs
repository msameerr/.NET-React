using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Contracts;
using ReactApp1.Server.Models.Dto;
using System.Collections;

namespace ReactApp1.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class EmployeeController : Controller
    {

        private readonly IEmployeeRepository _repo;

        public EmployeeController(IEmployeeRepository repo) 
        {
            _repo = repo;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                IEnumerable<EmployeeDto> employees = await _repo.GetEmployee();

                if (employees == null || !employees.Any())
                {
                    return NotFound("No employees found");  // ✅ Return 404 instead of 204
                }

                return Ok(employees);  // ✅ Always return 200 with JSON data
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred", error = ex.Message });  // ✅ Return 500 error properly
            }
        }


        [HttpPost]
        public async Task<bool> Post(EmployeeDto employee)
        {

            try
            {
                bool result = await _repo.CreateEmployee(employee);
                return result;
            }
            catch (Exception)
            {
                return false;
            }
        }


        [HttpDelete]
        public async Task<bool> Delete([FromBody] int id)
        {

            try
            {
                bool result = await _repo.DeleteEmployee(id);
                return result;
            }
            catch(Exception)
            {
                return false;
            }

        }


    }
}
