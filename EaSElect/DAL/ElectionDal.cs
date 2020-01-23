using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class ElectionDal
    {
        ElectionsDBEntities DB = new ElectionsDBEntities();
        public long AddNewElection(Election newElection)
        {
            if (DB.Elections.Any(c => c.ElectionName == newElection.ElectionName && c.StartDate == newElection.StartDate && c.EndDate==newElection.EndDate))
                return 0;
            DB.Elections.Add(newElection);
            DB.SaveChanges();
            return DB.Elections.Where((c) => c.ElectionName== newElection.ElectionName && c.StartDate == newElection.StartDate && c.EndDate == newElection.EndDate).Select(l => l.ElectionId).ToList()[0];
         }

        public List<Election> GetAllElections(long companyId)
        {
            return DB.Elections.Where(c => c.CompanyId == companyId).ToList();
        }

        public string GetElectionNameById(int electionId)
        {
            return DB.Elections.Where(c => c.ElectionId == electionId).Select(n => n.ElectionName).ToList()[0];
        }
        //public long FindCompanyId(int hashcode)
        //{
        //    return DB.Elections.Where(c => (Convert.ToByte(c.CompanyId) == hashcode)).Select(c => c.CompanyId).ToList()[0];
        //}
    }
}
