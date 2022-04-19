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
    public class CheckListModelsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CheckListModelsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/CheckListModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CheckListModel>>> GetCheckListModel()
        {
            return await _context.CheckListModel.ToListAsync();
        }

        // GET: api/CheckListModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CheckListModel>> GetCheckListModel(int id)
        {
            var checkListModel = await _context.CheckListModel.FindAsync(id);

            if (checkListModel == null)
            {
                return NotFound();
            }

            return checkListModel;
        }

        // PUT: api/CheckListModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCheckListModel(int id, CheckListModel checkListModel)
        {
            if (id != checkListModel.PkTaskId)
            {
                return BadRequest();
            }

            _context.Entry(checkListModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckListModelExists(id))
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

        // POST: api/CheckListModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CheckListModel>> PostCheckListModel(CheckListModel checkListModel)
        {
            _context.CheckListModel.Add(checkListModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCheckListModel", new { id = checkListModel.PkTaskId }, checkListModel);
        }

        // DELETE: api/CheckListModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCheckListModel(int id)
        {
            var checkListModel = await _context.CheckListModel.FindAsync(id);
            if (checkListModel == null)
            {
                return NotFound();
            }

            _context.CheckListModel.Remove(checkListModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CheckListModelExists(int id)
        {
            return _context.CheckListModel.Any(e => e.PkTaskId == id);
        }
    }
}
