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
          return CompanyBL.AddNewCompany(company);
       }
        [HttpGet]
        [Route("api/company/login/{userName}/{password}")]
        public long Login(string userName, string password)
        {
            return CompanyBL.Login(userName, password);
        }
        [HttpPost]
        [Route("api/company/signUp")]
        //הוספת חברה 
        public long SignUp(Models.Company company)
        {
            this.AddNewCompany(company);
            return company.CompanyId;
        }
        //עדכון פרטי חברה
        public void Update(int companyId)
        {

        }
        //מחיקת חברה
        public void Delete(int companyId)
        {

        }
        public void Options()
        { }
    }
}
