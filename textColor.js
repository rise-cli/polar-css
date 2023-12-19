import { colors } from './_colors.js'

export const textColors = Object.keys(colors).reduce((a, x) => {
    a[`text-${x}`] =
        x === 'transparent'
            ? `color: ${colors[x]};`
            : `color: rgb(${colors[x]});`
    return a
}, {})
