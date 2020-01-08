using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ElectionResultBL
    {
        EmailsDal EmailsDal = new EmailsDal();
        ElectionResultDal ElectionResultDal = new ElectionResultDal();
        //פונקציה השליחת מייל לכלל הבוחרים עם תוצאות הבחירות
        public bool SendResults(int electionId)
        {
            bool mailSend = true;
            Company company = ElectionResultDal.GetCompanyDetailsByElectionId(electionId);
            string companyName = company.CompanyName;
            string EmailManager = company.EmailManager;
            string password = company.Password;
            Models.SendMail sendMail = new SendMail(companyName, EmailManager, password);
            //להביא את רשימת המיילים של כל הבוחרים
            List<Email> emailVoters = EmailsDal.GetAllEmails(electionId);
            for (int i = 0; i < emailVoters.Count; i++)
            {
             //מבצע את השליחה
             mailSend = sendMail.SendEMail(new MessageGmail()
            {
                sendTo = emailVoters[i].EmailVoter,
                Subject = "EaSelect",
                Body = ""
            });
            if (mailSend == false)
                    return false;
            }
            return mailSend;
        }
    }
}
