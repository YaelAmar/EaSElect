using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ElectionOptionBL
    {
        ElectionOptionDal ElectionOptionDal = new ElectionOptionDal();
        public void AddNewElectionOption(string electionOptionName, int electionId)
        {
            Models.ElectionOption newElectionOption = new Models.ElectionOption() {ElectionOptionName=electionOptionName,ElectionId=electionId};
            ElectionOptionDal.AddNewElectionOption(newElectionOption);
        }
    }
}
