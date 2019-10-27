using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class CompanyController : ApiController
    {
        CompanyBL CompanyBL = new CompanyBL();
        [HttpGet]
        [Route("api/company/addCompany")]
        public void AddNewCompany(string companyName,string userName,string password)
        {
            CompanyBL.AddNewCompany(companyName,userName,password);
        }

    }
}
