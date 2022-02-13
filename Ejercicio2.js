 // JSON 
 let values =  {
  1: {
      carrier: "CCH",
      service: "DEX",
  },
  17: {
      carrier: "CHP",
      service: "express",
  }
}
// JSON
let json = { 
          data: {
              BUIN: {
                  limit: 1,
                  over_carrier_service_id: 17,
                  under_carrier_service_id: 17
              },
              LAJA: {
                  limit: 1,
                  over_carrier_service_id: 1,
                  under_carrier_service_id: 1
              },
              LEBU: {
                  limit: 1,
                  over_carrier_service_id: 1,
                  under_carrier_service_id: 1
              },
              LOTA: {
                  limit: 1,
                  over_carrier_service_id: 17,
                  under_carrier_service_id: 17
              }
          }
      }

const convertJson = (json, values) => {
    let newObject = {};
    Object.keys(json.data).forEach( name => {
      console.log('name', name);
      let limit = json.data[name].limit
      let over  = json.data[name].over_carrier_service_id
      let under = json.data[name].under_carrier_service_id
      console.log(limit, over, under);
      newObject[name] = {   
        limit: limit,
        over: {
          carrier: values[over].carrier,
          service: values[over].service
        },
        under: {
          carrier: values[under].carrier, 
          service: values[under].service
        }
      }
    });
    return newObject;
}

console.log(convertJson(json, values));