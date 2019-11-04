using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class VoterController : ApiController
    {
        GeneralBL GeneralBL = new GeneralBL();
        [HttpGet]
        [Route("api/voters/loadDataVoters")]
        public void LoadDataVoters(string path,int electionId)
        {
            GeneralBL.LoadDataVoters(path,electionId);
        }

      
    }
}
