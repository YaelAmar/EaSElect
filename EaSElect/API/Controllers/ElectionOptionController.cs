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
        [HttpPost]
        [Route("api/electionOption/addElectionOption")]
        public long AddNewElectionOption(Models.ElectionOption electionOption)
        {
          return  ElectionOptionBL.AddNewElectionOption(electionOption);
        }
    }
}
