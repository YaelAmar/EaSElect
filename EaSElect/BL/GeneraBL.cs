﻿using System;
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
            List<string> g = new List<string>();
            using (var reader = new StreamReader(path, Encoding.Default))
            {
                List<string> types = new List<string>();
                for (int i = 0, countWord = 0; !reader.EndOfStream; i++, countWord = 0)
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
                            bool isTypeExists = TypeBL.IsTypeExists(typeName);
                            if (isTypeExists == false)
                            {

                                TypeBL.AddNewType(typeName);
                            }
                            types.Add(typeName);
                            j += typeName.Length;
                        }

                    }
                    else
                    {
                        string typeDetailName = "";
                        string voterId = "";
                        for (int j = 0; j < values[0].Length; j++)
                        {
                            if (j == 0)
                            {
                                voterId = "";
                                //save fingerprint at Azure
                                //save in voters
                                for (int k = 0; k < values[0].IndexOf(',', j); k++)
                                {
                                    voterId += values[0].ElementAt(k);
                                }
                                //check if th e electionId exists in Election table.
                                bool isVoterExists = VoterBL.IsVoterExists(int.Parse(voterId), electionId);
                                if (isVoterExists == false)
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
                                bool isDetailExists = TypeDetailsBL.IsExistTypeDetails(typeDetailName);
                                //if the row is not exist
                                if (isDetailExists == false)
                                {
                                    g.Add(typeDetailName);
                                    TypeDetailsBL.AddNewTypeDetail(typeDetailName, types[countWord]);
                                    countWord++;
                                }
                                int typeDetailId = TypeDetailsBL.GetTypeDetailIdByName(typeDetailName);
                                ValueToTypeBL.AddValueToType(voterId, typeDetailId);
                                j += typeDetailName.Length;

                            }
                        }
                    }
                }
            }

        }



    }
}
