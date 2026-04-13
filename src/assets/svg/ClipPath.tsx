/**
 * Defines the clipPath used by Benefits cards (id="benefits").
 * Invisible SVG; only the definition is used.
 */
const ClipPath = () => {
  return (
    <svg className="block" width={0} height={0} aria-hidden="true">
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
};

export default ClipPath;
