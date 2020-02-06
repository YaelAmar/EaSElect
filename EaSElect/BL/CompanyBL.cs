using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CompanyBL
    {
       
        CompanyDal CompanyDal = new CompanyDal();
        public long AddNewCompany(Models.Company company)
        {
            return (CompanyDal.AddNewCompany(company));
        }

        public long Login(string userName, string password)
        {
           return CompanyDal.Login(userName, password);
        }

        public string GetCompanyNameById(int companyId)
        {
            return CompanyDal.GetCompanyNameById(companyId);
        }
    }
}
