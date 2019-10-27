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
        SqlConnection sqlConnection = new SqlConnection("metadata = res://*/DB.csdl|res://*/DB.ssdl|res://*/DB.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=(LocalDB)\MSSQLLocalDB;initial catalog=ElectionsDB;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;");
        Models.ElectionsDBEntities DB = new Models.ElectionsDBEntities();

     
        public void AddNewTypeDetail(TypeDetail newTypeDetail)
        {
            DB.TypeDetails.Add(newTypeDetail);
            DB.SaveChanges();
        }

        public bool IsExistTypeDetails(string typeDetail)
        {
            bool result = false;
            try
            {
            sqlConnection.Open();
            var cmd = new SqlCommand("if exists(select count(*) from TypeDetail where TypeDetailsName = " + typeDetail + ") select 1 else select 0", sqlConnection);
            cmd.CommandType = System.Data.CommandType.Text;
            int i = (int)cmd.ExecuteScalar();
            result = i == 1;
           
            }
            catch(Exception e)
            {
                Console.WriteLine("not good!"+e.ToString());
            }
           return result;
        }
    }
}
 