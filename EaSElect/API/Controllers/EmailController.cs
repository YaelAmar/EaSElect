using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace API.Controllers
{
    public class EmailController : ApiController
    {
        GeneralBL GeneralBL = new GeneralBL();
        EmailBL EmailBL = new EmailBL();
        [HttpPost, HttpGet]
        [Route("api/email/loadEmails")]
        public long LoadEmails()
        {
            HttpPostedFile file = HttpContext.Current.Request.Files[0];
            string path = HttpContext.Current.Server.MapPath("~/Content/Files/" + file.FileName);
            file.SaveAs(path);
            int electionId = int.Parse(HttpContext.Current.Request.Params["electionId"]);
            return GeneralBL.LoadEmails(path, electionId);
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
