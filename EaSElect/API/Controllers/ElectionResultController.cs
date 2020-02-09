using BL;
using Models;
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
    
        [HttpGet]
        [Route("api/electionResult/addElectionResult/{voterCode}/{electionOptionId}")]
        public void AddElectionResult(long voterCode,long electionOptionId)
        {
            ElectionResultBL.AddElectionResult(voterCode,electionOptionId);
        }
        [HttpGet]
        [Route("api/electionResult/getResult/{electionOptions}")]
        public List<ElectionResult> GetResult(List<ElectionOption> electionOptions)
        {
           return ElectionResultBL.GetResult(electionOptions);
        }
        public void Options()
        { }
    }
}
