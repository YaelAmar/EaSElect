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
            DB.Types.Add(type);
            DB.SaveChanges();

        }

        public int GetIdByName(string typeName)
        {
            return int.Parse((DB.Types.Where(n => n.TypeName == typeName).Select(c => c.TypeId).ToList()[0].ToString()));
        }

        public bool IsExistType(string typeName)
        {
            try
            {
            var resultnum =DB.IsExistType(typeName).ToList()[0];
            if (resultnum == 1)
                    return true;
            }
            catch (Exception e)
            {
                Console.WriteLine("not good!" + e.ToString());

            }
            return false;
        }

        public void EmptyTypeDetails(List<long> typeCodes)
        {
            for (int i = 0; i < typeCodes.Count; i++)
            {
                long typeId = typeCodes[i];
                List<Type> types = DB.Types.Where(t => t.TypeId == typeId).ToList();
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
