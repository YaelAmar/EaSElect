using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class GeneralBL
    {
        CompanyBL CompanyBL = new CompanyBL();
        ElectionBL ElectionBL = new ElectionBL();
        ElectionOptionBL ElectionOptionBL = new ElectionOptionBL();
        ElectionResultBL ElectionResultBL = new ElectionResultBL();
        TypeBL TypeBL = new TypeBL();
        TypeDetailsBL TypeDetailsBL = new TypeDetailsBL();
        ValueToTypeBL ValueToTypeBL = new ValueToTypeBL();
        VoterBL VoterBL = new VoterBL();

        //קליטה של נתונים כל אחד לטבלה המתאימה


        public void LoadDataVoters(string path, int electionId)
        {

            using (var reader = new StreamReader(path, Encoding.Default))
            {
                List<string> types = new List<string>();
                for (int i = 0; !reader.EndOfStream; i++)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(';');
                    if (i == 0)
                    {
                        for (int j = values[0].IndexOf(',') + 1; j < values[0].Length; j++)
                        {
                            string typeName = "";
                            int k, f = 0;
                            for (k = j; k < values[0].IndexOf(',', k); k++)
                            {
                                f = values[0].IndexOf(',', k);
                                typeName += values[0].ElementAt(k);

                            }
                            if (j < values[0].Length && k > f)
                            {
                                for (int w = k; w < values[0].Length; w++)
                                {
                                    typeName += values[0].ElementAt(w);

                                }
                                j = values[0].Length;
                            }
                            types.Add(typeName);
                            j += typeName.Length;
                            TypeBL.AddNewType(typeName);
                        }

                    }
                    else
                    {
                        string typeDetailName = "";

                        for (int j = 0; j < values[0].Length; j++)
                        {
                            if (j == 0)
                            {
                                string voterId = "";
                                //save fingerprint at Azure
                                //save in voters
                                for (int k = 0; k < values[0].IndexOf(',', j); k++)
                                {
                                    voterId += values[0].ElementAt(k);
                                }
                                VoterBL.AddNewVoter(voterId, electionId);
                                j += voterId.Length;
                            }

                            else
                            {
                                int f = 0, k;
                                typeDetailName = "";
                                for (k = j; k < values[0].IndexOf(',', k); k++)
                                {
                                    f = values[0].IndexOf(',', k);
                                    typeDetailName += values[0].ElementAt(k);
                                }
                                if (j < values[0].Length && k > f)
                                {
                                    for (int w = k; w < values[0].Length; w++)
                                    {
                                        typeDetailName += values[0].ElementAt(w);

                                    }
                                    j = values[0].Length;
                                }
                                bool result = TypeDetailsBL.IsExistTypeDetails(typeDetailName);
                                //if the row is not exist
                                if (result == false)
                                {
                                    TypeDetailsBL.AddNewTypeDetail(typeDetailName, types[j]);
                                }
                                int typeDetailId = TypeDetailsBL.GetTypeDetailIdByName(values[j]);
                                ValueToTypeBL.AddValueToType(values[0], typeDetailId);
                                j += typeDetailName.Length;

                            }
                        }
                    }
                }
            }

        }



    }
}
