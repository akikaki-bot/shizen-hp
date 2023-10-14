import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
          "focus-in-expand-fwd": "focus-in-expand-fwd 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
          "slide-top": "slide-top 3s ease-in-out  infinite alternate both",
          "slide-top-2": "slide-top 2.6s ease-in-out  infinite alternate both"

      },
      keyframes: {
          "focus-in-expand-fwd": {
              "0%": {
                  "letter-spacing": "-.5em",
                  transform: "translateZ(-800px)",
                  filter: "blur(12px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateZ(0)",
                  filter: "blur(0)",
                  opacity: "1"
              }
          },
          "slide-top": {
            "0%": {
                transform: "translateY(20px)"
            },
            to: {
                transform: "translateY(-20px)"
            }
          },
          "slide-top-2": {
            "0%": {
                transform: "translateY(18px)"
            },
            to: {
                transform: "translateY(-18px)"
            }
        }
      }
    }
  },
  plugins: [],
}
export default config
