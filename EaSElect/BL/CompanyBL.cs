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
        public void AddNewCompany(string companyName, string userName, string password)
        {
            Models.Company newCompany = new Models.Company() { CompanyName=companyName,UserName=userName,Password=password};
            CompanyDal.AddNewCompany(newCompany);
        }

        public bool Login(string userName, string password)
        {
           return CompanyDal.Login(userName, password);
        }

       
    }
}
