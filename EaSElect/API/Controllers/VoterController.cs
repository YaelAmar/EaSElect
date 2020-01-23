using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.IO;
using System.Net.Http.Headers;

namespace API.Controllers
{
    public class VoterController : ApiController
    {
        GeneralBL GeneralBL = new GeneralBL();
        
        [HttpPost]
        [Route("api/voter/loadDataVoters/{electionId}")]
        public int LoadDataVoters(int electionId)
        {
            HttpPostedFile file = HttpContext.Current.Request.Files[0];
            file.SaveAs("path"+file.FileName);
           return GeneralBL.LoadDataVoters(file.FileName, electionId);
        }
        public void UploadFile()
        {
         
        }
       
    }
}
