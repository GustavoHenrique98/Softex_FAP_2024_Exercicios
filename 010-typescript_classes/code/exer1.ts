// Descrição: Crie uma classe Carro que tenha as seguintes propriedades privadas:
// marca (string): a marca do carro.
// modelo (string): o modelo do carro.
// ano (number): o ano de fabricação do carro.
//Exercicio 1
class Carro {
  private marca: string;
  private modelo: string;
  private ano: number;

  constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
  }

  public getMarca(): string {
      return this.marca;
  }

  public setMarca(marca: string): void {
      this.marca = marca;
  }

  public getModelo(): string {
      return this.modelo;
  }

  public setModelo(modelo: string): void {
      this.modelo = modelo;
  }

  public getAno(): number {
      return this.ano;
  }

  public setAno(ano: number): void {
      this.ano = ano;
  }

  public obterDetalhes():void{
      console.log(`Marca:${this.marca} | Modelo:${this.modelo} | Ano:${this.ano}`);
  }

  public obterIdade(anoAtual:number):void{
      console.log(`A idade do carro é : ${anoAtual - this.ano}`);
  }

}

const chevrolet = new Carro('Chevrolet','Opala',1998);
chevrolet.obterDetalhes();
chevrolet.obterIdade(2024);