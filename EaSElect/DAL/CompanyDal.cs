using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class CompanyDal
    {
        Models.ElectionsDBEntities DB = new Models.ElectionsDBEntities();
        public void AddNewCompany(Company newCompany)
        {
            DB.Companies.Add(newCompany);
            DB.SaveChanges();
        }

        public bool Login(string userName, string password)
        {
            throw new NotImplementedException();
        }
    }
}
