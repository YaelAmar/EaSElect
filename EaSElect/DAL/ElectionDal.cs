using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class ElectionDal
    {
        Models.ElectionsDBEntities DB = new ElectionsDBEntities();
        public void AddNewElection(Election newElection)
        {
            DB.Elections.Add(newElection);
            DB.SaveChanges();
        }
    }
}
