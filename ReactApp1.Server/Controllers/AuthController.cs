using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
