var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterieur",
      "name": "Exterieur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": -3.121284737147402,
        "pitch": -0.05237058576814313,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.9804381841246492,
          "pitch": 0.4130457083461412,
          "rotation": 12.566370614359176,
          "target": "1-entre-local-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entre-local-principal",
      "name": "Entrée local principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": -2.6593129716062727,
        "pitch": 0.07513266834489585,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 0.5210875626226628,
          "pitch": 0.44656432586673667,
          "rotation": 0,
          "target": "0-exterieur"
        },
        {
          "yaw": -2.7086127430096845,
          "pitch": 0.5620312478494291,
          "rotation": 0,
          "target": "2-local-principal"
        },
        {
          "yaw": -1.4540746942958265,
          "pitch": 0.5706891294483043,
          "rotation": 0,
          "target": "7-entre-backoffice"
        },
        {
          "yaw": 2.194879323637463,
          "pitch": 0.5772752396497438,
          "rotation": 0,
          "target": "5-entre-local-secondaire"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-local-principal",
      "name": "Local principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": -2.980238463418317,
        "pitch": 0.06389665930722366,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 0.20100009927736906,
          "pitch": 0.6265407106208691,
          "rotation": 0,
          "target": "1-entre-local-principal"
        },
        {
          "yaw": -3.117402846727922,
          "pitch": 0.4774783824182798,
          "rotation": 0,
          "target": "3-local-principal-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-local-principal-2",
      "name": "Local principal 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": -2.997668770107543,
        "pitch": 0.019276856620235705,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 0.22323623488384747,
          "pitch": 0.60571990533969,
          "rotation": 0,
          "target": "2-local-principal"
        },
        {
          "yaw": 1.520372574436406,
          "pitch": 0.6396924574147693,
          "rotation": 0,
          "target": "4-angle-local-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-angle-local-principal",
      "name": "Angle local principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": -3.122335644481776,
        "pitch": -0.03426759319055073,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.393727283700459,
          "pitch": 0.3577780025169677,
          "rotation": 0,
          "target": "5-entre-local-secondaire"
        },
        {
          "yaw": -2.7123610866214616,
          "pitch": 0.29317290344493685,
          "rotation": 0,
          "target": "1-entre-local-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entre-local-secondaire",
      "name": "Entrée local secondaire",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": 0.9424999587036869,
        "pitch": -0.049250357563922265,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 1.6332888958713028,
          "pitch": 0.0670067477496481,
          "rotation": 0,
          "target": "6-local-secondaire"
        },
        {
          "yaw": -0.8888727121147451,
          "pitch": 0.6164772159596108,
          "rotation": 0,
          "target": "1-entre-local-principal"
        },
        {
          "yaw": -2.562908308650295,
          "pitch": 0.3059626316228101,
          "rotation": 0,
          "target": "4-angle-local-principal"
        },
        {
          "yaw": -1.3927062070679739,
          "pitch": 0.32327907986439897,
          "rotation": 0,
          "target": "7-entre-backoffice"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-local-secondaire",
      "name": "Local secondaire",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": 2.7622539882754324,
        "pitch": 0.17097436170825375,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 1.9912203320122925,
          "pitch": 0.19999922108861412,
          "rotation": 0,
          "target": "5-entre-local-secondaire"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6994167367699298,
          "pitch": 0.07130844738163056,
          "title": "Local secondaire avec accès côté parvis indépendant",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-entre-backoffice",
      "name": "Entrée backoffice",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": -0.34271919857343214,
        "pitch": 0.03212586861614675,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -0.3747532613256581,
          "pitch": 0.513185935086458,
          "rotation": 0,
          "target": "8-back-office"
        },
        {
          "yaw": 2.201076932254633,
          "pitch": 0.5306750905456763,
          "rotation": 0,
          "target": "1-entre-local-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-back-office",
      "name": "Back office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "yaw": 2.1801668837775363,
        "pitch": -0.004283449148809737,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.670202769499692,
          "pitch": 0.42481652926568003,
          "rotation": 0,
          "target": "9-entre-sanitaires"
        },
        {
          "yaw": -0.4031227042661918,
          "pitch": 0.3690583238201697,
          "rotation": 0,
          "target": "1-entre-local-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-entre-sanitaires",
      "name": "Entrée sanitaires",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 736,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5634442743529355,
          "pitch": 0.528463900789168,
          "rotation": 0,
          "target": "8-back-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1384627203974196,
          "pitch": -0.41612467972011835,
          "title": "Compteur électrique&nbsp;",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Local Thonon",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
