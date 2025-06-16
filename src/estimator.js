const personal = function (data) {
  let calulating;
  if (data.periodType === 'days') return (calulating = 2 ** ((data.timeToElapse) / 3));
};
const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {
      currentlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime: Math.trunc((data.reportedCases) * (10) * personal())
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime: Math.trunc((data.reportedCases) * (50) * 512)
    }
  };
};
export default covid19ImpactEstimator;
