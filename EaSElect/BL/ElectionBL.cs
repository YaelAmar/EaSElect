using DAL;
using Models;
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
        CompanyDal CompanyDal = new CompanyDal();
        public long AddNewElection(Election newElection)
        {
       //   newElection.CompanyId= ElectionDal.FindCompanyId((int)newElection.CompanyId);
          return ElectionDal.Add(newElection);
             
        }
        public async Task ExecuteEmailSend(long electionId)
        {
            await Task.Delay(100000);
            //send emails

        }
 

        public List<Election> GetElectionsByCompanyCode(long companyId)
        {
           var res= ElectionDal.GetElectionsByCompanyCode(companyId);
            return res;
        }

        public void Edit(Election election)
        {
            ElectionDal.Edit(election);
        }

        public Election GetElectionByElectionCode(long electionId)
        {
            return ElectionDal.GetElectionByElectionCode(electionId);
        }

        public long GetCompanyIdByElectionId(long electionId)
        {
            return ElectionDal.GetCompanyIdByElectionId(electionId);
        }
    }
    
}
