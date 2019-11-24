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
        TypeBL TypeBL = new TypeBL();
        TypeDetailsDal TypeDetailsDal = new TypeDetailsDal();
        public bool IsExistTypeDetails(string typeDetail)
        {
           return TypeDetailsDal.IsExistTypeDetails(typeDetail);
           
        }

        public void AddNewTypeDetail(string typeDetail, string type)
        {
            int typeId = TypeBL.GetTypeIdByName(type);
            Models.TypeDetail newTypeDetail = new Models.TypeDetail() { TypeDetailsName=typeDetail,TypeId=typeId};
            TypeDetailsDal.AddNewTypeDetail(newTypeDetail);
        }

        public int GetTypeDetailIdByName(string typeDetail)
        {
           return TypeDetailsDal.GetTypeDetailIdByName(typeDetail);
        }
    }
}
