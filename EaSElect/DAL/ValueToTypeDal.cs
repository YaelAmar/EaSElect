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

        public List<long> EmptyValueToTypeAndGetTypeDetailsCodes(List<long> voterCodes)
        {
            List<long> typeDetailsCodes = new List<long>();
            for (int i = 0; i < voterCodes.Count; i++)
            {
                List<ValueToType> valueToType = DB.ValueToTypes.Where(code => code.VoterCode == voterCodes[i]).ToList();
                for (int j = 0; j < valueToType.Count; j++)
                {
                    typeDetailsCodes.Add(valueToType[j].TypeDetailsId);
                    DB.ValueToTypes.Remove(valueToType[j]);
                    DB.SaveChanges();
                }
            }
            return typeDetailsCodes;
        }
    }
}
