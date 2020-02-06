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
        [Route("api/voter/loadDataVoters")]
        public int LoadDataVoters()
        {
            HttpPostedFile file = HttpContext.Current.Request.Files[0];
            string path = HttpContext.Current.Server.MapPath("~/Content/Files/" + file.FileName);
            file.SaveAs(path);
            int electionId = int.Parse(HttpContext.Current.Request.Params["electionId"]);
           return GeneralBL.LoadDataVoters(path, electionId);
        }
        [HttpGet]
        [Route("api/voter/CheckVoter/{fingerPrint}/{electionId}")]
        public int CheckVoter(string fingerPrint,long electionId)
        {

         return GeneralBL.CheckVoter(fingerPrint,electionId);
           
        }


    }
}
