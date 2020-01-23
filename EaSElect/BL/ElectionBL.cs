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
          return ElectionDal.AddNewElection(newElection);
             
        }

        public List<Election> GetAllElections(long companyId)
        {
           return ElectionDal.GetAllElections(companyId);
        }
    }
    
}
