using Microsoft.AspNetCore.Mvc;

namespace WorldCupHut.API.Controllers
{
    public class Prediction
    {
        public int Id { get; set; }
        public string? MatchName { get; set; }
        public string? PredictedWinner { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class PredictionsController : ControllerBase
    {
        private static readonly List<Prediction> _predictions = new List<Prediction>();
        private static int _nextId = 1;

        [HttpGet]
        public ActionResult<List<Prediction>> Get()
        {
            return Ok(_predictions);
        }

        [HttpPost]
        public IActionResult Post(Prediction prediction)
        {
            prediction.Id = _nextId++;
            _predictions.Add(prediction);
            return Ok(prediction);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var prediction = _predictions.FirstOrDefault(p => p.Id == id);
            if (prediction == null) return NotFound();

            _predictions.Remove(prediction);
            return Ok();
        }
    }
}