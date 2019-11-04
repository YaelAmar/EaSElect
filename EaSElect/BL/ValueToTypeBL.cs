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
        public void AddValueToType(string voterId, int typeDetailId)
        {
            int VoterId = int.Parse(voterId);
            Models.ValueToType newValueToType = new Models.ValueToType() { VoterId = VoterId, TypeDetailsId = typeDetailId };
            ValueToTypeDal.AddValueToType(newValueToType);
        }
    }
}
