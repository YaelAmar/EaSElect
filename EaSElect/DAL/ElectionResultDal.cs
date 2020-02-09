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

      
        public List<long> GetElectionOptionIdByVoterCode(long voterCode)
        {
            if (DB.ElectionResults.Any(c => c.VoterCode == voterCode))
              return  DB.ElectionResults.Where(c => c.VoterCode == voterCode).Select(o => o.ElectionOptionId).ToList();
            return null;
        }

        public void AddElectionResult(ElectionResult electionResult)
        {
            if (!(DB.ElectionResults.Any(c=>c.ElectionOptionId==electionResult.ElectionOptionId&&c.VoterCode==electionResult.VoterCode)))
            {
                DB.ElectionResults.Add(electionResult);
                DB.SaveChanges();
            }
        }

        //public long GetResult(List<ElectionOption> electionOptions)
        //{
        // //   List<ElectionResult> electionResults = new List<ElectionResult>();
        //    ElectionOption electionOption = new ElectionOption();
        //    int maxOption = 0,count;
        //    long whichOption=0;
        //    for (int i = 0; i < electionOptions.Count; i++)
        //    {
        //        electionOption = electionOptions[i];
        //        count = DB.ElectionResults.Count(r => r.ElectionOptionId == electionOption.ElectionOptionId);
        //        if (count > maxOption)
        //        {
        //            maxOption = count;
        //            whichOption = electionOption.ElectionOptionId;
        //        }
        //    }
        //    return whichOption;
        //}
        public List<ElectionResult> GetResult(List<ElectionOption> electionOptions)
        {
            List<ElectionResult> electionResults = new List<ElectionResult>();
            ElectionOption electionOption = new ElectionOption();
           for (int i = 0; i < electionOptions.Count; i++)
            {
                electionOption = electionOptions[i];
                electionResults.Add(DB.ElectionResults.Where(r => r.ElectionOptionId == electionOption.ElectionOptionId).ToList()[0]);
            }
            return electionResults;
        }
    }
}
