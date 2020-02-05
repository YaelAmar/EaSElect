using DAL;
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
        EmailBL EmailBL = new EmailBL();

        //נתוני הבוחרים מקובץ האקסל, כל אחד לטבלה המתאימה, סוגים, פרטי סוגים, בוחרים וערכים לסווגים
        public int LoadDataVoters(string path, long electionId)
        {
            //שליחה לונקציה שתרוקן את הטבלאות לני הטענת הקובץ
            EmptyAllTables(electionId);
            //בדיקה אם נתיב הקובץ חוקי
            bool possiblePath = path.IndexOfAny(Path.GetInvalidPathChars()) == -1;
            if (possiblePath==false)
                return 0;
            using (var reader = new StreamReader(path, Encoding.Default))
            {
                List<string> types = new List<string>();
                for (int i = 0, countWord = 0; !reader.EndOfStream; i++, countWord = 0)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(';');
                    //אם זה הכותרת שמביעה קריטריונים לסוגי סווג 
                    if (i == 0)
                    {
                        for (int j = values[0].IndexOf(',') + 1; j < values[0].Length; j++)
                        {
                           int k=j, tmp = 0;
                           string typeName = SearchWord(values,j,out tmp);
                            if (j < values[0].Length && k > tmp)
                            {
                                for (int w = k; w < values[0].Length; w++)
                                {
                                    typeName += values[0].ElementAt(w);
                                }
                                j = values[0].Length;
                            }
                            bool isTypeExists = TypeBL.IsTypeExists(typeName,electionId);
                            if (isTypeExists == false)
                            {
                                TypeBL.AddNewType(typeName);
                            }
                            types.Add(typeName);
                            j += typeName.Length;
                        }

                    }
                    //אם זה השורות בטבלה שמביעות בוחר
                    else
                    {
                        string typeDetailName = "";
                        string voterId = "";
                        for (int j = 0; j < values[0].Length; j++)
                        {
                            //אם מדובר על קוד טביעת אצבע
                            if (j == 0)
                            {
                                voterId = "";
                               //מחפש את קוד הבוחר
                                for (int k = 0; k < values[0].IndexOf(',', j); k++)
                                {
                                    voterId += values[0].ElementAt(k);
                                }
                                //בדיקה אם הבוחר הזה נמצא בבחירות אלו
                                bool isVoterExists = VoterBL.IsVoterExists(int.Parse(voterId), electionId);
                                if (isVoterExists == false)
                                    VoterBL.AddNewVoter(voterId, electionId);
                                j += voterId.Length;
                            }
                            //אם זה ערך של פרטי סווג
                            else
                            {
                                int tmp = 0, k=j;
                                typeDetailName =SearchWord(values,j,out tmp);
                                if (j < values[0].Length && k > tmp)
                                {
                                    for (int w = k; w < values[0].Length; w++)
                                    {
                                        typeDetailName += values[0].ElementAt(w);
                                    }
                                    j = values[0].Length;
                                }
                                bool isDetailExists = TypeDetailsBL.IsExistTypeDetails(typeDetailName);
                                //בודק אם פריט סווג זה קיים
                                if (isDetailExists == false)
                                {
                                    TypeDetailsBL.AddNewTypeDetail(typeDetailName, types[countWord]);
                                    countWord++;
                                }
                                int typeDetailId = TypeDetailsBL.GetTypeDetailIdByName(typeDetailName);
                                //מקבל את קוד בוחר מטבלת בוחרים
                                long voterCode = VoterBL.GetCodeVoterById(voterId, electionId);
                                ValueToTypeBL.AddValueToType(voterCode, typeDetailId);
                                j += typeDetailName.Length;

                            }
                        }
                    }
                }

            }
            return 1;
        }

        private void EmptyAllTables(long electionId)
        {
           List<long> voterCodes= VoterBL.GetAllVoters(electionId);//מחזיר את כל הבוחרים ששיכים לבחירות האלו 
        List<long> typeDetailsCodes=ValueToTypeBL.EmptyValueToTypeAndGetTypeDetailsCodes(voterCodes);//מחזיר את הקודים של פרטי סיווג ומוחק את ערכים לסווג 
      //     List<long> typeCodes=TypeDetailsBL.EmptyTypeDetailsAndGetTypeCodes(typeDetailsCodes);//מחזיר את הקודים של סיווגים ומוחק את פרטי סווג 
       //    TypeBL.EmptyTypeDetails(typeCodes);//מוחק את הסוגים
           VoterBL.EmptyVoters(electionId);//מוחק את הבוחרים

        }

        //מציאת מילה מתוך המחרוזת המבטאת סוכ או פריט סווג
        private string SearchWord(string[] values, int j,out int tmp)
        {
            tmp = 0;
            string word = "";
            int k;
            for (k = j; k < values[0].IndexOf(',', k); k++)
            {
                tmp = values[0].IndexOf(',', k);
                word += values[0].ElementAt(k);
            }
            return word;
        }
        public long LoadEmails(string path, long electionId)
        {
            EmailBL.EmptyEmails(electionId);
            List<string> emails = new List<string>();
            bool possiblePath = path.IndexOfAny(Path.GetInvalidPathChars()) == -1;
            if(possiblePath)
            {
                using (var reader = new StreamReader(path, Encoding.Default))
                {
                   
                    while (!reader.EndOfStream)
                    {
                        var line = reader.ReadLine();
                        emails.Add(line);
                    }
                }
             return EmailBL.LoadEmails(emails, electionId);
            }
             return -1;
        }
    }
}
