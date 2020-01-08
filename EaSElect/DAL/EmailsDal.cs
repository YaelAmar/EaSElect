using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace DAL
{
  public  class EmailsDal
    {
        ElectionsDBEntities DB = new ElectionsDBEntities();

        public List<Email> GetAllEmails(int electionId)
        {
            throw new NotImplementedException();
        }
    }
}
