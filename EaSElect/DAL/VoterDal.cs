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

        public bool IsVoterExists(int voterId, long electionId)
        {
            try
            {
              var resultnum = DB.IsExistVoter(voterId,electionId).ToList()[0];
              if (resultnum == 1)
                    return true;
            }
            catch (Exception e)
            {
                Console.WriteLine("not good!" + e.ToString());

            }
            return false;
        }

        public long GetCodeVoterById(long voterId, long electionId)
        {
            return DB.Voters.Where(c => c.VoterId == voterId && c.ElectionId == electionId).Select(c => c.VoterCode).ToList()[0];
        }
    }
}
