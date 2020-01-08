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
        //פונקציה שולחת מייל לבוחרים עם לינק לאתר
        [HttpPost]
        [Route("api/election/sendMail")]
        public bool SendLinkEmail(int electionId)
        {
          return ElectionBL.SendLink(electionId);
        }
    }
}
