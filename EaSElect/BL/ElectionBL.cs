using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ElectionBL
    {
        ElectionDal ElectionDal = new ElectionDal();
        public void AddNewElection(string electionName, DateTime startDate, DateTime endDate, int companyId)
        {
            Models.Election newElection = new Models.Election() {ElectionName=electionName,StartDate=startDate,EndDate=endDate,CompanyId=companyId };
            ElectionDal.AddNewElection(newElection);
        }
    }
}
