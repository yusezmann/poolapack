module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                yellow: '#F9BE00',
                secondary: '#9797AA',
                accent: '#EEF2F5',
                footer: '#383535',
                coklat: '#4B1412',
                sky: '#65AF98'
            },
            spacing: {
                '33': '8.438rem',
                '15': '4rem',
                '17': '4.5rem',
                '18': '24rem',
                '19': '20.313rem',
                '81': '20.5rem',
                '82': '29.875rem',
                '83': '42.rem',
                '84': '40.3rem',
                '85': '45.188rem',
                '86': '54rem',
                '87': '31.5rem',
                '88': '34.6rem',
                '89': '20.5rem',
                '90': '20.5rem',
                '91': '20.5rem',
                '92': '20.5rem',
                '93': '20.5rem',
                '94': '55rem',
                '95': '90rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
