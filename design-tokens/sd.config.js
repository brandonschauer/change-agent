/**
 * Style Dictionary config — Rare Core tokens.
 *
 * Source: W3C DTCG JSON ($value / $type / {alias} refs), split by tier
 *   (primitives → semantic). DTCG format is auto-detected by Style Dictionary v5.
 *
 * Output: plain CSS custom properties under the --rare-* namespace, dot-path
 *   kebab-cased (color.action.primary → --rare-color-action-primary), written to
 *   build/rare-tokens.css. That file is COMMITTED so GitHub Pages serves it as a
 *   static asset (no Node on the host).
 *
 * Transforms are an explicit minimal list rather than the `css` transformGroup so
 * dimension/duration values pass through verbatim (no surprise px→rem rewrites);
 * only colors are normalized. outputReferences keeps the semantic→primitive chain
 * as var() references, so editing one primitive re-themes everything downstream.
 */
export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'color/css'],
      prefix: 'rare',
      buildPath: 'build/',
      files: [
        {
          destination: 'rare-tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
};
