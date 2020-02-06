using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class ElectionResultController : ApiController
    {
       ElectionResultBL ElectionResultBL = new ElectionResultBL();
        EmailBL EmailBL = new EmailBL();
        [HttpPost]
        [Route("api/electionResult/AddElectionResult")]
        public int AddElectionResult()
        {
            return 3;
        }
        [HttpGet]
        [Route("api/electionResult/sendChoose/{voterCode}/{electionOptionId}")]
        public void SendChoose(long voterCode,long electionOptionId)
        {
            ElectionResultBL.SendChoose(voterCode,electionOptionId);
        }
       [HttpPost]
       [Route("api/electionResult/SendResult")]
       public int SendResults(long electionId)
       {
           return EmailBL.SendEmail(electionId,2);
       }
    }
}
