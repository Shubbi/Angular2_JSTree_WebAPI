using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TP1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Numbers()
        {
            var obj = new {data = new[] {1, 2, 3, 4, 5}};
            return this.Json( obj, JsonRequestBehavior.AllowGet);
        }
    }
}