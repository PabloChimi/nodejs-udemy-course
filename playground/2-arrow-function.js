// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(3))

const event = {
    name: 'Bityhday Party',
    guestList: ['juan', 'pedro', 'mati'],
    // printGuestList: function () {
    //     console.log('Guest list for ' + this.name)
    // }
    printGuestList() {
        console.log('Guest list for ' + this.name)

        // this.guestList.forEach(function (guest) {
        //     console.log(guest + ' is attending ' + this.name)
        // })
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList();