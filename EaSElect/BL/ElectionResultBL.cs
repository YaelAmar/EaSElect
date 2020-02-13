using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ElectionResultBL
    {
        ElectionResultDal ElectionResultDal = new ElectionResultDal();
        public List<long> GetElectionOptionIdByVoterCode(long voterCode)
        {
           return ElectionResultDal.GetElectionOptionIdByVoterCode(voterCode);
        }

        public void AddElectionResult(long voterCode, long electionOptionId)
        {
            ElectionResult newElectionResult = new ElectionResult() { VoterCode=voterCode, ElectionOptionId=electionOptionId};
            ElectionResultDal.AddElectionResult(newElectionResult);
        }

        public int GetResultOfOption(long electionOptionId)
        {
           return ElectionResultDal.GetResultOfOption(electionOptionId);
        }

        public List<long> GetVotersCodesByOptionSelected(long electionOptionId)
        {
          return  ElectionResultDal.GetVotersCodesByOptionSelected(electionOptionId);
        }
    }
}
