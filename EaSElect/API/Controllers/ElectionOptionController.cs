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
        //הוספת אופציית בחירה
        public long AddNewElectionOption(Models.ElectionOption electionOption)
        {
            return ElectionOptionBL.AddNewElectionOption(electionOption);
        }
        [Route("api/electionOption/getAllElectionOptions/{electionId}")]
        [HttpGet]
        public IHttpActionResult GetAllElectionOptions(long electionId)
        {
            return Ok(ElectionOptionBL.GetAllElectionOptions(electionId));
        }
        //מחיקת אופציית בחירה
        public void Delete(int electionOptionId)
        {

        }
        //עדכון אופצייה
        public void Update(int electionOptionId)
        {

        }

    }
}
