using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class VoterDal
    {
        Models.ElectionsDBEntities DB = new Models.ElectionsDBEntities();

        public void AddNewVoter(Voter newVoter)
        {
            DB.Voters.Add(newVoter);
            DB.SaveChanges();
        }
    }
}
