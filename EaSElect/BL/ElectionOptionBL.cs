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
        public long AddNewElectionOption(Models.ElectionOption electionOption)
        {
          return  ElectionOptionDal.AddNewElectionOption(electionOption);
        }
    }
}
