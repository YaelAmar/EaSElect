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
    public class ElectionController : ApiController
    {
        ElectionBL ElectionBL = new ElectionBL();
        EmailBL EmailBL = new EmailBL(); 
        [HttpPost]
        [Route("api/election/add")]
        //הוספת בחירות
        public long Add(Election newElection)
        {
          return  ElectionBL.AddNewElection(newElection);
        }


        //מחיקת בחירות
        public void Delete(int electionId)
        {
           
        }
        //עדכון פרטי בחירות
        [HttpPost]
        [Route("api/election/edit")]
        public void Edit(Election election)
        {
            ElectionBL.Edit(election);
        }

        
        [HttpGet]
        [Route("api/election/getByCompanyCode/{companyId}")]
        public IHttpActionResult GetElectionsByCompanyCode(long companyId)
        {
            return Ok(ElectionBL.GetElectionsByCompanyCode(companyId));
        }

        [HttpGet]
        [Route("api/election/getByElectionCode/{electionId}")]
        public IHttpActionResult GetByElectionCode(long electionId)
        {
            return Ok(ElectionBL.GetElectionByElectionCode(electionId));
        }
        public void Options()
        { }
    }
}
