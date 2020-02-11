using DAL;
using Models;
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
                    var values = line.Split(',');
                    //אם זה הכותרת שמביעה קריטריונים לסוגי סווג 
                    if (i == 0)
                    {
                        for (int j = 1; j < values.Length; j++)
                        {
                            string typeName = values[j];
                            bool isTypeExists = TypeBL.IsTypeExists(typeName);
                            if (isTypeExists == false)
                            {
                                TypeBL.AddNewType(typeName);
                            }
                            types.Add(typeName);
                        }

                    }
                    //אם זה השורות בטבלה שמביעות בוחר
                    else
                    {
                        string typeDetailName = "";
                        string voterId = "";
                        for (int j = 0; j < values.Length; j++)
                        {
                            //אם מדובר על קוד טביעת אצבע
                            if (j == 0)
                            {
                                voterId = values[j];
                               //בדיקה אם הבוחר הזה נמצא בבחירות אלו
                                bool isVoterExists = VoterBL.IsVoterExists(voterId, electionId);
                                if (isVoterExists == false)
                                    VoterBL.AddNewVoter(voterId, electionId);
                            }
                            //אם זה ערך של פרטי סווג
                            else
                            {
                                typeDetailName = values[j];
                                //בודק אם פריט סווג זה קיים
                                bool isDetailExists = TypeDetailsBL.IsExistTypeDetails(typeDetailName);
                                if (isDetailExists == false)
                                {
                                    TypeDetailsBL.AddNewTypeDetail(typeDetailName, types[countWord]);
                                    countWord++;
                                }
                                int typeDetailId = TypeDetailsBL.GetTypeDetailIdByName(typeDetailName);
                                //מקבל את קוד בוחר מטבלת בוחרים
                                long voterCode = VoterBL.GetVoterCodeByVoterIdInCurrentElection(voterId, electionId);
                                ValueToTypeBL.AddValueToType(voterCode, typeDetailId);
                            }
                        }
                    }
                }

            }
            return 1;
        }
        public int CheckVoter(string fingerPrint,long electionId)
        {
            long voterCode = VoterBL.GetVoterCodeByVoterIdInCurrentElection(fingerPrint, electionId);
            if (voterCode == 0)
                return 1;//בוחר לא קיים במאגר
            Election election = ElectionBL.GetElectionByElectionCode(electionId);
            if (election.StartDate > DateTime.Now)
                return 2;//בחירה לפני הזמן
            if (election.EndDate < DateTime.Now)
                return 3;//בחירה אחרי זמן הבחירות
            List<long> electionOptionsAlreadySelected = ElectionResultBL.GetElectionOptionIdByVoterCode(voterCode);//מחזיר את אופציות הבחירה שבוחר זה כבר בחר
            if (electionOptionsAlreadySelected!=null)//אם קיימות כבר אופציות בתוצאות
                for (int i = 0; i < electionOptionsAlreadySelected.Count; i++)
                {
                    //בדיקה אם זה אופציות ששיכות לבחירה הנוכחית
                    if (ElectionOptionBL.GetElectionIdByElectionOptionId(electionOptionsAlreadySelected[i]) == electionId)
                        return 4;//בחרת כבר
                }
            return 0;//אתה אחלה
        }


        private void EmptyAllTables(long electionId)
        {
           List<long> voterCodes= VoterBL.GetAllVoters(electionId);//מחזיר את כל הבוחרים ששיכים לבחירות האלו 
        List<long> typeDetailsCodes=ValueToTypeBL.EmptyValueToTypeAndGetTypeDetailsCodes(voterCodes);//מחזיר את הקודים של פרטי סיווג ומוחק את ערכים לסווג 
      //     List<long> typeCodes=TypeDetailsBL.EmptyTypeDetailsAndGetTypeCodes(typeDetailsCodes);//מחזיר את הקודים של סיווגים ומוחק את פרטי סווג 
       //    TypeBL.EmptyTypeDetails(typeCodes);//מוחק את הסוגים
           VoterBL.EmptyVoters(electionId);//מוחק את הבוחרים

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

        public List<ResultOfOption> GetResult(long electionId)
        {
            List<ResultOfOption> resultOfOption = new List<ResultOfOption>(); 
            long electionOptionId;
            string electionOptionName;
            int sumOption = 0;
            List<ElectionOption> electionOptions= ElectionOptionBL.Get(electionId);
            for (int i = 0; i < electionOptions.Count; i++)
            {
                electionOptionId = electionOptions[i].ElectionOptionId;
                electionOptionName = electionOptions[i].ElectionOptionName;
                sumOption=ElectionResultBL.GetResultOfOption(electionOptionId);
                resultOfOption.Add(new ResultOfOption() { ElectionOptionId = electionOptionId, CountOfChoose = sumOption,ElectionOptionName= electionOptionName});
            }
            return resultOfOption;
        }
    }
}
