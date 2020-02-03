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
        public void Add(List<ElectionOption> electionOptionsList)
        {
            for (int i = 0; i < electionOptionsList.Count; i++)
            {
                if (DB.ElectionOptions.Any(c => c.ElectionOptionName == electionOptionsList[i].ElectionOptionName && c.ElectionId == electionOptionsList[i].ElectionId && c.DeleteRow == false))
                    continue;
                DB.ElectionOptions.Add(electionOptionsList[i]);
                DB.SaveChanges();
            }
        }
        public long Add(ElectionOption electionOption)
        {
            if (DB.ElectionOptions.Any(c => c.ElectionOptionName == electionOption.ElectionOptionName && c.ElectionId == electionOption.ElectionId && c.DeleteRow == false))
                    return 0;
            DB.ElectionOptions.Add(electionOption);
            DB.SaveChanges();
            return DB.ElectionOptions.Where(c => c.ElectionOptionName == electionOption.ElectionOptionName && c.ElectionId == electionOption.ElectionId).Select(l => l.ElectionOptionId).ToList()[0];

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
