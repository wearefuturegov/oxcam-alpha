/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  'data-categories': [
    {
      value: 'physicalInfrastructure',
      text: 'Physical infrastructure'
    },
    {
      value: 'socialInfrastructure',
      text: 'Social infrastructure'
    },
    {
      value: 'demographics',
      text: 'Demographcs'
    },
    {
      value: 'utilities',
      text: 'Utilities'
    },
    {
      value: 'floodRisk',
      text: 'Flood risk'
    },
    {
      value: 'sustainability',
      text: 'Sustainability'
    },
    {
      value: 'transportConnectivity',
      text: 'Transport and connectivity'
    },
    {
      value: 'other',
      text: 'Other'
    }
  ],

  'dummy-data': [
    {
      name: 'Open spaces across Milton Keynes',
      location: 'Milton Keynes',
      'organisation-type': 'Local Authority',
      'organisation-name': 'Milton Keynes',
      'entry-date': '12/10/2020',
      type: 'Open space'
    }

  ]

}
