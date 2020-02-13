using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Models;

namespace BL
{
  public  class TypeBL
    {
        TypeDal TypeDal = new TypeDal();
        public void AddNewType(string type, long electionId)
        {
            Models.Type newType=new Models.Type() { TypeName=type,ElectionId=electionId};
            TypeDal.Add(newType);
        }

        public List<Models.Type> Get(long electionId)
        {
            return TypeDal.Get(electionId);
        }

        public int GetTypeIdByName(string typeName, long electionId)
        {
            return TypeDal.GetIdByName(typeName,electionId);
        }

      
        public void EmptyTypes(List<long> typeCodes, long electionId)
        {
            TypeDal.EmptyTypes(typeCodes,electionId);
        }
    }
}
