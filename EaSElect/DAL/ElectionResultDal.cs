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

        public string GetResults(long electionId)
        {
            throw new NotImplementedException();
        }

        public List<long> GetElectionOptionIdByVoterCode(long voterCode)
        {
            if (DB.ElectionResults.Any(c => c.VoterCode == voterCode))
              return  DB.ElectionResults.Where(c => c.VoterCode == voterCode).Select(o => o.ElectionOptionId).ToList();
            return null;
        }

        public void SendChoose(ElectionResult electionResult)
        {
            if (!(DB.ElectionResults.Any(c=>c.ElectionOptionId==electionResult.ElectionOptionId&&c.VoterCode==electionResult.VoterCode)))
            {
                DB.ElectionResults.Add(electionResult);
                DB.SaveChanges();
            }
        }
    }
}
