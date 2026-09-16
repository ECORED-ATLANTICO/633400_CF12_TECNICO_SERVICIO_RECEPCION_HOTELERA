<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión eficiente de pagos hoteleros',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de conocimientos relacionados con normatividad hotelera, registro de huéspedes, protección de datos, seguridad de la información y responsabilidad operativa dentro de los establecimientos de alojamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una de las principales ventajas de los pagos digitales en hotelería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar procesos manuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir tiempos de atención.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el registro de consumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la atención al huésped.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reducir tiempos de atención es una de las principales ventajas operativas que ofrecen los pagos digitales en el sector hotelero.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué función cumple un <em>PMS</em> dentro de la operación hotelera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar únicamente reservas aéreas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar procesos financieros y operativos del hotel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar completamente al personal de recepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar exclusivamente redes sociales del hotel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Un <em>PMS</em> centraliza y gestiona los procesos financieros, administrativos y operativos de un establecimiento hotelero.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes corresponde a un medio de pago digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cheque físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consignación manual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Billetera digital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vale impreso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Las billeteras digitales representan uno de los medios de pago electrónicos y móviles más utilizados en la actualidad.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué documento permite respaldar una transacción financiera realizada?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventario de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Soporte de pago.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tarjeta de registro hotelero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El soporte de pago es el documento físico o virtual que evidencia y respalda que una transacción financiera ha sido exitosa.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué proceso permite verificar diferencias entre pagos y registros financieros?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conciliación financiera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Check-in.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Housekeeping.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revenue management.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La conciliación financiera permite cotejar los registros del sistema interno frente a los movimientos reales de las cuentas o pasarelas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué riesgo operativo puede generar inconformidad en el huésped?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actualización automática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facturación organizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reserva confirmada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cobro duplicado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Un cobro duplicado genera fricciones inmediatas y afecta negativamente la experiencia y confianza del huésped.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una buena práctica durante el proceso de pago?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omitir información tributaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compartir datos financieros del huésped.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verificar consumos antes del cobro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar generar comprobantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Verificar los consumos cargados antes de proceder con la transacción previene errores operativos y malentendidos con el cliente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tecnología permite realizar pagos acercando el dispositivo al lector?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facturación física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pago sin contacto (<em>contactless</em>).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registro manual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conciliación bancaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La tecnología sin contacto o <em>contactless</em> agiliza los flujos de pago mediante aproximación inalámbrica segura.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué entidad regula la facturación electrónica en Colombia?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DANE.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'FONTUR.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'DIAN.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'MinTIC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La Dirección de Impuestos y Aduanas Nacionales (DIAN) es la institución encargada de reglamentar y supervisar la facturación electrónica.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué beneficio ofrece la integración entre <em>PMS</em> y plataformas financieras?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar consumos del huésped.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la ocupación hotelera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la facturación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Automatizar procesos financieros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Conectar ambos sistemas permite automatizar flujos monetarios, reduciendo el error humano en los registros contables.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
