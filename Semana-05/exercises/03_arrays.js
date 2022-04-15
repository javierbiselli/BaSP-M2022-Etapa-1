console.log(`03-Arrays`)

console.log(`Exercise A`);

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(`Months 5 and 11: ${months[4]}, ${months[10]}`)

console.log(`Exercise B`)

months.sort()

console.log(`Array ordered: ${months}`)

console.log(`Exercise C`)

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

months.unshift(`first`)
months.push(`last`)

console.log(`Unshift and push: ${months}`)

console.log(`Exercise D`)

months.shift()
months.pop()

console.log(`Shift and pop: ${months}`)

console.log(`Exercise E`)

months.reverse()

console.log(`Reverse: ${months}`)

console.log(`Exercise F`)

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

newArrayToString = months.join('-')

console.log(`Join: ${newArrayToString}`)

console.log(`Exercise G`)

monthsCopy = months.slice(4,11)

console.log(`Slice from may to november ${monthsCopy}`)