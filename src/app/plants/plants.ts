export class Plants {
  id:number
  nombre_comun: string;
  nombre_cientifico: string;
  tipo:string;
  altura_maxima:string;
  clima:string;
  sustrato_siembra:string

  public constructor(id:number,nombre_comun:string,nombre_cientifico:string,tipo:string,altura_maxima:string,clima:string,
    sustrato_siembra:string){
    this.id=id,
    this.nombre_cientifico=nombre_cientifico,
    this.tipo=tipo,
    this.altura_maxima=altura_maxima,
    this.nombre_comun=nombre_comun,
    this.clima=clima,
    this.sustrato_siembra=sustrato_siembra

  }

}
