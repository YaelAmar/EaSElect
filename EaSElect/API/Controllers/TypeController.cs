using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class TypeController : ApiController
    {
        TypeBL TypeBL = new TypeBL();
        [HttpGet]
        [Route("api/type/get/{electionId}")]
        public List<Models.Type> Get(long electionId)
        {
            return TypeBL.Get(electionId);
        }
    }
}
