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
        public bool IsVoterExists(int voterId, long electionId)
        {
            try
            {
                var resultnum = DB.IsExistVoter(voterId, electionId).ToList()[0];
                if (resultnum == 1)
                    return true;
            }
            catch (Exception e)
            {
                Console.WriteLine("not good!" + e.ToString());

            }
            return false;
        }
        //מחזיר את הקוד היחודי של בוחר מסויים
        public long GetCodeVoterById(long voterId, long electionId)
        {
            return DB.Voters.Where(c => c.VoterId == voterId && c.ElectionId == electionId).Select(c => c.VoterCode).ToList()[0];
        }

        public void EmptyVoters(long electionId)
        {
          foreach (Voter item in DB.Voters)
          {
                if (item.ElectionId == electionId)
                {
                    DB.Voters.Remove(item);
                    DB.SaveChanges();
                }
          }
        }
        public List<long> GetAllVoters(long electionId)
        {
            return DB.Voters.Where(l => l.ElectionId == electionId).Select(e => e.VoterCode).ToList();
        }
    }
}
