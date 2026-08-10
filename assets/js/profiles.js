/* Design profile metadata — drives the switcher UI and the overview page.
   Add a profile here + a matching CSS file in assets/css/profiles/ and link it
   in index.html. The `id` must match the [data-profile] value the CSS targets. */

window.BROOKBURY_PROFILES = [
  {
    id: 'heritage',
    number: '01',
    name: 'Heritage Oak',
    tagline: 'Established, traditional, trusted',
    swatches: ['#1F3D2B', '#A9803F', '#F3EDE1'],
    positioning:
      'Reads like a charter document. Symmetry, a crest, and hairline rules signal a ' +
      'neighborhood with standards and a long memory. Best if the board wants the site to ' +
      'carry authority — covenants enforcement feels legitimate here.',
    type: 'Serif display + letterspaced small caps',
    risk: 'Can read formal or exclusive if the community skews young.'
  },
  {
    id: 'ozark',
    number: '02',
    name: 'Ozark Modern',
    tagline: 'Warm, regional, outdoors',
    swatches: ['#C4622D', '#3D5A4C', '#F2E9DC'],
    positioning:
      'Northwest Arkansas as a brand: clay, moss, big geometric type, generous rounded shapes. ' +
      'Feels contemporary without feeling corporate, and ties Brookbury to the region rather ' +
      'than to a generic HOA template.',
    type: 'Geometric sans, heavy display weights',
    risk: 'The strongest personality of the five — least neutral if tastes differ.'
  },
  {
    id: 'porch',
    number: '03',
    name: 'Front Porch',
    tagline: 'Friendly, editorial, neighborly',
    swatches: ['#3F6E8C', '#E0A33F', '#FFFCF6'],
    positioning:
      'A neighborhood newsletter in the best sense. Warm serif headlines, an editorial grid, ' +
      'and event content treated as the headline act. Best if the priority is participation — ' +
      'getting people to show up to the egg hunt and the grill-out.',
    type: 'Humanist serif headlines + sans body',
    risk: 'Content-hungry — looks thin without a steady stream of events and photos.'
  },
  {
    id: 'civic',
    number: '04',
    name: 'Civic Clarity',
    tagline: 'Functional, organized, documents-first',
    swatches: ['#14304F', '#0F7B6C', '#FFFFFF'],
    positioning:
      'Built for the resident who came to find one thing: the fence rules, the board contact, ' +
      'the entrance map. Dense navigation, tight components, high contrast, obvious labels. ' +
      'The most accessible and the easiest for a volunteer to keep updated.',
    type: 'System sans, tight and utilitarian',
    risk: 'Efficient rather than charming — carries little emotional warmth.'
  },
  {
    id: 'luxe',
    number: '05',
    name: 'Quiet Luxe',
    tagline: 'Minimal, restrained, premium',
    swatches: ['#14130F', '#7C8A76', '#FAF8F4']  ,
    positioning:
      'Boutique real-estate restraint: oversized light headlines, enormous whitespace, hairline ' +
      'dividers, one muted accent. Positions Brookbury as a desirable address. Photography would ' +
      'do most of the work in the final build.',
    type: 'High-contrast serif + wide-tracked caps',
    risk: 'Demands strong photography and disciplined copy to hold up.'
  }
];
