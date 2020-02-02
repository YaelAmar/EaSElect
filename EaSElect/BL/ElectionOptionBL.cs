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
        public long Add(ElectionOption electionOption)
        {
          return  ElectionOptionDal.Add(electionOption);
        }

        public List<ElectionOption> Get(long electionId)
        {
            var res= ElectionOptionDal.Get(electionId);
            return res;
        }

        public void Delete(long electionOptionId)
        {
            ElectionOptionDal.Delete(electionOptionId);
        }

        public void Edit(ElectionOption electionOption)
        {
            ElectionOptionDal.Edit(electionOption);
        }
    }
}
