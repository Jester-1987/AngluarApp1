// You’ve been tasked with creating a reservation system that people can use to purchase time slots for visiting one of four 
// regional conservation areas. Each time slot is limited to 3 hours, and all four conservation areas are open from 9:00am to 6:00pm.

module.exports = function () {
    return {
        products: [
            { id: 1, area: "Camp Grenada", description: "Very entertaining. We'll have fun when it stops raining...", timeSlot: "9:00 - 12:00", price: 275 },
            { id: 2, area: "Camp Grenada", description: "Very entertaining. We'll have fun when it stops raining...", timeSlot: "12:00 - 15:00", price: 275 },
            { id: 3, area: "Camp Grenada", description: "Very entertaining. We'll have fun when it stops raining...", timeSlot: "15:00 - 18:00", price: 275 },

            { id: 4, area: "Sunshine Springs", description: "Don't forget your sunscreen!", timeSlot: "9:00 - 12:00", price: 300 },
            { id: 5, area: "Sunshine Springs", description: "Don't forget your sunscreen!", timeSlot: "12:00 - 15:00", price: 300 },
            { id: 6, area: "Sunshine Springs", description: "Don't forget your sunscreen!", timeSlot: "15:00 - 18:00", price: 300 },
            
            { id: 7, area: "Shady Pines", description: "Great for the grandparents (NOT A RETIREMENT HOME)", timeSlot: "9:00 - 12:00", price: 325 },
            { id: 8, area: "Shady Pines", description: "Great for the grandparents (NOT A RETIREMENT HOME)", timeSlot: "12:00 - 15:00", price: 325 },
            { id: 9, area: "Shady Pines", description: "Great for the grandparents (NOT A RETIREMENT HOME)", timeSlot: "15:00 - 18:00", price: 325 },
            
            { id: 10, area: "\"Paradise\"", description: "You can check out anytime you like, but you can never leave.", timeSlot: "9:00 - 12:00", price: 350 },
            { id: 11, area: "\"Paradise\"", description: "You can check out anytime you like, but you can never leave.", timeSlot: "12:00 - 15:00", price: 350 },
            { id: 12, area: "\"Paradise\"", description: "You can check out anytime you like, but you can never leave.", timeSlot: "15:00 - 18:00", price: 350 }
           ],
           orders: [] 
       } 
   }