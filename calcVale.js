function calcVale(ciclo, hora, dwt, calado, tipo, pier, bordo, amp, hb) {
  /* 
        Rece"BE" na ordem: 
        
        Rece"BE" se "PM" ou "BM" : ciclo
        Rece"BE" Hora da "PM" ou "BM" : hora
        Rece"BE" DWT : DWT
        Rece"BE" Calado : calado
        Rece"BE" E/A ou D/S : tipo
        Rece"BE" Amplitude : amp
        Rece"BE" o Pier : pier
        Rece"BE" Altura da baixa-Mar : hb
        
        */

  //Passou tudo pra segundo
  //Rece"BE"u [0] mult por 60 pra dar em minutos e o [1], manteve em minutos
  hora = parseInt(hora.split(":")[1]) + parseInt(hora.split(":")[0]) * 60;

  if (pier == "P1") {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (dwt <= 210000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (dwt <= 210000 && ciclo == "PM") {
          //hora = hora - 1h e 30

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if (dwt > 210000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (dwt > 210000 && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 3
        if (dwt <= 210000 && ciclo == "BM") {
          //hora = hora - 1h e 30
          //alert 1 hora até 30mins antes da "BM"

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt <= 210000 && ciclo == "PM" && amp <= 4, 5)) {
          //hora = hora - 1h e 30
          //alert 1 hora e 30mins antes da "PM" até a "PM"

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == DS) {
      if (bordo == "BE") {
        //Regra 1
        if ((dwt <= 260000 && ciclo == "BM" && amp <= 4, 5)) {
          //hora = hora
          //alert "BM" até 1h antes da "PM" (janela)

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt <= 260000 && ciclo == "PM" && amp <= 4, 5)) {
          //hora = hora - 1 hora
          //alert "BM" até 1h antes da "PM" (janela)

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if ((dwt <= 260000 && ciclo == "BM" && amp > 4, 5)) {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt <= 260000 && ciclo == "PM" && amp > 4, 5)) {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 3
        if (dwt > 260000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (dwt > 260000 && ciclo == "PM") {
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
        if (dwt < 210000 && ciclo == "BM") {
          //hora = hora - 1 horas
          //alert 1h antes da "BM" até 30mins antes a "BM"(janela)

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt < 210000 && ciclo == "BM" && amp <= 4, 5)) {
          //hora = hora - 1h e 30mins
          //alert 1h e 30mins antes da "PM" até a "PM"

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }

  if (pier == P3N) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (ciclo == "PM") {
          //hora = hora - 2horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if (dwt > 210000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (dwt > 210000 && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == DS) {
      if (bordo == "BE") {
        //Regra 1
        if (ciclo == "BM") {
          //hora = hora
          //alert "BM" até 1h antes da "PM" (janela)

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }

  if (pier == P3S) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (dwt <= 210000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt <= 210000 && ciclo == "PM" && amp <= 4, 5)) {
          //hora = hora - 1h e 30mins

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if (dwt > 210000 && ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (dwt > 210000 && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }

      if (bordo == "BB") {
        //Regra 3
        if (dwt <= 210000 && ciclo == "BM") {
          //hora = hora - 1h e 30
          //alert 1 hora até 30mins antes da "BM"

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt <= 210000 && ciclo == "PM" && amp <= 4, 5)) {
          //hora = hora - 1h e 30
          //alert 1 hora e 30mins antes da "PM" até a "PM"

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == DS) {
      if (bordo == "BE") {
        //Regra 1
        if ((dwt <= 210000 && ciclo == "BM" && amp <= 4, 5)) {
          //hora = hora
          //alert "BM" até 1h antes da "PM" (janela)

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt <= 210000 && ciclo == "PM" && amp <= 4, 5)) {
          //hora = hora - 1hora e 30mins
          //alert "BM" até 1h antes da "PM" (janela)

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 1 // Segunda AMP
        if ((dwt <= 210000 && ciclo == "BM" && amp > 4, 5)) {
          //hora = hora
          //alert "BM" até 1h antes da "PM" (janela)

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt <= 210000 && ciclo == "PM" && amp > 4, 5)) {
          //hora = hora - 2 hora
          //alert "BM" até 1h antes da "PM" (janela)

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if ((dwt > 210000 && ciclo == "BM" && amp > 4, 5)) {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt > 210000 && ciclo == "PM" && amp > 4, 5)) {
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
        if (dwt < 210000 && ciclo == "BM") {
          //hora = hora - 1 horas
          //alert 1h antes da "BM" até 30mins antes a "BM"(janela)

          //matematica relativa a regra
          hora -= 60;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if ((dwt < 210000 && ciclo == "BM" && amp <= 4, 5)) {
          //hora = hora - 1h e 30mins
          //alert 1h e 30mins antes da "PM" até a "PM"

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }

  if (pier == P4S) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (ciclo == "PM") {
          //hora = hora - 2horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == DS) {
      if (bordo == "BE") {
        //Regra 1
        if (ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }

  if (pier == P4N) {
    if (tipo == "EA") {
      if (bordo == "BE") {
        //Regra 1
        if (ciclo == "BM") {
          //hora = hora

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (ciclo == "PM") {
          //hora = hora - 2horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
    if (tipo == DS) {
      if (bordo == "BE") {
        //Regra 1
        if (dwt <= 330000 && ciclo == "BM") {
          //hora = hora
          //alert ( Com simultan"EA" 30 mins antes da "BM")

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (dwt <= 330000 && ciclo == "PM") {
          //hora = hora - 2 horas

          //matematica relativa a regra
          hora -= 120;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }

        //Regra 2
        if (dwt > 330000 && ciclo == "BM") {
          //hora = hora
          //alert ( Com simultan"EA" 30 mins antes da "BM")

          //matematica relativa a regra
          hora -= 0;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
        if (dwt > 330000 && ciclo == "PM") {
          //hora = hora - 1hora e 30mins

          //matematica relativa a regra
          hora -= 90;
          let hora_fmt = Math.trunc(hora / 60);
          let minutos_fmt = hora - hora_fmt * 60;
          return hora_fmt + ":" + minutos_fmt;
        }
      }
    }
  }
}
