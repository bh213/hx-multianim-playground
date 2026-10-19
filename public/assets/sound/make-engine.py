"""The Sound demo's engine: three WAVs made from sine harmonics, so the playground ships a
looping take it owns (CC0, as everything in this folder).

  engine_start.wav  0.5 s, the pitch rising into the hum, fading in
  engine_hum.wav    1.0 s, a whole number of cycles of every harmonic, so it loops without a seam
  engine_off.wav    0.7 s, the pitch falling away, fading out

Run from this folder: python make-engine.py
"""
import math
import struct
import wave

RATE = 22050
BASE = 110.0  # Hz, the hum's fundamental
HARMONICS = ((1, 1.0), (2, 0.5), (3, 0.25), (4.02, 0.12), (6, 0.06))  # multiple, level


def write(name, samples):
    with wave.open(name, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(RATE)
        w.writeframes(b"".join(struct.pack("<h", int(max(-1.0, min(1.0, s)) * 32000)) for s in samples))


def tone(seconds, freq_at, level_at):
    """A sum of harmonics whose pitch and level follow two functions of time (0..1)."""
    n = int(RATE * seconds)
    out = []
    phase = 0.0
    for i in range(n):
        t = i / n
        f = freq_at(t)
        phase += 2 * math.pi * f / RATE
        s = sum(a * math.sin(phase * m) for m, a in HARMONICS)
        out.append(s * level_at(t) * 0.35)
    return out


def hum():
    # a whole number of cycles of the fundamental in the second, and every harmonic multiple of it
    # is then whole too (4.02 is rounded to 4 here so the loop closes), so sample n wraps to sample 0
    n = RATE
    out = []
    for i in range(n):
        ph = 2 * math.pi * BASE * i / n * (n / RATE)
        s = sum(a * math.sin(ph * round(m)) for m, a in HARMONICS)
        # a slow throb, also a whole number of cycles over the second
        s *= 0.85 + 0.15 * math.sin(2 * math.pi * 3 * i / n)
        out.append(s * 0.35)
    return out


write("engine_start.wav", tone(0.5, lambda t: BASE * (0.45 + 0.55 * t * t), lambda t: min(1.0, t * 2.5)))
write("engine_hum.wav", hum())
write("engine_off.wav", tone(0.7, lambda t: BASE * (1.0 - 0.6 * t), lambda t: (1 - t) ** 1.5))
print("engine_start.wav, engine_hum.wav, engine_off.wav written")
