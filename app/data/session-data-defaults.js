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
      value: 'housing',
      text: 'Housing'
    },
    {
      value: 'economyEmployment',
      text: 'Economy and employment'
    },
    {
      value: 'retail',
      text: 'Retail'
    },
    {
      value: 'demographics',
      text: 'Demographics'
    },
    {
      value: 'openSpace',
      text: 'Open space'
    },
    {
      value: 'sportRecreation',
      text: 'Sport and recreation'
    },
    {
      value: 'leisureCulture',
      text: 'Leisure and culture'
    },
    {
      value: 'heritage',
      text: 'Heritage'
    },
    {
      value: 'regeneration',
      text: 'Regeneration'
    },
    {
      value: 'environment',
      text: 'Environment'
    },
    {
      value: 'sustainability',
      text: 'Sustainability and climate change'
    },
    {
      value: 'water',
      text: 'Water and flooding'
    },
    {
      value: 'greenBelt',
      text: 'Green belt'
    },
    {
      value: 'transportConnectivity',
      text: 'Transport and connectivity'
    },
    {
      value: 'health',
      text: 'Health'
    },
    {
      value: 'infrastructure',
      text: 'Infrastructure'
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
