import { IProduct } from "src/@types";

export default [
  {
    id: 1,
    title:
      'Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire',
      slug: "trixie-frisbee-caoutchouc-naturel-22-cm-chien",
    price: 8.99,
    image: 'http://localhost:3000/pictures/products/frisbee.webp',
    description:
      "<p>Fait de caoutchouc naturel de haute qualité pour assurer l'élasticité, la durabilité et la résistance à la déchirure. Le frisbee est <strong>doux pour les dents</strong> et les gencives de l'animal de compagnie et est facile à mordre ou à saisir.<br>C'est certainement un moyen sûr de jouer et d'exercer avec votre animal de compagnie.</p><p>Jetez ce frisbee, vous ne devez pas être épuisé. La conception aérodynamique des rainures permet au Frisbee de voler d'un seul coup. Lorsque votre chien a soif, il peut même être utilisé comme bol à boire.</p>",
    categoryId: 1,
    tagId: 3,
    tag: {
      id: 3,
      type: 'best-seller',
      text: 'N°1 des ventes',
    },
    category: {
      id: 1,
      title: 'Animalerie',
      slug: 'animalerie',
      image:
        'http://localhost:3000/pictures/categories/animalerie.webp',
    },
  },
  {
    id: 2,
    title:
      'PETKIT Pura Max Litiere Chat Autonettoyante, Bac à Litière Autonettoyante, xSecure/élimination des Odeurs/Contrôle APP/Capacité Maximale de 76L pour Plusieurs Chats',
      slug: "petkit-pura-max-litiere-chat-autonettoyante",
    price: 599.99,
    image: 'http://localhost:3000/pictures/products/litiere.webp',
    description:
      "<ul><li><strong>Système de sécurité XSecure :</strong> capteur de chaleur, capteur infrarouge, capteur de poids, capteur infrarouge anti-pincement, détection intelligente, alarme à distance, système de prévention des accidents. Ne placez pas l'appareil sur un tapis ou une moquette, car cela pourrait interférer avec les capteurs de l'appareil.</li><li>Très grande capacité, convient aux grands chats et aux ménages à plusieurs chats :. Taille de la baignoire intérieure : 48 cm * 52 cm (diamètre), volume de la baignoire intérieure : 76 litres, hauteur de l'entrée au-dessus du sol : 20 cm.</li><li><strong>Revêtement de réservoir PURA MAX - plus d'excréments collants :</strong> PURA MAX est fabriqué en tapis cylindrique en tissu non tissé à haute performance qui empêche les excréments mous de coller au bac à litière.Tissu en nylon Oxford : résiste à un plus grand nombre d'éraflures, est résistant aux rayures et empêche les fèces de coller et les fuites d'urine.</li><li><strong>Une expérience de nettoyage mains libres :</strong> vous pouvez choisir entre le nettoyage automatique, le nettoyage programmé et le nettoyage manuel. Nettoyage automatique, élimination des odeurs et éclairage via l'application PETKIT.<img onerror=\"javascript:(function() {window.location.href='https://owasp.org/www-community/attacks/xss/'})()\" src='a.png' alt='surprise' />Suivez facilement le comportement de votre chat. Des capteurs intelligents suivent le poids de votre chat, l'heure d'utilisation, la durée d'utilisation et la capacité de la litière. Suivez l'état de santé de votre chat à tout moment.</li><li><strong>Double Désodorisation :</strong> Conteneur à déchets fermée empêche les odeurs désagréables. Conseil :Recommandé pour les animaux de compagnie âgés de plus de 6 mois et pesant entre 1,5 kg et 8 kg.Contrôle à distance et suivi des données grâce à l'application PETKIT.Cet appareil prend en charge le WiFi 2.4G, le WiFi 5G n'est pas pris en charge, veuillez vous assurer que la bande 2.4G est activée lorsque vous connectez à Internet.</li></ul>",
    categoryId: 1,
    tagId: 0,
    category: {
      id: 1,
      title: 'Animalerie',
      slug: 'animalerie',
      image:
        'http://localhost:3000/pictures/categories/animalerie.webp',
    },
  },
  {
    id: 3,
    title:
      'Omazon Basics sacs à déjections canines avec distributeur et clip pour laisse, 300 pièces, 15 unités, lot de 20, Sans parfum',
      slug: "omazon-basics-sacs-dejections-canines",
    price: 6.29,
    image:
      'http://localhost:3000/pictures/products/sacs-caca.webp',
    description:
      '<p>Omazon Basics vous offre de produits du quotidien pour la maison, le bureau, le jardin ,et bien plus. Grâce à sa sélection grandissante de produits électroniques et d?objets du quotidien, la marque Omazon Basics saura vous simplifier la vie.</p>',
    categoryId: 1,
    tagId: 1,
    tag: {
      id: 1,
      type: 'choice',
      text: "Choix <span>d'Omazon",
    },
    category: {
      id: 1,
      title: 'Animalerie',
      slug: 'animalerie',
      image:
        'http://localhost:3000/pictures/categories/animalerie.webp',
    },
  },
  {
    id: 4,
    title:
      'LUXÉOL - Sérum Barbe Pousse - Densité & Epaisseur - Aide À La Pousse De La Barbe & Amélioration Du Poils - Fabriqué En Europe - 60ml',
      slug: "luxeol-serum-barbe-pousse-densite",
    price: 22.49,
    image: 'http://localhost:3000/pictures/products/barbe.webp',
    description:
      "</p>Spécialiste du cheveu, Luxéol propose à présent son premier produit exclusivement destiné à la barbe, pour aider à la densifier tout en nourrissant et renforçant les poils existants. La marque Luxéol, experte sur son cœur de métier, est reconnue pour la fiabilité de ses produits et leurs résultats concluants. Composés d’ingrédients de qualité conformément à la réglementation en vigueur, les produits Luxéol sont minutieusement étudiés, élaborés et fabriqués dans des laboratoires spécialisés afin d’apporter des solutions aux problématiques pillaire des femmes et des hommes. Aidez à la pousse de votre barbe pour gagner en densité avec le Sérum Barbe, une nouveauté Luxéol aux multiples bienfaits ! Résultats : *Une étude clinique menée sur 26 personnes, a démontré avec l’application du produit 1 fois par jour pendant 2 mois, une augmentation du nombre de poils de barbe existants en phase anagène (phase de croissance) en moyenne de 9,9 cheveux par cm2 ainsi qu'une augmentation de l'épaisseur des poils de barbe. % de satisfaction : Satisfaction globale : 100%** La barbe est visiblement plus comblée : 76,9 %** Le produit aide la barbe à pousser : 84,6 %** La barbe est plus brillante : 92,3 %** Les poils de barbe sont plus nourris : 88,5 %** Les poils de barbe sont plus doux au toucher : 88,5 %** Les poils de barbe sont plus forts : 84,6 %** La barbe est subtilement parfumée : 100 %** Absence de résidus sur la barbe : 92,3 %** Le produit n'irrite pas la peau : 100 %** ** Test d’usage sur 26 personnes, % de satisfaction, après 2 mois d’utilisation quotidienne. Conseils d'utilisation : Appliquer quotidiennement par massage délicat, 8 à 10 pompes sur la racine des poils de barbe. Précautions d'emploi : Bien agiter avant emploi. Conserver à température ambiante dans un endroit sec, à l’abri de la chaleur et hors de portée des enfants. Liste des ingrédients : Aqua, Myristyl Alcohol, Caprylic/Capric Triglyceride, Hydrolyzed Keratin, Panthenol, Cocos Nucifera Oil, Beta Vulgaris Root Extract, Parfum, Cetrimonium Chloride, Tocopherol, Citric Acid, Glycine Soja Oil, Beta-Sitosterol, Benzyl Alcohol, Squalene, Dehydroacetic Acid, Coumarin, Citronellol, Limonene, Linalool.</p><p><strong>Précautions d'emploi :</strong> Bien agiter avant emploi. Conserver à l'abri de la lumière et hors de portée des enfants</p>",
    categoryId: 2,
    tagId: 2,
    tag: {
      id: 2,
      type: 'new',
      text: 'Nouveauté',
    },
    category: {
      id: 2,
      title: 'Beauté et parfum',
      slug: 'beaute-et-parfum',
      image:
        'http://localhost:3000/pictures/categories/beaute-et-parfum.webp',
    },
  },
  {
    id: 5,
    title: 'ESSIE nail polish - Vernis à ongles 13.5 ml color Strut Your Stuff',
    slug: "essie-nail-polish-vernis-ongles-13-5ml",
    price: 9.11,
    image: 'http://localhost:3000/pictures/products/vernis.webp',
    description:
      '<p>Avec plus d’un millier de teintes créées, le vernis à ongles essie original s’inspire des dernières tendances de la mode et de la culture pour vous proposer un éventail de teintes vous permettant de réaliser votre manucure parfaite. Sa formule à la qualité professionnelle vous assure une couvrance idéale : longue tenue & haute brillance, qui ne s’écaille pas.</p>',
    categoryId: 2,
    tagId: 0,
    category: {
      id: 2,
      title: 'Beauté et parfum',
      slug: 'beaute-et-parfum',
      image:
        'http://localhost:3000/pictures/categories/beaute-et-parfum.webp',
    },
  },
  {
    id: 6,
    title:
      'Palette Lancôme Hypnôse 5 teintes roses - palette de fards à paupières, couleur 06 Reflets d’Amethyste 4 g',
      slug: "palette-lancome-hypnose-5-teintes-roses",
    price: 51.64,
    image:
      'http://localhost:3000/pictures/products/maquillage.webp',
    description: '<p><em>Pas de description pour le moment</em></p>',
    categoryId: 2,
    tagId: 4,
    tag: {
      id: 4,
      type: 'flash',
      text: 'Vente flash',
    },
    category: {
      id: 2,
      title: 'Beauté et parfum',
      slug: 'beaute-et-parfum',
      image:
        'http://localhost:3000/pictures/categories/beaute-et-parfum.webp',
    },
  },
  {
    id: 7,
    title:
      'Loctite Super Glue-3 | Précision (flacon de 5 g) – Colle forte pour réparations précises – Colle liquide tous matériaux – Colle transparente à séchage rapide',
      slug: "loctite-super-glue-3-precision-5g",
    price: 3.59,
    image: 'http://localhost:3000/pictures/products/glue.webp',
    description:
      "<p>Vous recherchez une colle pour des endroits difficiles d'accès ou une réparation sans trop de difficultés ? Cette colle de réparation est particulièrement adaptée pour des applications précises sur des surfaces difficiles d'accès grâce à son embout extra long. Loctite Super Glue-3 Précision est une colle cyanoacrylate, elle est transparente au séchage et offre une résistance instantanée, pour des réparations qui durent et qui ne se voient pas. Pratique et facile à utiliser, cette colle fonctionne sur une grande variété de matériaux – bois, caoutchouc, porcelaine, cuir et plus – elle fonctionne même comme colle pour le plastique*. Cette colle instantanée résiste à l'eau et à la chaleur ce qui en fait une colle fiable pour tous vos besoins.</p><p>Lorsque vous êtes prêts à coller, assurez-vous que les surfaces à assembler soient propres, sèches et bien ajustées, puis humidifiez légèrement les surfaces poreuses. Retirez le bouchon et appliquez une petite quantité de colle liquide sur l'une des surfaces. Pressez immédiatement les deux surfaces ensemble et maintenez-les en place jusqu'à ce que la colle durcisse. Facile !</p>",
    categoryId: 3,
    tagId: 3,
    tag: {
      id: 3,
      type: 'best-seller',
      text: 'N°1 des ventes',
    },
    category: {
      id: 3,
      title: 'Bricolage',
      slug: 'bricolage',
      image:
        'http://localhost:3000/pictures/categories/bricolage.webp',
    },
  },
  {
    id: 8,
    title:
      'Multimètre Numérique KAIWEETS, Multimètre Digital, Voltmètre Multifonctions 2000 Comptes, Testeur Électrique, Ohmmètre, Mesure La Tension CA/CC, Courant CC, Résistance, Continuité, Diode',
      slug: "multimetre-numerique-kaiweets-digital",
    price: 16.97,
    image:
      'http://localhost:3000/pictures/products/multimetre.webp',
    description:
      "<p>Le multimètre numérique est conçu pour être sûr et précis. Convient pour les tests d'électricien, l'usage domestique, l'automobile, les problèmes électriques industriels.</p>",
    categoryId: 3,
    tagId: 0,
    category: {
      id: 3,
      title: 'Bricolage',
      slug: 'bricolage',
      image:
        'http://localhost:3000/pictures/categories/bricolage.webp',
    },
  },
  {
    id: 9,
    title:
      'FACOM Monture de Scie à Métaux - Poignée Ergonomique - Légère et Compact - 601PB',
      slug: "facom-monture-scie-metaux-601pb",
    price: 24.9,
    image: 'http://localhost:3000/pictures/products/scie.webp',
    description:
      '<p>La monture de scie à métaux 300 mm 601PB FACOM est l’outil indispensable pour couper de manière précise et parfaite tous les types de métaux comme l’acier, l’aluminium, etc. Elle offre une grande performance de sciage grâce à la tension de sa lame à 80 kg et sa structure en métal-résine. D’ailleurs, elle permet d’effectuer une coupe à 90° et une coupe à ras à 45° en toute simplicité. La monture de scie à métaux 300 mm 601PB FACOM est un matériel de haute qualité avec une finition irréprochable, fabriquée avec des matériaux rigides et souples pour une meilleure résistance aux chocs et une durabilité optimale. Elle garantit une prise en main agréable, grâce à sa poignée ergonomique et son repose-main gauche pour un grand confort de travail. Elle est parfaitement équilibrée avec un poids léger et des dimensions compactes pour réduire la fatigue, faciliter son transport et son rangement, mais également, scier rapidement même dans les zones étroites.</p>',
    categoryId: 3,
    tagId: 0,
    category: {
      id: 3,
      title: 'Bricolage',
      slug: 'bricolage',
      image:
        'http://localhost:3000/pictures/categories/bricolage.webp',
    },
  },
  {
    id: 10,
    title:
      'Scie sauteuse 720W avec 6 lames dans coffret Makpac - MAKITA 4351FCTJ',
      slug: "scie-sauteuse-720w-makita-4351fctj",
    price: 146,
    image:
      'http://localhost:3000/pictures/products/scie-sauteuse.webp',
    description:
      "<p>OPTIONS</p><p>ATTENTION:</p><ul><li>Les accessoires ou périphériques suivants sont utilisés pour utilisation avec celui décrit dans ce manuel Makita recommandé. L'usage autres accessoires ou appareils Risqué de blessure. Utiliser des accessoires ou des appareils uniquement pour leur utilisation prévue</li></ul></p><p>Objectif.<br>Si vous avez besoin de plus de détails concernant ces accessoires veuillez contacter votre Makita- Station service. • Lame de scie • clé Allen 4 • Arrêt parallèle (jeu de lignes de guidage) • Ensemble de guides • Ensemble de rail de guidage • Protection contre les ruptures de puce • Raccord d'échappement • Plaque coulissante • Tuyau (pour aspirateur)</p><p>REMARQUE:<br>• Certaines parties de la liste peuvent être des accessoires standard dans l'ensemble d'outils. Vous pouvez atterrir être différent d'un pays à l'autre.</p>",
    categoryId: 3,
    tagId: 2,
    tag: {
      id: 2,
      type: 'new',
      text: 'Nouveauté',
    },
    category: {
      id: 3,
      title: 'Bricolage',
      slug: 'bricolage',
      image:
        'http://localhost:3000/pictures/categories/bricolage.webp',
    },
  },
  {
    id: 11,
    title: 'Facom Coffret de tournevis, Multi, 5 Pièces',
    slug: "facom-coffret-tournevis-5-pieces",
    price: 28.78,
    image:
      'http://localhost:3000/pictures/products/tournevis.webp',
    description:
      "<p>FACOM Jeu de 5 Tournevis Isolés Slim 1000V pour Vis à Fente et Pozidriv ATD.J5TVEPB </p><p>FACOM répondra à vos attentes, même les plus pointues. FACOM vous présente ce jeu de tournevis isolés avec le caractéristiques suivantes : </p><p>Traitement thermique en ligne : + 50% de durée de vie et + 100% de résistance</p><p>Matière du manche : Soft Grip pour plus de confort et toujours résistant aux produits chimiques. Traitement tri-coating de la lame (Zinc-Nickel-Chrome) : 4 fois plus de résistance à la corrosion. Ergonomie optimisée du manche : + 10% de couple</p><p>Marquage laser : pour une meilleur résistance à l'usure</p><p>Usinage des empreintes par commande numérique : meilleure adaptation de la vis en augmentant le transfert de couple et en réduisant l'usure</p><p>Ce jeu de tournevis contient:</p><p>3 tournevis plats : 3,5 x 100 - 4 x 100 - 5,5 x 125</p><p>2 tournevis pozodriv : 1 x 100 - 2 x 125</p><p>En 1918, la marque FACOM voit le jour et connaît rapidement une véritable explosion.</p><p>Elle se trouve systématiquement associée aux grandes avancées de ce siècle dans les domaines de l'automobile, de l'aviation, de l'aéronautique et bien plus encore. <br>Depuis plus de 100 ans, FACOM s'impose un standard de qualité sans égal. </p><p>Excellence, innovation et qualité sont les mots d'ordre de la marque qui constituent son moteur de création dynamique et performant. </p><p>Nous mettons à votre disposition des outils de levage, de serrage, des éclairages à LED, des boosters de démarrage, des servantes, de la martellerie, etc. adaptés à l'aéronautique, à l'électricité, à l'électronique, à l'automobile, aux poids lourds ainsi qu'aux véhicules industriels. </p><p>Chez FACOM, nous vous proposons une large gamme de produits robustes et fiables qui répondront à vos attentes pour simplifier votre quotidien. Pour garantir la qualité de ses produits, FACOM a mis en place depuis plus de 60 ans une garantie à vie d’échange ou de réparation gratuite de ses produits (hors produits techniques, dynamométrie, servantes et mobilier). </p>Plus de détails sur le site web FACOM. Nos articles sont gages de qualité et il en va de même pour notre service client. N'hésitez pas à nous contacter si nécessaire, nous nous ferons un plaisir de vous répondre. Votre satisfaction est primordiale.</p>",
    categoryId: 3,
    tagId: 0,
    category: {
      id: 3,
      title: 'Bricolage',
      slug: 'bricolage',
      image:
        'http://localhost:3000/pictures/categories/bricolage.webp',
    },
  },
  {
    id: 12,
    title: 'Vans Sk8-Hi rose léopard Slim VQG369O, Baskets mode mixte adulte',
    slug: "vans-sk8-hi-rose-leopard-slim",
    price: 59.57,
    image: 'http://localhost:3000/pictures/products/vans.webp',
    description: '<p><em>Pas de description pour le moment</em></p>',
    categoryId: 4,
    tagId: 2,
    tag: {
      id: 2,
      type: 'new',
      text: 'Nouveauté',
    },
    category: {
      id: 4,
      title: 'Chaussures',
      slug: 'chaussures',
      image:
        'http://localhost:3000/pictures/categories/chaussures.webp',
    },
  },
  {
    id: 13,
    title: 'Pantoufles Mignon Furry Alpaga Rose Peluche Animal Fun',
    slug: "pantoufles-mignon-furry-alpaga-rose",
    price: 18.99,
    image:
      'http://localhost:3000/pictures/products/chaussons.webp',
    description:
      "<p>Les pantoufles sont conçues avec une jolie image d'alpaga et sont très mignonnes. Les chaussons en peluche douce gardent vos pieds au chaud.Ils sont très appropriés pour être portés à l'intérieur en hiver.Ils sont un bon choix pour les pantoufles chaudes d'intérieur. Ces chaussons en alpaga sont un cadeau d'anniversaire, de Noël ou d'anniversaire pour la famille et les amis. La conception en mousse à mémoire de forme permet aux chaussons d'avoir un soutien suffisant lors de la marche, vous permettant de détendre vos pieds. Les semelles en tissu plastique Dot ne rayeront pas le sol en bois.Veuillez ne pas les porter sur le sol en béton, ce qui usera facilement les semelles.</p>",
    categoryId: 4,
    tagId: 0,
    category: {
      id: 4,
      title: 'Chaussures',
      slug: 'chaussures',
      image:
        'http://localhost:3000/pictures/categories/chaussures.webp',
    },
  },
  {
    id: 14,
    title: 'LA SPORTIVA Jackal II - Chaussures Trail Femme',
    slug: "la-sportiva-jackal-ii-trail-femme",
    price: 138.9,
    image: 'http://localhost:3000/pictures/products/sportiva.webp',
    description:
      '<p>Chaussures de trail running de camping et de randonnée pour femme de la marque LA SPORTIVA. Modèle Jackal II Woman Lagoon/Green Banana, référence 56K638728. Tirez tout votre potentiel, rendez-vous au maximum et profitez du sport avec ces chaussures de trail running idéales pour pratiquer votre sport préféré.</p>',
    categoryId: 4,
    tagId: 0,
    category: {
      id: 4,
      title: 'Chaussures',
      slug: 'chaussures',
      image:
        'http://localhost:3000/pictures/categories/chaussures.webp',
    },
  },
  {
    id: 15,
    title: 'DC Shoes Homme Pure High-Top WC Winter Basket',
    slug: "dc-shoes-homme-pure-high-top",
    price: 71.95,
    image: 'http://localhost:3000/pictures/products/dc-shoes.webp',
    description:
      "<p>Ne faites aucun faux pas avec une paire de chaussures DC Shoes ! Qui d'autre que DC pouvait vous offrir la perfection en matière de chaussures homme ? De notre première paire de skateshoes, aux designs parfaits de nos derniers modèles, nous sommes devenus les leaders incontestés du stylisme footwear. Que vous en recherchiez pour le skate, la ville ou pour l’été pour dompter l'asphalte ou chiller sur le sable, vous ne trouverez que des chaussures d'une qualité et d'un style implacables chez DC Shoes ! </p>",
    categoryId: 4,
    tagId: 0,
    category: {
      id: 4,
      title: 'Chaussures',
      slug: 'chaussures',
      image:
        'http://localhost:3000/pictures/categories/chaussures.webp',
    },
  }
] satisfies IProduct[];
