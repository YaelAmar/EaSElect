using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class EmailController : ApiController
    {
        GeneralBL GeneralBL = new GeneralBL();
        EmailBL EmailBL = new EmailBL();
        [HttpPost,HttpGet]
        [Route("api/email/loadEmails")]
        public long LoadEmails(string path,long electionId)
        {
         //  return GeneralBL.LoadEmails(fileDetails.FilePath, fileDetails.ElectionId);
           return  GeneralBL.LoadEmails(path, electionId);
        }


        //פונקציה שולחת מייל לבוחרים עם לינק לבחור
        [HttpPost]
        [Route("api/email/sendMessage")]
        public int SendMessage(int electionId)
        {
            return EmailBL.SendEmail(electionId, 1);
        }
        //פונקציה שולחת מייל לבוחרים עם תוצאות 
        [HttpPost]
        [Route("api/email/sendResult")]
        public int SendResult(int electionId)
        {
            return EmailBL.SendEmail(electionId, 2);
        }


        public void Options()
        { }
    }
}
