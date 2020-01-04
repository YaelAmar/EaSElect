using DAL;
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
    }
}
