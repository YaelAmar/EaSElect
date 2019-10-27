using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class ElectionOptionDal
    {
        Models.ElectionsDBEntities DB = new ElectionsDBEntities();
        public void AddNewElectionOption(ElectionOption newElectionOption)
        {
            DB.ElectionOptions.Add(newElectionOption);
            DB.SaveChanges();
        }
    }
}
