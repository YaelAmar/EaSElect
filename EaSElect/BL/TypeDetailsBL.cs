using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class TypeDetailsBL
    {
        TypeBL TypeBL = new TypeBL();
        TypeDetailsDal TypeDetailsDal = new TypeDetailsDal();
     
        public void AddNewTypeDetail(string typeDetail, string type)
        {
            int typeId = TypeBL.GetTypeIdByName(type);
            TypeDetail newTypeDetail = new TypeDetail()
            { TypeDetailsName=typeDetail,TypeId=typeId};
            TypeDetailsDal.AddNewTypeDetail(newTypeDetail);
        }

        public List<TypeDetail> Get(long typeId)
        {
            return TypeDetailsDal.Get(typeId);
        }

        public int GetTypeDetailIdByName(string typeDetail)
        {
           return TypeDetailsDal.GetTypeDetailIdByName(typeDetail);
        }

        public List<long> EmptyTypeDetailsAndGetTypeCodes(List<long> typeDetailsCodes)
        {
            return TypeDetailsDal.EmptyTypeDetailsAndGetTypeCodes(typeDetailsCodes);
        }
    }
}
