function calcVale(ciclo, hora, dwt, calado, tipo, pier, bordo, amp, hb) {
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

  if (pier == p1) {
    if (tipo == EA) {
      if (bordo == BE) {
        //Regra 1
        if (dwt <= 210000 && ciclo == BM) {
          //hora = hora
        }
        if (dwt <= 210000 && ciclo == PM) {
          //hora = hora - 1h e 30
        }

        //Regra 2
        if (dwt > 210000 && ciclo == BM) {
          //hora = hora
        }
        if (dwt > 210000 && ciclo == PM) {
          //hora = hora - 2 horas
        }
      }

      if (bordo == BB) {
        //Regra 3
        if (dwt <= 210000 && ciclo == BM) {
          //hora = hora - 1h e 30
          //alert 1 hora até 30mins antes da BM
        }
        if ((dwt <= 210000 && ciclo == PM && amp <= 4, 5)) {
          //hora = hora - 1h e 30
          //alert 1 hora e 30mins antes da PM até a PM
        }
      }
    }
    if (tipo == DS) {
      if (bordo == BE) {
        //Regra 1
        if ((dwt <= 260000 && ciclo == BM && amp <= 4, 5)) {
          //hora = hora
          //alert BM até 1h antes da PM (janela)
        }
        if ((dwt <= 260000 && ciclo == PM && amp <= 4, 5)) {
          //hora = hora - 1 hora
          //alert BM até 1h antes da PM (janela)
        }

        //Regra 2
        if ((dwt <= 260000 && ciclo == BM && amp > 4, 5)) {
          //hora = hora
        }
        if ((dwt <= 260000 && ciclo == PM && amp > 4, 5)) {
          //hora = hora - 2 horas
        }

        //Regra 3
        if (dwt > 260000 && ciclo == BM) {
          //hora = hora
        }
        if (dwt > 260000 && ciclo == PM) {
          //hora = hora - 2 horas
        }
      }

      if (bordo == BB) {
        //Regra 4
        if (dwt < 210000 && ciclo == BM) {
          //hora = hora - 1 horas
          //alert 1h antes da BM até 30mins antes a BM(janela)
        }
        if ((dwt < 210000 && ciclo == BM && amp <= 4, 5)) {
          //hora = hora - 1h e 30mins
          //alert 1h e 30mins antes da PM até a PM
        }
      }
    }
  }
}
