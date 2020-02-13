using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL
{
    public class ValueToTypeDal
    {
        Models.ElectionsDBEntities DB = new ElectionsDBEntities();
        public void AddValueToType(ValueToType newValueToType)
        {
            DB.ValueToTypes.Add(newValueToType);
            DB.SaveChanges();
        }

        public List<long> EmptyValueToTypeAndGetTypeDetailsCodes(List<long> voterCodes)
        {
            List<long> typeDetailsCodes = new List<long>();
            for (int i = 0; i < voterCodes.Count; i++)
            {
                long voterCode = voterCodes[i];
                List<ValueToType> valuesToType = DB.ValueToTypes.Where(code => code.VoterCode == voterCode).ToList();
                for (int j = 0; j < valuesToType.Count; j++)
                {
                    ValueToType valueToType = valuesToType[j];
                    typeDetailsCodes.Add(valueToType.TypeDetailsId);
                    DB.ValueToTypes.Remove(valueToType);
                    DB.SaveChanges();
                }
            }
            return typeDetailsCodes;
        }

        public void DeleteValueToType(long voterCode, long typeDetailsId, bool checked1)
        {
            ValueToType valueToTypes = DB.ValueToTypes.Where(v => v.VoterCode == voterCode && v.TypeDetailsId == typeDetailsId).ToList()[0];
            valueToTypes.DeleteRow = !checked1;
            DB.Entry(valueToTypes).State = EntityState.Modified;
            DB.SaveChanges();
        }

        public List<TypeDetail> GetValueToTypeOfVoter(long voterCode)
        {
            List<long> typeDetailsIds = DB.ValueToTypes.Where(v => v.VoterCode == voterCode).Select(d => d.TypeDetailsId).ToList();
            List<TypeDetail> typeDetails = new List<TypeDetail>();

            for (int i = 0; i < typeDetailsIds.Count; i++)
            {
                long typeDetailsId = typeDetailsIds[i];
                typeDetails.Add(DB.TypeDetails.Where(d => d.TypeDetailsId == typeDetailsId).ToList()[0]);

            }
            return typeDetails;
        }

        public ResultOfOption[] GetValueToTypeByTypeDetails(List<TypeDetail> typeDetails, List<long> voterCodes)
        {
            long typeDetailsId;
            ResultOfOption[] sumValueToTypeByTypeDetails = new ResultOfOption[typeDetails.Count];
            for (int i = 0; i < typeDetails.Count; i++)
            {
                sumValueToTypeByTypeDetails[i] = new ResultOfOption();
               typeDetailsId = typeDetails[i].TypeDetailsId;
                sumValueToTypeByTypeDetails[i].ElectionOptionId = typeDetailsId;
                sumValueToTypeByTypeDetails[i].ElectionOptionName = typeDetails[i].TypeDetailsName;
                for (int j = 0; j < voterCodes.Count; j++)
                {
                    long voterCode = voterCodes[j];
                    sumValueToTypeByTypeDetails[i].CountOfChoose += DB.ValueToTypes.Count(v => v.VoterCode == voterCode && v.TypeDetailsId == typeDetailsId);
                }
            }
            return sumValueToTypeByTypeDetails;
        }
    }
}
