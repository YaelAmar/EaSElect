using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Type = Models.Type;

namespace DAL
{
    public class TypeDal
    {
        ElectionsDBEntities DB = new ElectionsDBEntities();
        public void Add(Models.Type type)
        {
            if (!(DB.Types.Any(c => c.TypeName == type.TypeName && c.ElectionId == type.ElectionId)))
            {
                DB.Types.Add(type);
                DB.SaveChanges();
            }
            else
                Console.WriteLine("קיים סווג זה בבחירות אלו");
          
        }

        public int GetIdByName(string typeName,long electionId)
        {
            return int.Parse((DB.Types.Where(n => n.TypeName == typeName &&n.ElectionId==electionId).Select(c => c.TypeId).ToList()[0].ToString()));
        }

        public List<Type> Get(long electionId)
        {
            return DB.Types.Where(t=>t.ElectionId==electionId).ToList();
        }

        public void EmptyTypes(List<long> typeCodes, long electionId)
        {
            for (int i = 0; i < typeCodes.Count; i++)
            {
                long typeId = typeCodes[i];
                List<Type> types = DB.Types.Where(t => t.TypeId == typeId&&t.ElectionId==electionId).ToList();
                for (int j = 0; j < types.Count; j++)
                {
                    if (types[j].TypeId == typeId)
                    {
                        DB.Types.Remove(types[j]);
                        DB.SaveChanges();
                    }
                }
            }
        }
    }
}
