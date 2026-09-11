// All copy and figures below are drawn directly from the AYB Architects
// portfolio (Ayoub Ghaout, 2023–2026). Nothing here is invented.


export const profile = {
  name: 'Ayoub Ghaout',
  age: 26,
  role: 'Architect',
  location: 'Casablanca, Morocco',
  email: 'ayoubghaout4@gmail.com',
  phone: '+212 6 63 48 31 20',
  bio: `Moroccan Architect with a Master's degree in Architecture from NNGASU, Russia, with an international academic background and professional experience across architectural design, urbanism, visualisation and technical development. My approach combines conceptual thinking with a strong interest in how architecture responds to its context, materiality and everyday use.`,
  education: [
    {
      degree: 'Master of Architecture',
      school:
        'Nizhny Novgorod State University of Architecture and Civil Engineering — Russia',
      years: '2023 – 2025',
    },
    {
      degree: 'Bachelor of Architecture',
      school:
        'Nizhny Novgorod State University of Architecture and Civil Engineering — Russia',
      years: '2018 – 2023',
    },
    {
      degree: 'Russian Language Preparatory Year',
      school:
        'Nizhny Novgorod State University of Architecture and Civil Engineering, Russia',
      years: '2017 – 2018',
    },
    {
      degree: 'Scientific Baccalaureate (Physics)',
      school: 'Morocco',
      years: '2016 – 2017',
    },
  ],
  software: [
    'ArchiCAD',
    'Lumion',
    'Photoshop',
    'InDesign',
    'Illustrator',
    'SketchUp',
    'Rhino',
    'Revit',
  ],
  languages: ['Arabic', 'French', 'English', 'Russian', 'Spanish'],
  skills: [
    'Architectural Design',
    'Concept Development',
    'BIM Modeling',
    '3D Visualization',
    'Presentation Design',
    'Team Collaboration',
    'Problem Solving',
  ],
  portrait:
    '/images/profile/WhatsApp Image 2026-03-22 at 00.45.50.jpeg',
}


export const projects = [
  {
    index: '',
    slug: 'villa-amour',
    title: 'Villa Amour',
    typology: 'Private Mansion',
    kicker: 'Residential',
    location: 'Casablanca, Morocco',
    year: '2026',
    status: null,

    intro: `Designed as a modern sanctuary, this private mansion combines clean architectural forms with natural materials and carefully framed views. Every space is conceived to maximize daylight, openness, and a strong connection with the surrounding landscape.`,

    cover:
      '/images/villa-amour/9E6FB540-7622-48D7-8EEA-6AAA3066D462.png',

    coverWide:
      '/images/villa-amour/9E6FB540-7622-48D7-8EEA-6AAA3066D462.png',

    accentDetail:
      'A modern sanctuary of stone, timber fins and framed light.',

    sections: [
      {
        kind: 'full',
        label: '',
        image: '/images/villa-amour/01-exterior-twilight.jpg',
        note: '',
      },

      {
        kind: 'full',
        label: 'Floor Plan',
        drawingNumber: '01 / 04',
        image: '/images/villa-amour/02-floor-plan.jpg',
        note: '',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '02 / 04',
        image: '/images/villa-amour/03-section-diagrams.jpg',
      },

      {
        kind: 'interiors',
        label: '',
        items: [
          {
            title: 'Interior 01 — Main Hall',
            image:
              '/images/villa-amour/04a-interior-main-hall.jpg',
            text: `The main interior space extends the facade language into the building through a combination of exposed structural elements, patterned surfaces and controlled glazing. The open layout allows natural light to penetrate deep into the space, while the geometric elements create visual continuity between the interior and exterior.`,
          },

          {
            title: 'Interior 02 — Communal Space',
            image:
              '/images/villa-amour/ChatGPT Image 8 août 2026, 20_18_21.png',
            text: `The interior combines warm material surfaces with clean geometric lines and large glazed openings. Furniture and circulation are arranged within an open spatial framework, with filtered views and natural light connecting the occupied spaces to the surrounding architecture.`,
          },
        ],
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '03 / 04',
        image: '/images/villa-amour/7663B14C-5046-4466-B2DA-760E78BD647C.PNG',
        text: `The facade combines a regular structural rhythm with geometric screens that vary in density across the building. Vertical fins, glazed surfaces and patterned elements create alternating layers of transparency, depth and shade, giving each elevation a distinct character while maintaining a consistent architectural language.`,
      },
    ],
  },


  {
    index: '',
    slug: 'cfc-business-hub',
    title: 'CFC Business Hub',
    typology: 'Multifunctional Building',
    kicker: 'Mixed-Use',
    location: 'Casablanca Finance City, Casablanca, Morocco',
    year: '2023',
    status: 'Academic Project',

    intro: `Located within Casablanca Finance City, the CFC Business Hub is conceived as a contemporary mixed-use building combining offices, retail, and public spaces within a compact urban framework. The project organizes public and private functions through a clear circulation strategy while connecting the building to surrounding open spaces. Its architectural expression is defined by a contemporary interpretation of traditional Moroccan Zellij geometry, transforming its geometric language into a distinctive façade pattern.`,

    cover:
      '/images/cfc-hub/Golden_Hour_Architectural_Realism.png',

    coverWide:
      '/images/cfc-hub/Golden_Hour_Architectural_Realism.png',

    accentDetail:
      'Traditional Moroccan Zellij geometry, reinterpreted as a contemporary façade pattern.',

    sections: [
      {
        kind: 'full',
        label: '',
        image:
          '/images/cfc-hub/Golden_Hour_Architectural_Realism.png',
        note: '',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '01 / 07',
        image: '/images/cfc-hub/02-urban-context-diagram.jpg',
        note: '',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '02 / 07',
        image: '/images/cfc-hub/03-site-plan.jpg',
        note: '',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '03 / 07',
        image: '/images/cfc-hub/04-first-floor-plan.jpg',
        note: '',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '04 / 07',
        image: '/images/cfc-hub/05-upper-floor-plans.jpg',
        note: '',
      },

      {
        kind: 'full',
        label: 'Sections A-A / B-B',
        drawingNumber: '05 / 07',
        image: '/images/cfc-hub/06-sections.jpg',
        note: '',
      },

      {
        kind: 'program',
        label: '',
        drawingNumber: '06 / 07',

        sectionImage:
          '/images/cfc-hub/07-section-program-zellij.jpg',

        materialImage:
          '/images/cfc-hub/07a-zellij-material-grid.jpg',

        patternImage:
          '/images/cfc-hub/07b-zellij-pattern-diagram.jpg',

        legend: [
          {
            label: '',
            color: '#8f7fb0',
          },
          {
            label: '',
            color: '#5f7fae',
          },
          {
            label: '',
            color: '#7fa6a3',
          },
          {
            label: '',
            color: '#b9c6c6',
          },
        ],

        text: `Inspired by traditional Moroccan Zellij, the façade pattern reinterprets its geometric language through a contemporary architectural expression.`,
      },

      {
        kind: 'full',
        label: 'Main Frontage',
        drawingNumber: '07 / 07',

        image:
          '/images/cfc-hub/Golden_Hour_Urban_Architectural_Realism.png',

        text: `The principal facade is defined by a regular vertical rhythm of structural fins, transparent glazing, and recessed openings. White geometric screens are integrated between the vertical elements, creating alternating layers of transparency and solidity while giving the frontage a clear and consistent rhythm.`,
      },

      {
        kind: 'full',
        label: 'Curved Frontage',
        drawingNumber: 'Ext.',

        image:
          '/images/cfc-hub/Golden_Hour_Architectural_Glamour.png',

        text: `The curved volume is wrapped by a continuous geometric screen that follows the building's rounded form. The patterned envelope creates depth across the facade, with openings revealing portions of the glazed interior while more enclosed sections provide a stronger sense of opacity and shadow.`,
      },
    ],
  },


  {
    index: '',
    slug: 'sungir-park',
    title: 'Sungir Park',
    typology: 'Urban Park',
    kicker: 'Landscape / Urbanism',
    location: 'Nizhny Novgorod, Russia',
    year: '2024',
    status: 'Academic Project',

    intro: ``,

    cover: '/images/villa-amour/1a25.jpg',
    coverWide: '/images/villa-amour/1a25.jpg',

    accentDetail:
      'A landscape-driven approach to public space and urban movement.',

    sections: [
      {
        kind: 'full',
        label: 'Sungir Park',
        drawingNumber: '01 / 04',
        image: '/images/villa-amour/1a25.jpg',

        note:
          'An urban landscape project exploring public space, movement, landscape and the surrounding urban context.',
      },

      {
        kind: 'full',
        label: 'Site Plan',
        drawingNumber: '02 / 04',
        image: '/images/villa-amour/1a26.jpg',
      },

      {
        kind: 'full',
        label: 'Urban Strategy',
        drawingNumber: '03 / 04',
        image: '/images/villa-amour/1a28.jpg',
      },

      {
        kind: 'full',
        label: 'Perspective',
        drawingNumber: '04 / 04',
        image: '/images/villa-amour/1a29.jpg',
      },
    ],
  },


  /* =======================================================
     ZENATA
     PUT YOUR 4 ZENATA IMAGES IN:
     public/images/zenata/
     ======================================================= */

  {
    index: '',
    slug: 'zenata',
    title: 'Zenata',
    typology: 'Residential Complex',
    kicker: 'Residential',
    location: 'Zenata, Morocco',
    year: '2025',
    status: 'Professional Experience',

    intro: `A residential development studied during professional experience, focusing on residential organization, circulation, public space and the relationship between architecture and the surrounding urban environment.`,

    cover: '/images/villa-amour/afaf.jpg',
    coverWide: '/images/villa-amour/afaf.jpg',

    accentDetail:
      'Residential architecture shaped by urban scale, circulation and collective space.',

    sections: [
      {
        kind: 'full',
        label: 'Zenata',
        drawingNumber: '01 / 04',

        /* =============================================
           ZENATA IMAGE 1 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/afaf.jpg',

        note:
          '',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '02 / 04',

        /* =============================================
           ZENATA IMAGE 2 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/ee52b0f6-9387-4ae5-a6bd-c1f0104406e4.jpg',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '03 / 04',

        /* =============================================
           ZENATA IMAGE 3 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/1a32.jpg',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '04 / 04',

        /* =============================================
           ZENATA IMAGE 4 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/1a33.jpg',
      },
    ],
  },


  /* =======================================================
     MICRO RAYON
     PUT YOUR 4 MICRO RAYON IMAGES IN:
     public/images/micro-rayon/
     ======================================================= */

  {
    index: '',
    slug: 'micro-rayon',
    title: 'Micro Rayon',
    typology: 'Urban Development',
    kicker: 'Urbanism',
    location: 'Nizhny Novgorod, Russia',
    year: '2023',
    status: 'Academic Project',

    intro: `An urban planning study exploring the organization of housing, public facilities, landscape and circulation within a planned residential district.`,

    cover:
      '/images/villa-amour/Modern_Russian_Microrayon_Rendering.png',

    coverWide:
      '/images/villa-amour/Modern_Russian_Microrayon_Rendering.png',

    accentDetail:
      'An exploration of urban structure, residential density and collective space.',

    sections: [
      {
        kind: 'full',
        label: '',
        drawingNumber: '01 / 04',

        /* =============================================
           MICRO RAYON IMAGE 1 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/Screenshot (116).png',

        note:
          '',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '02 / 04',

        /* =============================================
           MICRO RAYON IMAGE 2 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/ChatGPT Image Sep 5, 2026, 05_17_08 PM.png',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '03 / 04',

        /* =============================================
           MICRO RAYON IMAGE 3 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/8K_Russian_Microrayon_Aerial.png',
      },

      {
        kind: 'full',
        label: '',
        drawingNumber: '04 / 04',

        /* =============================================
           MICRO RAYON IMAGE 4 — CHANGE THIS PATH
           ============================================= */
        image: '/images/villa-amour/Modern_Russian_Microrayon_Rendering.png',
      },
    ],
  },
]


export const getProject = (slug) =>
  projects.find((p) => p.slug === slug)