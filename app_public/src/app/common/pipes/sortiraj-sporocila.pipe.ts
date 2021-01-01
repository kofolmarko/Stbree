import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortirajSporocila'
})
export class SortirajSporocilaPipe implements PipeTransform {

  transform(pridobljeniPodatki: any, idPrejemnika: string): unknown {

    // u s t v a r i   a r r a y   s p o r o c i l //
    var matchingSporocila = new Array();
    var stevec = 0;
    for(var i = 0; i < pridobljeniPodatki.prviUser.poslanaSporocila.length; i++){
    if(pridobljeniPodatki.prviUser.poslanaSporocila[i].prejemnikSporocila == pridobljeniPodatki.drugiUser._id){
        matchingSporocila[stevec] = pridobljeniPodatki.prviUser.poslanaSporocila[i];
        stevec++;
    }
    }
    
    for(var i = 0; i < pridobljeniPodatki.drugiUser.poslanaSporocila.length; i++){
      if(pridobljeniPodatki.drugiUser.poslanaSporocila[i].prejemnikSporocila == pridobljeniPodatki.prviUser._id){
        matchingSporocila[stevec] = pridobljeniPodatki.drugiUser.poslanaSporocila[i];
        stevec++;
      }
    }

    if(matchingSporocila.length == 0) {
      matchingSporocila[0] = "Z osebo še nimate pogovora. Pošli novo sporočilo."
      return matchingSporocila;
    }
    var sortedSporocila = matchingSporocila.sort(function(a, b) {
    var dateA = new Date(a.cas), dateB = new Date(b.cas);
    return dateA.getTime() - dateB.getTime();
    });

    return sortedSporocila;
  }

}
