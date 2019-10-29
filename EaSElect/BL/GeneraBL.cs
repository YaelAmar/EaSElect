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
        public void LoadDataVoters(string path)
        {

            using (var reader = new StreamReader(path))
            {
                for (int i = 0; !reader.EndOfStream; i++)
                {
                    List<string> types = new List<string>();
                    var line = reader.ReadLine();
                    var values = line.Split(';');
                    if (i == 0)
                    {
                        for (int j = 1; j < values.Length; j++)
                        {
                            types.Add(values[j]);
                            TypeBL.AddNewType(values[j]);
                        }
                    }
                    else
                    {
                        for (int j = 0; j < values.Length; j++)
                        {
                            if (j==0)
                            {
                                //save fingerprint at Azure
                              
                           
                            }
                            else
                            {
                               bool result=TypeDetailsBL.IsExistTypeDetails(values[j]);
                                //if the row is not exist
                                if (result==false)
                                {
                                    TypeDetailsBL.AddNewTypeDetail(values[j],types[j]);
                                }
                            }
                            //enter fingerprint+typedetail

                        }
                    }
                }
            }

        }

       
    }
}
