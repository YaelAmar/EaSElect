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
            DB.TypeDetails.Add(newTypeDetail);
            DB.SaveChanges();
        }
        public bool IsExistTypeDetails(string typeDetail)
        {
            try
            {
              var resultnum= DB.IsExistTypeDetails(typeDetail).ToList()[0];
              if (resultnum == 1)
                    return true;
            }
            catch (Exception e)
            {
                Console.WriteLine("not good!" + e.ToString());
               
            }
            return false;
        }

        public int GetTypeDetailIdByName(string typeDetail)
        {
            return int.Parse(DB.TypeDetails.Where(n => n.TypeDetailsName.Equals(typeDetail)).Select(c => c.TypeDetailsId).ToList()[0].ToString());
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
 