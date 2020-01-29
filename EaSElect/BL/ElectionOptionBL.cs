using DAL;
using Models;
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
        public long AddNewElectionOption(Models.ElectionOption electionOption)
        {
          return  ElectionOptionDal.AddNewElectionOption(electionOption);
        }

        public List<ElectionOption> GetAllElectionOptions(long electionId)
        {
            var res= ElectionOptionDal.GetAllElectionOptions(electionId);
            return res;
        }
    }
}
