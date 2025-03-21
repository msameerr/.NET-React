using AutoMapper;
using ReactApp1.Server.Controllers;
using ReactApp1.Server.Models;
using ReactApp1.Server.Models.Dto;

namespace ReactApp1.Server
{

    public class MappingConfig
    {

        public static MapperConfiguration RegisterMap()
        {
            var mapperConfiguration = new MapperConfiguration(config => {
                config.CreateMap<Employee, EmployeeDto>().ReverseMap();
            });

            return mapperConfiguration;
        }
    }

}