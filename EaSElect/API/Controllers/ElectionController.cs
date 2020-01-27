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
        [Route("api/election/addElection")]
        //הוספת בחירות
        public long AddNewElection(Models.Election newElection)
        {
          return  ElectionBL.AddNewElection(newElection);
        }


        //מחיקת בחירות
        public void Delete(int electionId)
        {
           
        }
        //עדכון פרטי בחירות
        public void Update(int electionId)
        {

        }

        
        [Route("api/election/getAllElections/{companyId}")]
        [HttpGet]
        public IHttpActionResult GetAllElections(long companyId)
        {
            return Ok(ElectionBL.GetAllElections(companyId));
        }
        public void Options()
        { }
    }
}
