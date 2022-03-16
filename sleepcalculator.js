const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 4;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 7;
      break;
    default: 
    return 'Error!'
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') +
getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = ()  => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
  console.log('Desired sleep obtained!');
} 

else if (actualSleepHours > idealSleepHours) {
  console.log('Too much sleep!');
} 

else if (actualSleepHours < idealSleepHours) {
  console.log('You need more sleep!');
}

else {
  console.log('Error! You may want to check your input.')
}
};

calculateSleepDebt();


   