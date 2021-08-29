function calcAlu(ciclo, hora, dwt, calado, tipo, pier, bordo, amp, hb) {
  /* 
      Recebe na ordem: 
      
      Recebe se PM ou BM : ciclo
      Recebe Hora da PM ou BM : hora
      Recebe DWT : DWT
      Recebe Calado : calado
      Recebe E/A ou D/S : tipo
      Recebe Amplitude : amp
      Recebe o Pier : pier
      Recebe Altura da baixa-Mar : hb
      
      */

  //Passou tudo pra segundo
  //Recebeu [0] mult por 60 pra dar em minutos e o [1], manteve em minutos
  hora = parseInt(hora.split(":")[1]) + parseInt(hora.split(":")[0]) * 60;

  if (pier == 100) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora += 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //Alert de 3 a 2 horas antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 3
        if (calado > 12.5 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12.5 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 4
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora - 1hora
          //alert 1 hora até 30mins antes da BM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //alert Hora Inválida
        }

        //Regra 5
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 1 hora

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora + 30mins
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          // de 2h até 1h antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 3
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora
          //alert no Horário da BM

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //alert Hora Inválida
        }

        //Regra 4
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 1h antes da PM até 1h depois da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }

  if (pier == 101) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 11.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //alert 3 até 2h Antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 2
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora - 1hora
          //alert 1 hora até 30mins antes da BM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 11.5 + hb && ciclo == "PM") {
          //hora = hora - 1hora

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //Regra 3
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora + 30Mins
          //alert 30mins após a BM até 1h antes da PM

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 11.5 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 30mins após a BM até 1h antes da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 4
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //hora = hora - 1hora
          //alert 1h antes da PM até 1h apos a PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }

  if (pier == 102) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 11.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //alert 3 até 2h Antes da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 2
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora - 1hora
          //alert 1 hora até 30mins antes da BM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 11.5 + hb && ciclo == "PM") {
          //hora = hora - 1hora

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //Regra 3
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora + 30Mins
          //alert 30mins após a BM até 1h antes da PM

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 11.5 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 30mins após a BM até 1h antes da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 4
        if (calado <= 11.5 + hb && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //hora = hora - 1hora
          //alert 1h antes da PM até 1h apos a PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }
  if (pier == 103) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //Alert de 3 a 2 horas antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 3
        if (calado > 12.5 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12.5 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 4
        if (calado <= 12.5 + hb && ciclo == "BM") {
          //hora = hora - 1hora
          //alert 1 hora até 30mins antes da BM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //alert Hora Inválida
        }

        //Regra 5
        if (calado > 12.5 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 1 hora

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12.5 + hb && ciclo == "BM") {
          //hora = hora + 30mins
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //alert 2h e 30mins ATÉ 1h antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }

        //Regra 2
        if (calado > 12.5 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12.5 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //alert 2h e 30mins ATÉ 1h antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }

      if (bordo == "BB") {
        //Regra 3
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora
          //alert no Horário da BM

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //alert Hora Inválida
        }

        //Regra 4 e 5
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 14.5 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 1h antes da PM até 1h depois da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
  }

  if (pier == 104) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }

        //Regra 2
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //Alert de 3 a 2 horas antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }

      if (bordo == "BB") {
        //Regra 4
        if (calado <= 12.5 + hb && ciclo == "BM") {
          //hora = hora - 1hora
          //alert 1 hora até 30mins antes da BM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 1hora

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12.5 + hb && ciclo == "BM") {
          //hora = hora + 30mins
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 1 horas

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }

      if (bordo == "BB") {
        //Regra 2
        if (calado <= 12 + hb && ciclo == "BM") {
          //hora = hora
          //alert no Horário da BM

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12 + hb && ciclo == "PM") {
          //alert Hora Inválida
        }

        //Regra 3
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "BM") {
          //hora = hora
          //alert no Horário da BM

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado > 12 + hb && calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 1h antes da PM até 1h depois da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
  }
  if (pier == 105) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12 + hb && dwt <= 120000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12.5 + hb && dwt <= 120000 && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }

      if (bordo == "BB") {
        //Regra 4
        if (dwt <= 50000 && ciclo == "BM") {
          //hora = hora - 1hora
          //alert Calado maximo de saída deve ser 12,5m (colocar como lembrete)

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 1hora
          //alert Calado maximo de saída deve ser 12,5m (colocar como lembrete)

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //Regra 1
        if (dwt <= 50000 && ciclo == "BM") {
          //hora = hora + 30mins
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (dwt <= 50000 && ciclo == "PM") {
          //hora = hora - 1 horas
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }

        //Regra 2
        if (calado <= 12.5 + hb && ciclo == "BM") {
          //hora = hora + 30mins

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 12.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //alert 2h 30mins ATÉ 1h antes da PM (Navios Maiores que 90k só atracam durante o dia)

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        //Regra 3
        if (calado > 12.5 + hb && ciclo == "BM") {
          //alert Hora Inválida
        }
        if (calado > 12.5 + hb && ciclo == "PM") {
          //hora = hora - 2 horas
          //alert 2h 30mins ATÉ 1h antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }

      if (bordo == "BB") {
        //Regra 4
        if (dwt <= 50000 && ciclo == "BM") {
          //alert Hora Inválida
        }
        if (dwt <= 50000 && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 1h antes da PM até a PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
  }
  if (pier == 106) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (calado <= 12 + hb && dwt <= 50000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        //regra 2
        if (calado <= 12.5 + hb && dwt <= 50000 && ciclo == "PM") {
          //hora = hora - 2 horas
          //alert 3h até  2h antes da PM

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }

      if (bordo == "BB") {
        //Regra 3
        if (calado <= 13.7 + hb && dwt <= 155000 && ciclo == "BM") {
          //hora = hora - 1 hora
          //alert 30mins antes da PM e 1h até 30mins antes da BM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 13.7 + hb && dwt <= 155000 && ciclo == "PM") {
          //hora = hora - 30 mins
          //alert 30mins antes da PM e 1h até 30mins antes da BM

          //matematica relativa a regra
          hora -= 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }

        //Regra 4
        if (calado > 13.7 + hb && dwt <= 155000 && ciclo == "BM") {
          // alert Hora Invalida
        }
        if (calado > 13.7 + hb && dwt <= 155000 && ciclo == "PM") {
          // hora = hora - 30mins

          //matematica relativa a regra
          hora -= 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //Regra 1
        if (dwt <= 50000 && ciclo == "BM") {
          //hora = hora + 30mins
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora += 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (dwt <= 50000 && ciclo == "PM") {
          //hora = hora - 1 horas
          //alert 30mins após a BM ATÉ 1h antes da PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }

      if (bordo == "BB") {
        //Regra 2
        if (calado <= 13.7 + hb && ciclo == "BM") {
          //hora = hora - 30mins

          //matematica relativa a regra
          hora -= 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 13.7 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 1h antes da PM até a PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        //Regra 3
        if (calado > 13.7 + hb && ciclo == "BM") {
          //alert Hora Inválida
        }
        if (calado > 13.7 + hb && ciclo == "PM") {
          //hora = hora - 1 hora

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
  }
  if (pier == 108) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //alert Bordo Inválido
      }

      if (bordo == "BB") {
        //Regra 1
        if (ciclo == "BM") {
          //hora = hora - 1 hora
          //alert 30mins antes da PM e 1h até 30mins antes da BM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (ciclo == "PM") {
          //hora = hora - 30 mins
          //alert 30mins antes da PM e 1h até 30mins antes da BM

          //matematica relativa a regra
          hora -= 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
    if (tipo == "DS") {
      if (bordo == "BE") {
        //alert Bordo Inválido
      }

      if (bordo == "BB") {
        //Regra 1
        if (calado <= 13.7 + hb && ciclo == "BM") {
          //hora = hora - 30mins

          //matematica relativa a regra
          hora -= 30;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
        if (calado <= 13.7 + hb && ciclo == "PM") {
          //hora = hora - 1 hora
          //alert 1h antes da PM até a PM

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;

        }
      }
    }
  }
}
