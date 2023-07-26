import Footer from "../components/Footer";
/** The footer is the lower part of a web page, which includes a series of elements that may be of interest to the user browsing it, such as links to the main categories, contact information, social networks or links to legal texts.
 * Some main features:
 * * The footer is clearly identified and differentiated from the rest of the website, either through typography, background color or the presence of dividing elements. It must be very clear where it begins and ends at a glance.
 * * The footer contains a number of key informational elements, such as contact and copyright information, and links to secondary pages related to the site, such as social media channels or legal notices.
 * * The footer is a permanent element of the site, that is, it is the same on all pages of the site (and, logically, it should be present on all of them). */
export default {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    logoUrl:
      "https://1.bp.blogspot.com/-ilM0ThnMs_s/WIVtiNb1qOI/AAAAAAAADEw/1fY4kvXEJdQm_IKoBFI4iVQfWoF9GqEaACPcB/s1600/uane%2Bmatamoros%2Blogo%2Bgota%2Bde%2Bagua.png",
    newsletter: {
      id: "news",
      placeholder: "Correo electrónico",
      text: "¡Suscríbete a nuestro newsletter!",
      button: {
        label: "Enviar",
        onclick: () => {},
      },
      name: "mail",
    },
    textLink: {
      text: "Text Link",
      href: "https://www.nba.com/playoffs/2023",
      iconName: "arrow_forward_ios",
    },

    links: {
      deskLinks: [
        [
          {
            titleSection: "Estudiantes",
            linktext: [
              {
                text: "SIAAF",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "ULA Online",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Biblioteca virtual E-libro",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Servicios Escolares",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Alumnos",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
          {
            titleSection: "Egresados",
            linktext: [
              {
                text: "Egresados",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Egresados talento",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
        [
          {
            titleSection: "Admisiones",
            linktext: [
              {
                text: "Solicita informes",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Becas",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
          {
            titleSection: "Oferta eduactiva",
            linktext: [
              {
                text: "Bachillerato",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Licenciaturas",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Maestrías",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Extension Universitaria",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
        [
          {
            titleSection: "Nosotros",
            linktext: [
              {
                text: "Oferta Educativa",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Internacionalización",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Somos ULA",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Vida estudiantil",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Planteles",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Modelo educativo",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Empleabilidad",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Vinculación empresarial",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "CESEPCOM",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Acceso para colaboradores",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
        [
          {
            titleSection: "",
            linktext: [
              {
                text: "Text Link",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
      ],
      mobileLinks: [
        {
          items: {
            title: "Estudiantes",
            content: [
              {
                text: "SIAAF",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "ULA Online",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Biblioteca virtual E-libro",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Servicios Escolares",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Alumnos",
                link: "https://www.nba.com/playoffs/2023",
              },
            ],
            icon: { iconName: "people", type: "outlined" },
          },
        },
        {
          items: {
            title: "Estudiantes",
            content: [
              {
                text: "SIAAF",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "ULA Online",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Biblioteca virtual E-libro",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Servicios Escolares",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Alumnos",
                link: "https://www.nba.com/playoffs/2023",
              },
            ],
            icon: { iconName: "people", type: "outlined" },
          },
        },
      ],
    },
    contact: {
      text: "Síguenos en redes sociales",
      socialMedia: [
        {
          socialName: "instagram",
          alt: "instagram-logo",
          link: "https://www.instagram.com/",
        },
        {
          socialName: "facebook",
          alt: "facebook-logo",
          link: "https://www.facebook.com",
        },
        {
          socialName: "tiktok",
          alt: "tiktok-logo",
          link: "https://www.tiktok.com",
        },
        {
          socialName: "twitter",
          alt: "twitter-logo",
          link: "https://www.twitter.com",
        },
      ],
      phoneText: "Llámanos",
      phoneNumber: "0000 000 000",
      icon: { iconName: "call" },
    },
    certificates: {
      title: "Certificaciones",
      logos: [
        {
          src: "https://www.pngfind.com/pngs/m/342-3423146_award-ribbon-transparent-png-ribbon-for-certificate-of.png",
          alt: "certificate",
          link: "https://www.pngfind.com/pngs/m/342-3423146_award-ribbon-transparent-png-ribbon-for-certificate-of.png",
        },
        {
          src: "https://www.pngfind.com/pngs/m/342-3423146_award-ribbon-transparent-png-ribbon-for-certificate-of.png",
          alt: "certificate",
        },
      ],
    },
    legal: {
      title: "Derechos reservados:",
      text: "Lottus Education 2023",
      textLink: {
        text: "Aviso de privacidad",
        href: "https://uane.edu.mx/",
      },
    },
  },
};

const Template = (args) => <Footer {...args} />;

const Standard = Template.bind({});

export { Standard };
