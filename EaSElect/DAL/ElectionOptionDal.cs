using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class ElectionOptionDal
    {
        Models.ElectionsDBEntities DB = new ElectionsDBEntities();
        public long Add(ElectionOption newElectionOption)
        {
            if (DB.ElectionOptions.Any(c => c.ElectionOptionName == newElectionOption.ElectionOptionName && c.ElectionId == newElectionOption.ElectionId && c.DeleteRow==false))
                return 0;

            DB.ElectionOptions.Add(newElectionOption);
            DB.SaveChanges();
            return DB.ElectionOptions.Where(c => c.ElectionOptionName == newElectionOption.ElectionOptionName && c.ElectionId == newElectionOption.ElectionId).Select(l => l.ElectionOptionId).ToList()[0];
        }

        public void Edit(ElectionOption electionOption)
        {
            DB.Entry(electionOption).State = EntityState.Modified;
            DB.SaveChanges();
        }
        public List<ElectionOption> Get(long electionId)
        {
            return DB.ElectionOptions.Where(c => c.ElectionId == electionId&& c.DeleteRow==false).ToList();

        }
        public void Delete(long electionOptionId)
        {
            ElectionOption electionOption=DB.ElectionOptions.Where(e => e.ElectionOptionId == electionOptionId).ToList()[0];
            if (electionOption != null)
            {
               electionOption.DeleteRow=true;
                DB.SaveChanges();
            }
        }
    }
}
