import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Api } from '../api/api';


@Injectable()
export class BetfairExchangeService {

  constructor(
    public api: Api,
    private readonly http: HttpClient,
  ) { }

  get_betfair_exchange_tennis_events(): Observable<any> {

    const test = false;

    const apiUrl = `http://localhost:6767/betfair_exchange_tennis_events`;

    const obj = {
      "response": [
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610643",
                  "name": "Sels/Vervoort v Kovalik/Zelenay",
                  "openDate": "2021-06-15T14:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610642",
                  "name": "Coria/Mena v Forejtek/Vrbensky",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30617042",
                  "name": "Rinderknech v Hanfmann",
                  "openDate": "2021-06-15T15:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610641",
                  "name": "Schnur/Verbeek v Erler/Weissborn",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30611153",
                  "name": "Davis v Ostapenko",
                  "openDate": "2021-06-15T15:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618327",
                  "name": "S Lansere v E Hozumi",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611927",
                  "name": "Barranco Cosano v Bagnis",
                  "openDate": "2021-06-15T14:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30611158",
                  "name": "Mertens v Tomljanovic",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610645",
                  "name": "Dellien/Zeballos v Balaji/Margaroli",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610644",
                  "name": "Jurajda/Svrcina v Jebavy/Kolar",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618328",
                  "name": "R Bhatia v S Lanca",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618335",
                  "name": "Y Yuan v S Lamens",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618334",
                  "name": "G Maristany Zuleta De Reales v S Herrmann",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611932",
                  "name": "Cazaux v Velotti",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611907",
                  "name": "Janvier v Jacquet",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618570",
                  "name": "M Bougrat v D Galfi",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "KZ",
                  "id": "30616307",
                  "name": "J De Jong v Coppejans",
                  "openDate": "2021-06-15T07:50:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611952",
                  "name": "Lamasine v Nagal",
                  "openDate": "2021-06-15T08:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614512",
                  "name": "C Mcnally v Jabeur",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30617079",
                  "name": "An Kuznetsov v Sels",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614517",
                  "name": "S Zhang v Vit Diatchenko",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614522",
                  "name": "Le Fernandez v Yaf Wang",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30611193",
                  "name": "Kasatkina v Hercog",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30611198",
                  "name": "N Stojanovic v Potapova",
                  "openDate": "2021-06-15T16:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "KZ",
                  "id": "30616317",
                  "name": "Ziz Bergs v Er Kirkin",
                  "openDate": "2021-06-15T10:34:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618337",
                  "name": "R Hogenkamp v V Kan",
                  "openDate": "2021-06-15T10:55:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611937",
                  "name": "Bourgue v Verdasco",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618336",
                  "name": "L Noskova v V Cepede Royg",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "id": "30613984",
                  "name": "Muguruza v Cirstea",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30611168",
                  "name": "Brengle v Kostyuk",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618087",
                  "name": "E Halbauer v I Oz",
                  "openDate": "2021-06-15T08:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611942",
                  "name": "Jua Varillas v Collarini",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30613989",
                  "name": "Petkovic v Azarenka",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30611173",
                  "name": "Ferro v Mladenovic",
                  "openDate": "2021-06-15T16:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618091",
                  "name": "T Morderger v M Kolodziejova",
                  "openDate": "2021-06-15T07:55:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611947",
                  "name": "Taberner v Vatutin",
                  "openDate": "2021-06-15T14:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30613994",
                  "name": "Kudermetova v Muchova",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618089",
                  "name": "D Salkova v P Kania-chodun",
                  "openDate": "2021-06-15T08:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618088",
                  "name": "I Burillo Escorihuela v A Zarycka",
                  "openDate": "2021-06-15T08:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611091",
                  "name": "Bedene/Ramos-Vinolas v Behar/Escobar",
                  "openDate": "2021-06-15T15:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611090",
                  "name": "Opelka/Peers v Gray/Heliovaara",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611089",
                  "name": "Broady/Peniston v Bublik/Monroe",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "KZ",
                  "id": "30616471",
                  "name": "Martin v Vi Sachko",
                  "openDate": "2021-06-15T06:34:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611093",
                  "name": "Lopez/Sinner v Evans/O'Mara",
                  "openDate": "2021-06-15T17:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30616964",
                  "name": "Seppi v Zh Zhang",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30616708",
                  "name": "Sk Mansouri v Kamke",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30611083",
                  "name": "Lenz/Moraing v Sijsling/Smits",
                  "openDate": "2021-06-15T15:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30616969",
                  "name": "Copil v Bonzi",
                  "openDate": "2021-06-15T14:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30611081",
                  "name": "Angelini/Vianello v Cachin/Ugo Carabelli",
                  "openDate": "2021-06-15T15:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30611080",
                  "name": "Ajdukovic/Fatic v Fanselow/Gerch",
                  "openDate": "2021-06-15T17:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30616975",
                  "name": "Th Seyboth Wild v Bolt",
                  "openDate": "2021-06-15T14:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611087",
                  "name": "Middelkoop/Smith v Karatsev/Purcell",
                  "openDate": "2021-06-15T15:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30617267",
                  "name": "Lu Gerch v Tirante",
                  "openDate": "2021-06-15T09:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30617272",
                  "name": "T Griekspoor v Fr Forti",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611902",
                  "name": "E Ymer v Viola",
                  "openDate": "2021-06-15T15:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30617262",
                  "name": "Fanselow v Cam Ugo Carabelli",
                  "openDate": "2021-06-15T09:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30611793",
                  "name": "An Kuznetsov v Klizan",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610773",
                  "name": "J Rodionov v Kohlschreiber",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30612052",
                  "name": "Dzumhur v Donskoy",
                  "openDate": "2021-06-15T10:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610778",
                  "name": "Medvedev v Struff",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30612313",
                  "name": "Elias v Galovic",
                  "openDate": "2021-06-15T09:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30612063",
                  "name": "Sugita v Majchrzak",
                  "openDate": "2021-06-15T10:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611038",
                  "name": "Paire v Murray",
                  "openDate": "2021-06-15T15:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618205",
                  "name": "P Ozgen v F Christie",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618204",
                  "name": "A Hartono v A Omae",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30616896",
                  "name": "Otte v Dougaz",
                  "openDate": "2021-06-15T08:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30612288",
                  "name": "Cachin v Grenier",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611008",
                  "name": "Popyrin v Evans",
                  "openDate": "2021-06-15T13:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30611783",
                  "name": "Mena v Vesely",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611013",
                  "name": "Bedene v Tiafoe",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30612293",
                  "name": "Ja Berrettini v Giannessi",
                  "openDate": "2021-06-15T15:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611018",
                  "name": "Berrettini v Travaglia",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30612047",
                  "name": "Kudla v Anderson",
                  "openDate": "2021-06-15T14:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618190",
                  "name": "T Pironkova v N Hibino",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "KZ",
                  "id": "30610254",
                  "name": "Denolly/Menendez-Maceir v Orlov/Sultanov",
                  "openDate": "2021-06-15T09:15:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30616910",
                  "name": "Uchiyama v Escobedo",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610803",
                  "name": "Monfils v L Harris",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614640",
                  "name": "Martic v Asia Muhammad",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30616688",
                  "name": "Rola v Rybakov",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30613878",
                  "name": "Dart/Watson v Bains/Martincova",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618486",
                  "name": "A Shimizu v R Ushijima",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30616693",
                  "name": "Molcan v Poljak",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614645",
                  "name": "Kerber v Doi",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618484",
                  "name": "M Fonte v K Hobgarski",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30616698",
                  "name": "Haerteis v Coria",
                  "openDate": "2021-06-15T08:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614650",
                  "name": "Vondrousova v Samsonova",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610808",
                  "name": "A Zverev v Koepfer",
                  "openDate": "2021-06-15T15:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30616703",
                  "name": "Alex Erler v Manuel Cerundolo",
                  "openDate": "2021-06-15T08:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614655",
                  "name": "Pegula v H Baptiste",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30616959",
                  "name": "L Mayer v Ramanathan",
                  "openDate": "2021-06-15T16:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30613886",
                  "name": "Kato/Voracova v Blinkova/Kalashnikova",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30612093",
                  "name": "Machac v S Kwon",
                  "openDate": "2021-06-15T10:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30613885",
                  "name": "Melichar/Schuurs v Peschke/Heisen",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30613884",
                  "name": "Kichenok/Ninomiya v Dabrowski/Zhang",
                  "openDate": "2021-06-15T13:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618211",
                  "name": "L Klimovicova v K Zimmermann",
                  "openDate": "2021-06-15T09:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30612323",
                  "name": "Baldi v Benchetrit",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618212",
                  "name": "V Grammatikopoulou v A Prisacariu",
                  "openDate": "2021-06-15T09:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610788",
                  "name": "Khachanov v Rublev",
                  "openDate": "2021-06-15T13:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30612073",
                  "name": "Gaio v Polmans",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610793",
                  "name": "F Auger-Aliassime v Hurkacz",
                  "openDate": "2021-06-15T13:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30612328",
                  "name": "To Etcheverry v Jaziri",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610798",
                  "name": "Humbert v Querrey",
                  "openDate": "2021-06-15T13:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618643",
                  "name": "M Hibi v C Bucsa",
                  "openDate": "2021-06-15T13:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30610966",
                  "name": "Maclean/Murgett v Lammons/Withrow",
                  "openDate": "2021-06-15T18:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30611733",
                  "name": "Andujar v Yo Watanuki",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "KZ",
                  "id": "30610203",
                  "name": "Murat/Ozernoy v Fabian/Martin",
                  "openDate": "2021-06-15T10:28:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30614299",
                  "name": "Basilashvili v G Simon",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30610969",
                  "name": "Fabbiano/Uchiyama v Fery/Gill",
                  "openDate": "2021-06-15T18:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30610968",
                  "name": "Gojo/Matusevich v Johnson/Mchugh",
                  "openDate": "2021-06-15T16:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30611743",
                  "name": "Horansky v Kamke",
                  "openDate": "2021-06-15T10:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610719",
                  "name": "Mensik/Siniakov v Kopriva/Lehecka",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610718",
                  "name": "Nedovyesov/Oliveira v Paulson/Rikl",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30612253",
                  "name": "Luz v Ilkel",
                  "openDate": "2021-06-15T13:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30610717",
                  "name": "Poljak/Pospisil v Arends/Martinez",
                  "openDate": "2021-06-15T14:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "id": "30614017",
                  "name": "Rybakina v Rogers",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30614279",
                  "name": "Berankis v Nishikori",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610958",
                  "name": "Saville/Thompson v Nielsen/Skugor",
                  "openDate": "2021-06-15T10:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610957",
                  "name": "Erlich/Harris v Bolelli/Gonzalez",
                  "openDate": "2021-06-15T12:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30610956",
                  "name": "Molteni/Pella v Altmaier/Stricker",
                  "openDate": "2021-06-15T15:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "KZ",
                  "id": "30610226",
                  "name": "Giustino v P Kotov",
                  "openDate": "2021-06-15T08:34:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618162",
                  "name": "D Vidmanova v J Grabher",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618417",
                  "name": "A Kalinina v D Snigur",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30616881",
                  "name": "Ti Droguet v Roca Batalla",
                  "openDate": "2021-06-15T14:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "KZ",
                  "id": "30610231",
                  "name": "Serdarusic v Popko",
                  "openDate": "2021-06-15T08:28:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30616886",
                  "name": "Sanchez Izquierdo v Guinard",
                  "openDate": "2021-06-15T08:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30610998",
                  "name": "Bublik v Chardy",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30614324",
                  "name": "Cilic v Ofner",
                  "openDate": "2021-06-15T16:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30611003",
                  "name": "De Minaur v Djere",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30616891",
                  "name": "Olivo v O Gutierrez",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30614329",
                  "name": "Vukic v Shapovalov",
                  "openDate": "2021-06-15T17:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618403",
                  "name": "V Tomova v O Dodin",
                  "openDate": "2021-06-15T10:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "IT",
                  "id": "30612258",
                  "name": "Ajdukovic v Passaro",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "FR",
                  "id": "30611234",
                  "name": "Cerundolo/Gomez-Herrera v Blancaneaux/Martineau",
                  "openDate": "2021-06-15T12:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "DE",
                  "id": "30614304",
                  "name": "Pella v Lacko",
                  "openDate": "2021-06-15T09:00:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30610983",
                  "name": "Lu v Fognini",
                  "openDate": "2021-06-15T15:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30611748",
                  "name": "Lehecka v L Klein",
                  "openDate": "2021-06-15T08:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "CZ",
                  "id": "30611758",
                  "name": "D Siniakov v Se Baez",
                  "openDate": "2021-06-15T08:30:00.000Z",
                  "timezone": "UTC"
              },
              "marketCount": 2
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618157",
                  "name": "D Parry v A Carreras",
                  "openDate": "2021-06-15T11:00:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          },
          {
              "event": {
                  "countryCode": "GB",
                  "id": "30618413",
                  "name": "G Minnen v L Zhu",
                  "openDate": "2021-06-15T11:30:00.000Z",
                  "timezone": "GMT"
              },
              "marketCount": 1
          }
      ]
    };

    return test ? Observable.create(observer => {
      observer.next(obj);
      observer.complete();
    }) : new Observable<any>(observer => {
      this.http.get(apiUrl).subscribe(
        response => observer.next(response),
        _ => observer.complete()
      )
    });

    // return new Observable<any>(observer => {
    //   this.http.get(apiUrl).subscribe(
    //     response => observer.next(response),
    //     _ => observer.complete()
    //   )
    // });
  }

}
