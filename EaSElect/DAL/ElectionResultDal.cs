using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace DAL
{
    public class ElectionResultDal
    {
        ElectionsDBEntities DB = new ElectionsDBEntities();
        public Company GetCompanyDetailsByElectionId(int electionId)
        {
            long companyId = DB.Elections.Where(id => id.ElectionId == electionId).Select(i => i.CompanyId).ToList()[0];
            return DB.Companies.Where(c => c.CompanyId == companyId).ToList()[0];
        }

      
    }
}
