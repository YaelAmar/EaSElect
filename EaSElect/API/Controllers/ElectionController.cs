using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class ElectionController : ApiController
    {
        ElectionBL ElectionBL = new ElectionBL();
        [HttpPost]
        [Route("api/election/addElection")]
        public long AddNewElection(Models.Election newElection)
        {
          return  ElectionBL.AddNewElection(newElection);
        }
       
    }
}
