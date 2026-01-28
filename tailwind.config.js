/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    purple: '#4c1d95',
                    cyan: '#22d3ee'
                }
            }
        },
    },
    plugins: [],
}
