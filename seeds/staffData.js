const { Staff } = require('../models');

const staffData = [
    {
        staff_name: 'Rebecca Welton',
        nationality: 'eng.png',
        occupation: 'Owner, Chairman',
        former_clubs: 'n/a'  
    },
    {
      staff_name: 'Tedd Lasso',
      nationality: 'us.png',
      occupation: 'Head Coach',
      former_clubs: 'Wichita State Shockers (NCAA Division I-AA)' 
    },
    {
        staff_name: 'Coach Beard',
        nationality: 'us.png',
        occupation: 'Assistant Coach',
        former_clubs: 'Wichita State Shockers (NCAA Division I-AA)' 
    },
    {
        staff_name: 'Nathan Shelley',
        nationality: 'eng.png',
        occupation: 'Assistant Coach',
        former_clubs: 'n/a' 
    }
    
]

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;