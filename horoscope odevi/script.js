const birthday= Number(prompt("Enter your birthday "));
const birthMonth=prompt ("Enter your birthday month ");

if ((birthMonth == "March" && birthday >= 21) || (birthMonth == "April" && birthday <= 19)) {
  alert("Horoscope:ARIES");
} else if ((birthMonth == "April" && birthday >= 20) || (birthMonth == "May" && birthday <= 20)) {
  alert("Horoscope:TAURUS");
} else if ((birthMonth == "May" && birthday >= 21) || (birthMonth == "June" && birthday <= 20)) {
  alert("Horoscope:GEMINI");
} else if ((birthMonth == "June" && birthday >= 21) || (birthMonth == "July" && birthday <= 22)) {
  alert("Horoscope:CANCER");
} else if ((birthMonth == "July" && birthday >= 23) || (birthMonth == "August" && birthday <= 22)) {
  alert("Horoscope:LEO");
} else if ((birthMonth == "August" && birthday >= 23) || (birthMonth == "September" && birthday <= 22)) {
  alert("Horoscope: VIRGO");
} else if ((birthMonth == "September" && birthday >= 23) || (birthMonth == "October" && birthday <= 22)) {
  alert("Horoscope: LIBRA");
} else if ((birthMonth == "October" && birthday >= 23) || (birthMonth == "November" && birthday <= 21)) {
  alert("Horoscope: SCORPIO");
} else if ((birthMonth == "November" && birthday >= 22) || (birthMonth == "December" && birthday <= 21)) {
  alert("Horoscope: SAGITTARIUS");
} else if ((birthMonth == "December" && birthday >= 22) || (birthMonth == "January" && birthday <= 19)) {
  alert("Horoscope: CAPRICORN");
} else if ((birthMonth == "January" && birthday >= 20) || (birthMonth == "February" && birthday <= 18)) {
  alert("Horoscope: AQUARIUS");
} else {
  alert("Horoscope: PISCES");
}
