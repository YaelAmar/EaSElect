using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ElectionBL
    {
        ElectionDal ElectionDal = new ElectionDal();
        public long AddNewElection(Models.Election newElection)
        {
          return ElectionDal.AddNewElection(newElection);
             
        }
        //פוקציה הקוראת לפנקציה לשליחת המיייל לבוחרים
        public bool SendLink(int electionId)
        {
            string companyName = "";//ללכת להביא מהדטביס
            string EmailManager = "";
            string password = "";
            Models.SendMail sendMail = new SendMail(companyName, EmailManager, password);
            bool mailSend = sendMail.SendEMail(new MessageGmail()
            {
                sendTo = "",
                Subject = "EaSelect",
                Body = ""
            });
            return mailSend;
        }
    }
    
}
