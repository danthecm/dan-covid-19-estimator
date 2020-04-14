const covid19ImpactEstimator = (data) => {
  const input = data;
  const calulating = () => {
    if (input.periodType === 'days') return (2 ** (input.timeToElapse / 3));
    if (input.periodType === 'weeks') return (2 ** ((input.timeToElapse / 7) / 3));
    if (input.periodType === 'months') return (2 ** ((input.timeToElapse / 30) / 3));
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
