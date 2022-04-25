using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CheckList.Models;
using PaymentAPI.Models;

namespace CheckList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LTaskTypesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LTaskTypesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/LTaskTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LTaskType>>> GetLTaskType()
        {
            return await _context.LTaskType.AsNoTracking().ToListAsync();
        }

        // GET: api/LTaskTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LTaskType>> GetLTaskType(int id)
        {
            var lTaskType = await _context.LTaskType.FindAsync(id);

            if (lTaskType == null)
            {
                return NotFound();
            }

            return lTaskType;
        }

        // PUT: api/LTaskTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLTaskType(int id, LTaskType lTaskType)
        {
            if (id != lTaskType.PkTaskTypeId)
            {
                return BadRequest();
            }

            _context.Entry(lTaskType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LTaskTypeExists(id))
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

        // POST: api/LTaskTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LTaskType>> PostLTaskType(LTaskType lTaskType)
        {
            _context.LTaskType.Add(lTaskType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLTaskType", new { id = lTaskType.PkTaskTypeId }, lTaskType);
        }

        // DELETE: api/LTaskTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLTaskType(int id)
        {
            var lTaskType = await _context.LTaskType.FindAsync(id);
            if (lTaskType == null)
            {
                return NotFound();
            }

            _context.LTaskType.Remove(lTaskType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LTaskTypeExists(int id)
        {
            return _context.LTaskType.Any(e => e.PkTaskTypeId == id);
        }
    }
}
