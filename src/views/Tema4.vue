<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normativa de transformación digital en los pagos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8
        p La transformación digital ha redefinido la gestión de los procesos financieros en los establecimientos de alojamiento, facilitando la automatización de transacciones, la emisión de facturación electrónica y el control eficiente de los medios de pago mediante el uso de plataformas tecnológicas integradas. Este avance no solo mejora la organización y trazabilidad de las operaciones, sino que también exige el cumplimiento de normativas que garanticen la transparencia, la seguridad y la protección de la información financiera.
        .bg-color-5.px-5.py-4.tarjeta
          p.mb-0 En el contexto colombiano, estos procesos deben ajustarse a disposiciones tributarias y comerciales vigentes, asegurando la legalidad y verificación de las transacciones. Al mismo tiempo, la digitalización ha transformado las expectativas del huésped, quien demanda servicios más ágiles, seguros y accesibles. Así, la tecnología no solo optimiza la operación financiera del hotel, sino que también incide directamente en la percepción de calidad, confianza y competitividad del servicio ofrecido.
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Normativa aplicada a facturación y medios de pago

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-xl-4.mb-3.mb-lg-0
        img.d-xl-flex.d-none(src="@/assets/curso/tema4/2.png").mb-3
        p.mb-0 La implementación de pagos digitales y facturación electrónica dentro de los establecimientos de alojamiento debe realizarse de acuerdo con los lineamientos establecidos por las autoridades tributarias y comerciales. En Colombia, la Dirección de Impuestos y Aduanas Nacionales (DIAN) regula los procesos relacionados con facturación electrónica, emisión de comprobantes y control de operaciones financieras desarrolladas por las empresas del sector turístico.
      .col-md-8.col-lg-5.col-xl-4.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      .col-xl-4
        .bg-color-4.p-4.px-lg-4.tarjeta 
          p.mb-0 La facturación electrónica corresponde a un sistema digital que permite generar, validar, expedir y almacenar comprobantes de venta mediante plataformas tecnológicas autorizadas. Actualmente, muchos hoteles utilizan sistemas integrados que conectan el PMS con herramientas de facturación electrónica, permitiendo automatizar la generación de documentos relacionados con alojamiento, consumos y servicios complementarios.
    
    .bg-full-width.bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/4.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Importancia de la facturación digital en hotelería
              p Además de optimizar procesos administrativos, la facturación digital fortalece:
              ul.lista-ul--color.ms-3
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | La trazabilidad de las operaciones.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | El control financiero.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | La organización contable.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | El seguimiento tributario.
              p.mb-0 De igual manera, los establecimientos deben garantizar que la información relacionada con cobros, impuestos y medios de pago sea clara y verificable para el huésped.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/4-1.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Procedimientos clave en los procesos de pago hotelero
              p En la operación hotelera también es importante cumplir procedimientos relacionados con:
              ul.lista-ul--color.ms-3
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Validación de pagos.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Manejo de soportes.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Conservación de registros financieros.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Actualización de transacciones electrónicas.
              p.mb-0 Estas acciones permiten fortalecer la transparencia y disminuir inconsistencias durante los procesos de cobro.
    
    .row.justify-content-center.mb-5
      .col-lg-12
        .bg-color-1.tarjeta.p-3
          p.mb-0.text-center En la tabla que le presentamos a continuación mostramos aspectos comparativos de la factura tradicional y la factura electrónica:
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Facturación tradicional versus facturación electrónica
        .tabla-a.color-primario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-10
                th Aspecto
                th Facturación tradicional
                th Facturación electrónica
            tbody
              tr.bg-color-white
                td Emisión
                td Manual o física
                td Digital y automatizada
              tr.bg-color-sintesis
                td Almacenamiento
                td Documentos impresos
                td Registro electrónico
              tr.bg-color-white
                td Validación
                td Revisión manual
                td Validación digital
              tr.bg-color-sintesis
                td Agilidad
                td Mayor tiempo operativo
                td Procesos más rápidos
              tr.bg-color-white
                td Integración
                td Limitada
                td Conectada al PMS y plataformas financieras
    
    p.mb-5 La evolución de la facturación en la hotelería refleja el avance de las tecnologías de la información y la transformación digital del sector. La tabla anterior, muestra cómo la facturación electrónica supera a la facturación tradicional al automatizar procesos, reducir el uso de documentos físicos, agilizar las transacciones y facilitar la integración con los sistemas de gestión hotelera (PMS). Estas ventajas mejoran la eficiencia operativa, fortalecen el control financiero y permiten ofrecer un servicio más ágil y seguro a los huéspedes.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-3.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema4/5.svg")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Lo invitamos a consultar el siguiente video para conocer aspectos claves de la facturación electrónica en Colombia:  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=TguG-_iYI1g" target="_blank")
                    span Ir al video
                    i.fa-brands.fa-youtube

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Protección al consumidor y transparencia en cobros
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
      .col-lg-8
        p La transparencia en los procesos de pago constituye un elemento fundamental dentro de la prestación del servicio hotelero. Los establecimientos de alojamiento deben garantizar que los huéspedes reciban información clara sobre tarifas, impuestos, consumos y condiciones relacionadas con el pago de los servicios contratados.
        .bg-fondo-6.px-5.py-4
          p.mb-0 La protección al consumidor busca asegurar prácticas comerciales organizadas y transparentes que permitan evitar:
    
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-4.col-xl-2.mb-3.mb-xl-0
        .bg-fondo-10.p-3.tarjeta.h-100
          h5.mb-0.text-center Cobros no autorizados.
      .col-md-6.col-lg-4.col-xl-2.mb-3.mb-xl-0
        .bg-fondo-10.p-3.tarjeta.h-100
          h5.mb-0.text-center Diferencias en facturación.
      .col-md-6.col-lg-4.col-xl-2.mb-3.mb-xl-0
        .bg-fondo-10.p-3.tarjeta.h-100
          h5.mb-0.text-center Información engañosa.
      .col-md-6.col-lg-4.col-xl-2.mb-3.mb-xl-0
        .bg-fondo-10.p-3.tarjeta.h-100
          h5.mb-0.text-center Cargos ocultos.
      .col-md-6.col-lg-4.col-xl-2.mb-3.mb-xl-0
        .bg-fondo-10.p-3.tarjeta.h-100
          h5.mb-0.text-center Inconsistencias transaccionales.
    
    .bg-fondo-7.p-4.tarjeta.mb-5
      .row.align-items-center.justify-content-end
        .col-lg-1.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/6.svg").mx-auto
        .col-lg-10.order-lg-1
          p.mb-0 Por esta razón, el personal encargado de recepción, caja o facturación debe brindar información precisa y resolver oportunamente las inquietudes relacionadas con la cuenta huésped.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-right") Asimismo, los hoteles deben facilitar soportes y comprobantes que permitan verificar valores cobrados, impuestos aplicados, descuentos, anticipos y medios de pago utilizados. La claridad durante este proceso fortalece la confianza del huésped y contribuye a una experiencia de servicio más positiva y organizada.
        .bg-fondo-4.p-4.tarjeta
          p.mb-0 Actualmente, muchas empresas complementan estos procedimientos mediante herramientas digitales capaces de enviar comprobantes electrónicos, actualizar transacciones en tiempo real y mantener trazabilidad de las operaciones financieras realizadas durante la estadía.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-3.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-3.d-none.d-lg-block(src="@/assets/curso/tema4/8.svg")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Lo invitamos a consultar los derechos, deberes y garantías en el sector turístico que tienen los usuarios en la página de la Confederación Colombiana de Consumidores:  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://ccconsumidores.org.co/derechos-deberes-y-garantias-en-el-sector-turistico/" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Transformación digital y tendencias tecnológicas en pagos hoteleros
    
    .bg-full-width
      img(src="@/assets/curso/tema4/9.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-up")
        p.banner-text La transformación digital ha modificado significativamente la manera en que los establecimientos de alojamiento gestionan las transacciones financieras y la experiencia de pago del huésped. Actualmente, muchos hoteles implementan plataformas tecnológicas integradas que permiten desarrollar procesos más ágiles, automatizados y conectados, facilitando tanto la operación administrativa como la interacción del cliente con los servicios financieros del establecimiento.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-1.p-4.tarjeta.mb-3
          p.mb-0 En la hotelería contemporánea, los huéspedes buscan experiencias rápidas, seguras y flexibles durante el proceso de reserva, estadía y salida del hotel. Por esta razón, los establecimientos incorporan herramientas digitales que permiten realizar pagos mediante aplicaciones móviles, códigos QR, billeteras digitales, plataformas bancarias y sistemas de pago sin contacto (<em>contactless</em>). Estas soluciones disminuyen tiempos de espera y favorecen procesos más cómodos y organizados durante el <em>check-in</em> y el <em>check-out</em>.
        p.mb-0 A continuación, se presenta la secuencia que ilustra la experiencia digital del huésped durante el proceso de pago:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        SlyderA(tipo="b").bg-color-4.p-4.p-lg-5.tarjeta
          div.justify-content-center.p-1
            h5 Reserva digital
            p.mb-0 El huésped realiza la reserva desde una plataforma web o aplicación móvil.
          div.justify-content-center.p-1
            h5 Confirmación automática
            p.mb-0 El sistema envía confirmación electrónica y garantía de pago.
          div.justify-content-center.p-1
            h5 Registro ágil
            p.mb-0 Durante el <em>check-in</em>, el huésped valida información y medios de pago.
          div.justify-content-center.p-1
            h5 Consumos integrados
            p.mb-0 Los servicios utilizados se actualizan automáticamente en la cuenta huésped.
          div.justify-content-center.p-1
            h5 Pago digital
            p.mb-0 El huésped realiza el pago mediante tarjeta, QR o billetera digital.
          div.justify-content-center.p-1
            h5 Facturación electrónica
            p.mb-0 El sistema genera automáticamente factura y comprobante digital.
          div.justify-content-center.p-1
            h5 <em>Self-check-out</em>
            p.mb-0 El huésped finaliza la estadía mediante procesos automatizados.
          div.justify-content-center.p-1
            h5 Confirmación final
            p.mb-0 El establecimiento envía soportes y validación de cierre de cuenta.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-8
        p La evolución tecnológica también ha fortalecido la capacidad de los hoteles para desarrollar operaciones más organizadas y seguras. Actualmente, muchas plataformas permiten monitorear transacciones en tiempo real, validar pagos automáticamente y mantener actualización permanente de registros financieros integrados al PMS. Esto contribuye a disminuir inconsistencias operativas y mejorar la trazabilidad de las transacciones realizadas durante la estadía.
        .bg-color-1.p-4.tarjeta.mb-3
          p.mb-0 Según Oracle Hospitality (2023), la transformación digital continuará orientándose hacia ecosistemas tecnológicos inteligentes capaces de automatizar procesos financieros, integrar plataformas operativas y fortalecer la experiencia del huésped mediante servicios más personalizados y conectados.
        p.mb-0 Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá adentrarse en la comprensión de la tecnología y transformación digital de los pagos hoteleros.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.bg-fondo-9.tarjeta.px-5.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/13.png", data-aos="zoom-in")
          .col-lg-7
            h2(data-aos="fade-left").mb-4 Pódcast
            p Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer el protocolo de atención en la recepción hotelera.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Tecnología y transformación digital de los pagos hoteleros"
              tiempo
              :audio="require('../assets/curso/podcast/podcast2.mp3')"
            )
    
    .bg-fondo-11.mb-5.p-4.tarjeta
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/14.svg").mx-auto
        .col-lg
          p.mb-0 La gestión de pagos en hotelería constituye un proceso fundamental para garantizar organización financiera, eficiencia operativa y calidad en la atención al huésped. La incorporación de medios de pago digitales, plataformas tecnológicas y sistemas integrados ha permitido optimizar procesos de cobro, facturación y conciliación dentro de los establecimientos de alojamiento, respondiendo a las nuevas dinámicas del turismo y a las expectativas de los clientes. En este contexto, la adecuada administración de las transacciones financieras, junto con la aplicación de buenas prácticas operativas y el cumplimiento de la normativa vigente, contribuye al fortalecimiento de servicios más ágiles, transparentes y orientados a la transformación digital del sector hotelero.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
