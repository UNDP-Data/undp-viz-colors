declare const UNDPColorModule: {
  graphBackgroundColor: string;
  graphMainColor: string;
  graphGray: string;
  graphNoData: string;

  categoricalColors: {
    colors: [string, string, string, string, string, string, string, string, string, string];
    genderColors: {
      male: string;
      female: string; 
    },
    locationColors: {
      urban: string;
      rural: string; 
    }
  };

  sequentialColors: {
    neutralColorsx04: [string, string, string, string];
    neutralColorsx05: [string, string, string, string, string];
    neutralColorsx06: [string, string, string, string, string, string];
    neutralColorsx07: [string, string, string, string, string, string, string];
    neutralColorsx08: [string, string, string, string, string, string, string, string];
    neutralColorsx09: [string, string, string, string, string, string, string, string, string];
    neutralColorsx10: [string, string, string, string, string, string, string, string, string, string];

    positiveColorsx04: [string, string, string, string];
    positiveColorsx05: [string, string, string, string, string];
    positiveColorsx06: [string, string, string, string, string, string];
    positiveColorsx07: [string, string, string, string, string, string, string];
    positiveColorsx08: [string, string, string, string, string, string, string, string];
    positiveColorsx09: [string, string, string, string, string, string, string, string, string];
    positiveColorsx10: [string, string, string, string, string, string, string, string, string, string];
    
    negativeColorsx04: [string, string, string, string];
    negativeColorsx05: [string, string, string, string, string];
    negativeColorsx06: [string, string, string, string, string, string];
    negativeColorsx07: [string, string, string, string, string, string, string];
    negativeColorsx08: [string, string, string, string, string, string, string, string];
    negativeColorsx09: [string, string, string, string, string, string, string, string, string];
    negativeColorsx10: [string, string, string, string, string, string, string, string, string, string];
  };

  divergentColors: {    
    colorsx04: [string, string, string, string];
    colorsx05: [string, string, string, string, string];
    colorsx06: [string, string, string, string, string, string];
    colorsx07: [string, string, string, string, string, string, string];
    colorsx08: [string, string, string, string, string, string, string, string];
    colorsx09: [string, string, string, string, string, string, string, string, string];
    colorsx10: [string, string, string, string, string, string, string, string, string, string];
    colorsx11: [string, string, string, string, string, string, string, string, string, string, string];
  };

  bivariateColors: {
    colors04x04:[
      [string, string, string, string],
      [string, string, string, string],
      [string, string, string, string],
      [string, string, string, string]
    ];
    colors05x04:[
      [string, string, string, string],
      [string, string, string, string],
      [string, string, string, string],
      [string, string, string, string],
      [string, string, string, string]
    ];
    colors04x05:[
      [string, string, string, string, string],
      [string, string, string, string, string],
      [string, string, string, string, string],
      [string, string, string, string, string]
    ];
    colors05x05:[
      [string, string, string, string, string],
      [string, string, string, string, string],
      [string, string, string, string, string],
      [string, string, string, string, string],
      [string, string, string, string, string]
    ];
  };

  sdgColors: {
    sdg1: string;
    sdg2: string;
    sdg3: string;
    sdg4: string;
    sdg5: string;
    sdg6: string;
    sdg7: string;
    sdg8: string;
    sdg9: string;
    sdg10: string;
    sdg11: string;
    sdg12: string;
    sdg13: string;
    sdg14: string;
    sdg15: string;
    sdg16: string;
    sdg17: string;
  }
};

export default UNDPColorModule;