using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BL
{
  public  class TypeBL
    {
        TypeDal TypeDal = new TypeDal();
        public void AddNewType(string type)
        {
            Models.Type newType=new Models.Type() { TypeName=type};
            TypeDal.Add(newType);
        }
    }
}
