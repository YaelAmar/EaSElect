using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class ValueToTypeDal
    {
        Models.ElectionsDBEntities DB = new ElectionsDBEntities();
        public void AddValueToType(ValueToType newValueToType)
        {
            DB.ValueToTypes.Add(newValueToType);
            DB.SaveChanges();
        }
    }
}
