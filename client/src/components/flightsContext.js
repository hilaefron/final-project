import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const FlightsContext=createContext('')

const FlightsContextProvider = ({children}) => {
  // {
  //   "status": true,
  //   "message": "Success",
  //   "timestamp": 1676037596767,
  //   "data": [
  //     {
  //       "id": "16995-2303122145--31669,-30667-1-12712-2303131635",
  //       "price": {
  //         "amount": 407.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 3.27291,
  //         "transfer_type": "PROTECTED_SELF_TRANSFER"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122145--31669,-30667-1-12712-2303131635",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:45:00",
  //           "arrival": "2023-03-13T16:35:00",
  //           "duration": 1490,
  //           "carriers": [
  //             {
  //               "id": -31669,
  //               "name": "Wizz Air",
  //               "alt_id": "WZ",
  //               "display_code": "W6",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -30667,
  //               "name": "Norse Atlantic Airways",
  //               "alt_id": "9~",
  //               "display_code": "N0",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13542,
  //               "entity_id": 95565051,
  //               "alt_id": "LGW",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Gatwick",
  //               "type": "Airport",
  //               "display_code": "LGW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 14.857894,
  //       "score": 3.27291,
  //       "totalDuration": 1490
  //     },
  //     {
  //       "id": "16995-2303122130--31915,-31669,-30667-2-12712-2303131635",
  //       "price": {
  //         "amount": 415.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 3.17798,
  //         "transfer_type": "PROTECTED_SELF_TRANSFER"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122130--31915,-31669,-30667-2-12712-2303131635",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:30:00",
  //           "arrival": "2023-03-13T16:35:00",
  //           "duration": 1505,
  //           "carriers": [
  //             {
  //               "id": -31915,
  //               "name": "Ryanair",
  //               "alt_id": "FR",
  //               "display_code": "FR",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -31669,
  //               "name": "Wizz Air",
  //               "alt_id": "WZ",
  //               "display_code": "W6",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -30667,
  //               "name": "Norse Atlantic Airways",
  //               "alt_id": "9~",
  //               "display_code": "N0",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11493,
  //               "entity_id": 95565065,
  //               "alt_id": "FCO",
  //               "parent_id": 6781,
  //               "parent_entity_id": 27539793,
  //               "name": "Rome Fiumicino",
  //               "type": "Airport",
  //               "display_code": "FCO"
  //             },
  //             {
  //               "id": 13542,
  //               "entity_id": 95565051,
  //               "alt_id": "LGW",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Gatwick",
  //               "type": "Airport",
  //               "display_code": "LGW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 6.873435,
  //       "score": 3.17798,
  //       "totalDuration": 1505
  //     },
  //     {
  //       "id": "16995-2303122045--31669,-30667-2-12712-2303131635",
  //       "price": {
  //         "amount": 426.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 3.00592,
  //         "transfer_type": "PROTECTED_SELF_TRANSFER"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122045--31669,-30667-2-12712-2303131635",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:45:00",
  //           "arrival": "2023-03-13T16:35:00",
  //           "duration": 1550,
  //           "carriers": [
  //             {
  //               "id": -31669,
  //               "name": "Wizz Air",
  //               "alt_id": "WZ",
  //               "display_code": "W6",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -30667,
  //               "name": "Norse Atlantic Airways",
  //               "alt_id": "9~",
  //               "display_code": "N0",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11493,
  //               "entity_id": 95565065,
  //               "alt_id": "FCO",
  //               "parent_id": 6781,
  //               "parent_entity_id": 27539793,
  //               "name": "Rome Fiumicino",
  //               "type": "Airport",
  //               "display_code": "FCO"
  //             },
  //             {
  //               "id": 13542,
  //               "entity_id": 95565051,
  //               "alt_id": "LGW",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Gatwick",
  //               "type": "Airport",
  //               "display_code": "LGW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 11.129755,
  //       "score": 3.00592,
  //       "totalDuration": 1550
  //     },
  //     {
  //       "id": "16995-2303122145--30972,-30667-1-12712-2303131635",
  //       "price": {
  //         "amount": 432,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 3.09132,
  //         "transfer_type": "PROTECTED_SELF_TRANSFER"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122145--30972,-30667-1-12712-2303131635",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:45:00",
  //           "arrival": "2023-03-13T16:35:00",
  //           "duration": 1490,
  //           "carriers": [
  //             {
  //               "id": -30972,
  //               "name": "Wizz Air UK",
  //               "alt_id": "~9",
  //               "display_code": "W9",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -30667,
  //               "name": "Norse Atlantic Airways",
  //               "alt_id": "9~",
  //               "display_code": "N0",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13542,
  //               "entity_id": 95565051,
  //               "alt_id": "LGW",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Gatwick",
  //               "type": "Airport",
  //               "display_code": "LGW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 14.857894,
  //       "score": 3.09132,
  //       "totalDuration": 1490
  //     },
  //     {
  //       "id": "16995-2303122220--31669,-32356,-32032-2-12712-2303131550",
  //       "price": {
  //         "amount": 468,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 3.01512,
  //         "transfer_type": "PROTECTED_SELF_TRANSFER"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122220--31669,-32356,-32032-2-12712-2303131550",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T22:20:00",
  //           "arrival": "2023-03-13T15:50:00",
  //           "duration": 1410,
  //           "carriers": [
  //             {
  //               "id": -31669,
  //               "name": "Wizz Air",
  //               "alt_id": "WZ",
  //               "display_code": "W6",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32356,
  //               "name": "easyJet",
  //               "alt_id": "EZ",
  //               "display_code": "EZY",
  //               "display_code_type": "ICAO"
  //             },
  //             {
  //               "id": -32032,
  //               "name": "Neos Air",
  //               "alt_id": "NO",
  //               "display_code": "NO",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 10766,
  //               "entity_id": 95673893,
  //               "alt_id": "CTA",
  //               "parent_id": 1385,
  //               "parent_entity_id": 27540562,
  //               "name": "Catania Fontanarossa",
  //               "type": "Airport",
  //               "display_code": "CTA"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 7.4797335,
  //       "score": 3.01512,
  //       "totalDuration": 1410
  //     },
  //     {
  //       "id": "16995-2303122350--32649,-32415-2-12712-2303131505",
  //       "price": {
  //         "amount": 540.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 2.88479,
  //         "transfer_type": "PROTECTED_SELF_TRANSFER"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122350--32649,-32415-2-12712-2303131505",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T23:50:00",
  //           "arrival": "2023-03-13T15:05:00",
  //           "duration": 1275,
  //           "carriers": [
  //             {
  //               "id": -32649,
  //               "name": "Air Moldova",
  //               "alt_id": "9U",
  //               "display_code": "9U",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32415,
  //               "name": "Condor",
  //               "alt_id": "DE",
  //               "display_code": "DE",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13066,
  //               "entity_id": 95673657,
  //               "alt_id": "KIV",
  //               "parent_id": 4133,
  //               "parent_entity_id": 27543869,
  //               "name": "Chisinau",
  //               "type": "Airport",
  //               "display_code": "KIV"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 6.060356,
  //       "score": 2.88479,
  //       "totalDuration": 1275
  //     },
  //     {
  //       "id": "16995-2303121115--32353-1-12712-2303131440",
  //       "price": {
  //         "amount": 562.11,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.9421,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121115--32353-1-12712-2303131440",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T11:15:00",
  //           "arrival": "2023-03-13T14:40:00",
  //           "duration": 2005,
  //           "carriers": [
  //             {
  //               "id": -32353,
  //               "name": "EgyptAir",
  //               "alt_id": "MS",
  //               "display_code": "MS",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10337,
  //               "entity_id": 104120222,
  //               "alt_id": "CAI",
  //               "parent_id": 1361,
  //               "parent_entity_id": 27539681,
  //               "name": "Cairo",
  //               "type": "Airport",
  //               "display_code": "CAI"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -25.240803,
  //       "score": 1.9421,
  //       "totalDuration": 2005
  //     },
  //     {
  //       "id": "16995-2303121520--31734,-31927-3-12712-2303141655",
  //       "price": {
  //         "amount": 563.97,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.16374,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121520--31734,-31927-3-12712-2303141655",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T15:20:00",
  //           "arrival": "2023-03-14T16:55:00",
  //           "duration": 3335,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             },
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -19.644379,
  //       "score": 1.16374,
  //       "totalDuration": 3335
  //     },
  //     {
  //       "id": "16995-2303121605--32562,-31927-2-12712-2303141655",
  //       "price": {
  //         "amount": 567.32,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.17257,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121605--32562,-31927-2-12712-2303141655",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:05:00",
  //           "arrival": "2023-03-14T16:55:00",
  //           "duration": 3290,
  //           "carriers": [
  //             {
  //               "id": -32562,
  //               "name": "arkia",
  //               "alt_id": "IZ",
  //               "display_code": "IZ",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -4.117751,
  //       "score": 1.17257,
  //       "totalDuration": 3290
  //     },
  //     {
  //       "id": "16995-2303122125--31734,-31927-3-12712-2303141655",
  //       "price": {
  //         "amount": 569.42,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.29425,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122125--31734,-31927-3-12712-2303141655",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:25:00",
  //           "arrival": "2023-03-14T16:55:00",
  //           "duration": 2970,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             },
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -13.433897,
  //       "score": 1.29425,
  //       "totalDuration": 2970
  //     },
  //     {
  //       "id": "16995-2303122010--32756,-31927-3-12712-2303141655",
  //       "price": {
  //         "amount": 574.04,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.25221,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122010--32756,-31927-3-12712-2303141655",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:10:00",
  //           "arrival": "2023-03-14T16:55:00",
  //           "duration": 3045,
  //           "carriers": [
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 10001,
  //               "entity_id": 95673834,
  //               "alt_id": "BLQ",
  //               "parent_id": 1101,
  //               "parent_entity_id": 27539470,
  //               "name": "Bologna International",
  //               "type": "Airport",
  //               "display_code": "BLQ"
  //             },
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -10.802078,
  //       "score": 1.25221,
  //       "totalDuration": 3045
  //     },
  //     {
  //       "id": "16995-2303121615--32352,-32181-2-12712-2303141230",
  //       "price": {
  //         "amount": 575.9,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.26058,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121615--32352,-32181-2-12712-2303141230",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:15:00",
  //           "arrival": "2023-03-14T12:30:00",
  //           "duration": 3015,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32181,
  //               "name": "Air Serbia",
  //               "alt_id": "JU",
  //               "display_code": "JU",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 17517,
  //               "entity_id": 95673444,
  //               "alt_id": "VIE",
  //               "parent_id": 8222,
  //               "parent_entity_id": 27547395,
  //               "name": "Vienna",
  //               "type": "Airport",
  //               "display_code": "VIE"
  //             },
  //             {
  //               "id": 9817,
  //               "entity_id": 95673488,
  //               "alt_id": "BEG",
  //               "parent_id": 879,
  //               "parent_entity_id": 27538720,
  //               "name": "Belgrade Nikola Tesla",
  //               "type": "Airport",
  //               "display_code": "BEG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -43.235565,
  //       "score": 1.26058,
  //       "totalDuration": 3015
  //     },
  //     {
  //       "id": "16995-2303121825--31973,-32181-3-12712-2303141230",
  //       "price": {
  //         "amount": 585.48,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.29583,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121825--31973,-32181-3-12712-2303141230",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:25:00",
  //           "arrival": "2023-03-14T12:30:00",
  //           "duration": 2885,
  //           "carriers": [
  //             {
  //               "id": -31973,
  //               "name": "Pegasus Airlines",
  //               "alt_id": "H9",
  //               "display_code": "PC",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32181,
  //               "name": "Air Serbia",
  //               "alt_id": "JU",
  //               "display_code": "JU",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 16096,
  //               "entity_id": 95673324,
  //               "alt_id": "SAW",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul Sabiha",
  //               "type": "Airport",
  //               "display_code": "SAW"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             },
  //             {
  //               "id": 9817,
  //               "entity_id": 95673488,
  //               "alt_id": "BEG",
  //               "parent_id": 879,
  //               "parent_entity_id": 27538720,
  //               "name": "Belgrade Nikola Tesla",
  //               "type": "Airport",
  //               "display_code": "BEG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -61.294426,
  //       "score": 1.29583,
  //       "totalDuration": 2885
  //     },
  //     {
  //       "id": "16995-2303121135--31808,-32181-3-12712-2303141230",
  //       "price": {
  //         "amount": 603.75,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.10026,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121135--31808,-32181-3-12712-2303141230",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T11:35:00",
  //           "arrival": "2023-03-14T12:30:00",
  //           "duration": 3295,
  //           "carriers": [
  //             {
  //               "id": -31808,
  //               "name": "SunExpress",
  //               "alt_id": "XQ",
  //               "display_code": "XQ",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32181,
  //               "name": "Air Serbia",
  //               "alt_id": "JU",
  //               "display_code": "JU",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 9692,
  //               "entity_id": 95673612,
  //               "alt_id": "AYT",
  //               "parent_id": 540,
  //               "parent_entity_id": 27548233,
  //               "name": "Antalya",
  //               "type": "Airport",
  //               "display_code": "AYT"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             },
  //             {
  //               "id": 9817,
  //               "entity_id": 95673488,
  //               "alt_id": "BEG",
  //               "parent_id": 879,
  //               "parent_entity_id": 27538720,
  //               "name": "Belgrade Nikola Tesla",
  //               "type": "Airport",
  //               "display_code": "BEG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -60.833134,
  //       "score": 1.10026,
  //       "totalDuration": 3295
  //     },
  //     {
  //       "id": "16995-2303122100--31734,-32181-3-12712-2303141230",
  //       "price": {
  //         "amount": 612.2,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.30964,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122100--31734,-32181-3-12712-2303141230",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:00:00",
  //           "arrival": "2023-03-14T12:30:00",
  //           "duration": 2730,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32181,
  //               "name": "Air Serbia",
  //               "alt_id": "JU",
  //               "display_code": "JU",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             },
  //             {
  //               "id": 9817,
  //               "entity_id": 95673488,
  //               "alt_id": "BEG",
  //               "parent_id": 879,
  //               "parent_entity_id": 27538720,
  //               "name": "Belgrade Nikola Tesla",
  //               "type": "Airport",
  //               "display_code": "BEG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -72.75119,
  //       "score": 1.30964,
  //       "totalDuration": 2730
  //     },
  //     {
  //       "id": "16995-2303121730--32352,-31927-2-12712-2303141655",
  //       "price": {
  //         "amount": 612.9,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.11426,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121730--32352,-31927-2-12712-2303141655",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:30:00",
  //           "arrival": "2023-03-14T16:55:00",
  //           "duration": 3205,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.869351,
  //       "score": 1.11426,
  //       "totalDuration": 3205
  //     },
  //     {
  //       "id": "16995-2303120735--31923,-31927-3-12712-2303131855",
  //       "price": {
  //         "amount": 613.13,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.43947,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120735--31923,-31927-3-12712-2303131855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:35:00",
  //           "arrival": "2023-03-13T18:55:00",
  //           "duration": 2480,
  //           "carriers": [
  //             {
  //               "id": -31923,
  //               "name": "Royal Jordanian",
  //               "alt_id": "RJ",
  //               "display_code": "RJ",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 9445,
  //               "entity_id": 95673636,
  //               "alt_id": "AMM",
  //               "parent_id": 503,
  //               "parent_entity_id": 27536451,
  //               "name": "Amman Queen Alia",
  //               "type": "Airport",
  //               "display_code": "AMM"
  //             },
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -22.273052,
  //       "score": 1.43947,
  //       "totalDuration": 2480
  //     },
  //     {
  //       "id": "16995-2303122010--32756,-32181-3-12712-2303141230",
  //       "price": {
  //         "amount": 616.99,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.2761,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122010--32756,-32181-3-12712-2303141230",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:10:00",
  //           "arrival": "2023-03-14T12:30:00",
  //           "duration": 2780,
  //           "carriers": [
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32181,
  //               "name": "Air Serbia",
  //               "alt_id": "JU",
  //               "display_code": "JU",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             },
  //             {
  //               "id": 9817,
  //               "entity_id": 95673488,
  //               "alt_id": "BEG",
  //               "parent_id": 879,
  //               "parent_entity_id": 27538720,
  //               "name": "Belgrade Nikola Tesla",
  //               "type": "Airport",
  //               "display_code": "BEG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -68.84865,
  //       "score": 1.2761,
  //       "totalDuration": 2780
  //     },
  //     {
  //       "id": "16995-2303121220--31734-1-12712-2303122305",
  //       "price": {
  //         "amount": 677.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 3.21667,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121220--31734-1-12712-2303122305",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T12:20:00",
  //           "arrival": "2023-03-12T23:05:00",
  //           "duration": 1005,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -1.1543036,
  //       "score": 3.21667,
  //       "totalDuration": 1005
  //     },
  //     {
  //       "id": "16995-2303122100--31734-1-12712-2303131250",
  //       "price": {
  //         "amount": 677.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 2.46775,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122100--31734-1-12712-2303131250",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:00:00",
  //           "arrival": "2023-03-13T12:50:00",
  //           "duration": 1310,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.0099878,
  //       "score": 2.46775,
  //       "totalDuration": 1310
  //     },
  //     {
  //       "id": "16995-2303121755--31734-1-12712-2303131250",
  //       "price": {
  //         "amount": 689.5,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 2.12339,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121755--31734-1-12712-2303131250",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:55:00",
  //           "arrival": "2023-03-13T12:50:00",
  //           "duration": 1495,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.2831678,
  //       "score": 2.12339,
  //       "totalDuration": 1495
  //     },
  //     {
  //       "id": "16995-2303120520--31799,-31722-1-12712-2303121405",
  //       "price": {
  //         "amount": 704,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 3.51275,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--31799,-31722-1-12712-2303121405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T14:05:00",
  //           "duration": 885,
  //           "carriers": [
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31722,
  //               "name": "United",
  //               "alt_id": "UA",
  //               "display_code": "UA",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 3.1827867,
  //       "score": 3.51275,
  //       "totalDuration": 885
  //     },
  //     {
  //       "id": "16995-2303120520--31799-1-12712-2303121405",
  //       "price": {
  //         "amount": 706,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 3.50314,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--31799-1-12712-2303121405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T14:05:00",
  //           "duration": 885,
  //           "carriers": [
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 3.1827867,
  //       "score": 3.50314,
  //       "totalDuration": 885
  //     },
  //     {
  //       "id": "16995-2303122125--31734-1-12712-2303131250",
  //       "price": {
  //         "amount": 735.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 2.31726,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122125--31734-1-12712-2303131250",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:25:00",
  //           "arrival": "2023-03-13T12:50:00",
  //           "duration": 1285,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.2831678,
  //       "score": 2.31726,
  //       "totalDuration": 1285
  //     },
  //     {
  //       "id": "16995-2303120800--32090,-32415-1-12712-2303131505",
  //       "price": {
  //         "amount": 754.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:44:00",
  //         "quote_age": 76,
  //         "score": 1.30301,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120800--32090,-32415-1-12712-2303131505",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T08:00:00",
  //           "arrival": "2023-03-13T15:05:00",
  //           "duration": 2225,
  //           "carriers": [
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32415,
  //               "name": "Condor",
  //               "alt_id": "DE",
  //               "display_code": "DE",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 18.139284,
  //       "score": 1.30301,
  //       "totalDuration": 2225
  //     },
  //     {
  //       "id": "16995-2303122345--32348-1-12712-2303131425",
  //       "price": {
  //         "amount": 766.3,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:44:00",
  //         "quote_age": 76,
  //         "score": 2.30326,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122345--32348-1-12712-2303131425",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T23:45:00",
  //           "arrival": "2023-03-13T14:25:00",
  //           "duration": 1240,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -61.214985,
  //       "score": 2.30326,
  //       "totalDuration": 1240
  //     },
  //     {
  //       "id": "16995-2303121825--32348-1-12712-2303130850",
  //       "price": {
  //         "amount": 766.3,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:44:00",
  //         "quote_age": 76,
  //         "score": 2.33169,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121825--32348-1-12712-2303130850",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:25:00",
  //           "arrival": "2023-03-13T08:50:00",
  //           "duration": 1225,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -68.15713,
  //       "score": 2.33169,
  //       "totalDuration": 1225
  //     },
  //     {
  //       "id": "16995-2303120100--31734-1-12712-2303121250",
  //       "price": {
  //         "amount": 778.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:44:00",
  //         "quote_age": 76,
  //         "score": 2.62908,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120100--31734-1-12712-2303121250",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T01:00:00",
  //           "arrival": "2023-03-12T12:50:00",
  //           "duration": 1070,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.2831678,
  //       "score": 2.62908,
  //       "totalDuration": 1070
  //     },
  //     {
  //       "id": "16995-2303122010--32756,-31927-3-12712-2303131855",
  //       "price": {
  //         "amount": 782.65,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.62125,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122010--32756,-31927-3-12712-2303131855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:10:00",
  //           "arrival": "2023-03-13T18:55:00",
  //           "duration": 1725,
  //           "carriers": [
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 10337,
  //               "entity_id": 104120222,
  //               "alt_id": "CAI",
  //               "parent_id": 1361,
  //               "parent_entity_id": 27539681,
  //               "name": "Cairo",
  //               "type": "Airport",
  //               "display_code": "CAI"
  //             },
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -18.46944,
  //       "score": 1.62125,
  //       "totalDuration": 1725
  //     },
  //     {
  //       "id": "16995-2303121520--31734-1-12712-2303131925",
  //       "price": {
  //         "amount": 791.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 1.35143,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121520--31734-1-12712-2303131925",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T15:20:00",
  //           "arrival": "2023-03-13T19:25:00",
  //           "duration": 2045,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.2831678,
  //       "score": 1.35143,
  //       "totalDuration": 2045
  //     },
  //     {
  //       "id": "16995-2303121135--32093-1-12712-2303122135",
  //       "price": {
  //         "amount": 793.9,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 2.8719,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121135--32093-1-12712-2303122135",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T11:35:00",
  //           "arrival": "2023-03-12T21:35:00",
  //           "duration": 960,
  //           "carriers": [
  //             {
  //               "id": -32093,
  //               "name": "LOT",
  //               "alt_id": "LO",
  //               "display_code": "LO",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 17648,
  //               "entity_id": 95673438,
  //               "alt_id": "WAW",
  //               "parent_id": 8336,
  //               "parent_entity_id": 27547454,
  //               "name": "Warsaw Chopin",
  //               "type": "Airport",
  //               "display_code": "WAW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -0.3040552,
  //       "score": 2.8719,
  //       "totalDuration": 960
  //     },
  //     {
  //       "id": "16995-2303122345--32348-2-12712-2303131855",
  //       "price": {
  //         "amount": 797.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:44:00",
  //         "quote_age": 76,
  //         "score": 1.81635,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122345--32348-2-12712-2303131855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T23:45:00",
  //           "arrival": "2023-03-13T18:55:00",
  //           "duration": 1510,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -62.90935,
  //       "score": 1.81635,
  //       "totalDuration": 1510
  //     },
  //     {
  //       "id": "16995-2303122100--31734,-32217-3-12712-2303131910",
  //       "price": {
  //         "amount": 803.38,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.61212,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122100--31734,-32217-3-12712-2303131910",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:00:00",
  //           "arrival": "2023-03-13T19:10:00",
  //           "duration": 1690,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32217,
  //               "name": "Icelandair",
  //               "alt_id": "FI",
  //               "display_code": "FI",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             },
  //             {
  //               "id": 9828,
  //               "entity_id": 95673383,
  //               "alt_id": "BER",
  //               "parent_id": 891,
  //               "parent_entity_id": 27547053,
  //               "name": "Berlin Brandenburg",
  //               "type": "Airport",
  //               "display_code": "BER"
  //             },
  //             {
  //               "id": 12974,
  //               "entity_id": 128667498,
  //               "alt_id": "KEF",
  //               "parent_id": 6682,
  //               "parent_entity_id": 27543786,
  //               "name": "Reykjavik Keflavik",
  //               "type": "Airport",
  //               "display_code": "KEF"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -21.504234,
  //       "score": 1.61212,
  //       "totalDuration": 1690
  //     },
  //     {
  //       "id": "16995-2303121735--32352,-32353-2-12712-2303131440",
  //       "price": {
  //         "amount": 807.43,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.6682,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121735--32352,-32353-2-12712-2303131440",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:35:00",
  //           "arrival": "2023-03-13T14:40:00",
  //           "duration": 1625,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32353,
  //               "name": "EgyptAir",
  //               "alt_id": "MS",
  //               "display_code": "MS",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             },
  //             {
  //               "id": 10337,
  //               "entity_id": 104120222,
  //               "alt_id": "CAI",
  //               "parent_id": 1361,
  //               "parent_entity_id": 27539681,
  //               "name": "Cairo",
  //               "type": "Airport",
  //               "display_code": "CAI"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -69.35982,
  //       "score": 1.6682,
  //       "totalDuration": 1625
  //     },
  //     {
  //       "id": "16995-2303121550--32352-0-12712-2303122150",
  //       "price": {
  //         "amount": 808.8,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:48",
  //         "quote_age": 76,
  //         "score": 3.75866,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121550--32352-0-12712-2303122150",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T15:50:00",
  //           "arrival": "2023-03-12T21:50:00",
  //           "duration": 720,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 0,
  //           "stops": []
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 14.89737,
  //       "score": 3.75866,
  //       "totalDuration": 720
  //     },
  //     {
  //       "id": "16995-2303122125--31734,-32217-3-12712-2303131910",
  //       "price": {
  //         "amount": 808.84,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.62528,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122125--31734,-32217-3-12712-2303131910",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T21:25:00",
  //           "arrival": "2023-03-13T19:10:00",
  //           "duration": 1665,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32217,
  //               "name": "Icelandair",
  //               "alt_id": "FI",
  //               "display_code": "FI",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 3,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             },
  //             {
  //               "id": 9828,
  //               "entity_id": 95673383,
  //               "alt_id": "BER",
  //               "parent_id": 891,
  //               "parent_entity_id": 27547053,
  //               "name": "Berlin Brandenburg",
  //               "type": "Airport",
  //               "display_code": "BER"
  //             },
  //             {
  //               "id": 12974,
  //               "entity_id": 128667498,
  //               "alt_id": "KEF",
  //               "parent_id": 6682,
  //               "parent_entity_id": 27543786,
  //               "name": "Reykjavik Keflavik",
  //               "type": "Airport",
  //               "display_code": "KEF"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -21.777416,
  //       "score": 1.62528,
  //       "totalDuration": 1665
  //     },
  //     {
  //       "id": "16995-2303122005--32093-2-12712-2303132135",
  //       "price": {
  //         "amount": 812.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 1.42449,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122005--32093-2-12712-2303132135",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:05:00",
  //           "arrival": "2023-03-13T21:35:00",
  //           "duration": 1890,
  //           "carriers": [
  //             {
  //               "id": -32093,
  //               "name": "LOT",
  //               "alt_id": "LO",
  //               "display_code": "LO",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13235,
  //               "entity_id": 95673613,
  //               "alt_id": "KRK",
  //               "parent_id": 4281,
  //               "parent_entity_id": 27543787,
  //               "name": "Krakow",
  //               "type": "Airport",
  //               "display_code": "KRK"
  //             },
  //             {
  //               "id": 17648,
  //               "entity_id": 95673438,
  //               "alt_id": "WAW",
  //               "parent_id": 8336,
  //               "parent_entity_id": 27547454,
  //               "name": "Warsaw Chopin",
  //               "type": "Airport",
  //               "display_code": "WAW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -6.5802813,
  //       "score": 1.42449,
  //       "totalDuration": 1890
  //     },
  //     {
  //       "id": "16995-2303121825--32348-2-12712-2303131855",
  //       "price": {
  //         "amount": 813.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 1.46942,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121825--32348-2-12712-2303131855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:25:00",
  //           "arrival": "2023-03-13T18:55:00",
  //           "duration": 1830,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -69.851494,
  //       "score": 1.46942,
  //       "totalDuration": 1830
  //     },
  //     {
  //       "id": "16995-2303120810--31927-1-12712-2303121855",
  //       "price": {
  //         "amount": 816,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:49",
  //         "quote_age": 76,
  //         "score": 2.66901,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120810--31927-1-12712-2303121855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T08:10:00",
  //           "arrival": "2023-03-12T18:55:00",
  //           "duration": 1005,
  //           "carriers": [
  //             {
  //               "id": -31927,
  //               "name": "Royal Air Maroc",
  //               "alt_id": "AT",
  //               "display_code": "AT",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10622,
  //               "entity_id": 95673387,
  //               "alt_id": "CMN",
  //               "parent_id": 1382,
  //               "parent_entity_id": 27539689,
  //               "name": "Casablanca Mohamed V.",
  //               "type": "Airport",
  //               "display_code": "CMN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -0.266397,
  //       "score": 2.66901,
  //       "totalDuration": 1005
  //     },
  //     {
  //       "id": "16995-2303121555--32677-1-12712-2303131150",
  //       "price": {
  //         "amount": 825,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 1.70617,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121555--32677-1-12712-2303131150",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T15:55:00",
  //           "arrival": "2023-03-13T11:50:00",
  //           "duration": 1555,
  //           "carriers": [
  //             {
  //               "id": -32677,
  //               "name": "Air France",
  //               "alt_id": "AF",
  //               "display_code": "AF",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 6.831318,
  //       "score": 1.70617,
  //       "totalDuration": 1555
  //     },
  //     {
  //       "id": "16995-2303120520--32093-1-12712-2303122135",
  //       "price": {
  //         "amount": 827.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-09T16:39:32",
  //         "quote_age": 1280,
  //         "score": 1.98021,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--32093-1-12712-2303122135",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T21:35:00",
  //           "duration": 1335,
  //           "carriers": [
  //             {
  //               "id": -32093,
  //               "name": "LOT",
  //               "alt_id": "LO",
  //               "display_code": "LO",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 17648,
  //               "entity_id": 95673438,
  //               "alt_id": "WAW",
  //               "parent_id": 8336,
  //               "parent_entity_id": 27547454,
  //               "name": "Warsaw Chopin",
  //               "type": "Airport",
  //               "display_code": "WAW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -0.3040552,
  //       "score": 1.98021,
  //       "totalDuration": 1335
  //     },
  //     {
  //       "id": "16995-2303122010--32756,-32353-2-12712-2303131440",
  //       "price": {
  //         "amount": 851.12,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.74944,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122010--32756,-32353-2-12712-2303131440",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:10:00",
  //           "arrival": "2023-03-13T14:40:00",
  //           "duration": 1470,
  //           "carriers": [
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32353,
  //               "name": "EgyptAir",
  //               "alt_id": "MS",
  //               "display_code": "MS",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 10337,
  //               "entity_id": 104120222,
  //               "alt_id": "CAI",
  //               "parent_id": 1361,
  //               "parent_entity_id": 27539681,
  //               "name": "Cairo",
  //               "type": "Airport",
  //               "display_code": "CAI"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -44.69756,
  //       "score": 1.74944,
  //       "totalDuration": 1470
  //     },
  //     {
  //       "id": "16995-2303121030--31734-1-12712-2303121925",
  //       "price": {
  //         "amount": 894.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 2.73253,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121030--31734-1-12712-2303121925",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T10:30:00",
  //           "arrival": "2023-03-12T19:25:00",
  //           "duration": 895,
  //           "carriers": [
  //             {
  //               "id": -31734,
  //               "name": "Turkish Airlines",
  //               "alt_id": "TK",
  //               "display_code": "TK",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12585,
  //               "entity_id": 95673323,
  //               "alt_id": "IST",
  //               "parent_id": 3637,
  //               "parent_entity_id": 27542903,
  //               "name": "Istanbul",
  //               "type": "Airport",
  //               "display_code": "IST"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -13.704419,
  //       "score": 2.73253,
  //       "totalDuration": 895
  //     },
  //     {
  //       "id": "16995-2303121240--32348-2-12712-2303131855",
  //       "price": {
  //         "amount": 903.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 1.11314,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121240--32348-2-12712-2303131855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T12:40:00",
  //           "arrival": "2023-03-13T18:55:00",
  //           "duration": 2175,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -62.90935,
  //       "score": 1.11314,
  //       "totalDuration": 2175
  //     },
  //     {
  //       "id": "16995-2303121240--32348-1-12712-2303130850",
  //       "price": {
  //         "amount": 903.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 1.54209,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121240--32348-1-12712-2303130850",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T12:40:00",
  //           "arrival": "2023-03-13T08:50:00",
  //           "duration": 1570,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -61.214985,
  //       "score": 1.54209,
  //       "totalDuration": 1570
  //     },
  //     {
  //       "id": "16995-2303121755--31923,-32353-2-12712-2303131440",
  //       "price": {
  //         "amount": 910.08,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.49848,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121755--31923,-32353-2-12712-2303131440",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:55:00",
  //           "arrival": "2023-03-13T14:40:00",
  //           "duration": 1605,
  //           "carriers": [
  //             {
  //               "id": -31923,
  //               "name": "Royal Jordanian",
  //               "alt_id": "RJ",
  //               "display_code": "RJ",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32353,
  //               "name": "EgyptAir",
  //               "alt_id": "MS",
  //               "display_code": "MS",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9445,
  //               "entity_id": 95673636,
  //               "alt_id": "AMM",
  //               "parent_id": 503,
  //               "parent_entity_id": 27536451,
  //               "name": "Amman Queen Alia",
  //               "type": "Airport",
  //               "display_code": "AMM"
  //             },
  //             {
  //               "id": 10337,
  //               "entity_id": 104120222,
  //               "alt_id": "CAI",
  //               "parent_id": 1361,
  //               "parent_entity_id": 27539681,
  //               "name": "Cairo",
  //               "type": "Airport",
  //               "display_code": "CAI"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -37.24904,
  //       "score": 1.49848,
  //       "totalDuration": 1605
  //     },
  //     {
  //       "id": "16995-2303121210--32257-2-12712-2303131650",
  //       "price": {
  //         "amount": 923.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 1.13876,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121210--32257-2-12712-2303131650",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T12:10:00",
  //           "arrival": "2023-03-13T16:50:00",
  //           "duration": 2080,
  //           "carriers": [
  //             {
  //               "id": -32257,
  //               "name": "Gulf Air",
  //               "alt_id": "GF",
  //               "display_code": "GF",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9715,
  //               "entity_id": 95673610,
  //               "alt_id": "BAH",
  //               "parent_id": 764,
  //               "parent_entity_id": 27548245,
  //               "name": "Bahrain",
  //               "type": "Airport",
  //               "display_code": "BAH"
  //             },
  //             {
  //               "id": 9618,
  //               "entity_id": 95673509,
  //               "alt_id": "AUH",
  //               "parent_id": 676,
  //               "parent_entity_id": 27548192,
  //               "name": "Abu Dhabi International",
  //               "type": "Airport",
  //               "display_code": "AUH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -24.815845,
  //       "score": 1.13876,
  //       "totalDuration": 2080
  //     },
  //     {
  //       "id": "16995-2303121705--32352,-32090,-32415-2-12712-2303131505",
  //       "price": {
  //         "amount": 943.05,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.38154,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121705--32352,-32090,-32415-2-12712-2303131505",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:05:00",
  //           "arrival": "2023-03-13T15:05:00",
  //           "duration": 1680,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32415,
  //               "name": "Condor",
  //               "alt_id": "DE",
  //               "display_code": "DE",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.677102,
  //       "score": 1.38154,
  //       "totalDuration": 1680
  //     },
  //     {
  //       "id": "16995-2303121605--32680,-32090,-32415-2-12712-2303131505",
  //       "price": {
  //         "amount": 949.6,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.3247,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121605--32680,-32090,-32415-2-12712-2303131505",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:05:00",
  //           "arrival": "2023-03-13T15:05:00",
  //           "duration": 1740,
  //           "carriers": [
  //             {
  //               "id": -32680,
  //               "name": "Air Europa",
  //               "alt_id": "UX",
  //               "display_code": "UX",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32415,
  //               "name": "Condor",
  //               "alt_id": "DE",
  //               "display_code": "DE",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.3929954,
  //       "score": 1.3247,
  //       "totalDuration": 1740
  //     },
  //     {
  //       "id": "16995-2303121340--32339-1-12712-2303131650",
  //       "price": {
  //         "amount": 965.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.13865,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121340--32339-1-12712-2303131650",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T13:40:00",
  //           "arrival": "2023-03-13T16:50:00",
  //           "duration": 1990,
  //           "carriers": [
  //             {
  //               "id": -32339,
  //               "name": "Etihad Airways",
  //               "alt_id": "60",
  //               "display_code": "EY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 9618,
  //               "entity_id": 95673509,
  //               "alt_id": "AUH",
  //               "parent_id": 676,
  //               "parent_entity_id": 27548192,
  //               "name": "Abu Dhabi International",
  //               "type": "Airport",
  //               "display_code": "AUH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -19.0351,
  //       "score": 1.13865,
  //       "totalDuration": 1990
  //     },
  //     {
  //       "id": "16995-2303120530--31781-1-12712-2303122105",
  //       "price": {
  //         "amount": 968.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 1.74428,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120530--31781-1-12712-2303122105",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:30:00",
  //           "arrival": "2023-03-12T21:05:00",
  //           "duration": 1295,
  //           "carriers": [
  //             {
  //               "id": -31781,
  //               "name": "TAP Air Portugal",
  //               "alt_id": "TP",
  //               "display_code": "TP",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13577,
  //               "entity_id": 95565055,
  //               "alt_id": "LIS",
  //               "parent_id": 4609,
  //               "parent_entity_id": 27544072,
  //               "name": "Lisbon",
  //               "type": "Airport",
  //               "display_code": "LIS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -8.142686,
  //       "score": 1.74428,
  //       "totalDuration": 1295
  //     },
  //     {
  //       "id": "16995-2303120105--32352,-32171-1-12712-2303122039",
  //       "price": {
  //         "amount": 973.83,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.4652,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120105--32352,-32171-1-12712-2303122039",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T01:05:00",
  //           "arrival": "2023-03-12T20:39:00",
  //           "duration": 1534,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32171,
  //               "name": "jetBlue",
  //               "alt_id": "B6",
  //               "display_code": "B6",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10081,
  //               "entity_id": 95673679,
  //               "alt_id": "BOS",
  //               "parent_id": 1111,
  //               "parent_entity_id": 27539525,
  //               "name": "Boston Logan International",
  //               "type": "Airport",
  //               "display_code": "BOS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.647701,
  //       "score": 1.4652,
  //       "totalDuration": 1534
  //     },
  //     {
  //       "id": "16995-2303121555--32677,-32090,-32415-2-12712-2303131505",
  //       "price": {
  //         "amount": 978.55,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.27816,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121555--32677,-32090,-32415-2-12712-2303131505",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T15:55:00",
  //           "arrival": "2023-03-13T15:05:00",
  //           "duration": 1750,
  //           "carriers": [
  //             {
  //               "id": -32677,
  //               "name": "Air France",
  //               "alt_id": "AF",
  //               "display_code": "AF",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32415,
  //               "name": "Condor",
  //               "alt_id": "DE",
  //               "display_code": "DE",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 7.5671015,
  //       "score": 1.27816,
  //       "totalDuration": 1750
  //     },
  //     {
  //       "id": "16995-2303120045--32352-0-12712-2303120645",
  //       "price": {
  //         "amount": 996.3,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 3.05129,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120045--32352-0-12712-2303120645",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T00:45:00",
  //           "arrival": "2023-03-12T06:45:00",
  //           "duration": 720,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 0,
  //           "stops": []
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 14.89737,
  //       "score": 3.05129,
  //       "totalDuration": 720
  //     },
  //     {
  //       "id": "16995-2303121610--32478,-32415-2-12712-2303131505",
  //       "price": {
  //         "amount": 1000.18,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.26133,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121610--32478,-32415-2-12712-2303131505",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:10:00",
  //           "arrival": "2023-03-13T15:05:00",
  //           "duration": 1735,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32415,
  //               "name": "Condor",
  //               "alt_id": "DE",
  //               "display_code": "DE",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 4.148144,
  //       "score": 1.26133,
  //       "totalDuration": 1735
  //     },
  //     {
  //       "id": "16995-2303120515--32478-1-12712-2303121420",
  //       "price": {
  //         "amount": 1037.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 2.33004,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32478-1-12712-2303121420",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T14:20:00",
  //           "duration": 905,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -17.313158,
  //       "score": 2.33004,
  //       "totalDuration": 905
  //     },
  //     {
  //       "id": "16995-2303120520--32090-1-12712-2303121455",
  //       "price": {
  //         "amount": 1037.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 2.25528,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--32090-1-12712-2303121455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T14:55:00",
  //           "duration": 935,
  //           "carriers": [
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -3.953588,
  //       "score": 2.25528,
  //       "totalDuration": 935
  //     },
  //     {
  //       "id": "16995-2303120735--31923,-32348-2-12712-2303130850",
  //       "price": {
  //         "amount": 1039.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 1.12314,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120735--31923,-32348-2-12712-2303130850",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:35:00",
  //           "arrival": "2023-03-13T08:50:00",
  //           "duration": 1875,
  //           "carriers": [
  //             {
  //               "id": -31923,
  //               "name": "Royal Jordanian",
  //               "alt_id": "RJ",
  //               "display_code": "RJ",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9445,
  //               "entity_id": 95673636,
  //               "alt_id": "AMM",
  //               "parent_id": 503,
  //               "parent_entity_id": 27536451,
  //               "name": "Amman Queen Alia",
  //               "type": "Airport",
  //               "display_code": "AMM"
  //             },
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -71.59259,
  //       "score": 1.12314,
  //       "totalDuration": 1875
  //     },
  //     {
  //       "id": "16995-2303120700--32090-1-12712-2303121640",
  //       "price": {
  //         "amount": 1043.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 2.2304,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120700--32090-1-12712-2303121640",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:00:00",
  //           "arrival": "2023-03-12T16:40:00",
  //           "duration": 940,
  //           "carriers": [
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 14385,
  //               "entity_id": 95673491,
  //               "alt_id": "MUC",
  //               "parent_id": 5363,
  //               "parent_entity_id": 27545034,
  //               "name": "Munich",
  //               "type": "Airport",
  //               "display_code": "MUC"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -15.273929,
  //       "score": 2.2304,
  //       "totalDuration": 940
  //     },
  //     {
  //       "id": "16995-2303121820--31799-1-12712-2303131405",
  //       "price": {
  //         "amount": 1045.85,
  //         "update_status": "current",
  //         "last_updated": "2023-02-09T20:17:46",
  //         "quote_age": 1062,
  //         "score": 1.35459,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121820--31799-1-12712-2303131405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:20:00",
  //           "arrival": "2023-03-13T14:05:00",
  //           "duration": 1545,
  //           "carriers": [
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -0.29662848,
  //       "score": 1.35459,
  //       "totalDuration": 1545
  //     },
  //     {
  //       "id": "16995-2303120520--32478-1-12712-2303121455",
  //       "price": {
  //         "amount": 1055.13,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 2.2182,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--32478-1-12712-2303121455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T14:55:00",
  //           "duration": 935,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -3.953588,
  //       "score": 2.2182,
  //       "totalDuration": 935
  //     },
  //     {
  //       "id": "16995-2303120515--32478,-31722-1-12712-2303121420",
  //       "price": {
  //         "amount": 1082.35,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 2.23432,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32478,-31722-1-12712-2303121420",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T14:20:00",
  //           "duration": 905,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31722,
  //               "name": "United",
  //               "alt_id": "UA",
  //               "display_code": "UA",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -17.313158,
  //       "score": 2.23432,
  //       "totalDuration": 905
  //     },
  //     {
  //       "id": "16995-2303120800--32478-1-12712-2303131455",
  //       "price": {
  //         "amount": 1086.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.90891,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120800--32478-1-12712-2303131455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T08:00:00",
  //           "arrival": "2023-03-13T14:55:00",
  //           "duration": 2215,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -3.953588,
  //       "score": 0.90891,
  //       "totalDuration": 2215
  //     },
  //     {
  //       "id": "16995-2303121820--31799-2-12712-2303131540",
  //       "price": {
  //         "amount": 1095.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 1.21774,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121820--31799-2-12712-2303131540",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:20:00",
  //           "arrival": "2023-03-13T15:40:00",
  //           "duration": 1640,
  //           "carriers": [
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             },
  //             {
  //               "id": 12015,
  //               "entity_id": 95674055,
  //               "alt_id": "GVA",
  //               "parent_id": 2835,
  //               "parent_entity_id": 33735985,
  //               "name": "Geneva",
  //               "type": "Airport",
  //               "display_code": "GVA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -19.637608,
  //       "score": 1.21774,
  //       "totalDuration": 1640
  //     },
  //     {
  //       "id": "16995-2303121820--31799,-31722-1-12712-2303131405",
  //       "price": {
  //         "amount": 1097,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 1.2913,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121820--31799,-31722-1-12712-2303131405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:20:00",
  //           "arrival": "2023-03-13T14:05:00",
  //           "duration": 1545,
  //           "carriers": [
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31722,
  //               "name": "United",
  //               "alt_id": "UA",
  //               "display_code": "UA",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -0.29662848,
  //       "score": 1.2913,
  //       "totalDuration": 1545
  //     },
  //     {
  //       "id": "16995-2303121720--32090-2-12712-2303131420",
  //       "price": {
  //         "amount": 1101.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 1.22582,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121720--32090-2-12712-2303131420",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:20:00",
  //           "arrival": "2023-03-13T14:20:00",
  //           "duration": 1620,
  //           "carriers": [
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 14385,
  //               "entity_id": 95673491,
  //               "alt_id": "MUC",
  //               "parent_id": 5363,
  //               "parent_entity_id": 27545034,
  //               "name": "Munich",
  //               "type": "Airport",
  //               "display_code": "MUC"
  //             },
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -19.471622,
  //       "score": 1.22582,
  //       "totalDuration": 1620
  //     },
  //     {
  //       "id": "16995-2303120520--32090,-31722-1-12712-2303121455",
  //       "price": {
  //         "amount": 1102,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 2.12407,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--32090,-31722-1-12712-2303121455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T14:55:00",
  //           "duration": 935,
  //           "carriers": [
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31722,
  //               "name": "United",
  //               "alt_id": "UA",
  //               "display_code": "UA",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -3.953588,
  //       "score": 2.12407,
  //       "totalDuration": 935
  //     },
  //     {
  //       "id": "16995-2303120515--32478-2-12712-2303131640",
  //       "price": {
  //         "amount": 1106.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.79618,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32478-2-12712-2303131640",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-13T16:40:00",
  //           "duration": 2485,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             },
  //             {
  //               "id": 14385,
  //               "entity_id": 95673491,
  //               "alt_id": "MUC",
  //               "parent_id": 5363,
  //               "parent_entity_id": 27545034,
  //               "name": "Munich",
  //               "type": "Airport",
  //               "display_code": "MUC"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 0,
  //       "score": 0.79618,
  //       "totalDuration": 2485
  //     },
  //     {
  //       "id": "16995-2303121610--32478-2-12712-2303131455",
  //       "price": {
  //         "amount": 1110.47,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.14253,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121610--32478-2-12712-2303131455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:10:00",
  //           "arrival": "2023-03-13T14:55:00",
  //           "duration": 1725,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -17.944729,
  //       "score": 1.14253,
  //       "totalDuration": 1725
  //     },
  //     {
  //       "id": "16995-2303120520--32090-2-12712-2303121640",
  //       "price": {
  //         "amount": 1111.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.89405,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--32090-2-12712-2303121640",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T16:40:00",
  //           "duration": 1040,
  //           "carriers": [
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             },
  //             {
  //               "id": 14385,
  //               "entity_id": 95673491,
  //               "alt_id": "MUC",
  //               "parent_id": 5363,
  //               "parent_entity_id": 27545034,
  //               "name": "Munich",
  //               "type": "Airport",
  //               "display_code": "MUC"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -25.026262,
  //       "score": 1.89405,
  //       "totalDuration": 1040
  //     },
  //     {
  //       "id": "16995-2303121625--32478-2-12712-2303131420",
  //       "price": {
  //         "amount": 1121.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.1654,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121625--32478-2-12712-2303131420",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:25:00",
  //           "arrival": "2023-03-13T14:20:00",
  //           "duration": 1675,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             },
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -17.254852,
  //       "score": 1.1654,
  //       "totalDuration": 1675
  //     },
  //     {
  //       "id": "16995-2303120105--32352,-32171-1-12712-2303121254",
  //       "price": {
  //         "amount": 1121.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 1.82624,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120105--32352,-32171-1-12712-2303121254",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T01:05:00",
  //           "arrival": "2023-03-12T12:54:00",
  //           "duration": 1069,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32171,
  //               "name": "jetBlue",
  //               "alt_id": "B6",
  //               "display_code": "B6",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10081,
  //               "entity_id": 95673679,
  //               "alt_id": "BOS",
  //               "parent_id": 1111,
  //               "parent_entity_id": 27539525,
  //               "name": "Boston Logan International",
  //               "type": "Airport",
  //               "display_code": "BOS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.647701,
  //       "score": 1.82624,
  //       "totalDuration": 1069
  //     },
  //     {
  //       "id": "16995-2303120105--32352,-32171-1-12712-2303121124",
  //       "price": {
  //         "amount": 1228.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.82039,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120105--32352,-32171-1-12712-2303121124",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T01:05:00",
  //           "arrival": "2023-03-12T11:24:00",
  //           "duration": 979,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32171,
  //               "name": "jetBlue",
  //               "alt_id": "B6",
  //               "display_code": "B6",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10081,
  //               "entity_id": 95673679,
  //               "alt_id": "BOS",
  //               "parent_id": 1111,
  //               "parent_entity_id": 27539525,
  //               "name": "Boston Logan International",
  //               "type": "Airport",
  //               "display_code": "BOS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.647701,
  //       "score": 1.82039,
  //       "totalDuration": 979
  //     },
  //     {
  //       "id": "16995-2303121150--32348-1-12712-2303130850",
  //       "price": {
  //         "amount": 1258,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:49",
  //         "quote_age": 76,
  //         "score": 1.07402,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121150--32348-1-12712-2303130850",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T11:50:00",
  //           "arrival": "2023-03-13T08:50:00",
  //           "duration": 1620,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -68.15713,
  //       "score": 1.07402,
  //       "totalDuration": 1620
  //     },
  //     {
  //       "id": "16995-2303120530--31781,-32171-2-12712-2303122039",
  //       "price": {
  //         "amount": 1272.95,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 1.35498,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120530--31781,-32171-2-12712-2303122039",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:30:00",
  //           "arrival": "2023-03-12T20:39:00",
  //           "duration": 1269,
  //           "carriers": [
  //             {
  //               "id": -31781,
  //               "name": "TAP Air Portugal",
  //               "alt_id": "TP",
  //               "display_code": "TP",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32171,
  //               "name": "jetBlue",
  //               "alt_id": "B6",
  //               "display_code": "B6",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13577,
  //               "entity_id": 95565055,
  //               "alt_id": "LIS",
  //               "parent_id": 4609,
  //               "parent_entity_id": 27544072,
  //               "name": "Lisbon",
  //               "type": "Airport",
  //               "display_code": "LIS"
  //             },
  //             {
  //               "id": 10081,
  //               "entity_id": 95673679,
  //               "alt_id": "BOS",
  //               "parent_id": 1111,
  //               "parent_entity_id": 27539525,
  //               "name": "Boston Logan International",
  //               "type": "Airport",
  //               "display_code": "BOS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -17.427277,
  //       "score": 1.35498,
  //       "totalDuration": 1269
  //     },
  //     {
  //       "id": "16995-2303121605--32680-1-12712-2303131425",
  //       "price": {
  //         "amount": 1274.9,
  //         "update_status": "pending",
  //         "last_updated": "2023-02-10T12:43:52",
  //         "quote_age": 76,
  //         "score": 1.0098,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121605--32680-1-12712-2303131425",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:05:00",
  //           "arrival": "2023-03-13T14:25:00",
  //           "duration": 1700,
  //           "carriers": [
  //             {
  //               "id": -32680,
  //               "name": "Air Europa",
  //               "alt_id": "UX",
  //               "display_code": "UX",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 5.922115,
  //       "score": 1.0098,
  //       "totalDuration": 1700
  //     },
  //     {
  //       "id": "16995-2303121150--32348-2-12712-2303131855",
  //       "price": {
  //         "amount": 1278.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 0.76916,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121150--32348-2-12712-2303131855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T11:50:00",
  //           "arrival": "2023-03-13T18:55:00",
  //           "duration": 2225,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -69.851494,
  //       "score": 0.76916,
  //       "totalDuration": 2225
  //     },
  //     {
  //       "id": "16995-2303120005--32348-1-12712-2303121425",
  //       "price": {
  //         "amount": 1570.75,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:44:00",
  //         "quote_age": 76,
  //         "score": 1.14208,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120005--32348-1-12712-2303121425",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T00:05:00",
  //           "arrival": "2023-03-12T14:25:00",
  //           "duration": 1220,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -63.409782,
  //       "score": 1.14208,
  //       "totalDuration": 1220
  //     },
  //     {
  //       "id": "16995-2303120005--32348-2-12712-2303121855",
  //       "price": {
  //         "amount": 1662.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:44:00",
  //         "quote_age": 76,
  //         "score": 0.88327,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120005--32348-2-12712-2303121855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T00:05:00",
  //           "arrival": "2023-03-12T18:55:00",
  //           "duration": 1490,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -65.10415,
  //       "score": 0.88327,
  //       "totalDuration": 1490
  //     },
  //     {
  //       "id": "16995-2303120955--32348-2-12712-2303131855",
  //       "price": {
  //         "amount": 1678.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 0.55706,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120955--32348-2-12712-2303131855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T09:55:00",
  //           "arrival": "2023-03-13T18:55:00",
  //           "duration": 2340,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -62.90935,
  //       "score": 0.55706,
  //       "totalDuration": 2340
  //     },
  //     {
  //       "id": "16995-2303120955--32348-1-12712-2303130850",
  //       "price": {
  //         "amount": 1678.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 0.75131,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120955--32348-1-12712-2303130850",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T09:55:00",
  //           "arrival": "2023-03-13T08:50:00",
  //           "duration": 1735,
  //           "carriers": [
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11182,
  //               "entity_id": 95673506,
  //               "alt_id": "DXB",
  //               "parent_id": 2301,
  //               "parent_entity_id": 27540839,
  //               "name": "Dubai",
  //               "type": "Airport",
  //               "display_code": "DXB"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -61.214985,
  //       "score": 0.75131,
  //       "totalDuration": 1735
  //     },
  //     {
  //       "id": "16995-2303120515--30727-1-12712-2303121525",
  //       "price": {
  //         "amount": 1686.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 1.33832,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--30727-1-12712-2303121525",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T15:25:00",
  //           "duration": 970,
  //           "carriers": [
  //             {
  //               "id": -30727,
  //               "name": "ITA Airways",
  //               "alt_id": "AZ",
  //               "display_code": "AZ",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11493,
  //               "entity_id": 95565065,
  //               "alt_id": "FCO",
  //               "parent_id": 6781,
  //               "parent_entity_id": 27539793,
  //               "name": "Rome Fiumicino",
  //               "type": "Airport",
  //               "display_code": "FCO"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 20.428389,
  //       "score": 1.33832,
  //       "totalDuration": 970
  //     },
  //     {
  //       "id": "16995-2303120515--32132-1-12712-2303121330",
  //       "price": {
  //         "amount": 1706.77,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 1.49976,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32132-1-12712-2303121330",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T13:30:00",
  //           "duration": 855,
  //           "carriers": [
  //             {
  //               "id": -32132,
  //               "name": "KLM",
  //               "alt_id": "KL",
  //               "display_code": "KL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 9451,
  //               "entity_id": 95565044,
  //               "alt_id": "AMS",
  //               "parent_id": 509,
  //               "parent_entity_id": 27536561,
  //               "name": "Amsterdam",
  //               "type": "Airport",
  //               "display_code": "AMS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 0.5939126,
  //       "score": 1.49976,
  //       "totalDuration": 855
  //     },
  //     {
  //       "id": "16995-2303120750--32677-1-12712-2303121820",
  //       "price": {
  //         "amount": 1707.87,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T08:41:25",
  //         "quote_age": 319,
  //         "score": 1.29441,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120750--32677-1-12712-2303121820",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:50:00",
  //           "arrival": "2023-03-12T18:20:00",
  //           "duration": 990,
  //           "carriers": [
  //             {
  //               "id": -32677,
  //               "name": "Air France",
  //               "alt_id": "AF",
  //               "display_code": "AF",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 15.541655,
  //       "score": 1.29441,
  //       "totalDuration": 990
  //     },
  //     {
  //       "id": "16995-2303120750--32677-1-12712-2303121700",
  //       "price": {
  //         "amount": 1712.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T08:41:25",
  //         "quote_age": 319,
  //         "score": 1.40489,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120750--32677-1-12712-2303121700",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:50:00",
  //           "arrival": "2023-03-12T17:00:00",
  //           "duration": 910,
  //           "carriers": [
  //             {
  //               "id": -32677,
  //               "name": "Air France",
  //               "alt_id": "AF",
  //               "display_code": "AF",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 2.0674646,
  //       "score": 1.40489,
  //       "totalDuration": 910
  //     },
  //     {
  //       "id": "16995-2303122255--32385-0-12712-2303130545",
  //       "price": {
  //         "amount": 1712.57,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.65984,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122255--32385-0-12712-2303130545",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T22:55:00",
  //           "arrival": "2023-03-13T05:45:00",
  //           "duration": 770,
  //           "carriers": [
  //             {
  //               "id": -32385,
  //               "name": "Delta",
  //               "alt_id": "DL",
  //               "display_code": "DL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 0,
  //           "stops": []
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 33.438484,
  //       "score": 1.65984,
  //       "totalDuration": 770
  //     },
  //     {
  //       "id": "16995-2303120750--32385-1-12712-2303121820",
  //       "price": {
  //         "amount": 1715.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.28898,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120750--32385-1-12712-2303121820",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:50:00",
  //           "arrival": "2023-03-12T18:20:00",
  //           "duration": 990,
  //           "carriers": [
  //             {
  //               "id": -32385,
  //               "name": "Delta",
  //               "alt_id": "DL",
  //               "display_code": "DL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 15.541655,
  //       "score": 1.28898,
  //       "totalDuration": 990
  //     },
  //     {
  //       "id": "16995-2303120720--31697-1-12712-2303121655",
  //       "price": {
  //         "amount": 1716.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.36343,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120720--31697-1-12712-2303121655",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:20:00",
  //           "arrival": "2023-03-12T16:55:00",
  //           "duration": 935,
  //           "carriers": [
  //             {
  //               "id": -31697,
  //               "name": "Virgin Atlantic",
  //               "alt_id": "VS",
  //               "display_code": "VS",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -4.5146346,
  //       "score": 1.36343,
  //       "totalDuration": 935
  //     },
  //     {
  //       "id": "16995-2303121130--32385-1-12712-2303122138",
  //       "price": {
  //         "amount": 1718.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.31603,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121130--32385-1-12712-2303122138",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T11:30:00",
  //           "arrival": "2023-03-12T21:38:00",
  //           "duration": 968,
  //           "carriers": [
  //             {
  //               "id": -32385,
  //               "name": "Delta",
  //               "alt_id": "DL",
  //               "display_code": "DL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10081,
  //               "entity_id": 95673679,
  //               "alt_id": "BOS",
  //               "parent_id": 1111,
  //               "parent_entity_id": 27539525,
  //               "name": "Boston Logan International",
  //               "type": "Airport",
  //               "display_code": "BOS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 25.747347,
  //       "score": 1.31603,
  //       "totalDuration": 968
  //     },
  //     {
  //       "id": "16995-2303120515--32132-2-12712-2303121958",
  //       "price": {
  //         "amount": 1718.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 1.02465,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32132-2-12712-2303121958",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T19:58:00",
  //           "duration": 1243,
  //           "carriers": [
  //             {
  //               "id": -32132,
  //               "name": "KLM",
  //               "alt_id": "KL",
  //               "display_code": "KL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9451,
  //               "entity_id": 95565044,
  //               "alt_id": "AMS",
  //               "parent_id": 509,
  //               "parent_entity_id": 27536561,
  //               "name": "Amsterdam",
  //               "type": "Airport",
  //               "display_code": "AMS"
  //             },
  //             {
  //               "id": 12387,
  //               "entity_id": 95673665,
  //               "alt_id": "IAD",
  //               "parent_id": 8337,
  //               "parent_entity_id": 27538424,
  //               "name": "Washington Dulles",
  //               "type": "Airport",
  //               "display_code": "IAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 0,
  //       "score": 1.02465,
  //       "totalDuration": 1243
  //     },
  //     {
  //       "id": "16995-2303120750--32385-1-12712-2303121700",
  //       "price": {
  //         "amount": 1719.67,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.3984,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120750--32385-1-12712-2303121700",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:50:00",
  //           "arrival": "2023-03-12T17:00:00",
  //           "duration": 910,
  //           "carriers": [
  //             {
  //               "id": -32385,
  //               "name": "Delta",
  //               "alt_id": "DL",
  //               "display_code": "DL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 2.0674646,
  //       "score": 1.3984,
  //       "totalDuration": 910
  //     },
  //     {
  //       "id": "16995-2303120515--32385-1-12712-2303121330",
  //       "price": {
  //         "amount": 1725.87,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.48316,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32385-1-12712-2303121330",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T13:30:00",
  //           "duration": 855,
  //           "carriers": [
  //             {
  //               "id": -32385,
  //               "name": "Delta",
  //               "alt_id": "DL",
  //               "display_code": "DL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 9451,
  //               "entity_id": 95565044,
  //               "alt_id": "AMS",
  //               "parent_id": 509,
  //               "parent_entity_id": 27536561,
  //               "name": "Amsterdam",
  //               "type": "Airport",
  //               "display_code": "AMS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 0.5939126,
  //       "score": 1.48316,
  //       "totalDuration": 855
  //     },
  //     {
  //       "id": "16995-2303120515--32677-2-12712-2303121700",
  //       "price": {
  //         "amount": 1730.77,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T08:41:25",
  //         "quote_age": 319,
  //         "score": 1.18734,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32677-2-12712-2303121700",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T17:00:00",
  //           "duration": 1065,
  //           "carriers": [
  //             {
  //               "id": -32677,
  //               "name": "Air France",
  //               "alt_id": "AF",
  //               "display_code": "AF",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9451,
  //               "entity_id": 95565044,
  //               "alt_id": "AMS",
  //               "parent_id": 509,
  //               "parent_entity_id": 27536561,
  //               "name": "Amsterdam",
  //               "type": "Airport",
  //               "display_code": "AMS"
  //             },
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -16.070164,
  //       "score": 1.18734,
  //       "totalDuration": 1065
  //     },
  //     {
  //       "id": "16995-2303120515--32132-2-12712-2303121700",
  //       "price": {
  //         "amount": 1730.77,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 1.18722,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32132-2-12712-2303121700",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T17:00:00",
  //           "duration": 1065,
  //           "carriers": [
  //             {
  //               "id": -32132,
  //               "name": "KLM",
  //               "alt_id": "KL",
  //               "display_code": "KL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9451,
  //               "entity_id": 95565044,
  //               "alt_id": "AMS",
  //               "parent_id": 509,
  //               "parent_entity_id": 27536561,
  //               "name": "Amsterdam",
  //               "type": "Airport",
  //               "display_code": "AMS"
  //             },
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -16.070164,
  //       "score": 1.18722,
  //       "totalDuration": 1065
  //     },
  //     {
  //       "id": "16995-2303120750--32132-2-12712-2303122030",
  //       "price": {
  //         "amount": 1731.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 1.12813,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120750--32132-2-12712-2303122030",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:50:00",
  //           "arrival": "2023-03-12T20:30:00",
  //           "duration": 1120,
  //           "carriers": [
  //             {
  //               "id": -32132,
  //               "name": "KLM",
  //               "alt_id": "KL",
  //               "display_code": "KL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             },
  //             {
  //               "id": 9451,
  //               "entity_id": 95565044,
  //               "alt_id": "AMS",
  //               "parent_id": 509,
  //               "parent_entity_id": 27536561,
  //               "name": "Amsterdam",
  //               "type": "Airport",
  //               "display_code": "AMS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 7.9444942,
  //       "score": 1.12813,
  //       "totalDuration": 1120
  //     },
  //     {
  //       "id": "16995-2303121500--30727-1-12712-2303131525",
  //       "price": {
  //         "amount": 1739.87,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:15:00",
  //         "quote_age": 105,
  //         "score": 0.68933,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121500--30727-1-12712-2303131525",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T15:00:00",
  //           "arrival": "2023-03-13T15:25:00",
  //           "duration": 1825,
  //           "carriers": [
  //             {
  //               "id": -30727,
  //               "name": "ITA Airways",
  //               "alt_id": "AZ",
  //               "display_code": "AZ",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 11493,
  //               "entity_id": 95565065,
  //               "alt_id": "FCO",
  //               "parent_id": 6781,
  //               "parent_entity_id": 27539793,
  //               "name": "Rome Fiumicino",
  //               "type": "Airport",
  //               "display_code": "FCO"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 20.428389,
  //       "score": 0.68933,
  //       "totalDuration": 1825
  //     },
  //     {
  //       "id": "16995-2303120515--30727-2-12712-2303121958",
  //       "price": {
  //         "amount": 1749.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.00615,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--30727-2-12712-2303121958",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T19:58:00",
  //           "duration": 1243,
  //           "carriers": [
  //             {
  //               "id": -30727,
  //               "name": "ITA Airways",
  //               "alt_id": "AZ",
  //               "display_code": "AZ",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 11493,
  //               "entity_id": 95565065,
  //               "alt_id": "FCO",
  //               "parent_id": 6781,
  //               "parent_entity_id": 27539793,
  //               "name": "Rome Fiumicino",
  //               "type": "Airport",
  //               "display_code": "FCO"
  //             },
  //             {
  //               "id": 10081,
  //               "entity_id": 95673679,
  //               "alt_id": "BOS",
  //               "parent_id": 1111,
  //               "parent_entity_id": 27539525,
  //               "name": "Boston Logan International",
  //               "type": "Airport",
  //               "display_code": "BOS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 0,
  //       "score": 1.00615,
  //       "totalDuration": 1243
  //     },
  //     {
  //       "id": "16995-2303120720--32385-1-12712-2303121655",
  //       "price": {
  //         "amount": 1781.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.31402,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120720--32385-1-12712-2303121655",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:20:00",
  //           "arrival": "2023-03-12T16:55:00",
  //           "duration": 935,
  //           "carriers": [
  //             {
  //               "id": -32385,
  //               "name": "Delta",
  //               "alt_id": "DL",
  //               "display_code": "DL",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -4.5146346,
  //       "score": 1.31402,
  //       "totalDuration": 935
  //     },
  //     {
  //       "id": "16995-2303120750--32677-2-12712-2303122030",
  //       "price": {
  //         "amount": 1790.77,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T08:41:25",
  //         "quote_age": 319,
  //         "score": 1.0912,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120750--32677-2-12712-2303122030",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:50:00",
  //           "arrival": "2023-03-12T20:30:00",
  //           "duration": 1120,
  //           "carriers": [
  //             {
  //               "id": -32677,
  //               "name": "Air France",
  //               "alt_id": "AF",
  //               "display_code": "AF",
  //               "display_code_type": "IATA",
  //               "alliance": -31998
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             },
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -1.6000628,
  //       "score": 1.0912,
  //       "totalDuration": 1120
  //     },
  //     {
  //       "id": "16995-2303120900--32340-2-12712-2303131455",
  //       "price": {
  //         "amount": 1969,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:49",
  //         "quote_age": 76,
  //         "score": 0.51579,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120900--32340-2-12712-2303131455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T09:00:00",
  //           "arrival": "2023-03-13T14:55:00",
  //           "duration": 2155,
  //           "carriers": [
  //             {
  //               "id": -32340,
  //               "name": "Ethiopian Airlines",
  //               "alt_id": "ET",
  //               "display_code": "ET",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9252,
  //               "entity_id": 128668203,
  //               "alt_id": "ADD",
  //               "parent_id": 322,
  //               "parent_entity_id": 27536445,
  //               "name": "Addis Ababa",
  //               "type": "Airport",
  //               "display_code": "ADD"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -46.328674,
  //       "score": 0.51579,
  //       "totalDuration": 2155
  //     },
  //     {
  //       "id": "16995-2303120735--31923,-32348-2-12712-2303121855",
  //       "price": {
  //         "amount": 2515.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.8365,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120735--31923,-32348-2-12712-2303121855",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:35:00",
  //           "arrival": "2023-03-12T18:55:00",
  //           "duration": 1040,
  //           "carriers": [
  //             {
  //               "id": -31923,
  //               "name": "Royal Jordanian",
  //               "alt_id": "RJ",
  //               "display_code": "RJ",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32348,
  //               "name": "Emirates",
  //               "alt_id": "EK",
  //               "display_code": "EK",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9445,
  //               "entity_id": 95673636,
  //               "alt_id": "AMM",
  //               "parent_id": 503,
  //               "parent_entity_id": 27536451,
  //               "name": "Amman Queen Alia",
  //               "type": "Airport",
  //               "display_code": "AMM"
  //             },
  //             {
  //               "id": 14476,
  //               "entity_id": 95565070,
  //               "alt_id": "MXP",
  //               "parent_id": 5072,
  //               "parent_entity_id": 27544068,
  //               "name": "Milan Malpensa",
  //               "type": "Airport",
  //               "display_code": "MXP"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -23.143614,
  //       "score": 0.8365,
  //       "totalDuration": 1040
  //     },
  //     {
  //       "id": "16995-2303120105--32352-1-12712-2303121124",
  //       "price": {
  //         "amount": 2645.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.84514,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120105--32352-1-12712-2303121124",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T01:05:00",
  //           "arrival": "2023-03-12T11:24:00",
  //           "duration": 979,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10081,
  //               "entity_id": 95673679,
  //               "alt_id": "BOS",
  //               "parent_id": 1111,
  //               "parent_entity_id": 27539525,
  //               "name": "Boston Logan International",
  //               "type": "Airport",
  //               "display_code": "BOS"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.647701,
  //       "score": 0.84514,
  //       "totalDuration": 979
  //     },
  //     {
  //       "id": "16995-2303120625--32352,-32222-1-12712-2303121605",
  //       "price": {
  //         "amount": 2651.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.8783,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32352,-32222-1-12712-2303121605",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T16:05:00",
  //           "duration": 940,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 11.486167,
  //       "score": 0.8783,
  //       "totalDuration": 940
  //     },
  //     {
  //       "id": "16995-2303121730--32352-1-12712-2303131430",
  //       "price": {
  //         "amount": 2656.87,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.50848,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121730--32352-1-12712-2303131430",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:30:00",
  //           "arrival": "2023-03-13T14:30:00",
  //           "duration": 1620,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -8.71942,
  //       "score": 0.50848,
  //       "totalDuration": 1620
  //     },
  //     {
  //       "id": "16995-2303121650--32352-1-12712-2303131300",
  //       "price": {
  //         "amount": 2672.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.52163,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121650--32352-1-12712-2303131300",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:50:00",
  //           "arrival": "2023-03-13T13:00:00",
  //           "duration": 1570,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -16.504038,
  //       "score": 0.52163,
  //       "totalDuration": 1570
  //     },
  //     {
  //       "id": "16995-2303120555--32352-1-12712-2303131300",
  //       "price": {
  //         "amount": 2672.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.36808,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120555--32352-1-12712-2303131300",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:55:00",
  //           "arrival": "2023-03-13T13:00:00",
  //           "duration": 2225,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -15.699875,
  //       "score": 0.36808,
  //       "totalDuration": 2225
  //     },
  //     {
  //       "id": "16995-2303120900--32352-1-12712-2303131300",
  //       "price": {
  //         "amount": 2672.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.40145,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120900--32352-1-12712-2303131300",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T09:00:00",
  //           "arrival": "2023-03-13T13:00:00",
  //           "duration": 2040,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10413,
  //               "entity_id": 95565041,
  //               "alt_id": "CDG",
  //               "parent_id": 6073,
  //               "parent_entity_id": 27539733,
  //               "name": "Paris Charles de Gaulle",
  //               "type": "Airport",
  //               "display_code": "CDG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.025869,
  //       "score": 0.40145,
  //       "totalDuration": 2040
  //     },
  //     {
  //       "id": "16995-2303120905--32352-1-12712-2303121930",
  //       "price": {
  //         "amount": 2680.31,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 0.82898,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120905--32352-1-12712-2303121930",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T09:05:00",
  //           "arrival": "2023-03-12T19:30:00",
  //           "duration": 985,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -21.104383,
  //       "score": 0.82898,
  //       "totalDuration": 985
  //     },
  //     {
  //       "id": "16995-2303121715--32352-1-12712-2303131433",
  //       "price": {
  //         "amount": 2685.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.49745,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121715--32352-1-12712-2303131433",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:15:00",
  //           "arrival": "2023-03-13T14:33:00",
  //           "duration": 1638,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -23.488295,
  //       "score": 0.49745,
  //       "totalDuration": 1638
  //     },
  //     {
  //       "id": "16995-2303120530--32352-1-12712-2303121930",
  //       "price": {
  //         "amount": 2702.47,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.67487,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120530--32352-1-12712-2303121930",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:30:00",
  //           "arrival": "2023-03-12T19:30:00",
  //           "duration": 1200,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {}
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -26.368845,
  //       "score": 0.67487,
  //       "totalDuration": 1200
  //     },
  //     {
  //       "id": "16995-2303120625--32480-1-12712-2303121910",
  //       "price": {
  //         "amount": 2772.77,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.70168,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32480-1-12712-2303121910",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T19:10:00",
  //           "duration": 1125,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {}
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -4.030049,
  //       "score": 0.70168,
  //       "totalDuration": 1125
  //     },
  //     {
  //       "id": "16995-2303120625--32480,-32317-1-12712-2303121910",
  //       "price": {
  //         "amount": 2780.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.69969,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32480,-32317-1-12712-2303121910",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T19:10:00",
  //           "duration": 1125,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32317,
  //               "name": "Finnair",
  //               "alt_id": "AY",
  //               "display_code": "AY",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {}
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -4.030049,
  //       "score": 0.69969,
  //       "totalDuration": 1125
  //     },
  //     {
  //       "id": "16995-2303120710--32222-2-12712-2303121910",
  //       "price": {
  //         "amount": 2780.57,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.72865,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120710--32222-2-12712-2303121910",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T07:10:00",
  //           "arrival": "2023-03-12T19:10:00",
  //           "duration": 1080,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 13542,
  //               "entity_id": 95565051,
  //               "alt_id": "LGW",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Gatwick",
  //               "type": "Airport",
  //               "display_code": "LGW"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -12.913477,
  //       "score": 0.72865,
  //       "totalDuration": 1080
  //     },
  //     {
  //       "id": "16995-2303120625--32480,-32222-1-12712-2303121910",
  //       "price": {
  //         "amount": 2781.77,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.69934,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32480,-32222-1-12712-2303121910",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T19:10:00",
  //           "duration": 1125,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {}
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -4.030049,
  //       "score": 0.69934,
  //       "totalDuration": 1125
  //     },
  //     {
  //       "id": "16995-2303120600--32222,-32480-1-12712-2303122010",
  //       "price": {
  //         "amount": 2787.16,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 0.64896,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32222,-32480-1-12712-2303122010",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T20:10:00",
  //           "duration": 1210,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 21.485245,
  //       "score": 0.64896,
  //       "totalDuration": 1210
  //     },
  //     {
  //       "id": "16995-2303120625--32480,-32317-1-12712-2303121525",
  //       "price": {
  //         "amount": 2797.67,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.86921,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32480,-32317-1-12712-2303121525",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T15:25:00",
  //           "duration": 900,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32317,
  //               "name": "Finnair",
  //               "alt_id": "AY",
  //               "display_code": "AY",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.2990537,
  //       "score": 0.86921,
  //       "totalDuration": 900
  //     },
  //     {
  //       "id": "16995-2303120600--32222,-32480-1-12712-2303121605",
  //       "price": {
  //         "amount": 2801.17,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.80965,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32222,-32480-1-12712-2303121605",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T16:05:00",
  //           "duration": 965,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 21.485245,
  //       "score": 0.80965,
  //       "totalDuration": 965
  //     },
  //     {
  //       "id": "16995-2303120625--32480-1-12712-2303121525",
  //       "price": {
  //         "amount": 2802.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.86765,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32480-1-12712-2303121525",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T15:25:00",
  //           "duration": 900,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.2990537,
  //       "score": 0.86766,
  //       "totalDuration": 900
  //     },
  //     {
  //       "id": "16995-2303121625--32480-1-12712-2303131225",
  //       "price": {
  //         "amount": 2802.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.50057,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121625--32480-1-12712-2303131225",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:25:00",
  //           "arrival": "2023-03-13T12:25:00",
  //           "duration": 1560,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.747456,
  //       "score": 0.50057,
  //       "totalDuration": 1560
  //     },
  //     {
  //       "id": "16995-2303120600--32222-1-12712-2303121605",
  //       "price": {
  //         "amount": 2804.66,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 0.80872,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32222-1-12712-2303121605",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T16:05:00",
  //           "duration": 965,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 21.485245,
  //       "score": 0.80872,
  //       "totalDuration": 965
  //     },
  //     {
  //       "id": "16995-2303120600--32222,-32317-1-12712-2303121605",
  //       "price": {
  //         "amount": 2806.02,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:46",
  //         "quote_age": 76,
  //         "score": 0.80825,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32222,-32317-1-12712-2303121605",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T16:05:00",
  //           "duration": 965,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32317,
  //               "name": "Finnair",
  //               "alt_id": "AY",
  //               "display_code": "AY",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 21.485245,
  //       "score": 0.80825,
  //       "totalDuration": 965
  //     },
  //     {
  //       "id": "16995-2303120625--32222-1-12712-2303121605",
  //       "price": {
  //         "amount": 2807.67,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.82926,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32222-1-12712-2303121605",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T16:05:00",
  //           "duration": 940,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 11.486167,
  //       "score": 0.82926,
  //       "totalDuration": 940
  //     },
  //     {
  //       "id": "16995-2303120625--32480-2-12712-2303122000",
  //       "price": {
  //         "amount": 2808.57,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:44",
  //         "quote_age": 76,
  //         "score": 0.66313,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32480-2-12712-2303122000",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T20:00:00",
  //           "duration": 1175,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             },
  //             {
  //               "id": 10602,
  //               "entity_id": 95673672,
  //               "alt_id": "CLT",
  //               "parent_id": 1697,
  //               "parent_entity_id": 27537543,
  //               "name": "Charlotte Douglas",
  //               "type": "Airport",
  //               "display_code": "CLT"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -43.213608,
  //       "score": 0.66313,
  //       "totalDuration": 1175
  //     },
  //     {
  //       "id": "16995-2303120600--32222-2-12712-2303121930",
  //       "price": {
  //         "amount": 2811.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.6653,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32222-2-12712-2303121930",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T19:30:00",
  //           "duration": 1170,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             },
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -31.384064,
  //       "score": 0.6653,
  //       "totalDuration": 1170
  //     },
  //     {
  //       "id": "16995-2303120625--32480,-32222-1-12712-2303121525",
  //       "price": {
  //         "amount": 2811.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.86479,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32480,-32222-1-12712-2303121525",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T15:25:00",
  //           "duration": 900,
  //           "carriers": [
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.2990537,
  //       "score": 0.86479,
  //       "totalDuration": 900
  //     },
  //     {
  //       "id": "16995-2303120630--32222-2-12712-2303122010",
  //       "price": {
  //         "amount": 2820.57,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.65757,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120630--32222-2-12712-2303122010",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:30:00",
  //           "arrival": "2023-03-12T20:10:00",
  //           "duration": 1180,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 7.7501,
  //       "score": 0.65757,
  //       "totalDuration": 1180
  //     },
  //     {
  //       "id": "16995-2303120600--32222,-32480-2-12712-2303122030",
  //       "price": {
  //         "amount": 2824.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.62999,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32222,-32480-2-12712-2303122030",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T20:30:00",
  //           "duration": 1230,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             },
  //             {
  //               "id": -32480,
  //               "name": "British Airways",
  //               "alt_id": "BA",
  //               "display_code": "BA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             },
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.360645,
  //       "score": 0.62999,
  //       "totalDuration": 1230
  //     },
  //     {
  //       "id": "16995-2303121730--32222-1-12712-2303131430",
  //       "price": {
  //         "amount": 2826.37,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.47794,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121730--32222-1-12712-2303131430",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:30:00",
  //           "arrival": "2023-03-13T14:30:00",
  //           "duration": 1620,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -8.71942,
  //       "score": 0.47794,
  //       "totalDuration": 1620
  //     },
  //     {
  //       "id": "16995-2303121705--32222-1-12712-2303131359",
  //       "price": {
  //         "amount": 2860.47,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.474,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121705--32222-1-12712-2303131359",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:05:00",
  //           "arrival": "2023-03-13T13:59:00",
  //           "duration": 1614,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.118368,
  //       "score": 0.474,
  //       "totalDuration": 1614
  //     },
  //     {
  //       "id": "16995-2303121730--32222-2-12712-2303131605",
  //       "price": {
  //         "amount": 2865.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.44527,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121730--32222-2-12712-2303131605",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T17:30:00",
  //           "arrival": "2023-03-13T16:05:00",
  //           "duration": 1715,
  //           "carriers": [
  //             {
  //               "id": -32222,
  //               "name": "Iberia",
  //               "alt_id": "IB",
  //               "display_code": "IB",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9772,
  //               "entity_id": 95565085,
  //               "alt_id": "BCN",
  //               "parent_id": 782,
  //               "parent_entity_id": 27548283,
  //               "name": "Barcelona",
  //               "type": "Airport",
  //               "display_code": "BCN"
  //             },
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 7.641429,
  //       "score": 0.44527,
  //       "totalDuration": 1715
  //     },
  //     {
  //       "id": "16995-2303120045--32573-0-12712-2303120659",
  //       "price": {
  //         "amount": 2888.57,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 1.03235,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120045--32573-0-12712-2303120659",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T00:45:00",
  //           "arrival": "2023-03-12T06:59:00",
  //           "duration": 734,
  //           "carriers": [
  //             {
  //               "id": -32573,
  //               "name": "American Airlines",
  //               "alt_id": "AA",
  //               "display_code": "AA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 0,
  //           "stops": []
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.9411554,
  //       "score": 1.03235,
  //       "totalDuration": 734
  //     },
  //     {
  //       "id": "16995-2303120625--32573-1-12712-2303121525",
  //       "price": {
  //         "amount": 2895.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.83962,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120625--32573-1-12712-2303121525",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:25:00",
  //           "arrival": "2023-03-12T15:25:00",
  //           "duration": 900,
  //           "carriers": [
  //             {
  //               "id": -32573,
  //               "name": "American Airlines",
  //               "alt_id": "AA",
  //               "display_code": "AA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.2990537,
  //       "score": 0.83962,
  //       "totalDuration": 900
  //     },
  //     {
  //       "id": "16995-2303121625--32573-1-12712-2303131225",
  //       "price": {
  //         "amount": 2895.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.4844,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121625--32573-1-12712-2303131225",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T16:25:00",
  //           "arrival": "2023-03-13T12:25:00",
  //           "duration": 1560,
  //           "carriers": [
  //             {
  //               "id": -32573,
  //               "name": "American Airlines",
  //               "alt_id": "AA",
  //               "display_code": "AA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -11.747456,
  //       "score": 0.4844,
  //       "totalDuration": 1560
  //     },
  //     {
  //       "id": "16995-2303120905--32573-1-12712-2303121930",
  //       "price": {
  //         "amount": 2895.97,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.76724,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120905--32573-1-12712-2303121930",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T09:05:00",
  //           "arrival": "2023-03-12T19:30:00",
  //           "duration": 985,
  //           "carriers": [
  //             {
  //               "id": -32573,
  //               "name": "American Airlines",
  //               "alt_id": "AA",
  //               "display_code": "AA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13554,
  //               "entity_id": 95565050,
  //               "alt_id": "LHR",
  //               "parent_id": 4698,
  //               "parent_entity_id": 27544008,
  //               "name": "London Heathrow",
  //               "type": "Airport",
  //               "display_code": "LHR"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -21.104383,
  //       "score": 0.76724,
  //       "totalDuration": 985
  //     },
  //     {
  //       "id": "16995-2303120600--32573-1-12712-2303121605",
  //       "price": {
  //         "amount": 2904.67,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.78072,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32573-1-12712-2303121605",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T16:05:00",
  //           "duration": 965,
  //           "carriers": [
  //             {
  //               "id": -32573,
  //               "name": "American Airlines",
  //               "alt_id": "AA",
  //               "display_code": "AA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 13870,
  //               "entity_id": 95565077,
  //               "alt_id": "MAD",
  //               "parent_id": 4854,
  //               "parent_entity_id": 27544850,
  //               "name": "Madrid",
  //               "type": "Airport",
  //               "display_code": "MAD"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": true,
  //       "eco_contender_delta": 21.485245,
  //       "score": 0.78072,
  //       "totalDuration": 965
  //     },
  //     {
  //       "id": "16995-2303122315--32573-1-12712-2303131142",
  //       "price": {
  //         "amount": 3027.67,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:00",
  //         "quote_age": 77,
  //         "score": 0.65306,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122315--32573-1-12712-2303131142",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T23:15:00",
  //           "arrival": "2023-03-13T11:42:00",
  //           "duration": 1107,
  //           "carriers": [
  //             {
  //               "id": -32573,
  //               "name": "American Airlines",
  //               "alt_id": "AA",
  //               "display_code": "AA",
  //               "display_code_type": "IATA",
  //               "alliance": -32000
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 14074,
  //               "entity_id": 95673821,
  //               "alt_id": "MIA",
  //               "parent_id": 5062,
  //               "parent_entity_id": 27536644,
  //               "name": "Miami International",
  //               "type": "Airport",
  //               "display_code": "MIA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -37.000477,
  //       "score": 0.65306,
  //       "totalDuration": 1107
  //     },
  //     {
  //       "id": "16995-2303120515--32478,-32090-1-12712-2303121420",
  //       "price": {
  //         "amount": 3273.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.73865,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120515--32478,-32090-1-12712-2303121420",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:15:00",
  //           "arrival": "2023-03-12T14:20:00",
  //           "duration": 905,
  //           "carriers": [
  //             {
  //               "id": -32478,
  //               "name": "Brussels Airlines",
  //               "alt_id": "SN",
  //               "display_code": "SN",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 10141,
  //               "entity_id": 95565036,
  //               "alt_id": "BRU",
  //               "parent_id": 1178,
  //               "parent_entity_id": 27539565,
  //               "name": "Brussels International",
  //               "type": "Airport",
  //               "display_code": "BRU"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -17.313158,
  //       "score": 0.73865,
  //       "totalDuration": 905
  //     },
  //     {
  //       "id": "16995-2303120520--31799,-32090-2-12712-2303121640",
  //       "price": {
  //         "amount": 3289.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.63964,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--31799,-32090-2-12712-2303121640",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T16:40:00",
  //           "duration": 1040,
  //           "carriers": [
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             },
  //             {
  //               "id": 14385,
  //               "entity_id": 95673491,
  //               "alt_id": "MUC",
  //               "parent_id": 5363,
  //               "parent_entity_id": 27545034,
  //               "name": "Munich",
  //               "type": "Airport",
  //               "display_code": "MUC"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -23.552704,
  //       "score": 0.63964,
  //       "totalDuration": 1040
  //     },
  //     {
  //       "id": "16995-2303121555--32352,-31799-1-12712-2303131405",
  //       "price": {
  //         "amount": 3291.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.39342,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121555--32352,-31799-1-12712-2303131405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T15:55:00",
  //           "arrival": "2023-03-13T14:05:00",
  //           "duration": 1690,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.7211666,
  //       "score": 0.39342,
  //       "totalDuration": 1690
  //     },
  //     {
  //       "id": "16995-2303120615--32544,-32090-2-12712-2303121640",
  //       "price": {
  //         "amount": 3294.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.67433,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120615--32544,-32090-2-12712-2303121640",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:15:00",
  //           "arrival": "2023-03-12T16:40:00",
  //           "duration": 985,
  //           "carriers": [
  //             {
  //               "id": -32544,
  //               "name": "Austrian Airlines",
  //               "alt_id": "OS",
  //               "display_code": "OS",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 17517,
  //               "entity_id": 95673444,
  //               "alt_id": "VIE",
  //               "parent_id": 8222,
  //               "parent_entity_id": 27547395,
  //               "name": "Vienna",
  //               "type": "Airport",
  //               "display_code": "VIE"
  //             },
  //             {
  //               "id": 14385,
  //               "entity_id": 95673491,
  //               "alt_id": "MUC",
  //               "parent_id": 5363,
  //               "parent_entity_id": 27545034,
  //               "name": "Munich",
  //               "type": "Airport",
  //               "display_code": "MUC"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -26.550686,
  //       "score": 0.67433,
  //       "totalDuration": 985
  //     },
  //     {
  //       "id": "16995-2303120600--32352,-32090,-31799-2-12712-2303121730",
  //       "price": {
  //         "amount": 3294.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.63259,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32352,-32090,-31799-2-12712-2303121730",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T17:30:00",
  //           "duration": 1050,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9828,
  //               "entity_id": 95673383,
  //               "alt_id": "BER",
  //               "parent_id": 891,
  //               "parent_entity_id": 27547053,
  //               "name": "Berlin Brandenburg",
  //               "type": "Airport",
  //               "display_code": "BER"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -12.939572,
  //       "score": 0.63259,
  //       "totalDuration": 1050
  //     },
  //     {
  //       "id": "16995-2303120615--32544,-31799-2-12712-2303121730",
  //       "price": {
  //         "amount": 3295.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.64156,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120615--32544,-31799-2-12712-2303121730",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:15:00",
  //           "arrival": "2023-03-12T17:30:00",
  //           "duration": 1035,
  //           "carriers": [
  //             {
  //               "id": -32544,
  //               "name": "Austrian Airlines",
  //               "alt_id": "OS",
  //               "display_code": "OS",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 17517,
  //               "entity_id": 95673444,
  //               "alt_id": "VIE",
  //               "parent_id": 8222,
  //               "parent_entity_id": 27547395,
  //               "name": "Vienna",
  //               "type": "Airport",
  //               "display_code": "VIE"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -8.038795,
  //       "score": 0.64156,
  //       "totalDuration": 1035
  //     },
  //     {
  //       "id": "16995-2303120600--32352,-31799-2-12712-2303121730",
  //       "price": {
  //         "amount": 3299.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.63169,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120600--32352,-31799-2-12712-2303121730",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T06:00:00",
  //           "arrival": "2023-03-12T17:30:00",
  //           "duration": 1050,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9828,
  //               "entity_id": 95673383,
  //               "alt_id": "BER",
  //               "parent_id": 891,
  //               "parent_entity_id": 27547053,
  //               "name": "Berlin Brandenburg",
  //               "type": "Airport",
  //               "display_code": "BER"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -12.939572,
  //       "score": 0.63169,
  //       "totalDuration": 1050
  //     },
  //     {
  //       "id": "16995-2303120520--32756,-32090-2-12712-2303121640",
  //       "price": {
  //         "amount": 3301.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.63731,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120520--32756,-32090-2-12712-2303121640",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T05:20:00",
  //           "arrival": "2023-03-12T16:40:00",
  //           "duration": 1040,
  //           "carriers": [
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 14385,
  //               "entity_id": 95673491,
  //               "alt_id": "MUC",
  //               "parent_id": 5363,
  //               "parent_entity_id": 27545034,
  //               "name": "Munich",
  //               "type": "Airport",
  //               "display_code": "MUC"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -19.637108,
  //       "score": 0.63731,
  //       "totalDuration": 1040
  //     },
  //     {
  //       "id": "16995-2303122010--32756,-31799-2-12712-2303131405",
  //       "price": {
  //         "amount": 3318.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.45952,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122010--32756,-31799-2-12712-2303131405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:10:00",
  //           "arrival": "2023-03-13T14:05:00",
  //           "duration": 1435,
  //           "carriers": [
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": 0.11065602,
  //       "score": 0.45952,
  //       "totalDuration": 1435
  //     },
  //     {
  //       "id": "16995-2303121840--32352,-32756,-31799-2-12712-2303131405",
  //       "price": {
  //         "amount": 3325.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.43149,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121840--32352,-32756,-31799-2-12712-2303131405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:40:00",
  //           "arrival": "2023-03-13T14:05:00",
  //           "duration": 1525,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.5817752,
  //       "score": 0.43149,
  //       "totalDuration": 1525
  //     },
  //     {
  //       "id": "16995-2303122005--32093,-32090-2-12712-2303131455",
  //       "price": {
  //         "amount": 3357.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.43746,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122005--32093,-32090-2-12712-2303131455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:05:00",
  //           "arrival": "2023-03-13T14:55:00",
  //           "duration": 1490,
  //           "carriers": [
  //             {
  //               "id": -32093,
  //               "name": "LOT",
  //               "alt_id": "LO",
  //               "display_code": "LO",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 13235,
  //               "entity_id": 95673613,
  //               "alt_id": "KRK",
  //               "parent_id": 4281,
  //               "parent_entity_id": 27543787,
  //               "name": "Krakow",
  //               "type": "Airport",
  //               "display_code": "KRK"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -7.4432373,
  //       "score": 0.43746,
  //       "totalDuration": 1490
  //     },
  //     {
  //       "id": "16995-2303122010--32756,-32090-2-12712-2303131455",
  //       "price": {
  //         "amount": 3363.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.43815,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303122010--32756,-32090-2-12712-2303131455",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T20:10:00",
  //           "arrival": "2023-03-13T14:55:00",
  //           "duration": 1485,
  //           "carriers": [
  //             {
  //               "id": -32756,
  //               "name": "Aegean Airlines",
  //               "alt_id": "A3",
  //               "display_code": "A3",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             },
  //             {
  //               "id": -32090,
  //               "name": "Lufthansa",
  //               "alt_id": "LH",
  //               "display_code": "LH",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 11616,
  //               "entity_id": 95673652,
  //               "alt_id": "FRA",
  //               "parent_id": 2687,
  //               "parent_entity_id": 27541706,
  //               "name": "Frankfurt am Main",
  //               "type": "Airport",
  //               "display_code": "FRA"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -6.4488053,
  //       "score": 0.43815,
  //       "totalDuration": 1485
  //     },
  //     {
  //       "id": "16995-2303121840--32352,-31799-2-12712-2303131405",
  //       "price": {
  //         "amount": 3364.99,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.42653,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121840--32352,-31799-2-12712-2303131405",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T18:40:00",
  //           "arrival": "2023-03-13T14:05:00",
  //           "duration": 1525,
  //           "carriers": [
  //             {
  //               "id": -32352,
  //               "name": "EL AL Israel Airlines",
  //               "alt_id": "LY",
  //               "display_code": "LY",
  //               "display_code_type": "IATA"
  //             },
  //             {
  //               "id": -31799,
  //               "name": "SWISS",
  //               "alt_id": "LX",
  //               "display_code": "LX",
  //               "display_code_type": "IATA",
  //               "alliance": -31999
  //             }
  //           ],
  //           "stop_count": 2,
  //           "stops": [
  //             {
  //               "id": 9592,
  //               "entity_id": 95673624,
  //               "alt_id": "ATH",
  //               "parent_id": 650,
  //               "parent_entity_id": 27548174,
  //               "name": "Athens International",
  //               "type": "Airport",
  //               "display_code": "ATH"
  //             },
  //             {
  //               "id": 18563,
  //               "entity_id": 95673856,
  //               "alt_id": "ZRH",
  //               "parent_id": 9168,
  //               "parent_entity_id": 27537524,
  //               "name": "Zurich",
  //               "type": "Airport",
  //               "display_code": "ZRH"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.5817752,
  //       "score": 0.42653,
  //       "totalDuration": 1525
  //     },
  //     {
  //       "id": "16995-2303120045--32171-0-12712-2303120659",
  //       "price": {
  //         "amount": 5762.86,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:50",
  //         "quote_age": 76,
  //         "score": 0.5174,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303120045--32171-0-12712-2303120659",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T00:45:00",
  //           "arrival": "2023-03-12T06:59:00",
  //           "duration": 734,
  //           "carriers": [
  //             {
  //               "id": -32171,
  //               "name": "jetBlue",
  //               "alt_id": "B6",
  //               "display_code": "B6",
  //               "display_code_type": "IATA"
  //             }
  //           ],
  //           "stop_count": 0,
  //           "stops": []
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -2.9411554,
  //       "score": 0.5174,
  //       "totalDuration": 734
  //     },
  //     {
  //       "id": "16995-2303121420--32456-1-12712-2303140600",
  //       "price": {
  //         "amount": 8665.07,
  //         "update_status": "current",
  //         "last_updated": "2023-02-10T12:43:47",
  //         "quote_age": 76,
  //         "score": 0.09219,
  //         "transfer_type": "MANAGED"
  //       },
  //       "legs": [
  //         {
  //           "id": "16995-2303121420--32456-1-12712-2303140600",
  //           "origin": {
  //             "id": 16995,
  //             "entity_id": 95673635,
  //             "alt_id": "TLV",
  //             "parent_id": 7617,
  //             "parent_entity_id": 27546296,
  //             "name": "Ben Gurion Intl",
  //             "type": "Airport",
  //             "display_code": "TLV"
  //           },
  //           "destination": {
  //             "id": 12712,
  //             "entity_id": 95565058,
  //             "alt_id": "JFK",
  //             "parent_id": 5772,
  //             "parent_entity_id": 27537542,
  //             "name": "New York John F. Kennedy",
  //             "type": "Airport",
  //             "display_code": "JFK"
  //           },
  //           "departure": "2023-03-12T14:20:00",
  //           "arrival": "2023-03-14T06:00:00",
  //           "duration": 2740,
  //           "carriers": [
  //             {
  //               "id": -32456,
  //               "name": "Cathay Pacific",
  //               "alt_id": "CX",
  //               "display_code": "CX",
  //               "display_code_type": "IATA",
  //               "alliance": -32000,
  //               "brand": -31986
  //             }
  //           ],
  //           "stop_count": 1,
  //           "stops": [
  //             {
  //               "id": 12191,
  //               "entity_id": 128668132,
  //               "alt_id": "HKG",
  //               "parent_id": 3189,
  //               "parent_entity_id": 27542065,
  //               "name": "Hong Kong Intl",
  //               "type": "Airport",
  //               "display_code": "HKG"
  //             }
  //           ]
  //         }
  //       ],
  //       "is_eco_contender": false,
  //       "eco_contender_delta": -81.908775,
  //       "score": 0.09219,
  //       "totalDuration": 2740
  //     }
  //   ]
  // }
  const [cityName, setCityName]=useState('')
  const [fromAirportCode, setFromAirportCode]=useState('TLV')
  const [destAirportCode, setDestAirportCode]=useState('')
  const [flights, setFlights]=useState([])
  const [topAirPorts, setTopAirPorts] = useState([]);


  async function getAirPortCode() {
    try {
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
        params: {
          query: cityName,
        },
        headers: {
          'X-RapidAPI-Key': '42351c1dd5msha8dfbf69d82d049p194be3jsn6b6e9a2ca011',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
  
      const response = await axios.request(options);
      console.log(response.data)
      setDestAirportCode(response.data);//get the airport code from api
      if(response.data.length == 0){
      alert("We are overwhelmed with previous requests. Please try again later.")
      }else{
        console.log(response.data)
        alert('request confirmed, please insert data about the number of peoples and about time of stay')
      }
    } catch (error) {
      console.error(error);
      // alert("We are overwhelmed with previous requests. Please try again later.")
    }
  }

async function getFlights(e){
  console.log(e.target.innerHTML.split('(')[1].split(')')[0])
  try{
    const options = {
      method: 'GET',
      url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
      params: {
        origin: fromAirportCode,
        destination: e.target.innerHTML.split('(')[1].split(')')[0],
        date: "2023-03-12"
      },
      headers: {
        'X-RapidAPI-Key': '42351c1dd5msha8dfbf69d82d049p194be3jsn6b6e9a2ca011',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    }

  const response = await axios.request(options);
  setFlights(response.data.data);//get the airport code from api
  if(response.data.data.length == 0){
    console.log('no data to show')
  alert("We are overwhelmed with previous requests. Please try again later.")
  }else{
    console.log('ok')
    alert('request confirmed, please insert data about the number of peoples and about time of stay')
  }
  } catch (error) {
  console.error(error);
  // alert("We are overwhelmed with previous requests. Please try again later.")
  }}

  useEffect(() => {
    if (destAirportCode && destAirportCode.data) {
      const arr2 = [];
      const newTopAirPorts = destAirportCode.data.map((s, index) => {
        let airPortCode;
        let airPortName;
        if (s.AirportInformation === undefined) {
          airPortCode = s.PlaceId.slice(0, 3);
          airPortName=s.PlaceName
        } else {
          airPortCode = s.AirportInformation.PlaceId.slice(0, 3);
          airPortName=s.AirportInformation.PlaceName
        }
        if (!arr2.includes(airPortCode)) {
          arr2.push(airPortCode);
          return (
            <button onClick={(e)=>getFlights(e)} key={index}>
              {airPortName}({airPortCode})
            </button>
          );
        }
      });
      setTopAirPorts(newTopAirPorts);// display the codes on the top of the page
    }
    
  }, [destAirportCode]);

        
        return (
          <div>
            <FlightsContext.Provider value={{getAirPortCode,topAirPorts,setCityName,cityName,flights}}>
                {children}
            </FlightsContext.Provider>
        </div>
    );
    
  }

export default FlightsContextProvider;
