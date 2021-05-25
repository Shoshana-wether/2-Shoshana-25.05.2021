class CurrentCondition{
      LocalObservationDateTime:Date; 
          EpochTime:number;
          WeatherText :string;
          WeatherIcon:number;
          HasPrecipitation:boolean
          PrecipitationType :object
        IsDayTime:boolean;
          Temperature:Temperature
}


 class Temperature
    {
          Metric :Metric;
          Imperial :Imperial;
    }

     class Metric
    {
          Value :number;
          Unit :string
          UnitType:number
    }

     class Imperial
    {
          Value:number
          Unit :string
          UnitType :number;
    }