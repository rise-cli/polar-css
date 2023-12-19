import { colors } from './_colors.js'

export const backgroundColors = Object.keys(colors).reduce((a, x) => {
    a[`bg-${x}`] =
        x === 'transparent'
            ? `background-color: ${colors[x]};`
            : `background-color: rgb(${colors[x]});`

    return a
}, {})
