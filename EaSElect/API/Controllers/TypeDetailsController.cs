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
    public class TypeDetailsController : ApiController
    {
        TypeDetailsBL TypeDetailBL = new TypeDetailsBL();
        [HttpGet]
        [Route("api/typeDetails/get/{typeId}")]
        public List<TypeDetail> Get(long typeId)
        {
            return TypeDetailBL.Get(typeId);
        }
    }
}
