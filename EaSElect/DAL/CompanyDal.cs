﻿using System;

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
        
        public bool Login(string userName, string password)
        {
            int? result = DB.Login(userName, password).ToList()[0];
            if(result==1)
                return true;
            return false;
        }
        public Company GetCompanyDetailsByElectionId(int electionId)
        {
            long companyId = DB.Elections.Where(id => id.ElectionId == electionId).Select(i => i.CompanyId).ToList()[0];
            return DB.Companies.Where(c => c.CompanyId == companyId).ToList()[0];
        }
    }
}
