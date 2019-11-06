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
              int resultnum= DB.IsExistTypeDetails(typeDetail);
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
            return int.Parse(DB.TypeDetails.Where(n => n.TypeDetailsName.Equals(typeDetail)).Select(c => c.TypeDetailsId).ToString());
        }
    }
}
 