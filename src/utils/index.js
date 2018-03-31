const nearest = (count, units) => {
  return count = ~~count, 1 !== count && (units += "s"), count + " " + units;
};

const constants = {
  pageSize: 20
}

function timeFormat(time) {
  const delta = Date.now() / 1000 - time;

  if (delta < 3600) {
    return nearest(delta / 60, "minute");
  }
  if (delta < 86400) {
    return nearest(delta / 3600, "hour");
  }
  return nearest(delta / 86400, "day");
}

function pluralise(howMany, suffixes) {
  return (suffixes || ',s').split(',')[(howMany === 1 ? 0 : 1)]
}

export {
  timeFormat,
  constants,
  pluralise
}
