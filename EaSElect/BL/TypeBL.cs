using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BL
{
  public  class TypeBL
    {
        TypeDal TypeDal = new TypeDal();
        public void AddNewType(string type)
        {
            Models.Type newType=new Models.Type() { TypeName=type};
            TypeDal.Add(newType);
        }

        public int GetTypeIdByName(string typeName)
        {
            return TypeDal.GetIdByName(typeName);
        }

        public bool IsTypeExists(string typeName,long electionId)
        {
            return TypeDal.IsExistType(typeName,electionId);
        }

        public void EmptyTypeDetails(List<long> typeCodes)
        {
            TypeDal.EmptyTypeDetails(typeCodes);
        }
    }
}
