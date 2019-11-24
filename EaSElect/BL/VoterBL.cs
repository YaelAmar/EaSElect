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
        public void AddNewVoter(string voterId,int electionId)
        {
            int VoterId = int.Parse(voterId);
            Models.Voter newVoter = new Models.Voter() { ElectionId = electionId, VoterId = VoterId,Adress=""};
            VoterDal.AddNewVoter(newVoter);
        }

        public bool IsVoterExists(int voterId,int electionId)
        {
            return VoterDal.IsVoterExists(voterId, electionId);
        }
    }
}
