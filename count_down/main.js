let current_date_to_reach = "2025-11-28T22:00:00"; //YYYY-MM-DD
let end = new Date(2025, 10, 28, 22); //Month is 0-indexed

function change_time() {
    let new_time = prompt(`Date of birth (yyyy-mm-ddThh:mm:ss)\nCurrent: ${current_date_to_reach}`);
    console.log(new_time);
    if (new_time == null) {
        end = new Date(current_date_to_reach);
    }else{
        current_date_to_reach = new_time;
        end = new Date(current_date_to_reach);
    }
}

function parseTarget(str) {
  // Match yyyy.mm.dd h:m:s (single or double digits allowed)
  const re =
    /^\s*(\d{4})\.(\d{1,2})\.(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/;
  const m = re.exec(str);
  if (!m) return null;

  const [, yyyy, mm, dd, hh, mi, ss] = m.map(Number);
  return new Date(yyyy, mm - 1, dd, hh, mi, ss);
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateCountdown(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    num.innerHTML = "Time's up!";
    return false;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  num.innerHTML = `${days}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  return true;
}

let timerId = null;

function startCountdown(targetString) {
  const targetDate = parseTarget(targetString);
  if (!targetDate || isNaN(targetDate)) {
    num.innerHTML = "Invalid date format.";
    return;
  }

  // First immediate update
  if (!updateCountdown(targetDate)) return;

  // Update every second
  timerId = setInterval(() => {
    if (!updateCountdown(targetDate)) {
      clearInterval(timerId);
    }
  }, 1000);
}
startCountdown("2025.11.28 22:00:00");