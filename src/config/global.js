export default {
  global: {
    Name: 'Formas de pago',
    Description:
      'El componente formativo Formas de pago aborda los procesos operativos y tecnológicos relacionados con la gestión de cobros en establecimientos de alojamiento. A través de sus contenidos se analizan medios de pago, facturación hotelera, conciliación financiera, plataformas digitales y transformación tecnológica aplicada a los servicios financieros, fortaleciendo conocimientos necesarios para desarrollar procesos de pago organizados, eficientes y orientados a la experiencia del huésped en la hotelería contemporánea.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la forma de pago en hotelería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evolución de los medios de pago',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Formas de pago tradicionales y digitales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de cobro y soportes de pago',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tendencias actuales en pagos hoteleros',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Operación de pagos y facturación hotelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cobro de alojamiento, consumos y servicios adicionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Facturación hotelera y garantías de pago',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Conciliación, cierre de caja e inconsistencias operativas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Atención al huésped durante el proceso de pago',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tecnología aplicada a pagos hoteleros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Integración entre PMS y plataformas de pago',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pasarelas de pago y automatización financiera',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Riesgos operativos en transacciones hoteleras',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Buenas prácticas en gestión de pagos digitales',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normativa de transformación digital de los pagos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normativa aplicada a facturación y medios de pago',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Protección al consumidor y transparencia en cobros',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Transformación digital y tendencias tecnológicas en pago hoteleros',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF12_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Anticipo',
      significado:
        'Pago parcial realizado antes de la prestación del servicio hotelero.',
    },
    {
      termino: 'Auditoría nocturna',
      significado:
        'Procedimiento de revisión y conciliación de operaciones financieras al cierre de la jornada hotelera.',
    },
    {
      termino: 'Billetera digital',
      significado:
        'Aplicación o plataforma que permite realizar pagos electrónicos desde dispositivos móviles.',
    },
    {
      termino: 'Cargo a habitación',
      significado:
        'Registro de consumos o servicios adicionales cargados a la cuenta del huésped.',
    },
    {
      termino: 'Código QR',
      significado:
        'Código digital escaneable utilizado para realizar pagos electrónicos rápidos.',
    },
    {
      termino: 'Conciliación financiera',
      significado:
        'Proceso de verificación entre los registros del sistema y las transacciones efectivamente realizadas.',
    },
    {
      termino: 'Datáfono',
      significado:
        'Dispositivo electrónico utilizado para procesar pagos con tarjetas bancarias.',
    },
    {
      termino: 'DES o AES',
      significado:
        'Algoritmos criptográficos utilizados para el cifrado y protección de información financiera y digital.',
    },
    {
      termino: 'Facturación electrónica',
      significado:
        'Sistema digital para generar, validar y almacenar comprobantes de venta de manera electrónica.',
    },
    {
      termino: 'Garantía de pago',
      significado:
        'Respaldo financiero solicitado por el hotel para asegurar el cumplimiento del pago de los servicios.',
    },
    {
      termino: 'Huésped',
      significado:
        'Persona que utiliza servicios de alojamiento dentro de un establecimiento hotelero.',
    },
    {
      termino: 'Integración financiera',
      significado:
        'Conexión entre sistemas tecnológicos y plataformas de pago para automatizar procesos financieros.',
    },
    {
      termino: 'Medio de pago',
      significado:
        'Instrumento utilizado para cancelar productos o servicios, como efectivo, tarjeta o transferencia.',
    },
    {
      termino: 'Norma PCI DSS',
      significado:
        'Estándar internacional orientado a proteger la información y las transacciones realizadas con tarjetas de pago.',
    },
    {
      termino: 'Pago sin contacto (<em>contactless</em>)',
      significado:
        'Tecnología que permite realizar pagos acercando el dispositivo o tarjeta al lector electrónico.',
    },
    {
      termino: 'Pasarela de pago',
      significado:
        'Plataforma tecnológica que procesa y valida pagos electrónicos entre el cliente y la entidad financiera.',
    },
    {
      termino: 'PMS (<em>Property Management System</em>)',
      significado:
        'Sistema utilizado en hotelería para administrar reservas, ocupación, consumos y facturación.',
    },
    {
      termino: 'Preautorización bancaria',
      significado:
        'Validación previa realizada sobre una tarjeta para garantizar disponibilidad de fondos.',
    },
    {
      termino: '<em>Self-check-out</em>',
      significado:
        'Proceso automatizado mediante el cual el huésped finaliza su estadía sin atención presencial.',
    },
    {
      termino: 'Soporte de pago',
      significado:
        'Documento físico o digital que evidencia una transacción financiera realizada.',
    },
    {
      termino: 'Trazabilidad financiera',
      significado:
        'Capacidad de realizar seguimiento y control sobre las operaciones financieras registradas.',
    },
    {
      termino: 'Transacción electrónica',
      significado:
        'Operación financiera realizada mediante plataformas o medios digitales.',
    },
    {
      termino: 'VPN (<em>Virtual Private Network</em>)',
      significado:
        'Red privada y encriptada utilizada para proteger conexiones y operaciones realizadas por internet.',
    },
    {
      termino: '<em>Voucher</em>',
      significado:
        'Comprobante generado como respaldo de una transacción electrónica o pago realizado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bardi, J. A. (2011). <em>Hotel front office management.</em> Wiley.',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1581 de 2012. Régimen general de protección de datos personales. Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia: 'DIAN. (s. f.). Facturación electrónica en Colombia.',
      link: 'https://www.dian.gov.co',
    },
    {
      referencia:
        'Hayes, D., & Ninemeier, J. (2009). <em>Hotel Operations Management.</em> Pearson.',
    },
    {
      referencia:
        'Kasavana, M. L., & Cahill, J. J. (2017). <em>Managing computers in the hospitality industry.</em> AHLEI.',
    },
    {
      referencia:
        'Kotler, P., Bowen, J., & Makens, J. (2017). <em>Marketing for Hospitality and Tourism.</em> Pearson.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015). Decreto 1074 de 2015. Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. SUIN-Juriscol.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019935',
    },
    {
      referencia:
        'Oracle Hospitality. (2023). <em>Property Management Systems (PMS).</em> Oracle.',
      link: '',
    },
    {
      referencia:
        'Velásquez, J. (2025). PMS para hotel: qué es, cómo funciona y por qué usarlo. HQBeds.',
      link: 'https://www.hqbeds.com.br/blog/sistema-pms-hotel',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Castelblanco',
          cargo: 'Experto temático ',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador Instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Díaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Frit',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
