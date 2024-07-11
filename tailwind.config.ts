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
                "slide-top-2": "slide-top 2.6s ease-in-out  infinite alternate both",
                "slide-top-3": "slide-top 2.4s ease-in-out  infinite alternate both",
                "kurukuru-div" : "rotate-90-cw 7.2s infinite both",
                "kurukuru-30-div" : "rotate-30-cw 8s infinite both",
                "fluid-shape": "fluid 10s ease 0s infinite normal",
				"fluid-shape-2": "fluid2 10s ease 0s infinite normal",
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
                },
                "slide-top-3": {
                    "0%": {
                        transform: "translateY(18px)"
                    },
                    to: {
                        transform: "translateY(-18px)"
                    }
                },
                "rotate-90-cw": {
					"0%": {
						"transform": "rotate(0)",
					},
					"50%": {
						"transform": "rotate(90deg)",
					},
					to : {
						"transform": "rotate(180deg)"
					}
				},
                "fluid": {
					"0%": {
						"border-radius": "59% 41% 21% 79% / 62% 53% 47% 38%"
					},
					"50%": {
						"border-radius": "26% 74% 52% 48% / 52% 32% 68% 48%"
					},
					to: {
						"border-radius": "59% 41% 21% 79% / 62% 53% 47% 38%"
					}
				},
				"fluid2": {
					"0%": {
						"border-radius": "49% 80% 21% 79% / 52% 20% 47% 32%"
					},
					"50%": {
						"border-radius": "26% 84% 22% 48% / 32% 70% 90% 48%"
					},
					to: {
						"border-radius": "49% 80% 21% 79% / 52% 20% 47% 32%"
					}
				},
                "rotate-30-cw": {
					"0%": {
						"transform": "rotate(0)",
					},
					"25%": {
						"transform": "rotate(30deg)",
					},
                    "50%": {
						"transform": "rotate(90deg)",
					},
                    "75%": {
						"transform": "rotate(120deg)",
					},
					to : {
						"transform": "rotate(180deg)"
					}
				},
            }
        }
    },
    plugins: [],
}
export default config
