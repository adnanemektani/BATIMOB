/**
 * Textes légaux du site — intégration du document 07 « Textes légaux du site »
 * remis par E-MPGT (Emmanuel Lebastard).
 *
 * Version française de référence : le texte est publié tel quel. Les champs
 * [entre crochets] de l'hébergeur restent à compléter avec les informations
 * d'Arnaud avant la mise en ligne (section « Hébergeur » et liste des
 * sous-traitants). Les autres mentions à compléter (assurances RC pro et
 * décennale, répertoire des métiers, médiateur, qualifications, TVA réduit)
 * ont été retirées le 8 octobre 2026 sur la demande d'Emmanuel Lebastard,
 * de même que les 3 encadrés « à faire valider par votre conseil ».
 * Les [blanks] du modèle de formulaire de rétractation sont volontaires :
 * ce sont les champs que remplit le consommateur.
 */

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "table"; head: string[]; rows: string[][] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  intro: string;
  updated?: string;
  sections: LegalSection[];
};

export const LAST_UPDATE = "3 octobre 2026";

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  /* ------------------------------------------------------------------ 1 */
  {
    slug: "mentions-legales",
    title: "Mentions légales",
    intro:
      "Éditeur du site, hébergeur, propriété intellectuelle et droit applicable.",
    sections: [
      {
        title: "1. Éditeur du site",
        blocks: [
          {
            kind: "p",
            text: "Le site www.batimob.net est édité par la société BATIMOB, société à responsabilité limitée au capital de 100 000 euros, dont le siège social est situé ZAC des Toupes, 39570 Montmorot.",
          },
          {
            kind: "ul",
            items: [
              "Immatriculée au RCS de Lons-le-Saunier sous le numéro 802 455 592 ; SIRET du siège : 802 455 592 00013",
              "Code APE/NAF : 4332A (travaux de menuiserie bois et PVC)",
              "Numéro de TVA intracommunautaire : FR30 802 455 592",
              "Téléphone : +33 (0)3 84 47 18 23 · E-mail : contact@batimob.net",
            ],
          },
        ],
      },
      {
        title: "2. Directeur de la publication",
        blocks: [
          {
            kind: "p",
            text: "Louis Beyer, en qualité de gérant de BATIMOB.",
          },
        ],
      },
      {
        title: "3. Hébergeur",
        blocks: [
          {
            kind: "p",
            text: "Le site est hébergé par [nom de l'hébergeur choisi par BATIMOB], [forme et capital], [adresse complète], [téléphone ou site internet], dans [pays du centre de données].",
          },
        ],
      },
      {
        title: "4. Conception et réalisation du site",
        blocks: [
          {
            kind: "p",
            text: "Site conçu et développé par E-MPGT, société par actions simplifiée de droit marocain au capital de 10 000 MAD, 67 Rue Aziz Bellal, 2e étage, Maarif, Casablanca (Maroc), RC Casablanca n° 623323, IF 65928386, ICE 003491690000028.",
          },
        ],
      },
      {
        title: "5. Activité réglementée",
        blocks: [
          {
            kind: "p",
            text: "BATIMOB exerce une activité de menuiserie bois (fabrication, fourniture et pose).",
          },
        ],
      },
      {
        title: "6. Propriété intellectuelle",
        blocks: [
          {
            kind: "p",
            text: "L'ensemble des contenus du site (textes, photographies, plans, vidéos, logos, graphismes, structure) est la propriété de BATIMOB ou de ses partenaires et est protégé par le droit d'auteur et le droit des marques. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite (articles L.335-2 et suivants du Code de la propriété intellectuelle).",
          },
        ],
      },
      {
        title: "7. Données personnelles et cookies",
        blocks: [
          {
            kind: "p",
            text: "Le traitement des données personnelles et l'usage des cookies sont décrits dans notre {{politique de confidentialité|/confidentialite}} et notre {{politique de cookies|/cookies}}. Contact : contact@batimob.net.",
          },
        ],
      },
      {
        title: "8. Langues et droit applicable",
        blocks: [
          {
            kind: "p",
            text: "Le site est proposé en français, en anglais et en arabe. Les versions anglaise et arabe sont fournies pour information ; en cas de divergence, la version française fait foi. Le site est soumis au droit français. Pour les consommateurs, les règles impératives de leur pays de résidence dans l'Union européenne demeurent applicables.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 2 */
  {
    slug: "confidentialite",
    title: "Politique de confidentialité",
    intro:
      "BATIMOB collecte vos données uniquement pour répondre à vos demandes de contact, de rendez-vous et de devis, et pour améliorer son site.",
    updated: LAST_UPDATE,
    sections: [
      {
        title: "1. Responsable du traitement",
        blocks: [
          {
            kind: "p",
            text: "BATIMOB, SARL, ZAC des Toupes, 39570 Montmorot, SIREN 802 455 592, est responsable du traitement de vos données. Contact pour toute question relative aux données personnelles : contact@batimob.net. Aucun délégué à la protection des données (DPO) n'est désigné.",
          },
        ],
      },
      {
        title: "2. Données collectées, finalités, bases légales et durées",
        blocks: [
          {
            kind: "table",
            head: [
              "Traitement",
              "Données",
              "Base légale",
              "Durée de conservation",
            ],
            rows: [
              [
                "Formulaire de contact",
                "Nom, prénom, e-mail, téléphone, message",
                "Intérêt légitime (répondre à votre demande)",
                "3 ans après le dernier échange",
              ],
              [
                "Demande de devis",
                "Coordonnées, adresse du chantier, caractéristiques du projet (dimensions, essences, options), photos éventuelles",
                "Mesures précontractuelles prises à votre demande",
                "3 ans si aucun contrat ; durée du contrat puis prescription légale s'il est signé",
              ],
              [
                "Clients (devis accepté, factures)",
                "Données de facturation et d'exécution des travaux",
                "Exécution du contrat et obligation légale",
                "10 ans (pièces comptables et garantie décennale)",
              ],
              [
                "Prospection par e-mail ou SMS",
                "E-mail, téléphone",
                "Consentement (particuliers) ; intérêt légitime (professionnels, avec droit d'opposition)",
                "3 ans après le dernier contact",
              ],
              [
                "Mesure d'audience (Google Analytics)",
                "Identifiants en ligne, pages vues, appareil",
                "Consentement",
                "13 mois maximum pour le traceur ; données de mesure 14 mois maximum",
              ],
              [
                "Gestion de vos droits",
                "Identité, demande",
                "Obligation légale",
                "5 ans (preuve)",
              ],
            ],
          },
          {
            kind: "p",
            text: "Les champs marqués d'un astérisque dans les formulaires sont obligatoires ; sans eux, nous ne pouvons pas traiter votre demande.",
          },
        ],
      },
      {
        title: "3. Destinataires des données",
        blocks: [
          {
            kind: "p",
            text: "Les données sont destinées aux équipes habilitées de BATIMOB. Elles peuvent être transmises, dans la limite de leurs missions, à nos sous-traitants : [hébergeur], Sanity.io (gestion des contenus du site : textes et photos), Resend (envoi des e-mails de réponse à vos demandes), ainsi que Google Ireland Limited lorsque vous acceptez le cookie de mesure d'audience. Nous ne vendons jamais vos données. Elles peuvent aussi être communiquées aux autorités sur réquisition légale.",
          },
        ],
      },
      {
        title: "4. Transferts hors de l'Union européenne",
        blocks: [
          {
            kind: "p",
            text: "Certains prestataires (Google) peuvent traiter des données aux États-Unis. Ces transferts reposent sur la décision d'adéquation de la Commission européenne du 10 juillet 2023 (Data Privacy Framework) pour les entreprises certifiées, ou à défaut sur les clauses contractuelles types.",
          },
          {
            kind: "p",
            text: "Sanity.io héberge les textes et les photos du site. Vous pouvez en obtenir une copie en nous écrivant à l'adresse indiquée ci-dessus.",
          },
        ],
      },
      {
        title: "5. Vos droits",
        blocks: [
          {
            kind: "p",
            text: "Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition, de portabilité et de retrait du consentement à tout moment, ainsi que du droit de définir des directives sur le sort de vos données après votre décès. Pour les exercer, écrivez à contact@batimob.net ; nous répondons sous un mois et pouvons demander un justificatif d'identité en cas de doute. Vous pouvez vous opposer à tout moment à la prospection commerciale. Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, www.cnil.fr).",
          },
        ],
      },
      {
        title: "6. Sécurité",
        blocks: [
          {
            kind: "p",
            text: "BATIMOB met en œuvre des mesures techniques et organisationnelles adaptées : connexion chiffrée (HTTPS), accès limités par habilitation, sauvegardes, mises à jour régulières. En cas de violation de données susceptible de présenter un risque pour vos droits, nous la notifions à la CNIL dans les 72 heures et, si le risque est élevé, à vous-mêmes.",
          },
        ],
      },
      {
        title: "7. Mineurs",
        blocks: [
          {
            kind: "p",
            text: "Le site ne s'adresse pas aux personnes de moins de 15 ans et nous ne collectons pas sciemment de données les concernant.",
          },
        ],
      },
      {
        title: "8. Modification de la politique",
        blocks: [
          {
            kind: "p",
            text: "Nous pouvons mettre à jour cette politique ; la date de dernière mise à jour figure en tête du texte. En cas de changement important, vous en serez informé.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 3 */
  {
    slug: "cookies",
    title: "Politique de cookies",
    intro:
      "Le site de BATIMOB n'active ses cookies de mesure d'audience et de contenus tiers qu'avec votre accord, que vous pouvez refuser ou retirer à tout moment.",
    updated: LAST_UPDATE,
    sections: [
      {
        title: "1. Qu'est-ce qu'un cookie ?",
        blocks: [
          {
            kind: "p",
            text: "Un cookie (ou traceur) est un petit fichier déposé sur votre appareil lorsque vous consultez un site. Il permet de reconnaître votre navigateur, de mémoriser vos choix ou de mesurer l'usage du site.",
          },
        ],
      },
      {
        title: "2. Les traceurs utilisés",
        blocks: [
          {
            kind: "table",
            head: [
              "Catégorie",
              "Outil et éditeur",
              "Finalité",
              "Durée",
              "Consentement",
            ],
            rows: [
              [
                "Strictement nécessaires",
                "Cookie de session, mémorisation du choix cookies, langue choisie, sécurité des formulaires",
                "Fonctionnement du site, mémorisation de votre choix",
                "Session à 6 mois",
                "Non requis",
              ],
              [
                "Mesure d'audience",
                "Google Analytics et Google Tag Manager (Google Ireland Limited)",
                "Statistiques de fréquentation, amélioration du site",
                "13 mois maximum",
                "Requis",
              ],
            ],
          },
          {
            kind: "p",
            text: "Les polices de caractères sont hébergées sur le serveur du site et ne déposent aucun traceur. Les autres ressources (photographies) sont également servies par le site ou par Sanity.io, sans traceur publicitaire.",
          },
        ],
      },
      {
        title: "3. Votre choix",
        blocks: [
          {
            kind: "p",
            text: "Lors de votre première visite, un bandeau vous propose d'accepter tout, de refuser tout ou de personnaliser vos choix par catégorie. Refuser est aussi simple qu'accepter. Votre choix est conservé 6 mois, puis le bandeau vous est de nouveau présenté. Vous pouvez le modifier à tout moment via le lien « Gérer mes cookies » en pied de page. Continuer à naviguer sans choisir ne vaut pas consentement.",
          },
          {
            kind: "p",
            text: "Vous pouvez aussi paramétrer votre navigateur pour bloquer ou supprimer les cookies (Chrome, Firefox, Safari, Edge : menu Paramètres, rubrique Confidentialité). Le refus des cookies n'empêche pas l'accès au site ni la demande de devis.",
          },
        ],
      },
      {
        title: "4. Données transmises à des tiers",
        blocks: [
          {
            kind: "p",
            text: "Les données collectées par Google sont traitées selon sa propre politique ; certains traitements peuvent avoir lieu aux États-Unis (voir notre {{politique de confidentialité|/confidentialite}}, section Transferts). En refusant ce cookie, aucune donnée n'est transmise à Google par le site.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 4 */
  {
    slug: "conditions-utilisation",
    title: "Conditions générales d'utilisation du site",
    intro:
      "En naviguant sur le site de BATIMOB, vous acceptez les présentes conditions d'utilisation. Elles encadrent l'usage du site et ne remplacent pas les {{conditions de rendez-vous et de devis|/conditions-devis}}, ni les conditions de vente des travaux proposées séparément.",
    sections: [
      {
        title: "1. Objet et accès",
        blocks: [
          {
            kind: "p",
            text: "Le site présente l'activité de menuiserie bois de BATIMOB et permet de demander un devis ou un rendez-vous grâce au {{formulaire de contact|/contact}}. L'accès est gratuit, hors frais de connexion à votre charge. BATIMOB peut suspendre ou modifier le site à tout moment, notamment pour maintenance, sans que sa responsabilité soit engagée.",
          },
        ],
      },
      {
        title: "2. Caractère informatif des contenus",
        blocks: [
          {
            kind: "p",
            text: "Les photographies, descriptions et prix indicatifs sont donnés à titre d'information. Le bois étant un matériau naturel, les teintes, veinages et finitions peuvent différer des visuels. Seul un devis écrit, établi par BATIMOB et accepté par vous, constitue une offre engageante.",
          },
        ],
      },
      {
        title: "3. Utilisation du site",
        blocks: [
          {
            kind: "p",
            text: "Vous vous engagez à fournir des informations exactes dans les formulaires, à ne pas perturber le fonctionnement du site, à ne pas tenter d'accéder aux systèmes de manière non autorisée, à ne pas extraire de manière automatisée le contenu du site et à ne pas transmettre de contenu illicite, injurieux ou portant atteinte aux droits de tiers.",
          },
        ],
      },
      {
        title: "4. Propriété intellectuelle",
        blocks: [
          {
            kind: "p",
            text: "Les contenus du site sont protégés (voir {{mentions légales|/mentions-legales}}). Les photos et plans que vous transmettez restent votre propriété ; vous accordez à BATIMOB le droit de les utiliser uniquement pour établir votre devis et réaliser votre projet. Toute utilisation de photos de chantier à des fins promotionnelles nécessite votre accord écrit préalable.",
          },
        ],
      },
      {
        title: "5. Responsabilité",
        blocks: [
          {
            kind: "p",
            text: "BATIMOB met en œuvre les moyens raisonnables pour que le site soit disponible et exact, sans garantie d'absence d'interruption ou d'erreur. BATIMOB ne peut être tenue responsable des dommages indirects liés à l'usage du site, ni du contenu de sites tiers vers lesquels il renvoie. Ces limitations ne s'appliquent pas en cas de faute lourde ou dolosive, de dommage corporel, ni aux droits dont les consommateurs bénéficient de manière impérative.",
          },
        ],
      },
      {
        title: "6. Liens hypertextes",
        blocks: [
          {
            kind: "p",
            text: "Le site peut contenir des liens vers des sites tiers, sur lesquels BATIMOB n'exerce aucun contrôle. Un lien vers le site de BATIMOB est autorisé s'il ne crée pas de confusion sur l'origine du contenu ni ne porte atteinte à son image ; BATIMOB peut en demander le retrait.",
          },
        ],
      },
      {
        title: "7. Signalement de contenu illicite",
        blocks: [
          {
            kind: "p",
            text: "Pour signaler un contenu manifestement illicite, écrivez à contact@batimob.net en précisant l'adresse de la page et le motif.",
          },
        ],
      },
      {
        title: "8. Langues, modification, droit applicable",
        blocks: [
          {
            kind: "p",
            text: "Le site est disponible en français, en anglais et en arabe ; la version française fait foi. BATIMOB peut modifier ces conditions à tout moment ; la version applicable est celle en ligne au jour de votre visite. Le droit français s'applique, sans préjudice des règles impératives de protection du consommateur de son pays de résidence dans l'Union européenne. En cas de litige, les tribunaux français sont compétents, sous réserve des règles de compétence protectrices des consommateurs.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 5 */
  {
    slug: "conditions-devis",
    title: "Conditions de rendez-vous et de devis",
    intro:
      "La prise de rendez-vous et la demande de devis en ligne sont gratuites et sans engagement ; seul un devis signé par vous forme un contrat de travaux. Ces conditions s'appliquent aux particuliers (consommateurs) et aux professionnels, sauf mention contraire.",
    updated: LAST_UPDATE,
    sections: [
      {
        title: "1. Prise de rendez-vous",
        blocks: [
          {
            kind: "p",
            text: "Vous demandez un rendez-vous (visite sur site, prise de mesures ou échange) en remplissant le {{formulaire de contact|/contact}} ; nous confirmons le créneau par e-mail. Le rendez-vous est gratuit. Vous pouvez déplacer ou annuler gratuitement jusqu'à 24 heures avant, par le lien de l'e-mail ou à contact@batimob.net. En cas d'absence répétée sans prévenir, BATIMOB peut refuser de nouveaux créneaux.",
          },
        ],
      },
      {
        title: "2. Devis",
        blocks: [
          {
            kind: "p",
            text: "Le devis est gratuit, sauf indication contraire annoncée avant son établissement. Il précise notamment : l'identité de BATIMOB, la description des travaux et fournitures, les prix unitaires et le total hors taxes et toutes taxes comprises, le taux de TVA, les délais et les modalités de paiement. Le contrat est conclu lorsque vous renvoyez le devis daté, signé et accompagné de la mention « Bon pour accord », en version papier ou par signature électronique.",
          },
        ],
      },
      {
        title: "3. Droit de rétractation (consommateurs)",
        blocks: [
          {
            kind: "p",
            text: "Si vous êtes un consommateur et que le contrat est conclu à distance (signature électronique, échange par e-mail) ou hors établissement (signature chez vous après une visite), vous disposez de 14 jours pour vous rétracter sans motif ni pénalité, à compter de la signature (art. L.221-18 du Code de la consommation). Pour l'exercer, envoyez toute déclaration non équivoque à contact@batimob.net ou à l'adresse postale indiquée dans les mentions légales.",
          },
          {
            kind: "ul",
            items: [
              "Aucun travail ne commence avant la fin du délai de 14 jours, sauf si vous demandez expressément un démarrage anticipé par écrit, sur un support durable. Si vous vous rétractez après ce démarrage, vous payez la part de prestation déjà réalisée (art. L.221-25).",
              "Pour les contrats conclus hors établissement, BATIMOB ne perçoit aucun paiement ni acompte dans les 7 jours suivant la signature (art. L.221-10).",
              "Le droit de rétractation ne s'applique pas aux biens fabriqués selon vos spécifications ou nettement personnalisés, tels que des menuiseries sur mesure (art. L.221-28, 3°).",
            ],
          },
          {
            kind: "quote",
            text: "Modèle de formulaire de rétractation : « À l'attention de BATIMOB, ZAC des Toupes, 39570 Montmorot, contact@batimob.net. Je vous notifie par la présente ma rétractation du contrat portant sur [description des travaux], commandé le [date], reçu le [date]. Nom du consommateur : [nom]. Adresse : [adresse]. Date : [date]. Signature (uniquement en cas de formulaire papier) : »",
          },
        ],
      },
      {
        title: "4. Prix, acompte et paiement",
        blocks: [
          {
            kind: "p",
            text: "Les prix sont exprimés en euros, TVA comprise pour les particuliers et hors taxes pour les professionnels. L'acompte, le calendrier de paiement et les pénalités de retard (pour les professionnels : taux au moins égal à trois fois le taux d'intérêt légal et indemnité forfaitaire de recouvrement de 40 euros) figurent dans le devis.",
          },
        ],
      },
      {
        title: "5. Délais et exécution",
        blocks: [
          {
            kind: "p",
            text: "La date de début ou de livraison figure au devis. En cas de retard de plus de 7 jours non justifié par un cas de force majeure ou par votre fait, vous pouvez, après mise en demeure restée sans effet, résoudre le contrat et obtenir le remboursement des sommes versées (art. L.216-2 et L.216-3).",
          },
        ],
      },
      {
        title: "6. Garanties",
        blocks: [
          {
            kind: "p",
            text: "Les travaux de BATIMOB bénéficient des garanties légales : garantie de parfait achèvement (1 an), garantie de bon fonctionnement pour les éléments d'équipement dissociables, comme les menuiseries posées (2 ans), et garantie décennale pour les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination (10 ans). Pour les biens fournis seuls, la garantie légale de conformité (2 ans) et la garantie des vices cachés s'appliquent. Les garanties ne couvrent pas l'usure normale, ni le défaut d'entretien, ni les variations naturelles du bois.",
          },
        ],
      },
      {
        title: "7. Réclamations",
        blocks: [
          {
            kind: "p",
            text: "En cas de difficulté, écrivez d'abord à contact@batimob.net.",
          },
        ],
      },
      {
        title: "8. Données personnelles",
        blocks: [
          {
            kind: "p",
            text: "Les données saisies lors de la prise de rendez-vous ou d'une demande de devis sont traitées selon notre {{politique de confidentialité|/confidentialite}}.",
          },
        ],
      },
      {
        title: "9. Droit applicable",
        blocks: [
          {
            kind: "p",
            text: "Droit français. Les consommateurs conservent la protection des règles impératives de leur pays de résidence dans l'Union européenne et peuvent saisir les juridictions de leur domicile. Entre professionnels, les tribunaux compétents sont ceux du siège de BATIMOB.",
          },
        ],
      },
      {
        title: "10. Informations aux consommateurs",
        blocks: [
          {
            kind: "h3",
            text: "Informations précontractuelles",
          },
          {
            kind: "p",
            text: "Avant de conclure un contrat, BATIMOB vous communique de manière lisible : les caractéristiques essentielles des travaux ou produits, le prix total, les délais, son identité et ses coordonnées, les garanties légales et l'existence ou non d'un droit de rétractation (art. L.111-1 et L.221-5 du Code de la consommation).",
          },
          {
            kind: "h3",
            text: "Garantie légale de conformité (biens fournis)",
          },
          {
            kind: "quote",
            text: "« Le vendeur est tenu de livrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance. Le consommateur dispose d'un délai de 2 ans à compter de la délivrance du bien pour agir. Il bénéficie de la garantie sans avoir à prouver que le défaut existait au moment de la délivrance. Le consommateur peut aussi invoquer la garantie des vices cachés (articles 1641 et suivants du Code civil). »",
          },
          {
            kind: "h3",
            text: "Démarchage et prospection",
          },
          {
            kind: "ul",
            items: [
              "Par e-mail ou SMS, BATIMOB n'envoie de prospection à un particulier qu'avec son consentement préalable ; chaque message comporte un lien de désinscription.",
              "Par téléphone, BATIMOB ne contacte pas un particulier à des fins commerciales sans son accord préalable. Tout démarchage pour la rénovation énergétique par téléphone est interdit.",
            ],
          },
          {
            kind: "h3",
            text: "Avis clients et réalisations",
          },
          {
            kind: "p",
            text: "Si le site affiche des avis ou des photos de chantier, il faut le consentement écrit du client pour les photos (droit à l'image et vie privée), et indiquer si les avis sont contrôlés et comment (art. L.111-7-2 du Code de la consommation). Ne jamais publier de faux avis.",
          },
          {
            kind: "h3",
            text: "Clients situés dans un autre pays de l'Union européenne",
          },
          {
            kind: "p",
            text: "Pour un client situé dans un autre État membre, le droit français s'applique au contrat, sans priver le consommateur des règles impératives de son pays. Les prix indiqués tiennent compte de la TVA française, sauf pose à l'étranger où le régime TVA doit être vérifié avec votre expert-comptable avant tout devis.",
          },
        ],
      },
    ],
  },
];

export function getLegalDocument(slug: string): LegalDocument | null {
  return LEGAL_DOCUMENTS.find((doc) => doc.slug === slug) ?? null;
}
