using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class EmailBL
    {
        EmailDal EmailDal = new EmailDal();
        CompanyDal CompanyDal = new CompanyDal();
        ElectionResultDal ElectionResultDal = new ElectionResultDal();
        ElectionDal ElectionDal = new ElectionDal();
        public long LoadEmails(List<string> emails, long electionId)
        {
           return EmailDal.LoadEmails(emails, electionId);
        }
        public int SendEmail(int electionId,int typeEmail)
        {
            int notSuccessed = 0;
            Company company = CompanyDal.GetCompanyDetailsByElectionId(electionId);//מביא את פרטי החברה השולחת את המייל
            SendMail sendMail = new SendMail(company.CompanyName, company.EmailManager,company.Password);
            // להביא את רשימת המיילים של הבוחרים הרצויים
            List<string> emailVoters = EmailDal.GetAllEmails(electionId);
            string body = "";
            string subject = "";
            string electionName = ElectionDal.GetElectionNameById(electionId);
            if (typeEmail==1)//שליחת לינק לבוחרים בשביל לבחור
            {
                body = "הנה הקישור לאתר הבחירות";
                subject = string.Format(" הצבעה לבחירות {0}", electionName);
            }
            else if(typeEmail==2)//שליחת לינק לבוחרים בשביל לצפות בתוצאות בחירה
            {
                body = ElectionResultDal.GetResults(electionId);
                subject = string.Format(" תוצאות לבחירות {0}", electionName);
            }
            List<string> emailsSuccessed = new List<string>();
            List<string> emailsNotSuccessed = new List<string>();
            for (int i = 0; i < emailVoters.Count; i++)
            {
                //מבצע את השליחה
                bool mailSend = true;
                mailSend = sendMail.SendEMail(new MessageGmail()
                {
                    sendTo = emailVoters[i],
                    Subject =subject,
                    Body = body
                });
                if (mailSend == false)
                {
                    notSuccessed++;
                }

            }
             return notSuccessed;
        }

        public void EmptyEmails(long electionId)
        {
            EmailDal.EmptyEmails(electionId);
        }
    }
}
