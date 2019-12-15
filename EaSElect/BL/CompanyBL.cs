using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CompanyBL
    {
       
        CompanyDal CompanyDal = new CompanyDal();
        public long AddNewCompany(Models.Company company)
        {
            CompanyDal.AddNewCompany(company);
            return company.CompanyId;
        }

        public bool Login(string userName, string password)
        {
           return CompanyDal.Login(userName, password);
        }

       
    }
}
