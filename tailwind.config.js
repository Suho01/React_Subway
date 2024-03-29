/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts}"],
    theme: {
        screens: {
        'sm': {'min': '351px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px'}
        },
        extend: {},
    },
    plugins: [],
}

