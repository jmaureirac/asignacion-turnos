export class Meses {
  public nombre: string[];
  public dias: number[];
  public semanas: string;

  constructor() {
    this.nombre = [
      'Enero', 'Febrero','Marzo','Abril',
      'Mayo','Junio','Julio','Agosto',
      'Semptiembre','Octubre','Noviembre','Diciembre'
    ];
    this.dias = [
      31,28,31,30,31,30,
      31,31,30,31,30,31
    ];
  }

  getNombresArray(){
    return this.nombre;
  }
}
