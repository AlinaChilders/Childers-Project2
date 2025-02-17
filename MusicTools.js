const MusicTools = {
  concertPitch: 440,

  midiPitchToFrequency(midiPitch) {
    return this.concertPitch * Math.pow(2, (midiPitch - 69) / 12);
  },

  frequencyToMidiPitch(frequency) {
    return 12 * Math.log2(frequency / this.concertPitch) + 69;
  },

  dbfsToLinearAmplitude(dbfs) {
    return Math.pow(10, dbfs / 20);
  },

  linearAmplitudeTodBFS(amplitude) {
    return 20 * Math.log10(amplitude);
  },
};

// Export the module
export default MusicTools;
