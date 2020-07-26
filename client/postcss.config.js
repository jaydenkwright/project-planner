const tailwindcss = require('tailwindcss')

module.exports = {
    plugins: [
        tailwindcss('./tailwindjs'),
        require('autoprefixer')
    ]
}