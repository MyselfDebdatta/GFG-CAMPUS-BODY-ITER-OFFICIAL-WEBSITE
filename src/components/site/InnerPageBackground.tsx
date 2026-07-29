export function InnerPageBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0D1612]">
      {/* 
        Subtle Organic Texture (Fine Paper Grain / Carbon Fiber feel)
        Using an SVG feTurbulence filter at very low opacity (2-4% contrast)
      */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* 
        Oversized Ambient Light Gradients (Extremely Soft)
        Placed far outside the content area to gently influence the page without bright spots.
      */}
      <div 
        className="absolute -top-[50%] -left-[20%] w-[120vw] h-[120vw] rounded-full bg-[#1D3A2D] blur-[200px] opacity-20 mix-blend-screen"
      />
      <div 
        className="absolute -bottom-[60%] -right-[20%] w-[150vw] h-[150vw] rounded-full bg-[#1D3A2D] blur-[250px] opacity-15 mix-blend-screen"
      />
    </div>
  );
}
