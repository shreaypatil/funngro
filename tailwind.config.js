/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark theme palette
                'dark-bg': '#0B0F14',
                'dark-secondary': '#121826',
                'dark-card': '#1A1F2E',
                'dark-border': '#1F2937',
                'dark-text': '#FFFFFF',
                'dark-text-secondary': '#B0B7C3',

                // Accent colors
                'accent-blue': '#00D2FF',
                'accent-purple': '#6C5CE7',
                'accent-green': '#00E676',

                // Gradient stops
                'gradient-start': '#6C5CE7',
                'gradient-end': '#00D2FF',
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'Inter', 'sans-serif'],
            },
            fontSize: {
                'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
                'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
            },
            borderRadius: {
                'card': '16px',
                'button': '12px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(108, 92, 231, 0.3)',
                'glow-blue': '0 0 20px rgba(0, 210, 255, 0.3)',
                'glow-green': '0 0 20px rgba(0, 230, 118, 0.3)',
                'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #6C5CE7 0%, #00D2FF 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(108, 92, 231, 0.1) 0%, rgba(0, 210, 255, 0.1) 100%)',
                'gradient-radial': 'radial-gradient(circle at center, rgba(108, 92, 231, 0.2) 0%, transparent 70%)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.5s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
