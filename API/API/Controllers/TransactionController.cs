using DataAccess;
using DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
      

        public TransactionController(Context context)
        {
            Context = context;
        }

        public Context Context { get; }

        [HttpPost("Upsert")]
       public async Task<IActionResult> Upsert(Transaction transaction)
        {
            transaction.CreateOn = DateTime.Now;
            Context.Transactions.Update(transaction);
            await Context.SaveChangesAsync();
            return Ok(transaction);
        }

    }
}
