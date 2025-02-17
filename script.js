import MusicTools from "./MusicTools.js";

document.getElementById("midiToFreq").addEventListener("click", () => {
  const midiPitch = parseFloat(document.getElementById("midiInput").value);
  if (!isNaN(midiPitch)) {
    const frequency = MusicTools.midiPitchToFrequency(midiPitch);
    document.getElementById("freqResult").textContent = frequency.toFixed(2);
  } else {
    document.getElementById("freqResult").textContent = "Invalid Input";
  }
});

document.getElementById("freqToMidi").addEventListener("click", () => {
  const frequency = parseFloat(document.getElementById("freqInput").value);
  if (!isNaN(frequency) && frequency > 0) {
    const midiPitch = MusicTools.frequencyToMidiPitch(frequency);
    document.getElementById("midiResult").textContent = midiPitch.toFixed(2);
  } else {
    document.getElementById("midiResult").textContent = "Invalid Input";
  }
});

document.getElementById("dbfsToLinear").addEventListener("click", () => {
  const dbfs = parseFloat(document.getElementById("dbfsInput").value);
  if (!isNaN(dbfs)) {
    const linear = MusicTools.dbfsToLinearAmplitude(dbfs);
    document.getElementById("linearResult").textContent = linear.toFixed(5);
  } else {
    document.getElementById("linearResult").textContent = "Invalid Input";
  }
});

document.getElementById("linearToDbfs").addEventListener("click", () => {
  const linear = parseFloat(document.getElementById("linearInput").value);
  if (!isNaN(linear) && linear > 0) {
    const dbfs = MusicTools.linearAmplitudeTodBFS(linear);
    document.getElementById("dbfsResult").textContent = dbfs.toFixed(2);
  } else {
    document.getElementById("dbfsResult").textContent = "Invalid Input";
  }
});
