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
        public long AddNewCompany(Company newCompany)
        {
           
            
            if (DB.Companies.Any(c => c.UserName == newCompany.UserName))
                return 0;
            DB.Companies.Add(newCompany);
            DB.SaveChanges();
            return DB.Companies.Where((c) => c.UserName == newCompany.UserName &&
                                        c.Password == newCompany.Password).
                                        Select(l => l.CompanyId).ToList()[0];
        }

        public string GetCompanyNameById(int companyId)
        {
            return DB.Companies.Where(c => c.CompanyId == companyId).Select(n => n.CompanyName).ToList()[0];
        }

        public long Login(string userName, string password)
        {
            if (DB.Companies.Any(c => c.UserName == userName && c.Password == password))
                  return DB.Companies.Where(c=>c.UserName==userName &&c.Password==password).Select(c=>c.CompanyId).ToList()[0];
            return 0;
        }
        public Company GetCompanyDetailsByElectionId(long electionId)
        {
            long companyId = DB.Elections.Where(id => id.ElectionId == electionId).Select(i => i.CompanyId).ToList()[0];
            return DB.Companies.Where(c => c.CompanyId == companyId).ToList()[0];
        }
    }
}
