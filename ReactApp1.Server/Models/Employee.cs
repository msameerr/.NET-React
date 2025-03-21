using System.ComponentModel.DataAnnotations;

namespace ReactApp1.Server.Models
{
    public class Employee
    {
        [Key]
        public int emp_id { get; set; }
        [Required]
        public string Name { get; set; }
        [Range(18,40)]
        public int Age { get; set; }
        public int Role { get; set; }


    }
}
