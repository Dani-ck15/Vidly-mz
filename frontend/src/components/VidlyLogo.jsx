export default function VidlyLogo({ size = 'md', showText = true }) {
  const sizes = {
    sm: { v: 'text-2xl', text: 'text-lg', container: 'h-8' },
    md: { v: 'text-4xl', text: 'text-2xl', container: 'h-12' },
    lg: { v: 'text-6xl', text: 'text-4xl', container: 'h-16' },
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-2 ${currentSize.container}`}>
      <div className="relative">
        <span 
          className={`font-black ${currentSize.v} bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'italic',
            letterSpacing: '-0.05em'
          }}
        >
          V
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-20 blur-lg"></div>
      </div>
      
      {showText && (
        <span className={`font-bold ${currentSize.text} text-black dark:text-white`}>
          idly
        </span>
      )}
    </div>
  );
}