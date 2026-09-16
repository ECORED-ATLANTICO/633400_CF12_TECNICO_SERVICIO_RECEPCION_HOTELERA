<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operación de pagos y facturación hotelera
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-5.p-4.tarjeta
          p.mb-0 La operación de pagos y facturación constituye un proceso fundamental dentro de la gestión administrativa y financiera de los establecimientos de alojamiento. A través de estos procedimientos, el hotel registra, controla y formaliza las transacciones económicas generadas durante la estadía del huésped, permitiendo garantizar organización operativa, trazabilidad financiera y calidad en la prestación del servicio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Actualmente, los procesos de cobro hotelero integran herramientas tecnológicas capaces de automatizar cargos, consolidar consumos y generar facturación en tiempo real mediante sistemas PMS conectados a plataformas financieras y medios de pago digitales. Estas herramientas facilitan la administración de cuentas huésped, optimizan tiempos de atención y fortalecen el control operativo del establecimiento.
        .bg-fondo-4.p-4.tarjeta
          p.mb-0 Asimismo, la gestión adecuada de pagos y facturación permite prevenir inconsistencias, mejorar la experiencia del huésped y garantizar procesos administrativos más seguros y organizados. Por esta razón, el personal encargado debe conocer los procedimientos relacionados con cobros, garantías, conciliaciones y atención al cliente durante el proceso de pago.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Cobro de alojamiento, consumos y servicios adicionales
    .bg-full-width
      img(src="@/assets/curso/tema2/3.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-up")
        p.banner-text El proceso de cobro hotelero comprende todas las transacciones económicas relacionadas con los servicios utilizados por el huésped durante su estadía. Además del alojamiento, los establecimientos pueden generar cargos adicionales asociados a alimentación, lavandería, minibar, parqueadero, transporte, llamadas telefónicas, servicios recreativos y otros consumos complementarios.

    .row.justify-content-center.mb-5
      .col-lg-12
        .bg-color-1.tarjeta.p-3
          p.mb-0 En la mayoría de los hoteles, estos movimientos se registran automáticamente en el PMS, permitiendo consolidar la información financiera del huésped dentro de una cuenta única. Esto facilita el control de consumos y la generación de la factura final al momento del <em>check-out</em>.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-7
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Momentos de aplicación de los cobros") 
            p Dependiendo de las políticas del establecimiento, algunos cobros pueden realizarse:
            ul.lista-ul--color.ms-3
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Al momento de la reserva.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                p.mb-0 Durante el <em>check-in</em>.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Durante la estadía.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Al finalizar el servicio.          
          div(numero="2" titulo="Garantías y control de cargos")
            p Asimismo, ciertos hoteles solicitan anticipos o garantías de pago para asegurar la reserva y cubrir posibles consumos adicionales durante la permanencia del huésped.
            p La correcta administración de estos cargos permite:
            ul.lista-ul--color.ms-3
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Evitar errores de facturación.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Reducir inconsistencias operativas.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Mejorar el control financiero.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Fortalecer la experiencia del cliente.
          div(numero="3" titulo="Verificación del proceso de cobro") 
            p Durante el proceso de cobro, el personal debe verificar:
            ul.lista-ul--color.ms-3
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Consumos registrados.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Tarifas aplicadas.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Impuestos.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Descuentos autorizados.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Medios de pago seleccionados.
              li.mb-1.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                | Soportes correspondientes.
 
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-4.tarjeta.p-3
          p.mb-0.text-center La claridad y precisión en esta etapa resultan fundamentales para garantizar la transparencia y la satisfacción del huésped.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Facturación hotelera y garantías de pago
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8
        p La facturación hotelera corresponde al proceso mediante el cual el establecimiento genera el documento que soporta los servicios prestados y los valores cobrados al huésped. Este procedimiento permite formalizar la transacción económica y constituye un respaldo administrativo, financiero y tributario para el hotel.
        .bg-color-1.p-4.tarjeta
          p.mb-0 Actualmente, muchos establecimientos utilizan sistemas de facturación electrónica integrados al PMS, facilitando la generación automática de documentos y el registro organizado de la información financiera.
    
    .bg-full-width.bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/6.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Componentes de la factura hotelera
              p Dentro de la factura hotelera pueden incluirse:
              ul.lista-ul--color.ms-3
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Alojamiento.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Alimentación.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Impuestos.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Cargos adicionales.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Descuentos.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Servicios complementarios.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Anticipos aplicados.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/7.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Garantías de pago en el servicio hotelero
              p Además de la facturación, los hoteles implementan mecanismos de garantía de pago orientados a reducir riesgos financieros y asegurar el cumplimiento de las obligaciones económicas derivadas de la prestación del servicio. Entre las garantías más utilizadas se encuentran:
              ul.lista-ul--color.ms-3
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Tarjeta de crédito.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Pagos anticipados.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Depósitos.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Convenios empresariales.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  p.mb-0 <em>Vouchers</em> turísticos.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2.bg-color-6
                  | Autorizaciones corporativas.
    
    .row.justify-content-center
      .col-lg-12
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/8.png', alt='alt')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") En muchos casos, el establecimiento realiza procesos de preautorización bancaria para verificar disponibilidad de fondos antes del ingreso del huésped. Esto permite cubrir posibles consumos adicionales o eventualidades relacionadas con la estadía.

    .row.mb-5.justify-content-center.align-items-center
      .col-auto.mb-lg-0
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in")
      .col-lg
        p.mb-0(data-aos="fade-right") La gestión adecuada de garantías y facturación contribuye a fortalecer el control financiero, optimizar procesos administrativos, reducir riesgos de cartera y mejorar la organización operativa.

    .row.justify-content-center.mb-5
      .col-lg-12
        .bg-color-1.tarjeta.p-3
          p.mb-0 A continuación, se presenta una tabla de garantías de pago utilizadas frecuentemente en el sector hotelero, con sus características principales y uso frecuente: 
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Garantías de pago utilizadas en hotelería
        .tabla-a.color-primario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-10
                th Garantía de pago
                th Característica principal
                th Uso frecuente
            tbody
              tr.bg-color-white
                td.text-bold Tarjeta de crédito
                td Respalda consumos y estadía
                td Reservas y <em>check-in</em>
              tr.bg-color-sintesis
                td.text-bold Depósito anticipado
                td Pago previo parcial o total
                td Temporadas altas
              tr.bg-color-white
                td.text-bold Convenio empresarial
                td Facturación a empresa
                td Clientes corporativos
              tr.bg-color-sintesis
                td.text-bold <em>Voucher</em> turístico
                td Soporte emitido por agencia
                td Planes turísticos
              tr.bg-color-white
                td.text-bold Transferencia bancaria
                td Pago electrónico previo
                td Reservas grupales
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Conciliación, cierre de caja e inconsistencias operativas
    .bg-full-width
      img(src="@/assets/curso/tema2/10.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La conciliación corresponde al proceso mediante el cual se verifican y comparan las transacciones registradas durante la operación hotelera con los valores efectivamente recibidos por el establecimiento. Este procedimiento permite validar pagos, identificar diferencias y garantizar control financiero dentro de las áreas de recepción y caja.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-1.px-5.py-4.tarjeta.mb-3
          p.mb-0 Al finalizar cada turno o jornada laboral, el personal responsable realiza el cierre de caja para consolidar pagos en efectivo, pagos electrónicos, transferencias, <em>vouchers</em>, facturación generada, movimientos registrados en el PMS. Durante este proceso pueden identificarse inconsistencias operativas relacionadas con aspectos como errores de digitación, cobros duplicados, diferencias de caja, pagos rechazados o cargos incorrectos, etc.
        p.mb-0 En la siguiente figura se ilustran los principales errores o inconsistencias en procesos de pago hotelero.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Principales inconsistencias en procesos de pago hotelero
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/12.png", alt="La figura ilustra las principales inconsistencias en proceso de pago hotelero que pueden afectar los procesos de cobro y facturación dentro de los establecimientos de alojamiento. Las principales inconsistencias son: cobros duplicados, diferencias de caja, pagos rechazados, errores de digitación, fallas de conexión, facturación incorrecta y cargos no registrados.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/12-1.png", alt="La figura ilustra las principales inconsistencias en proceso de pago hotelero que pueden afectar los procesos de cobro y facturación dentro de los establecimientos de alojamiento. Las principales inconsistencias son: cobros duplicados, diferencias de caja, pagos rechazados, errores de digitación, fallas de conexión, facturación incorrecta y cargos no registrados.")
        figcaption Nota. SENA, (2026).
    
    .bg-fondo-7.mb-5.p-4
      .row.align-items-center.justify-content-end
        .col-lg-1.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/13.svg").mx-auto
        .col-lg-10.order-lg-1
          p.mb-0 Cuando se presentan estas situaciones, el personal debe aplicar procedimientos internos orientados a verificar soportes, corregir registros y reportar novedades de acuerdo con las políticas del establecimiento.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8
        p La conciliación adecuada permite fortalecer el control operativo, reducir pérdidas financieras, mejorar trazabilidad de las transacciones y optimizar procesos administrativos.
        .bg-color-7.p-4.tarjeta
          p.mb-0 Además, constituye una actividad fundamental dentro de procesos como auditoría nocturna y control financiero hotelero.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Atención al huésped durante el proceso de pago
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-lg-3.mb-3
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-9
        .row.mb-3.justify-content-center.align-items-center
          .col-auto.mb-lg-0.order-lg-2
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/16.svg", data-aos="zoom-in")
          .col-lg.order-lg-1
            p.mb-0(data-aos="fade-right") La atención al huésped durante el proceso de pago representa uno de los momentos más importantes dentro de la experiencia de servicio en los establecimientos de alojamiento. Aunque para muchos huéspedes el <em>check-out</em> marca el final de la estadía, para el hotel constituye una oportunidad clave para fortalecer la satisfacción, la percepción de calidad y la fidelización del cliente. Por esta razón, el proceso de cobro no debe limitarse únicamente a una transacción financiera, sino que debe desarrollarse como una experiencia organizada, clara y orientada al servicio.
        .bg-fondo-2.px-5.py-4
          p.mb-0 Durante esta etapa, el personal de recepción o caja debe brindar información precisa sobre los cargos realizados, los consumos registrados, los impuestos aplicados y los medios de pago disponibles. La claridad en la comunicación permite evitar inconformidades y generar confianza frente al manejo de la información financiera del huésped. Asimismo, la actitud del personal influye directamente en la percepción del servicio, especialmente cuando se presentan dudas, solicitudes de aclaración o inconsistencias relacionadas con la cuenta.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Buenas prácticas de atención al huésped durante el proceso de pago
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/17.png", alt="La figura ilustra las buenas prácticas de atención al huésped durante el proceso de pago. En la misma se detallan ocho prácticas que favorecen la atención clara cordial y organizada al cliente al momento de pagar su estadía. Estas ocho prácticas son: verificar la cuenta, explicar los cargos, confirmar los datos, ofrecer opciones de pago, resolver dudas con actitud de servicio, garantizar confidencialidad, entregar soportes y comprobantes y finalizar con amabilidad.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/17-1.png", alt="La figura ilustra las buenas prácticas de atención al huésped durante el proceso de pago. En la misma se detallan ocho prácticas que favorecen la atención clara cordial y organizada al cliente al momento de pagar su estadía. Estas ocho prácticas son: verificar la cuenta, explicar los cargos, confirmar los datos, ofrecer opciones de pago, resolver dudas con actitud de servicio, garantizar confidencialidad, entregar soportes y comprobantes y finalizar con amabilidad.")
        figcaption Nota. SENA, (2026).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-10
        .bg-fondo-8.px-5.py-4.mb-3
          p.mb-0 En el proceso de pago dentro de la operación hotelera, es frecuente que el huésped solicite la revisión de consumos, la aclaración de cargos o la actualización de datos de facturación. Ante estas situaciones, el personal de recepción debe actuar con disposición, respeto y criterio técnico, verificando la información en el <em>Property Management System</em> (PMS) y proporcionando respuestas claras y oportunas. Una atención adecuada en esta etapa contribuye a prevenir conflictos, mejorar la experiencia del cliente y consolidar la imagen institucional del establecimiento.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-right") Asimismo, la incorporación de herramientas tecnológicas, como la facturación electrónica, los pagos móviles y los procesos de <em>self-check-out</em>, ha optimizado la gestión del pago al reducir tiempos de espera y facilitar la interacción del huésped con el servicio. No obstante, este proceso debe desarrollarse bajo estrictos principios de confidencialidad, garantizando la protección de la información financiera y el cumplimiento de los protocolos internos.
        .row.justify-content-center.align-items-center.mb-3
          .col-auto.mb-lg-0
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/20.svg", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") En este sentido, la calidad del servicio durante el proceso de pago no se limita a la eficiencia operativa, sino que integra la capacidad del personal para ofrecer una atención cordial, organizada y orientada a la solución, asegurando un cierre satisfactorio y profesional de la estancia del huésped.
        .bg-color-7.p-4.tarjeta
          p.mb-0 Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer sus conocimientos en las diversas formas de pago empleadas en los hoteles.
    
    .row.justify-content-center
      .col-lg-10
        .row.bg-fondo-9.tarjeta.px-5.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
          .col-lg-7
            h2(data-aos="fade-left").mb-4 Pódcast
            p Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer el protocolo de atención en la recepción hotelera.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Formas de pago en hotelería"
              tiempo
              :audio="require('../assets/curso/podcast/podcast1.mp3')"
            )

</template>

<script>
export default {
  name: 'Tema2',
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
