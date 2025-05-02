const TransparentIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20L80 20L80 80L20 80L20 20Z"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M30 30L70 30L70 70L30 70L30 30Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M40 40L60 40L60 60L40 60L40 40Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const InnovativeIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="50,15 85,50 50,85 15,50"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
    />
    <polygon
      points="50,25 75,50 50,75 25,50"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const ClientCentricIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="25"
      y="25"
      width="50"
      height="50"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
      transform="rotate(45 50 50)"
    />
    <rect
      x="40"
      y="40"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      transform="rotate(45 50 50)"
    />
  </svg>
);

const ResponsibleIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 70L50 30L70 70L50 50L30 70Z"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M30 30L70 30L70 70L30 70Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export default function AboutSection() {
  return (
    <div className="bg-[#2d3c56] text-white pt-0 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <TransparentIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Transparent
            </h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and
              vision.
            </p>
          </div>
          {/* Value Item 2 */}
          <div className="flex flex-col items-center text-center">
            <InnovativeIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Innovative
            </h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and
              vision.
            </p>
          </div>
          {/* Value Item 3 */}
          <div className="flex flex-col items-center text-center">
            <ClientCentricIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Client-Centric
            </h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and
              vision.
            </p>
          </div>
          {/* Value Item 4 */}
          <div className="flex flex-col items-center text-center">
            <ResponsibleIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Responsible
            </h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and
              vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
