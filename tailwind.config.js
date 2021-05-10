const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.coolGray,
            red: colors.red,
            blue: colors.lightBlue,
            yellow: colors.amber,
            green: colors.emerald,
            white: colors.white
        }
    },
    extend: {
        backgroundImage: theme => ({
            'person-sm': "url('/src/icons/person.svg')",
        })
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
