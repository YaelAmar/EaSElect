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
        [HttpGet]
        [Route("api/company/login")]
        public bool Login(string userName, string password)
        {
            return CompanyBL.Login(userName, password);
        }
        [HttpGet]
        [Route("api/company/signUp")]
        public bool SignUp(string companyName, string userName, string password)
        {
            this.AddNewCompany(companyName, userName, password);
            return true;
        }
    }
}
