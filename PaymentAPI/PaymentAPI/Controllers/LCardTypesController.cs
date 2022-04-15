using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;

namespace PaymentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LCardTypesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LCardTypesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/LCardTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LCardType>>> GetCardTypes()
        {
            return await _context.CardTypes.AsNoTracking().ToListAsync();
        }

        // GET: api/LCardTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LCardType>> GetLCardType(int id)
        {
            var lCardType = await _context.CardTypes.FindAsync(id);

            if (lCardType == null)
            {
                return NotFound();
            }

            return lCardType;
        }

        // PUT: api/LCardTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLCardType(int id, LCardType lCardType)
        {
            if (id != lCardType.PkCardTypeId)
            {
                return BadRequest();
            }

            _context.Entry(lCardType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LCardTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LCardTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LCardType>> PostLCardType(LCardType lCardType)
        {
            _context.CardTypes.Add(lCardType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLCardType", new { id = lCardType.PkCardTypeId }, lCardType);
        }

        // DELETE: api/LCardTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLCardType(int id)
        {
            var lCardType = await _context.CardTypes.FindAsync(id);
            if (lCardType == null)
            {
                return NotFound();
            }

            _context.CardTypes.Remove(lCardType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LCardTypeExists(int id)
        {
            return _context.CardTypes.Any(e => e.PkCardTypeId == id);
        }
    }
}
