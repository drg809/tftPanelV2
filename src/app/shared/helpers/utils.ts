import { Pipe, PipeTransform } from '@angular/core';

declare var $: any;
export class Utils {
  public static getRound(x: number): string {
    let r: string;
    switch (x) {
      case 1:
        r = '1-1';
        break;
      case 2:
        r = '1-2';
        break;
      case 3:
        r = '1-3';
        break;
      case 4:
        r = '1-4';
        break;
      case 5:
        r = '2-1';
        break;
      case 6:
        r = '2-2';
        break;
      case 7:
        r = '2-3';
        break;
      case 8:
        r = '2-4';
        break;
      case 9:
        r = '2-5';
        break;
      case 10:
        r = '2-6';
        break;
      case 11:
        r = '2-7';
        break;
      case 12:
        r = '3-1';
        break;
      case 13:
        r = '3-2';
        break;
      case 14:
        r = '3-3';
        break;
      case 15:
        r = '3-4';
        break;
      case 16:
        r = '3-5';
        break;
      case 17:
        r = '3-6';
        break;
      case 18:
        r = '3-7';
        break;
      case 19:
        r = '4-1';
        break;
      case 20:
        r = '4-2';
        break;
      case 21:
        r = '4-3';
        break;
      case 22:
        r = '4-4';
        break;
      case 23:
        r = '4-5';
        break;
      case 24:
        r = '4-6';
        break;
      case 25:
        r = '4-7';
        break;
      case 26:
        r = '5-1';
        break;
      case 27:
        r = '5-2';
        break;
      case 28:
        r = '5-3';
        break;
      case 29:
        r = '5-4';
        break;
      case 30:
        r = '5-5';
        break;
      case 31:
        r = '5-6';
        break;
      case 32:
        r = '5-7';
        break;
      case 33:
        r = '6-1';
        break;
      case 34:
        r = '6-2';
        break;
      case 35:
        r = '6-3';
        break;
      case 36:
        r = '6-4';
        break;
      case 37:
        r = '6-5';
        break;
      case 38:
        r = '6-6';
        break;
      case 39:
        r = '6-7';
        break;
      case 40:
        r = '7-1';
        break;
      case 41:
        r = '7-2';
        break;
      case 42:
        r = '7-3';
        break;
      case 43:
        r = '7-4';
        break;
      case 44:
        r = '7-5';
        break;
      case 45:
        r = '7-6';
        break;
      case 46:
        r = '7-7';
        break;
      default:
        r = '1-1';
    }
    return r;
  }

  public static getTimeDif(time: any): string {
    let dif: string;
    let n: number;

    n =  new Date().valueOf() - time;

    if (Math.trunc(n / (1000 * 3600 * 24)) > 1) {
      dif = Math.trunc(n / (1000 * 3600 * 24)) + ' dias';
    } else {
      dif = Math.trunc(n / (1000 * 3600)) + ' horas';
    }
    return dif;
  }

  public static getGalaxie(x: string): string {
    let r: string;
    switch (x) {
      case 'TFT3_GameVariation_Bonanza':
        r = 'Treasure Trove';
        break;
      case 'TFT3_GameVariation_FreeNeekos':
        r = 'The Neekoverse';
        break;
      case 'TFT3_GameVariation_FreeRerolls':
        r = 'Trade Sector';
        break;
      case 'TFT3_GameVariation_LittlerLegends':
        r = 'Littler Legends';
        break;
      case 'TFT3_GameVariation_MidGameFoN':
        r = 'Superdense Galaxy';
        break;
      case 'TFT3_GameVariation_SmallerBoards':
        r = 'Dwarf Planet';
        break;
      case 'TFT3_GameVariation_StartingItems':
        r = 'Galactic Armory';
        break;
      case 'TFT3_GameVariation_TwoItemMax':
        r = 'Binary Star';
        break;
      case 'TFT3_GameVariation_TwoStarCarousels':
          r = 'Star Cluster';
          break;
      default:
        r = 'Normal Galaxie';
    }
    return r;
  }

  // public static getChamps(x: string): string {
  //   let r: string;
  //   switch (x) {
  //     case 'TFT3_Ziggs':

  //       break;
  //     case 'TFT3_Malphite':

  //       break;
  //     case 'TFT3_Zed':

  //       break;
  //     case 'TFT3_Ezreal':

  //       break;
  //     case 'TFT3_MasterYi':

  //       break;
  //     case 'TFT3_Rumble':

  //       break;
  //     case 'TFT3_Jinx':

  //       break;
  //     case 'TFT3_AurelionSol':

  //       break;
  //     case 'TFT3_Thresh':

  //       break;
  //     case 'TFT3_Yasuo':

  //       break;
  //     case 'TFT3_Shen':

  //       break;
  //     case 'TFT3_Irelia':

  //       break;
  //     case 'TFT3_Riven':

  //       break;
  //     case 'TFT3_Rakan':

  //       break;
  //     case 'TFT3_XinZhao':

  //       break;
  //     case 'TFT3_Cassiopeia':

  //       break;
  //     case 'TFT3_Karma':

  //       break;
  //     case 'TFT3_Soraka':

  //       break;
  //     case 'TFT3_Lulu':

  //       break;
  //     case 'TFT3_Urgot':

  //       break;
  //     case 'TFT3_Janna':

  //       break;
  //     case 'TFT3_Gangplank':

  //       break;
  //     case 'TFT3_Fizz':
  //     case 'TFT3_TwistedFate':
  //     case 'TFT3_Zoe':
  //     case 'TFT3_Ahri':
  //     case 'TFT3_Syndra':
  //     case 'TFT3_Viktor':
  //     case 'TFT3_Xerath':
  //     case 'TFT3_Ekko':
  //     case 'TFT3_Blitzcrank':
  //     case 'TFT3_Gnar':
  //     case 'TFT3_Fiora':
  //     case 'TFT3_Caitlyn':
  //     case 'TFT3_Leona':
  //     case 'TFT3_Lucian':
  //     case 'TFT3_Vi':
  //     case 'TFT3_Vayne':
  //     case 'TFT3_Ashe':
  //     case 'TFT3_WuKong':
  //     case 'TFT3_Neeko':
  //     case 'TFT3_Annie':
  //     case 'TFT3_Illaoi':
  //     case 'TFT3_Nocturne':
  //     case 'TFT3_KogMaw':
  //     case 'TFT3_JarvanIV':
  //     case 'TFT3_Xayah':
  //     case 'TFT3_Mordekaiser':
  //     case 'TFT3_Nautilus':
  //     case 'TFT3_Shaco':
  //     case 'TFT3_Jayce':
  //     case 'TFT3_Bard':
  //     case 'TFT3_Jhin':
  //     case 'TFT3_Teemo':
  //     case 'TFT3_Poppy':
  //     case 'TFT3_Graves':
  //   }
  //   return r;
  // }

  public static showNotification(type, msg, from = 'top', align = 'right') {
    $.notify({
        icon: 'notifications',
        message: msg

    }, {
        type: type,
        timer: 3000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
}

@Pipe({name: 'GalaxieNamePipe'})
export class GalaxieNamePipe implements PipeTransform {
  static forRoot() {
    return {
        ngModule: GalaxieNamePipe,
        providers: [],
    };
  };
  transform(value: string): string {
    const newStr = Utils.getGalaxie(value);
    return newStr;
  };
}
