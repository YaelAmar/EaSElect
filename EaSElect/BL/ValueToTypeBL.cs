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

        public List<long> EmptyValueToTypeAndGetTypeDetailsCodes(List<long> voterCodes)
        {
            return ValueToTypeDal.EmptyValueToTypeAndGetTypeDetailsCodes(voterCodes);
        }
    }
}
