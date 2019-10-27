using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class TypeDal
    {
        Models.ElectionsDBEntities DB = new Models.ElectionsDBEntities();
        public void Add(Models.Type type)
        {
            DB.Types.Add(type);
            DB.SaveChanges();

        }

        public int GetIdByName(string typeName)
        {
            return int.Parse(DB.Types.Where(n => n.TypeName == typeName).Select(c => c.TypeId).ToString());
        }
    }
}
