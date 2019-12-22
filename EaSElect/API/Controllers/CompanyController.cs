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
       public long AddNewCompany(Models.Company company)
        {
          return  CompanyBL.AddNewCompany(company);
        }
        [HttpGet]
        [Route("api/company/login/{userName}/{password}")]
        public bool Login(string userName, string password)
        {
            return CompanyBL.Login(userName, password);
        }
        [HttpPost]
        [Route("api/company/signUp")]
        public long SignUp(Models.Company company)
        {
            this.AddNewCompany(company);
            return company.CompanyId;
        }

        public void Options()
        { }
    }
}
