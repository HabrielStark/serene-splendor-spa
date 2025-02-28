
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom spa colors
				spa: {
					'ivory': '#F8F4E3',
					'sand': '#E8DBC5',
					'stone': '#B3A590',
					'charcoal': '#4A4A4A',
					'sage': '#BECEB0',
					'moss': '#7D8C75',
					'gold': '#D0B77F',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'mist-float': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0)',
						opacity: '0.4'
					},
					'50%': {
						transform: 'translateY(-20px) translateX(10px)',
						opacity: '0.7'
					}
				},
				'water-ripple': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0.7'
					},
					'50%': {
						transform: 'scale(1)',
						opacity: '0.3'
					},
					'100%': {
						transform: 'scale(1.05)',
						opacity: '0'
					}
				},
				'soft-glow': {
					'0%, 100%': {
						opacity: '0.5',
						filter: 'blur(5px)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'blur(10px)'
					}
				},
				'button-ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '0.5'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-up': 'fade-in 0.7s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'mist-float': 'mist-float 15s ease-in-out infinite',
				'water-ripple': 'water-ripple 3s ease-out infinite',
				'soft-glow': 'soft-glow 4s ease-in-out infinite',
				'button-ripple': 'button-ripple 0.8s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
			},
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
				'serif': ['Cormorant Garamond', 'ui-serif', 'Georgia'],
				'display': ['Playfair Display', 'serif'],
				'handwritten': ['Caveat', 'cursive'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
