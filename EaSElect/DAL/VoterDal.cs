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
        //מחזיר אם הבוחר קיים בטבלת הבוחרים בבחירות אלו
        public bool IsVoterExists(string voterId, long electionId)
        {
            try
            {
                if (DB.Voters.Any(c => c.VoterId == voterId && c.ElectionId==electionId))
                       return true;
            }
            catch (Exception e)
            {
                Console.WriteLine("not good!" + e.ToString());

            }
            return false;
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
