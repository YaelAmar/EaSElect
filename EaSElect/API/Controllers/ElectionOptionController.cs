using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class ElectionOptionController : ApiController
    {
        ElectionOptionBL ElectionOptionBL = new ElectionOptionBL();
        [HttpGet]
        [Route("api/electionOption/addElectionOption")]
        public void AddNewElectionOption(string electionOptionName, int electionId)
        {
            ElectionOptionBL.AddNewElectionOption(electionOptionName, electionId);
        }
    }
}
