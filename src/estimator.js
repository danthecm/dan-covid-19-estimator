const covid19ImpactEstimator = (data) => {
  const input = data;
  const calulating = () => {
    if (input.periodType === 'days')
    return ((input.timeToElapse / 3) ** 2);
        // if (input.periodType === 'weeks') {
        //   const requestedTimeToElapse = (input.timeToElapse / 7) / 3;
        //   const requestedTime = (2 ** requestedTimeToElapse);
        //   return requestedTime;
        // }
        // if (input.periodType === 'months') {
        //   const requestedTimeToElapse = (input.timeToElapse / 30) / 3;
        //   const requestedTime = (2 ** requestedTimeToElapse);
        //   return requestedTime;
        // }
  };
  return {
    data: input,
    impact: {
        currentlyInfected: data.reportedCases * 10,
        infectionsByRequestedTime: Math.trunc((data.reportedCases) * (10) * (calulating()))
    },
    severeImpact: {
        currentlyInfected: data.reportedCases * 50,
        infectionsByRequestedTime: Math.trunc((data.reportedCases) * (50) * (calulating()))
    }
  };
};
export default covid19ImpactEstimator;
