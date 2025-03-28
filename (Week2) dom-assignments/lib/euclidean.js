/**
 *
 * @param {Array<number>} alkupiste geoJSON point-koordinaatit
 * @param {Array<number>} loppupiste geoJSON point-koordinaatit
 * @returns etäisyys alkupisteen ja loppupisteen välillä
 */

export function distance(alkupiste, loppupiste) {
  return Math.sqrt(
    (loppupiste[0] - alkupiste[0]) ** 2 + (loppupiste[1] - alkupiste[1]) ** 2
  );
}
