using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class VoterBL
    {
        VoterDal VoterDal= new VoterDal(); 
        public void AddNewVoter(string voterId,long electionId)
        {
            int VoterId = int.Parse(voterId);
            Models.Voter newVoter = new Models.Voter()
            { ElectionId = electionId, VoterId = VoterId};
            VoterDal.AddNewVoter(newVoter);
        }

        public bool IsVoterExists(int voterId,long electionId)
        {
            return VoterDal.IsVoterExists(voterId, electionId);
        }

        public long GetVoterCodeByVoterIdInCurrentElection(string fingerPrint, long electionId)
        {
            int voterId=int.Parse(fingerPrint);
            return VoterDal.GetVoterCodeByVoterIdInCurrentElection(voterId, electionId);
        }

        public List<long> GetAllVoters(long electionId)
        {
           return VoterDal.GetAllVoters(electionId);
        }

        public void EmptyVoters(long electionId)
        {
            VoterDal.EmptyVoters(electionId);
        }
    }
}
