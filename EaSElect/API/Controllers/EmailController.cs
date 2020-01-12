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

        [HttpPost,HttpGet]
        [Route("api/emails/loadEmails")]
        public long LoadEmails(string path,long electionId)
        {
          //  return GeneralBL.LoadEmails(fileDetails.FilePath, fileDetails.ElectionId);
           return  GeneralBL.LoadEmails(path, electionId);
        }
        public void Options()
        { }
    }
}
