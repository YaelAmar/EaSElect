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
        public long AddNewElectionOption(ElectionOption newElectionOption)
        {
            if (DB.ElectionOptions.Any(c => c.ElectionOptionName == newElectionOption.ElectionOptionName && c.ElectionId == newElectionOption.ElectionId))
                return 0;

            DB.ElectionOptions.Add(newElectionOption);
            DB.SaveChanges();
            return DB.ElectionOptions.Where(c => c.ElectionOptionName == newElectionOption.ElectionOptionName && c.ElectionId == newElectionOption.ElectionId).Select(l => l.ElectionId).ToList()[0];
        }

        public List<ElectionOption> GetAllElectionOptions(long electionId)
        {
            return DB.ElectionOptions.Where(c => c.ElectionId == electionId).ToList();
        }
    }
}
