using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    class TypeDetailsBL
    {
        TypeBL typeBL = new TypeBL();
        TypeDetailsDal typeDetailsDal = new TypeDetailsDal();
        public bool IsExistTypeDetails(string typeDetail)
        {
           return typeDetailsDal.IsExistTypeDetails(typeDetail);
           
        }

        public void AddNewTypeDetail(string typeDetail, string type)
        {
            int typeId = typeBL.GetTypeIdByName(type);
            Models.TypeDetail newTypeDetail = new Models.TypeDetail() { TypeDetailsName=typeDetail,TypeId=typeId};
            typeDetailsDal.AddNewTypeDetail(newTypeDetail);
        }

        public int GetTypeDetailIdByName(string typeDetail)
        {
           return typeDetailsDal.GetTypeDetailIdByName(typeDetail);
        }
    }
}
