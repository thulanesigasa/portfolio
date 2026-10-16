export function activeScreenIndex(angle: number, count: number) {
  if (count < 1) throw new RangeError("An orbit needs at least one screen");
  const index = Math.round(-angle / (360 / count));
  return ((index % count) + count) % count;
}
export function stepScreenAngle(
  angle: number,
  count: number,
  direction: number,
) {
  if (count < 1) throw new RangeError("An orbit needs at least one screen");
  const step = 360 / count;
  const next = -(Math.round(-angle / step) + direction) * step;
  return next === 0 ? 0 : next;
}
export function clampScreenTilt(value: number) {
  return Math.max(-24, Math.min(24, value));
}
export function dragScreenRotation(
  angle: number,
  tilt: number,
  dx: number,
  dy: number,
) {
  return { angle: angle + dx * 0.35, tilt: clampScreenTilt(tilt - dy * 0.12) };
}
