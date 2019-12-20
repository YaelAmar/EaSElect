using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ElectionBL
    {
        ElectionDal ElectionDal = new ElectionDal();
        public long AddNewElection(Models.Election newElection)
        {
          return ElectionDal.AddNewElection(newElection);
             
        }
    }
}
