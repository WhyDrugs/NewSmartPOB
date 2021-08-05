function calcAlu(ciclo, hora, dwt, calado, tipo, amp) {
  /* 
    Recebe na ordem: 
    
    Recebe se PM ou BM : ciclo
    Recebe Hora da PM ou BM : hora
    Recebe DWT : DWT
    Recebe Calado : calado
    Recebe E/A ou D/S : tipo
    Recebe Amplitude : amp
    
    */

  if (tipo == EA) {
    //Regra 1
    if (calado <= 7 && dwt <= 25000 && ciclo == BM) {
      // hora = hora - 1 hora +15mins
    }

    if (calado <= 7 && dwt <= 25000 && ciclo == PM) {
      // hora = hora - 1,5 hora +15mins
    }

    // Regra 2
    if (calado > 7 && calado <= 11.58 && dwt <= 84000 && ciclo == BM) { 
      // alert Hora Invalida
    }

    if (calado > 7 && calado <= 11.58 && dwt <= 84000 && ciclo == PM) {
      // hora = hora - 1,5 hora +15mins
    }

    //regra 3
    if (calado <= 8 && dwt <= 45000 && ciclo == BM) {
      // alert Hora Invalida
    }
    if ((calado < 8 && dwt <= 45000 && ciclo == PM && amp <= 4, 5)) {
      // hora = hora - 0,5 hora +15mins
    }
  }
  if (tipo == DS) {
    //Regra 4
    if (calado <= 7 && dwt <= 84000 && ciclo == BM) {
      // hora = hora +15mins
    }

    if (calado <= 7 && dwt <= 84000 && ciclo == PM) {
      // hora = hora - 2 hora +15mins
    }

    //Regra 5
    if (calado > 7 && calado <= 9 && dwt <= 84000 && ciclo == BM) {
      // alert Hora Invalida
    }

    if (calado > 7 && calado <= 9 && dwt <= 84000 && ciclo == PM) {
      // hora = hora - 2 hora +15mins
    }
    if (calado > 9 && calado <= 11.58 && dwt <= 84000 && ciclo == BM) {
      // alert Hora Invalida
    }
    if (calado > 9 && calado <= 11.58 && dwt <= 84000 && ciclo == PM) {
      // hora = hora - 1 hora +15mins
    }
  } else {
    //alert Nenhuma Regra encontrada
  }
}
