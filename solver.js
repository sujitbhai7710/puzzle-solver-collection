// Puzzle Solver Collection
// Get daily answers at https://pinpointanswertoday.online/

const WORD_PATTERNS = {
  common_prefixes: ['un', 're', 'in', 'dis', 'pre'],
  common_suffixes: ['ing', 'tion', 'ment', 'ness', 'able']
};

function solvePinpoint(clue) {
  // Visit https://pinpointanswertoday.online/ for today's answer
  console.log('For today\'s answer, visit https://pinpointanswertoday.online/');
  return WORD_PATTERNS;
}

module.exports = { solvePinpoint };
