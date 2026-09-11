import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  // =========================================================
  // ENGLISH
  // =========================================================
  en: {
    translation: {
      // =====================================================
      // NAV
      // =====================================================
      nav: {
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
        location: 'Casablanca, Morocco',
      },

      // =====================================================
      // CURSOR
      // =====================================================
      cursor: {
        view: '01 / VIEW',
        figure: 'FIG.',
      },

      // =====================================================
      // HERO
      // =====================================================
      hero: {
        tagline: 'Architecture / Design / Visualization',
        location: 'Ayoub Ghaout — Casablanca, Morocco',
        imageAlt: 'AYB Architects architectural collage',
      },

      // =====================================================
      // HOME
      // =====================================================
      home: {
        whatWeDo: 'What We Do',

        intro:
          'From concept to final image, we develop architecture through drawings, space, material and visual storytelling.',

        services: {
          architecturalDesign: {
            title: 'Architectural Design',
            description:
              'From early concepts to complete spatial development, creating architecture shaped by context, function and experience.',
          },

          plansDrawings: {
            title: 'Plans & Drawings',
            description:
              'Architectural plans, sections, elevations and technical drawings developed with clarity, precision and detail.',
          },

          interiorDesign: {
            title: 'Interior Design',
            description:
              'Interior environments developed through space, material, furniture, lighting and atmosphere.',
          },

          visualization: {
            title: '3D Visualization',
            description:
              'Photorealistic architectural imagery designed to communicate atmosphere, materiality and spatial experience.',
          },

          landscapeUrban: {
            title: 'Landscape & Urban',
            description:
              'Site planning, landscape integration and public-space strategies connecting architecture with its environment.',
          },
        },

        viewFullIndex: 'View Full Index →',

        profile: 'Profile',

        profileDescription:
          'Master’s degree in Architecture from NNGASU, Russia, with international academic background across architectural design, urbanism, visualisation and technical development.',

        fullProfile: 'Full Profile + CV →',

        buildLine1: 'Let’s Build',
        buildLine2: 'Something.',

        startProject: 'Start a project →',
      },

      // =====================================================
      // FOOTER
      // =====================================================
      footer: {
        studio: 'Studio',
        architect: 'Ayoub Ghaout — Architect',
        contact: 'Contact',
        basedIn: 'Based in',
        location: 'Casablanca, Morocco',
        getInTouch: 'Get in touch →',
      },

      // =====================================================
      // ABOUT
      // =====================================================
      about: {
        profile: 'Profile',
        role: 'Architect',
        location: 'Casablanca, Morocco',

        bio:
          "Moroccan Architect with a Master's degree in Architecture from NNGASU, Russia, with an international academic background and professional experience across architectural design, urbanism, visualisation and technical development. My approach combines conceptual thinking with a strong interest in how architecture responds to its context, materiality and everyday use.",

        education: 'Education',
        software: 'Software',
        languages: 'Languages',
        skills: 'Skills',
        contact: 'Contact',

        educationItems: {
          master: {
            degree: 'Master of Architecture',
            school:
              'Nizhny Novgorod State University of Architecture and Civil Engineering — Russia',
          },

          bachelor: {
            degree: 'Bachelor of Architecture',
            school:
              'Nizhny Novgorod State University of Architecture and Civil Engineering — Russia',
          },

          russianPrep: {
            degree: 'Russian Language Preparatory Year',
            school:
              'Nizhny Novgorod State University of Architecture and Civil Engineering — Russia',
          },

          baccalaureate: {
            degree: 'Scientific Baccalaureate (Physics)',
            school: 'Morocco',
          },
        },

        languageItems: {
          arabic: 'Arabic',
          french: 'French',
          english: 'English',
          russian: 'Russian',
          spanish: 'Spanish',
        },

        skillItems: {
          architecturalDesign: 'Architectural Design',
          conceptDevelopment: 'Concept Development',
          bim: 'BIM Modeling',
          visualization: '3D Visualization',
          presentation: 'Presentation Design',
          collaboration: 'Team Collaboration',
          problemSolving: 'Problem Solving',
        },
      },

      // =====================================================
      // CONTACT PAGE
      // =====================================================
      contactPage: {
        label: 'Contact',
        buildLine1: 'Let’s Build',
        buildLine2: 'Something.',
        email: 'Email',
        phone: 'Phone',
        basedIn: 'Based in',
        location: 'Casablanca, Morocco',
      },

      // =====================================================
      // PROJECT INDEX
      // =====================================================
      projectIndex: {
        label: 'Index',
        title: 'Projects',
        intro:
          'A short, deliberate index — architectural design, urbanism and visualization from academic and independent work.',
      },

      // =====================================================
      // PROJECT PAGE UI
      // =====================================================
      projectPage: {
        project: 'Project',
        privateCommission: 'Private Commission',
        siteArea: 'Site Area',
        builtArea: 'Built Area',
        materiality: 'Materiality',
        nextProject: 'Next Project',
      },

      // =====================================================
      // PROJECTS
      // =====================================================
      projects: {
        villaAmour: {
          typology: 'Private Mansion',
          kicker: 'Residential',
          location: 'Casablanca, Morocco',

          intro:
            'Designed as a modern sanctuary, this private mansion combines clean architectural forms with natural materials and carefully framed views. Every space is conceived to maximize daylight, openness, and a strong connection with the surrounding landscape.',

          accentDetail:
            'A modern sanctuary of stone, timber fins and framed light.',

          floorPlan: 'Floor Plan',

          interior01Title: 'Interior 01 — Main Hall',

          interior01Text:
            'The main interior space extends the facade language into the building through a combination of exposed structural elements, patterned surfaces and controlled glazing. The open layout allows natural light to penetrate deep into the space, while the geometric elements create visual continuity between the interior and exterior.',

          interior02Title: 'Interior 02 — Communal Space',

          interior02Text:
            'The interior combines warm material surfaces with clean geometric lines and large glazed openings. Furniture and circulation are arranged within an open spatial framework, with filtered views and natural light connecting the occupied spaces to the surrounding architecture.',

          facadeText:
            'The facade combines a regular structural rhythm with geometric screens that vary in density across the building. Vertical fins, glazed surfaces and patterned elements create alternating layers of transparency, depth and shade, giving each elevation a distinct character while maintaining a consistent architectural language.',
        },

        cfcBusinessHub: {
          typology: 'Multifunctional Building',
          kicker: 'Mixed-Use',
          location:
            'Casablanca Finance City, Casablanca, Morocco',
          status: 'Academic Project',

          intro:
            'Located within Casablanca Finance City, the CFC Business Hub is conceived as a contemporary mixed-use building combining offices, retail, and public spaces within a compact urban framework. The project organizes public and private functions through a clear circulation strategy while connecting the building to surrounding open spaces. Its architectural expression is defined by a contemporary interpretation of traditional Moroccan Zellij geometry, transforming its geometric language into a distinctive façade pattern.',

          accentDetail:
            'Traditional Moroccan Zellij geometry, reinterpreted as a contemporary façade pattern.',

          sections: 'Sections A-A / B-B',

          materialText:
            'Inspired by traditional Moroccan Zellij, the façade pattern reinterprets its geometric language through a contemporary architectural expression.',

          mainFrontage: 'Main Frontage',

          mainFrontageText:
            'The principal facade is defined by a regular vertical rhythm of structural fins, transparent glazing, and recessed openings. White geometric screens are integrated between the vertical elements, creating alternating layers of transparency and solidity while giving the frontage a clear and consistent rhythm.',

          curvedFrontage: 'Curved Frontage',

          curvedFrontageText:
            "The curved volume is wrapped by a continuous geometric screen that follows the building's rounded form. The patterned envelope creates depth across the facade, with openings revealing portions of the glazed interior while more enclosed sections provide a stronger sense of opacity and shadow.",
        },

        sungirPark: {
          typology: 'Urban Park',
          kicker: 'Landscape / Urbanism',
          location: 'Nizhny Novgorod, Russia',
          status: 'Academic Project',

          accentDetail:
            'A landscape-driven approach to public space and urban movement.',

          park: 'Sungir Park',
          sitePlan: 'Site Plan',
          urbanStrategy: 'Urban Strategy',
          perspective: 'Perspective',

          note:
            'An urban landscape project exploring public space, movement, landscape and the surrounding urban context.',
        },

        zenata: {
          typology: 'Residential Complex',
          kicker: 'Residential',
          location: 'Zenata, Morocco',
          status: 'Professional Experience',

          intro:
            'A residential development studied during professional experience, focusing on residential organization, circulation, public space and the relationship between architecture and the surrounding urban environment.',

          accentDetail:
            'Residential architecture shaped by urban scale, circulation and collective space.',
        },

        microRayon: {
          typology: 'Urban Development',
          kicker: 'Urbanism',
          location: 'Nizhny Novgorod, Russia',
          status: 'Academic Project',

          intro:
            'An urban planning study exploring the organization of housing, public facilities, landscape and circulation within a planned residential district.',

          accentDetail:
            'An exploration of urban structure, residential density and collective space.',
        },
      },

      // =====================================================
      // 404
      // =====================================================
      notFound: {
        title: 'Page Not Found',
        home: 'Return Home →',
      },
    },
  },

  // =========================================================
  // FRENCH
  // =========================================================
  fr: {
    translation: {
      nav: {
        projects: 'Projets',
        about: 'À propos',
        contact: 'Contact',
        location: 'Casablanca, Maroc',
      },

      cursor: {
        view: '01 / VOIR',
        figure: 'FIG.',
      },

      hero: {
        tagline: 'Architecture / Design / Visualisation',
        location: 'Ayoub Ghaout — Casablanca, Maroc',
        imageAlt: 'Collage architectural AYB Architects',
      },

      home: {
        whatWeDo: 'Nos Services',

        intro:
          'Du concept à l’image finale, nous développons l’architecture à travers le dessin, l’espace, les matériaux et la narration visuelle.',

        services: {
          architecturalDesign: {
            title: 'Conception Architecturale',
            description:
              'Des premières esquisses au développement spatial complet, nous créons une architecture façonnée par le contexte, la fonction et l’expérience.',
          },

          plansDrawings: {
            title: 'Plans & Dessins',
            description:
              'Plans architecturaux, coupes, élévations et dessins techniques développés avec clarté, précision et souci du détail.',
          },

          interiorDesign: {
            title: 'Design Intérieur',
            description:
              'Des espaces intérieurs développés à travers la composition spatiale, les matériaux, le mobilier, l’éclairage et l’atmosphère.',
          },

          visualization: {
            title: 'Visualisation 3D',
            description:
              'Des images architecturales photoréalistes conçues pour communiquer l’atmosphère, la matérialité et l’expérience spatiale.',
          },

          landscapeUrban: {
            title: 'Paysage & Urbanisme',
            description:
              'Planification du site, intégration paysagère et stratégies d’espace public reliant l’architecture à son environnement.',
          },
        },

        viewFullIndex: 'Voir tous les projets →',

        profile: 'Profil',

        profileDescription:
          'Master en Architecture obtenu à la NNGASU en Russie, avec un parcours académique international couvrant la conception architecturale, l’urbanisme, la visualisation et le développement technique.',

        fullProfile: 'Profil complet + CV →',

        buildLine1: 'Construisons',
        buildLine2: 'Ensemble.',

        startProject: 'Démarrer un projet →',
      },

      footer: {
        studio: 'Studio',
        architect: 'Ayoub Ghaout — Architecte',
        contact: 'Contact',
        basedIn: 'Basé à',
        location: 'Casablanca, Maroc',
        getInTouch: 'Nous contacter →',
      },

      about: {
        profile: 'Profil',
        role: 'Architecte',
        location: 'Casablanca, Maroc',

        bio:
          'Architecte marocain titulaire d’un Master en Architecture de la NNGASU en Russie, avec un parcours académique international et une expérience professionnelle en conception architecturale, urbanisme, visualisation et développement technique. Mon approche associe réflexion conceptuelle et intérêt particulier pour la manière dont l’architecture répond à son contexte, à la matérialité et aux usages quotidiens.',

        education: 'Formation',
        software: 'Logiciels',
        languages: 'Langues',
        skills: 'Compétences',
        contact: 'Contact',

        educationItems: {
          master: {
            degree: 'Master en Architecture',
            school:
              'Université d’État d’Architecture et de Génie Civil de Nijni Novgorod — Russie',
          },

          bachelor: {
            degree: 'Licence en Architecture',
            school:
              'Université d’État d’Architecture et de Génie Civil de Nijni Novgorod — Russie',
          },

          russianPrep: {
            degree: 'Année préparatoire de langue russe',
            school:
              'Université d’État d’Architecture et de Génie Civil de Nijni Novgorod — Russie',
          },

          baccalaureate: {
            degree: 'Baccalauréat scientifique — Physique',
            school: 'Maroc',
          },
        },

        languageItems: {
          arabic: 'Arabe',
          french: 'Français',
          english: 'Anglais',
          russian: 'Russe',
          spanish: 'Espagnol',
        },

        skillItems: {
          architecturalDesign: 'Conception architecturale',
          conceptDevelopment: 'Développement conceptuel',
          bim: 'Modélisation BIM',
          visualization: 'Visualisation 3D',
          presentation: 'Conception de présentations',
          collaboration: 'Travail en équipe',
          problemSolving: 'Résolution de problèmes',
        },
      },

      contactPage: {
        label: 'Contact',
        buildLine1: 'Construisons',
        buildLine2: 'Ensemble.',
        email: 'E-mail',
        phone: 'Téléphone',
        basedIn: 'Basé à',
        location: 'Casablanca, Maroc',
      },

      projectIndex: {
        label: 'Index',
        title: 'Projets',

        intro:
          'Une sélection concise et réfléchie — conception architecturale, urbanisme et visualisation issus de travaux académiques et indépendants.',
      },

      projectPage: {
        project: 'Projet',
        privateCommission: 'Commande privée',
        siteArea: 'Surface du terrain',
        builtArea: 'Surface construite',
        materiality: 'Matérialité',
        nextProject: 'Projet suivant',
      },

      projects: {
        villaAmour: {
          typology: 'Villa privée',
          kicker: 'Résidentiel',
          location: 'Casablanca, Maroc',

          intro:
            'Conçue comme un refuge contemporain, cette villa privée associe des formes architecturales épurées à des matériaux naturels et à des vues soigneusement cadrées. Chaque espace est pensé pour maximiser la lumière naturelle, l’ouverture et la relation avec le paysage environnant.',

          accentDetail:
            'Un refuge contemporain de pierre, de lames de bois et de lumière cadrée.',

          floorPlan: 'Plan',

          interior01Title: 'Intérieur 01 — Hall principal',

          interior01Text:
            'L’espace intérieur principal prolonge le langage de la façade à travers une combinaison d’éléments structurels apparents, de surfaces à motifs et de vitrages maîtrisés. Le plan ouvert permet à la lumière naturelle de pénétrer profondément dans l’espace, tandis que les éléments géométriques assurent une continuité visuelle entre intérieur et extérieur.',

          interior02Title: 'Intérieur 02 — Espace collectif',

          interior02Text:
            'L’intérieur associe des surfaces chaleureuses à des lignes géométriques épurées et de larges ouvertures vitrées. Le mobilier et les circulations s’organisent dans un cadre spatial ouvert, avec des vues filtrées et une lumière naturelle reliant les espaces occupés à l’architecture environnante.',

          facadeText:
            'La façade associe un rythme structurel régulier à des écrans géométriques dont la densité varie selon les parties du bâtiment. Lames verticales, surfaces vitrées et éléments ajourés créent des couches alternées de transparence, de profondeur et d’ombre, donnant à chaque élévation un caractère distinct tout en maintenant un langage architectural cohérent.',
        },

        cfcBusinessHub: {
          typology: 'Bâtiment multifonctionnel',
          kicker: 'Usage mixte',

          location:
            'Casablanca Finance City, Casablanca, Maroc',

          status: 'Projet académique',

          intro:
            'Situé au sein de Casablanca Finance City, le CFC Business Hub est conçu comme un bâtiment contemporain à usage mixte regroupant bureaux, commerces et espaces publics dans une structure urbaine compacte. Le projet organise les fonctions publiques et privées grâce à une stratégie claire de circulation tout en reliant le bâtiment aux espaces ouverts environnants. Son expression architecturale repose sur une interprétation contemporaine de la géométrie traditionnelle du Zellij marocain, transformée en un motif de façade distinctif.',

          accentDetail:
            'La géométrie traditionnelle du Zellij marocain réinterprétée comme motif de façade contemporain.',

          sections: 'Coupes A-A / B-B',

          materialText:
            'Inspiré du Zellij marocain traditionnel, le motif de façade réinterprète son langage géométrique à travers une expression architecturale contemporaine.',

          mainFrontage: 'Façade principale',

          mainFrontageText:
            'La façade principale est définie par un rythme vertical régulier de lames structurelles, de vitrages transparents et d’ouvertures en retrait. Des écrans géométriques blancs sont intégrés entre les éléments verticaux, créant des alternances de transparence et de pleine matière tout en donnant à la façade un rythme clair et cohérent.',

          curvedFrontage: 'Façade courbe',

          curvedFrontageText:
            'Le volume courbe est enveloppé d’un écran géométrique continu suivant la forme arrondie du bâtiment. L’enveloppe ajourée crée de la profondeur sur la façade, certaines ouvertures laissant apparaître le vitrage intérieur tandis que les parties plus fermées renforcent l’opacité et les jeux d’ombre.',
        },

        sungirPark: {
          typology: 'Parc urbain',
          kicker: 'Paysage / Urbanisme',
          location: 'Nijni Novgorod, Russie',
          status: 'Projet académique',

          accentDetail:
            'Une approche paysagère de l’espace public et des déplacements urbains.',

          park: 'Parc Sungir',
          sitePlan: 'Plan de masse',
          urbanStrategy: 'Stratégie urbaine',
          perspective: 'Perspective',

          note:
            'Un projet de paysage urbain explorant l’espace public, les déplacements, le paysage et le contexte urbain environnant.',
        },

        zenata: {
          typology: 'Complexe résidentiel',
          kicker: 'Résidentiel',
          location: 'Zenata, Maroc',
          status: 'Expérience professionnelle',

          intro:
            'Un développement résidentiel étudié dans le cadre d’une expérience professionnelle, portant sur l’organisation du logement, les circulations, l’espace public et la relation entre l’architecture et l’environnement urbain.',

          accentDetail:
            'Une architecture résidentielle façonnée par l’échelle urbaine, les circulations et les espaces collectifs.',
        },

        microRayon: {
          typology: 'Développement urbain',
          kicker: 'Urbanisme',
          location: 'Nijni Novgorod, Russie',
          status: 'Projet académique',

          intro:
            'Une étude de planification urbaine explorant l’organisation du logement, des équipements publics, du paysage et des circulations au sein d’un quartier résidentiel planifié.',

          accentDetail:
            'Une exploration de la structure urbaine, de la densité résidentielle et de l’espace collectif.',
        },
      },

      notFound: {
        title: 'Page introuvable',
        home: 'Retour à l’accueil →',
      },
    },
  },

  // =========================================================
  // ARABIC
  // =========================================================
  ar: {
    translation: {
      nav: {
        projects: 'المشاريع',
        about: 'من نحن',
        contact: 'تواصل',
        location: 'الدار البيضاء، المغرب',
      },

      cursor: {
        view: '01 / عرض',
        figure: 'شكل',
      },

      hero: {
        tagline: 'العمارة / التصميم / التصور المعماري',
        location: 'Ayoub Ghaout — الدار البيضاء، المغرب',
        imageAlt: 'مجموعة صور معمارية لـ AYB Architects',
      },

      home: {
        whatWeDo: 'خدماتنا',

        intro:
          'من الفكرة الأولى إلى الصورة النهائية، نطوّر العمارة من خلال الرسم والفضاء والمواد والسرد البصري.',

        services: {
          architecturalDesign: {
            title: 'التصميم المعماري',
            description:
              'من الأفكار الأولية إلى تطوير المشروع بشكل متكامل، نصمم عمارة تستجيب للسياق والوظيفة وتجربة المستخدم.',
          },

          plansDrawings: {
            title: 'المخططات والرسومات',
            description:
              'مخططات معمارية ومقاطع وواجهات ورسومات تقنية يتم تطويرها بوضوح ودقة واهتمام بالتفاصيل.',
          },

          interiorDesign: {
            title: 'التصميم الداخلي',
            description:
              'تصميم الفراغات الداخلية من خلال التكوين المكاني والمواد والأثاث والإضاءة والأجواء.',
          },

          visualization: {
            title: 'التصور ثلاثي الأبعاد',
            description:
              'صور معمارية واقعية تهدف إلى إيصال الأجواء والمواد والتجربة المكانية للمشروع.',
          },

          landscapeUrban: {
            title: 'تنسيق المواقع والتخطيط الحضري',
            description:
              'تخطيط المواقع ودمج المناظر الطبيعية وتطوير الفضاءات العامة لربط العمارة بمحيطها.',
          },
        },

        viewFullIndex: 'عرض جميع المشاريع →',

        profile: 'الملف الشخصي',

        profileDescription:
          'حاصل على درجة الماجستير في الهندسة المعمارية من جامعة NNGASU في روسيا، مع خلفية أكاديمية دولية في التصميم المعماري والتخطيط الحضري والتصور البصري والتطوير التقني.',

        fullProfile: 'الملف الكامل + السيرة الذاتية →',

        buildLine1: 'لنصنع',
        buildLine2: 'شيئاً معاً.',

        startProject: 'ابدأ مشروعاً →',
      },

      footer: {
        studio: 'الاستوديو',
        architect: 'Ayoub Ghaout — مهندس معماري',
        contact: 'تواصل',
        basedIn: 'الموقع',
        location: 'الدار البيضاء، المغرب',
        getInTouch: 'تواصل معنا →',
      },

      about: {
        profile: 'الملف الشخصي',
        role: 'مهندس معماري',
        location: 'الدار البيضاء، المغرب',

        bio:
          'مهندس معماري مغربي حاصل على درجة الماجستير في الهندسة المعمارية من جامعة NNGASU في روسيا، مع خلفية أكاديمية دولية وخبرة مهنية في التصميم المعماري والتخطيط الحضري والتصور البصري والتطوير التقني. يجمع نهجي بين التفكير المفاهيمي والاهتمام بكيفية استجابة العمارة لسياقها وموادها وأنماط الاستخدام اليومية.',

        education: 'التعليم',
        software: 'البرامج',
        languages: 'اللغات',
        skills: 'المهارات',
        contact: 'تواصل',

        educationItems: {
          master: {
            degree: 'ماجستير في الهندسة المعمارية',
            school:
              'جامعة نيجني نوفغورود الحكومية للهندسة المعمارية والهندسة المدنية — روسيا',
          },

          bachelor: {
            degree: 'بكالوريوس في الهندسة المعمارية',
            school:
              'جامعة نيجني نوفغورود الحكومية للهندسة المعمارية والهندسة المدنية — روسيا',
          },

          russianPrep: {
            degree: 'السنة التحضيرية للغة الروسية',
            school:
              'جامعة نيجني نوفغورود الحكومية للهندسة المعمارية والهندسة المدنية — روسيا',
          },

          baccalaureate: {
            degree: 'البكالوريا في العلوم الفيزيائية',
            school: 'المغرب',
          },
        },

        languageItems: {
          arabic: 'العربية',
          french: 'الفرنسية',
          english: 'الإنجليزية',
          russian: 'الروسية',
          spanish: 'الإسبانية',
        },

        skillItems: {
          architecturalDesign: 'التصميم المعماري',
          conceptDevelopment: 'تطوير المفاهيم',
          bim: 'نمذجة BIM',
          visualization: 'التصور ثلاثي الأبعاد',
          presentation: 'تصميم العروض',
          collaboration: 'العمل الجماعي',
          problemSolving: 'حل المشكلات',
        },
      },

      contactPage: {
        label: 'تواصل',
        buildLine1: 'لنصنع',
        buildLine2: 'شيئاً معاً.',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        basedIn: 'الموقع',
        location: 'الدار البيضاء، المغرب',
      },

      projectIndex: {
        label: 'الفهرس',
        title: 'المشاريع',

        intro:
          'مجموعة مختارة بعناية من أعمال التصميم المعماري والتخطيط الحضري والتصور البصري ضمن مشاريع أكاديمية ومستقلة.',
      },

      projectPage: {
        project: 'مشروع',
        privateCommission: 'تكليف خاص',
        siteArea: 'مساحة الموقع',
        builtArea: 'المساحة المبنية',
        materiality: 'المواد',
        nextProject: 'المشروع التالي',
      },

      projects: {
        villaAmour: {
          typology: 'فيلا خاصة',
          kicker: 'سكني',
          location: 'الدار البيضاء، المغرب',

          intro:
            'صُممت هذه الفيلا الخاصة كملاذ عصري يجمع بين الأشكال المعمارية الواضحة والمواد الطبيعية والإطلالات المدروسة بعناية. تم تصميم كل مساحة لتعظيم الإضاءة الطبيعية والانفتاح وتعزيز العلاقة مع المناظر الطبيعية المحيطة.',

          accentDetail:
            'ملاذ عصري يجمع بين الحجر والعناصر الخشبية والضوء المؤطر.',

          floorPlan: 'المخطط',

          interior01Title: 'الداخلية 01 — البهو الرئيسي',

          interior01Text:
            'يمتد التعبير المعماري للواجهة إلى الفراغ الداخلي من خلال مزيج من العناصر الإنشائية الظاهرة والأسطح المزخرفة والزجاج المدروس. يسمح المخطط المفتوح بدخول الضوء الطبيعي إلى عمق الفراغ، بينما تحقق العناصر الهندسية استمرارية بصرية بين الداخل والخارج.',

          interior02Title: 'الداخلية 02 — الفضاء المشترك',

          interior02Text:
            'يجمع التصميم الداخلي بين الأسطح الدافئة والخطوط الهندسية النقية والفتحات الزجاجية الكبيرة. يتم تنظيم الأثاث والحركة ضمن إطار مكاني مفتوح، مع إطلالات مفلترة وضوء طبيعي يربط الفراغات المستخدمة بالعمارة المحيطة.',

          facadeText:
            'تجمع الواجهة بين إيقاع إنشائي منتظم وشاشات هندسية تختلف كثافتها عبر أجزاء المبنى. تخلق العناصر الرأسية والأسطح الزجاجية والتكوينات المزخرفة طبقات متناوبة من الشفافية والعمق والظل، مما يمنح كل واجهة طابعاً مميزاً مع الحفاظ على لغة معمارية متماسكة.',
        },

        cfcBusinessHub: {
          typology: 'مبنى متعدد الوظائف',
          kicker: 'متعدد الاستخدامات',

          location:
            'القطب المالي للدار البيضاء، الدار البيضاء، المغرب',

          status: 'مشروع أكاديمي',

          intro:
            'يقع مشروع CFC Business Hub داخل القطب المالي للدار البيضاء، وقد صُمم كمبنى معاصر متعدد الاستخدامات يجمع بين المكاتب والمحلات التجارية والفضاءات العامة ضمن إطار حضري مدمج. ينظم المشروع الوظائف العامة والخاصة من خلال استراتيجية واضحة للحركة، مع ربط المبنى بالفضاءات المفتوحة المحيطة. ويستند التعبير المعماري إلى إعادة تفسير معاصرة للهندسة التقليدية للزليج المغربي وتحويلها إلى نمط مميز للواجهة.',

          accentDetail:
            'إعادة تفسير معاصرة للهندسة التقليدية للزليج المغربي ضمن تصميم الواجهة.',

          sections: 'المقاطع A-A / B-B',

          materialText:
            'مستوحى من الزليج المغربي التقليدي، يعيد نمط الواجهة تفسير لغته الهندسية من خلال تعبير معماري معاصر.',

          mainFrontage: 'الواجهة الرئيسية',

          mainFrontageText:
            'تتميز الواجهة الرئيسية بإيقاع رأسي منتظم من العناصر الإنشائية والزجاج الشفاف والفتحات المتراجعة. تندمج الشاشات الهندسية البيضاء بين العناصر الرأسية لتكوين طبقات متناوبة من الشفافية والكتلة، مع الحفاظ على إيقاع واضح ومتجانس للواجهة.',

          curvedFrontage: 'الواجهة المنحنية',

          curvedFrontageText:
            'يلتف حول الحجم المنحني غلاف هندسي مستمر يتبع الشكل المستدير للمبنى. يخلق النمط عمقاً في الواجهة، حيث تكشف بعض الفتحات أجزاء من المساحات الزجاجية الداخلية، بينما توفر المناطق الأكثر انغلاقاً إحساساً أكبر بالكتلة والظل.',
        },

        sungirPark: {
          typology: 'حديقة حضرية',
          kicker: 'تنسيق المواقع / التخطيط الحضري',
          location: 'نيجني نوفغورود، روسيا',
          status: 'مشروع أكاديمي',

          accentDetail:
            'مقاربة تعتمد على المشهد الطبيعي لتطوير الفضاء العام والحركة الحضرية.',

          park: 'حديقة Sungir',
          sitePlan: 'مخطط الموقع',
          urbanStrategy: 'الاستراتيجية الحضرية',
          perspective: 'منظور',

          note:
            'مشروع منظر حضري يستكشف الفضاء العام والحركة والمناظر الطبيعية والسياق الحضري المحيط.',
        },

        zenata: {
          typology: 'مجمع سكني',
          kicker: 'سكني',
          location: 'زناتة، المغرب',
          status: 'خبرة مهنية',

          intro:
            'مشروع تطوير سكني تمت دراسته ضمن تجربة مهنية، مع التركيز على تنظيم السكن والحركة والفضاءات العامة والعلاقة بين العمارة والبيئة الحضرية المحيطة.',

          accentDetail:
            'عمارة سكنية تتشكل من خلال المقياس الحضري والحركة والفضاءات الجماعية.',
        },

        microRayon: {
          typology: 'تطوير حضري',
          kicker: 'تخطيط حضري',
          location: 'نيجني نوفغورود، روسيا',
          status: 'مشروع أكاديمي',

          intro:
            'دراسة في التخطيط الحضري تستكشف تنظيم السكن والمرافق العامة والمناظر الطبيعية والحركة داخل حي سكني مخطط.',

          accentDetail:
            'استكشاف للبنية الحضرية والكثافة السكنية والفضاءات الجماعية.',
        },
      },

      notFound: {
        title: 'الصفحة غير موجودة',
        home: 'العودة إلى الرئيسية →',
      },
    },
  },
}

// =========================================================
// LANGUAGE
// =========================================================

const savedLanguage =
  localStorage.getItem('language') || 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: savedLanguage,

    fallbackLng: 'en',

    supportedLngs: ['en', 'fr', 'ar'],

    interpolation: {
      escapeValue: false,
    },
  })

// =========================================================
// RTL / LTR
// =========================================================

const updateDocumentLanguage = (language) => {
  const lang =
    language?.split('-')[0] || 'en'

  document.documentElement.lang = lang

  document.documentElement.dir =
    lang === 'ar' ? 'rtl' : 'ltr'

  localStorage.setItem('language', lang)
}

updateDocumentLanguage(
  i18n.resolvedLanguage ||
    i18n.language
)

i18n.on(
  'languageChanged',
  (language) => {
    updateDocumentLanguage(language)
  }
)

export default i18n