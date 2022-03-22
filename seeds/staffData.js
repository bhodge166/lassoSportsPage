const { Staff } = require('../models');

const staffData = [
    {
        staff_name: 'Rebecca Welton',
        nationality: 'England',
        occupation: 'Owner, Chairman',
        former_clubs: 'n/a'  
    },
    {
      staff_name: 'Tedd Lasso',
      nationality: 'United States of America',
      occupation: 'Head Coach',
      former_clubs: 'Wichita State Shockers (NCAA Division I-AA)' 
    },
    {
        staff_name: 'Coach Beard',
        nationality: 'United States of America',
        occupation: 'Assistant Coach',
        former_clubs: 'Wichita State Shockers (NCAA Division I-AA)' 
    },
    {
        staff_name: 'Nathan Shelley',
        nationality: 'England',
        occupation: 'Assistant Coach',
        former_clubs: 'n/a' 
    }
    
]

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;