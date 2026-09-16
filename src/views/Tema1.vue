<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de las formas de pago en hotelería
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de pagos constituye uno de los procesos operativos más importantes dentro de los establecimientos de alojamiento, debido a que permite formalizar las transacciones económicas derivadas de la prestación de servicios hoteleros. En la actualidad, los hoteles utilizan diferentes medios de pago que facilitan el cobro de alojamiento, consumos, reservas y servicios adicionales, integrando herramientas tecnológicas que optimizan la operación y mejoran la experiencia del huésped.
    
    .row.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.order-lg-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.mb-3.justify-content-center.align-items-center
          .col-auto.mb-lg-0
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") El proceso de pago no solo implica la recepción de dinero o la validación de una transacción, sino también la correcta administración de soportes financieros, el registro adecuado de los movimientos y la aplicación de procedimientos orientados al control operativo y administrativo del establecimiento. Por esta razón, el personal de recepción y caja debe comprender las características de los diferentes medios de pago, así como los procedimientos relacionados con facturación, validación y control de transacciones.
        .bg-fondo-2.px-5.py-4
          p.mb-0 Asimismo, la evolución tecnológica ha transformado significativamente las formas de pago utilizadas en hotelería. Actualmente, muchos establecimientos integran pagos electrónicos, plataformas digitales, billeteras móviles y sistemas automatizados conectados al PMS, permitiendo desarrollar operaciones más ágiles, seguras y organizadas. Estas herramientas responden a las nuevas dinámicas del turismo y a las expectativas de los huéspedes, quienes demandan procesos de pago rápidos, prácticos y flexibles.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Evolución de los medios de pago 
    .bg-full-width
      img(src="@/assets/curso/tema1/4.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las formas de pago utilizadas en hotelería han evolucionado de acuerdo con los cambios tecnológicos, financieros y comerciales del sector turístico. En sus inicios, la mayoría de las transacciones hoteleras se realizaban mediante pagos en efectivo o cheques, procedimientos que requerían validaciones manuales y procesos administrativos más extensos.
    
    .bg-fondo-3.mb-5.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/5.svg").mx-auto
        .col-lg
          p.mb-0 Con el crecimiento del turismo y el desarrollo de los sistemas bancarios, los establecimientos comenzaron a incorporar tarjetas débito y crédito como medios de pago frecuentes, facilitando las reservas, el registro de consumos y la cancelación de servicios. Posteriormente, la transformación digital permitió integrar plataformas electrónicas, transferencias bancarias y sistemas automatizados conectados a redes financieras y plataformas tecnológicas.
    
    PasosA.color-secundario.mb-5(tipo="n")
      .row.justify-content-center
        .col-lg-10.mb-4.mb-lg-0
          h3 Antes de 1970
          p Predominio del pago en efectivo. Durante gran parte del siglo XX, el efectivo fue el principal medio de pago utilizado en hoteles y establecimientos de alojamiento. Las transacciones se realizaban manualmente y los registros se llevaban en libros físicos o formatos impresos.
        .col-md-4.col-lg-2
          figure
            img(src="@/assets/curso/tema1/6.svg", data-aos="zoom-in")
      .row.justify-content-center
        .col-md-4.col-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/7.svg", data-aos="zoom-in")
        .col-lg-10
          h3 Décadas de 1970 y 1980 
          p Incorporación de los cheques. Con el fortalecimiento del sistema bancario, muchos hoteles comenzaron a aceptar cheques personales y corporativos como garantía y medio de pago, especialmente para reservas empresariales y estadías prolongadas. 
      .row.justify-content-center
        .col-lg-10.mb-4.mb-lg-0
          h3 Década de 1990 
          p Expansión de las tarjetas bancarias. La masificación de las tarjetas débito y crédito transformó la operación hotelera, facilitando las reservas, las garantías y los pagos nacionales e internacionales. Durante este período también se generalizó el uso de datáfonos y terminales electrónicas conectadas a las redes bancarias.
        .col-md-4.col-lg-2
          figure
            img(src="@/assets/curso/tema1/8.svg", data-aos="zoom-in")
      .row.justify-content-center
        .col-md-4.col-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/9.svg", data-aos="zoom-in")
        .col-lg-10
          h3 Década del 2000 
          p Reservas y pagos por internet. El crecimiento de internet impulsó las reservas en línea y los pagos electrónicos mediante páginas web, agencias de viajes en línea (OTA) y motores de reserva hoteleros, ampliando el acceso de los clientes a los servicios de alojamiento. 
      .row.justify-content-center
        .col-lg-10.mb-4.mb-lg-0
          h3 Década del 2010
          p Pagos móviles y billeteras digitales. La expansión de los teléfonos inteligentes permitió realizar pagos mediante aplicaciones bancarias, billeteras digitales y tecnologías sin contacto (NFC), ofreciendo mayor rapidez y comodidad tanto para los huéspedes como para los establecimientos.
        .col-md-4.col-lg-2
          figure
            img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")
      .row.justify-content-center
        .col-md-4.col-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in")
        .col-lg-10
          h3 A partir de 2015 en adelante
          p Generalización de los pagos con códigos QR. Los códigos QR se consolidaron como una alternativa segura y de bajo costo para realizar pagos digitales desde dispositivos móviles, especialmente en establecimientos turísticos y hoteleros.
      .row.justify-content-center
        .col-lg-10.mb-4.mb-lg-0
          h3 Década del 2020 - Actualidad
          p Ecosistemas de pago inteligentes. Actualmente, los establecimientos de alojamiento integran sistemas PMS, pasarelas de pago, facturación electrónica y plataformas financieras que automatizan el recaudo, la conciliación de pagos y la gestión operativa en tiempo real. Esta integración mejora la seguridad, optimiza los procesos administrativos y fortalece la experiencia digital del huésped.
        .col-md-4.col-lg-2
          figure
            img(src="@/assets/curso/tema1/11.svg", data-aos="zoom-in")
      
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-4.mb-3.mb-lg-0
        p.mb-0 En la actualidad, la operación hotelera incorpora medios de pago digitales como billeteras electrónicas, códigos QR, pagos móviles y plataformas en línea, permitiendo realizar transacciones desde dispositivos móviles o portales web. Estas herramientas han contribuido a optimizar tiempos de atención, reducir procesos manuales y mejorar la experiencia del huésped durante el proceso de cobro.
      .col-lg-7.col-xl-6.mb-3.mb-lg-0
        .bg-fondo-4.p-5.tarjeta 
          p.mb-0 Además de facilitar la operación, la evolución de los medios de pago también ha fortalecido la integración entre áreas operativas, financieras y tecnológicas dentro de los hoteles, permitiendo un mayor control de las transacciones y una administración más eficiente de la información financiera.
      .col-md-6.col-lg-5.col-xl-2.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Formas de pago tradicionales y digitales
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8
        p Los establecimientos de alojamiento utilizan diferentes formas de pago dependiendo de las políticas del hotel, las necesidades operativas y las preferencias de los huéspedes. Estos medios pueden clasificarse en tradicionales y digitales.
        p Las formas de pago tradicionales incluyen efectivo, cheques y tarjetas bancarias físicas. Aunque algunos de estos métodos han reducido su frecuencia de uso, continúan siendo utilizados en determinados contextos operativos y comerciales.
        .bg-color-1.p-4.tarjeta
          p.mb-0 Por otra parte, los pagos digitales corresponden a transacciones realizadas mediante herramientas tecnológicas conectadas a sistemas financieros electrónicos. Dentro de estas modalidades se encuentran las transferencias bancarias, billeteras digitales, pagos móviles, códigos QR y plataformas de pago en línea.
    
    p.mb-5 Actualmente, muchos hoteles integran varias formas de pago de manera simultánea, permitiendo al huésped seleccionar el método más conveniente para realizar reservas, anticipos o cancelación de servicios.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Formas de pago utilizadas en hotelería
        .tabla-a.color-primario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-2
                th Forma de pago
                th Característica principal
                th Uso frecuente en hotelería
            tbody
              tr.bg-color-white
                td.text-bold Efectivo
                td Pago físico inmediato
                td Recepción y consumos
              tr.bg-color-sintesis
                td.text-bold Tarjeta débito
                td Descuento directo de cuenta bancaria
                td <em>Check-out</em> y pagos rápidos
              tr.bg-color-white
                td.text-bold Tarjeta crédito
                td Pago financiado mediante entidad bancaria
                td Reservas y garantías
              tr.bg-color-sintesis
                td.text-bold Transferencia bancaria
                td Movimiento electrónico entre cuentas
                td Pagos corporativos
              tr.bg-color-white
                td.text-bold Código QR
                td Escaneo digital desde dispositivo móvil
                td Pagos rápidos
              tr.bg-color-sintesis
                td.text-bold Billetera digital
                td Aplicación móvil para pagos electrónicos
                td Servicios y reservas en línea
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-3.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-3.d-none.d-lg-block(src="@/assets/curso/tema1/28.svg")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, le compartimos el enlace de consulta de la política de Incocrédito para el tratamiento de datos personales en el procedimiento de confirmación y manejo de pago virtual (no presencial): 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1_SIG-POL-05-Política_de_Protección_de_Datos_Personales_2026.pdf')" target="_blank" type="application/pdf")
                    span Ir al recurso
                    i.fas.fa-link

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Proceso de cobro y soportes de pago
    .bg-full-width
      img(src="@/assets/curso/tema1/18.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El proceso de cobro corresponde al conjunto de actividades mediante las cuales el establecimiento formaliza el pago de los servicios prestados al huésped. Este procedimiento incluye la validación de consumos, el cálculo de valores, la aplicación de impuestos, la emisión de soportes y la confirmación de la transacción.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-10
        p Durante la estadía del huésped, el hotel puede registrar diferentes cargos relacionados con alojamiento, alimentación, lavandería, minibar, servicios adicionales o consumos en áreas complementarias. Toda esta información se integra generalmente en el PMS para facilitar el control financiero y operativo.
        .cajon.color-acento-contenido.px-5.py-4
          p.mb-0 Una vez consolidada la cuenta, el personal encargado realiza el proceso de cobro y genera los soportes correspondientes. Entre los documentos más utilizados se encuentran:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        SlyderA(tipo="b").bg-color-4.p-4.p-lg-5.tarjeta
          div.justify-content-center.p-1
            h5 Factura
            p.mb-0 Documento legal que detalla los servicios prestados al huésped y el valor total a pagar. Incluye impuestos y sirve como soporte contable y fiscal.
          div.justify-content-center.p-1
            h5 <em>Voucher</em>
            p.mb-0 Comprobante emitido generalmente por medios electrónicos o agencias que confirma la reserva o el pago de un servicio específico.
          div.justify-content-center.p-1
            h5 Comprobante de pago
            p.mb-0 Evidencia que certifica que una transacción ha sido realizada, ya sea en efectivo, tarjeta o medios digitales.
          div.justify-content-center.p-1
            h5 Recibo de caja
            p.mb-0 Documento interno que registra el ingreso de dinero al establecimiento, utilizado principalmente para control administrativo.
          div.justify-content-center.p-1
            h5 Soporte de transferencia
            p.mb-0 Documento o imagen que demuestra que se realizó una transferencia bancaria, indicando valor, fecha y entidad financiera.
          div.justify-content-center.p-1
            h5 Confirmación electrónica de pago
            p.mb-0 Notificación digital (correo o mensaje) que valida que un pago fue procesado exitosamente a través de plataformas tecnológicas.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-right") Estos soportes permiten garantizar la trazabilidad de las operaciones y sirven como respaldo administrativo y contable para el establecimiento y el huésped.
        .row.justify-content-center.align-items-center
          .col-auto.mb-lg-0
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") Además del aspecto financiero, el proceso de pago también influye en la percepción del servicio. Por esta razón, la atención durante el cobro debe desarrollarse con claridad, agilidad y precisión, evitando errores o inconsistencias que puedan afectar la experiencia del cliente.
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Tendencias actuales en pagos hoteleros
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-5.tarjeta.px-5.py-4
          p.mb-0 La transformación digital ha generado importantes cambios en la manera en que los hoteles administran sus procesos de pago. Actualmente, muchos establecimientos implementan soluciones tecnológicas orientadas a agilizar las transacciones, reducir tiempos de espera y ofrecer experiencias más cómodas y seguras para los huéspedes.
    
    .row.justify-content-center.mb-5
      .col-xl-6
        .bg-color-1.tarjeta.p-3
          p.mb-0.text-center Entre las principales tendencias en pagos hoteleros se destacan:

    .bg-full-width.bg-fondo-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6 col-xl-4").p-4
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Pagos sin contacto (<em>contactless</em>).
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Billeteras digitales.
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Pagos mediante códigos QR.
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Facturación electrónica.
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Integración entre PMS y plataformas financieras.
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Pagos móviles.
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Automatización de cobros.
              .bg-color-white.p-4.h-100.box-shadow.tarjeta
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Procesos de <em>self-check-out</em>.
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/24.png', alt='Descripción de la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-3
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-right") Estas herramientas permiten optimizar la operación hotelera y responder a las nuevas expectativas de los viajeros, quienes buscan procesos rápidos, digitales y con menor interacción física durante las transacciones.
        .bg-fondo-6.px-5.py-4.mb-3
          p.mb-0 Según Oracle Hospitality (2023), la digitalización de los procesos hoteleros continuará orientándose hacia ecosistemas integrados capaces de automatizar operaciones financieras y mejorar la experiencia del huésped mediante plataformas inteligentes y conectadas.
        p.mb-0 A continuación, se comparte una tabla que compara el pago tradicional versus el pago digital:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Pago tradicional versus pago digital
        .tabla-a.color-primario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-2
                th Aspecto
                th Pago tradicional
                th Pago digital
            tbody
              tr.bg-color-white
                td.text-bold Tiempo de procesamiento
                td Requiere mayor tiempo para validación y registro manual.
                td Procesamiento rápido y automatizado en tiempo real.
              tr.bg-color-sintesis
                td.text-bold Interacción física
                td Existe contacto físico con dinero, documentos o tarjetas.
                td Reduce el contacto físico mediante plataformas electrónicas y dispositivos móviles.
              tr.bg-color-white
                td.text-bold Agilidad operativa
                td Los procesos pueden ser más lentos y depender de validaciones manuales.
                td Permite transacciones ágiles y automatizadas.
              tr.bg-color-sintesis
                td.text-bold Integración tecnológica
                td Presenta menor integración con sistemas digitales y plataformas hoteleras.
                td Se integra fácilmente con <em>PMS</em>, pasarelas de pago y sistemas financieros.
              tr.bg-color-white
                td.text-bold Trazabilidad
                td El seguimiento de transacciones puede requerir soportes físicos y procesos manuales.
                td Las operaciones quedan registradas automáticamente en plataformas digitales.
              tr.bg-color-sintesis
                td.text-bold Experiencia del huésped
                td Puede generar tiempos de espera durante el proceso de pago.
                td Ofrece procesos rápidos, cómodos y flexibles para el huésped.
    
    .bg-fondo-7.mb-5.p-4
      .row.align-items-center.justify-content-end
        .col-lg-1.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/27.svg").mx-auto
        .col-lg-10.order-lg-1
          p.mb-0 La evolución de las formas de pago en hotelería refleja la transformación tecnológica y operativa que ha experimentado el sector turístico en las últimas décadas. Actualmente, los establecimientos de alojamiento integran medios de pago tradicionales y digitales con el propósito de optimizar procesos financieros, mejorar el control operativo y ofrecer experiencias más ágiles y cómodas a los huéspedes. En este contexto, comprender las características, ventajas y aplicaciones de cada medio de pago permite fortalecer la gestión administrativa y responder de manera eficiente a las nuevas dinámicas del mercado hotelero y las tendencias de transformación digital.
    
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
