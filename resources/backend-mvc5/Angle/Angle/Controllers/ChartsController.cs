﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class ChartsController : Controller
    {
        public ActionResult ChartFlot()
        {
            return View();
        }
        public ActionResult ChartRadial()
        {
            return View();
        }
    }
}