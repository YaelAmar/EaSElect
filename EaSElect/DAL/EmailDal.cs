using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class EmailDal
    {
        ElectionsDBEntities DB = new ElectionsDBEntities();
        public long LoadEmails(List<string> emails, long electionId)
        {
            long countEmails=0;
            foreach (string item in emails)
            {
                if (DB.Emails.Any(c => (c.ElectionId == electionId && c.EmailVoter == item)))
                    continue;

                DB.Emails.Add(new Email() { ElectionId = electionId, EmailVoter = item });
                countEmails++;
                DB.SaveChanges();
                
            }
            return countEmails;
        }

        public List<string> GetAllEmails(int electionId)
        {
          return DB.Emails.Where(e => e.ElectionId == electionId).Select(n => n.EmailVoter).ToList();
        }

        public void EmptyEmails(long electionId)
        {
            List<Email> emails = DB.Emails.Where(e => e.ElectionId == electionId).ToList();
            for (int i = 0; i < emails.Count; i++)
            {
                DB.Emails.Remove(emails[i]);
                DB.SaveChanges();
            }
        }
    }
}
