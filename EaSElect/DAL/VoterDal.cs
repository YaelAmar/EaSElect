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
            if (!(DB.Voters.Any(c => c.VoterId == newVoter.VoterId&& c.ElectionId == newVoter.ElectionId)))
            {
                DB.Voters.Add(newVoter);
                DB.SaveChanges();
            }
            else
            {
                Console.WriteLine("קיים בוחר זה בבחירות אלו");
            }
            
        }
        
        //מחזיר את הקוד היחודי של בוחר מסויים
        public long GetVoterCodeByVoterIdInCurrentElection(string voterId, long electionId)
        {
            if (DB.Voters.Any(c => c.VoterId == voterId && c.ElectionId == electionId))
                return DB.Voters.Where(c => c.VoterId == voterId && c.ElectionId == electionId).Select(c => c.VoterCode).ToList()[0];
            else
                return 0;
        }

        public void EmptyVoters(long electionId)
        {
            List<Voter> voters = DB.Voters.Where(t => t.ElectionId == electionId).ToList();
            for (int i = 0; i < voters.Count; i++)
               { 
                    DB.Voters.Remove(voters[i]);
                    DB.SaveChanges();
                }
         
        }
        public List<long> GetAllVoters(long electionId)
        {
            return DB.Voters.Where(l => l.ElectionId == electionId).Select(e => e.VoterCode).ToList();
        }
    }
}
