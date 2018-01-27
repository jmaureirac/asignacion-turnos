export class Bloques {
  public año: string;
  public mes: string;
  public dia: string;

  public rango_bloque : string[] = [
    '09:00-10:00',
    '10:00-11:00',
    '11:00-12:00',
    '13:00-14:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
    '17:00-18:00',
    '18:00-19:00',
  ]

  public head: string[] = [
    'Bloque','Lunes', 'Martes', 'Miercoles',
    'Jueves', 'Viernes'
  ];

}
