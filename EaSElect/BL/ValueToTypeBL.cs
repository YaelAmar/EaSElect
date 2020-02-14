using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ValueToTypeBL
    {
        ValueToTypeDal ValueToTypeDal = new ValueToTypeDal();
        public void AddValueToType(long voterCode, int typeDetailId)
        {
            Models.ValueToType newValueToType = new Models.ValueToType()
            { VoterCode = voterCode, TypeDetailsId = typeDetailId };
            ValueToTypeDal.AddValueToType(newValueToType);
        }

        public List<TypeDetail> GetValueToTypeOfVoter(long voterCode)
        {
            List<TypeDetail> typeDetails = ValueToTypeDal.GetValueToTypeOfVoter(voterCode);
            if (typeDetails.Count==0)
                return null;
            return typeDetails;
        }

        public void DeleteValueToType(long voterCode, long typeDetailsId,bool checked1)
        {
           // ValueToType newValueToType = new ValueToType() { VoterCode = voterCode, TypeDetailsId = typeDetailsId, DeleteRow = true };
            ValueToTypeDal.DeleteValueToType(voterCode, typeDetailsId,checked1);
        }

        public List<long> EmptyValueToTypeAndGetTypeDetailsCodes(List<long> voterCodes)
        {
            return ValueToTypeDal.EmptyValueToTypeAndGetTypeDetailsCodes(voterCodes);
        }

        public ResultOfOption[] GetValueToTypeByTypeDetails(List<TypeDetail> typeDetails, List<long> voterCodes)
        {
           return  ValueToTypeDal.GetValueToTypeByTypeDetails(typeDetails, voterCodes);
        }



        public int CountVoterOfTypeDetail(long voterCode, TypeDetail typeDetail)
        {
            return ValueToTypeDal.CountVoterOfTypeDetail(voterCode, typeDetail);
        }
    }
}
