/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "p": {
                    "100": "#01539D",
                    "200": "#f4576f",
                    "300": "#01539D"
                },
                "s": "#E0D5BE"
            },
            animation: {
                type: 'type 2s ease-out .8s 1 normal both',
            },
            keyframes: {
                type: {
                    '0%': { width: '0ch' },
                    '5%, 10%': { width: '1ch' },
                    '15%, 20%': { width: '2ch' },
                    '25%, 30%': { width: '3ch' },
                    '35%, 40%': { width: '4ch' },
                    '45%, 50%': { width: '5ch' },
                    '55%, 60%': { width: '6ch' },
                    '65%, 70%': { width: '7ch' },
                    '75%, 80%': { width: '8ch' },
                    '85%, 90%': { width: '9ch' },
                    '95%': { width: '10ch' },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                },
                progress: {
                    "0%": { width: 0 },
                    "100%": { width: "100%" }
                },
                topToBottomSlide: {
                    from: {
                        transform: "translateY(-100%)",
                    },
                    to: {
                        transform: "translate(0%)",
                    }
                },
            },

        },
    },
    plugins: [],
}

