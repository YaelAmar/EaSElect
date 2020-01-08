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
        [HttpPost]
        [Route("api/electionResult/AddElectionResult")]
        public int AddElectionResult()
        {
            return 3;
        }
       [HttpPost]
       [Route("api/electionResult/SendResult")]
       public bool SendResults(int electionId)
       {
           return ElectionResultBL.SendResults(electionId);
       }
    }
}
