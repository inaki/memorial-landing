/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'Merriweather',
  				'Georgia',
  				'serif'
  			]
  		},
  		colors: {
  			primary: {
  				'50': '#f0f7ff',
  				'100': '#e0eefe',
  				'200': '#bae0fd',
  				'300': '#7cc8fc',
  				'400': '#36aaf7',
  				'500': '#0d8dee',
  				'600': '#0072cb',
  				'700': '#0058a5',
  				'800': '#054a88',
  				'900': '#0a3e71',
  				'950': '#072a50',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#f5f7fa',
  				'100': '#ebeef3',
  				'200': '#d2d9e5',
  				'300': '#acbad0',
  				'400': '#8095b5',
  				'500': '#5e759b',
  				'600': '#485e80',
  				'700': '#3a4b68',
  				'800': '#334058',
  				'900': '#2d384a',
  				'950': '#1c2331',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#fef2f2',
  				'100': '#fde6e6',
  				'200': '#fbd0d0',
  				'300': '#f9a8a8',
  				'400': '#f57373',
  				'500': '#ed4949',
  				'600': '#d92e2e',
  				'700': '#b62020',
  				'800': '#961d1d',
  				'900': '#7c1d1d',
  				'950': '#440c0c',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-out forwards',
  			'slide-up': 'slideUp 0.5s ease-out forwards'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};