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
    public class ElectionOptionController : ApiController
    {
        ElectionOptionBL ElectionOptionBL = new ElectionOptionBL();
        [HttpPost]
        [Route("api/electionOption/add")]
        //הוספת אופציית בחירה
        public long AddNewElectionOption(ElectionOption electionOption)
        {
            return ElectionOptionBL.Add(electionOption);
        }
        [Route("api/electionOption/get/{electionId}")]
        [HttpGet]
        public IHttpActionResult Get(long electionId)
        {
            return Ok(ElectionOptionBL.Get(electionId));
        }
        //מחיקת אופציית בחירה
        [Route("api/electionOption/delete/{electionOptionId}")]
        [HttpGet]
        public void Delete(long electionOptionId)
        {
             ElectionOptionBL.Delete(electionOptionId);
        }
        //עדכון אופצייה
        [HttpPost]
        [Route("api/electionOption/edit")]
        public void Edit(ElectionOption electionOption)
        {
             ElectionOptionBL.Edit(electionOption);
        }

    }
}
