export class City
    {
          Version :number
          Key :string
          Type :string
          Rank :number
          LocalizedName:string
          Country :Country;
          AdministrativeArea :Administrativearea
    }

    export class Country
    {
          ID:string
          LocalizedName:string
    }

    export class Administrativearea
    {
          ID :string;
         string :string;
    }