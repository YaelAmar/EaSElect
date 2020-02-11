using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class TypeDetailsDal
    {
        Models.ElectionsDBEntities DB = new Models.ElectionsDBEntities();
        public void AddNewTypeDetail(TypeDetail newTypeDetail)
        {
            if (!(DB.TypeDetails.Any(t => t.TypeDetailsName == newTypeDetail.TypeDetailsName && t.TypeId==newTypeDetail.TypeId)))
            {
                DB.TypeDetails.Add(newTypeDetail);
                DB.SaveChanges();
            }
            Console.WriteLine("פריט סיווג זה קיים לבחירות אלו");
        }
       
        public int GetTypeDetailIdByName(string typeDetail)
        {
            return int.Parse(DB.TypeDetails.Where(n => n.TypeDetailsName.Equals(typeDetail)).Select(c => c.TypeDetailsId).ToList()[0].ToString());
        }

        public List<TypeDetail> Get(long typeId)
        {
            return DB.TypeDetails.Where(t => t.TypeId == typeId).ToList();
        }

        public List<long> EmptyTypeDetailsAndGetTypeCodes(List<long> typeDetailsCodes)
        {
            List<long> typeCodes = new List<long>();
            for (int i = 0; i < typeDetailsCodes.Count; i++)
            {
                long typeDetailId = typeDetailsCodes[i];
                List<TypeDetail> typeDetail = DB.TypeDetails.Where(code => code.TypeDetailsId == typeDetailId).ToList();
                for (int j = 0; j < typeDetail.Count; j++)
                {
                    typeCodes.Add(typeDetail[j].TypeId);
                    DB.TypeDetails.Remove(typeDetail[j]);
                    DB.SaveChanges();
                }
            }
            return typeCodes;
        }
    }
}
 