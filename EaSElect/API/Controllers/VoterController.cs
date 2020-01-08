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
        
        [HttpPost]
        [Route("api/voters/loadDataVoters")]
        public int LoadDataVoters(Models.FileDetails fileDetails)
        {
            
          return GeneralBL.LoadDataVoters(fileDetails.FilePath,fileDetails.ElectionId);
        }

      
    }
}
