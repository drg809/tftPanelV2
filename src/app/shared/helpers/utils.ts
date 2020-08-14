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

  public static getChamps(x: string, i = []): any {
    let c: any = {};
    switch (x) {
      case 'TFT3_Ziggs':
        c.n = 'Ziggs';
        break;
      case 'TFT3_Malphite':
        c.n = 'Malphite';
        break;
      case 'TFT3_Zed':
        c.n = 'Zed';
        c.i = {0: i.indexOf(18) !== -1, 1: i.indexOf(19) !== -1};
        break;
      case 'TFT3_Ezreal':
        c.n = 'Ezreal';
        break;
      case 'TFT3_MasterYi':
        c.n = 'MasterYi';
        c.i = {0: i.indexOf(22) !== -1, 1: i.indexOf(26) !== -1, 2: i.indexOf(39) !== -1};
        break;
      case 'TFT3_Rumble':
        c.n = 'Rumble';
        c.i = {0: i.indexOf(25) !== -1, 1: i.indexOf(49) !== -1, 2: i.indexOf(69) !== -1};
        break;
      case 'TFT3_Jinx':
        c.n = 'Jinx';
        c.i = {0: i.indexOf(12) !== -1, 1: i.indexOf(22) !== -1, 2: i.indexOf(57) !== -1};
        break;
      case 'TFT3_AurelionSol':
        c.n = 'Aurelion Sol';
        break;
      case 'TFT3_Thresh':
        c.n = 'Thresh';
        break;
      case 'TFT3_Yasuo':
        c.n = 'Yasuo';
        break;
      case 'TFT3_Shen':
        c.n = 'Shen';
        c.i = {0: i.indexOf(55) !== -1, 1: i.indexOf(77) !== -1};
        break;
      case 'TFT3_Irelia':
        c.n = 'Irelia';
        c.i = {0: i.indexOf(15) !== -1, 1: i.indexOf(19) !== -1, 2: i.indexOf(29) !== -1};
        break;
      case 'TFT3_Riven':
        c.n = 'Riven';
        break;
      case 'TFT3_Rakan':
        c.n = 'Rakan';
        c.i = {0: i.indexOf(37) !== -1};
        break;
      case 'TFT3_XinZhao':
        c.n = 'XinZhao';
        break;
      case 'TFT3_Cassiopeia':
        c.n = 'Cassiopeia';
        break;
      case 'TFT3_Karma':
        c.n = 'Karma';
        break;
      case 'TFT3_Soraka':
        c.n = 'Soraka';
        break;
      case 'TFT3_Lulu':
        c.n = 'Lulu';
        break;
      case 'TFT3_Urgot':
        c.n = 'Urgot';
        break;
      case 'TFT3_Janna':
        c.n = 'Janna';
        c.i = {0: i.indexOf(14) !== -1};
        break;
      case 'TFT3_Gangplank':
        c.n = 'Gangplank';
        c.i = {0: i.indexOf(15) !== -1, 1: i.indexOf(33) !== -1, 2: i.indexOf(36) !== -1};
        break;
      case 'TFT3_Fizz':
        c.n = 'Fizz';
        c.i = {0: i.indexOf(45) !== -1, 1: i.indexOf(37) !== -1};
        break;
      case 'TFT3_TwistedFate':
        c.n = 'TwistedFate';
        break;
      case 'TFT3_Zoe':
        c.n = 'Zoe';
        break;
      case 'TFT3_Ahri':
        c.n = 'Ahri';
        break;
      case 'TFT3_Syndra':
        c.n = 'Syndra';
        c.i = {0: i.indexOf(15) !== -1, 1: i.indexOf(33) !== -1, 2: i.indexOf(44) !== -1};
        break;
      case 'TFT3_Viktor':
        c.n = 'Viktor';
        c.i = {0: i.indexOf(14) !== -1, 1: i.indexOf(37) !== -1, 2: i.indexOf(44) !== -1};
        break;
      case 'TFT3_Xerath':
        c.n = 'Xerath';
        c.i = {0: i.indexOf(23) !== -1};
        break;
      case 'TFT3_Ekko':
        c.n = 'Ekko';
        c.i = {0: i.indexOf(45) !== -1, 1: i.indexOf(57) !== -1};
        break;
      case 'TFT3_Blitzcrank':
        c.n = 'Blitzcrank';
        break;
      case 'TFT3_Gnar':
        c.n = 'Gnar';
        c.i = {0: i.indexOf(36) !== -1, 1: i.indexOf(55) !== -1, 2: i.indexOf(77) !== -1};
        break;
      case 'TFT3_Fiora':
        c.n = 'Fiora';
        c.i = {0: i.indexOf(47) !== -1};
        break;
      case 'TFT3_Caitlyn':
        c.n = 'Caitlyn';
        break;
      case 'TFT3_Leona':
        c.n = 'Leona';
        c.i = {0: i.indexOf(36) !== -1};
        break;
      case 'TFT3_Lucian':
        c.n = 'Lucian';
        break;
      case 'TFT3_Vi':
        c.n = 'Vi';
        c.i = {0: i.indexOf(36) !== -1};
        break;
      case 'TFT3_Vayne':
        c.n = 'Vayne';
        c.i = {0: i.indexOf(19) !== -1, 1: i.indexOf(29) !== -1};
        break;
      case 'TFT3_Ashe':
        c.n = 'Ashe';
        break;
      case 'TFT3_WuKong':
        c.n = 'WuKong';
        c.i = {0: i.indexOf(36) !== -1};
        break;
      case 'TFT3_Neeko':
        c.n = 'Neeko';
        c.i = {0: i.indexOf(15) !== -1, 1: i.indexOf(36) !== -1, 2: i.indexOf(77) !== -1};
        break;
      case 'TFT3_Annie':
        c.n = 'Annie';
        break;
      case 'TFT3_Illaoi':
        c.n = 'Illaoi';
        break;
      case 'TFT3_Nocturne':
        c.n = 'Nocturne';
        break;
      case 'TFT3_KogMaw':
        c.n = 'KogMaw';
        break;
      case 'TFT3_JarvanIV':
        c.n = 'JarvanIV';
        c.i = {0: i.indexOf(77) !== -1, 1: i.indexOf(36) !== -1, 2: i.indexOf(55) !== -1};
        break;
      case 'TFT3_Xayah':
        c.n = 'Xayah';
        c.i = {0: i.indexOf(12) !== -1, 1: i.indexOf(19) !== -1, 2: i.indexOf(29) !== -1};
        break;
      case 'TFT3_Mordekaiser':
        c.n = 'Mordekaiser';
        break;
      case 'TFT3_Nautilus':
        c.n = 'Nautilus';
        break;
      case 'TFT3_Shaco':
        c.n = 'Shaco';
        c.i = {0: i.indexOf(15) !== -1, 1: i.indexOf(16) !== -1, 2: i.indexOf(22) !== -1};
        break;
      case 'TFT3_Jayce':
        c.n = 'Jayce';
        c.i = {0: i.indexOf(46) !== -1};
        break;
      case 'TFT3_Bard':
        c.n = 'Bard';
        break;
      case 'TFT3_Jhin':
        c.n = 'Jhin';
        c.i = {0: i.indexOf(15) !== -1, 1: i.indexOf(19) !== -1, 2: i.indexOf(29) !== -1};
        break;
      case 'TFT3_Teemo':
        c.n = 'Teemo';
        c.i = {0: i.indexOf(33) !== -1, 1: i.indexOf(37) !== -1, 2: i.indexOf(44) !== -1};
        break;
      case 'TFT3_Poppy':
        c.n = 'Poppy';
        break;
      case 'TFT3_Graves':
        c.n = 'Graves';
        break;
      default:
        c.n = 'Not found champ.';
    }
    return c;
  }

  public static getTraits(x: string): string {
    let c: string;
    switch (x) {
      case 'Set3_Blademaster':
        c = 'Blademaster';
        break;
      case 'Set3_Brawler':
        c = 'Brawler';
        break;
      case 'Set3_Mystic':
        c = 'Mystic';
        break;
      case 'Set3_Sorcerer':
        c = 'Sorcerer';
        break;
      case 'Set3_Celestial':
        c = 'Celestial';
        break;
      default:
        c = x;
    }
    return c;
  }

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

@Pipe({name: 'TransformNamePipe'})
export class TransformNamePipe implements PipeTransform {
  static forRoot() {
    return {
        ngModule: TransformNamePipe,
        providers: [],
    };
  };
  transform(value: string, mode: number): any {
    const newStr = mode === 1 ? Utils.getGalaxie(value) : ( mode === 2 ? Utils.getChamps(value).n : Utils.getTraits(value)) ;
    return newStr;
  };
}

@Pipe({name: 'ItemCoreChampsPipe'})
export class ItemCoreChampsPipe implements PipeTransform {
  static forRoot() {
    return {
        ngModule: ItemCoreChampsPipe,
        providers: [],
    };
  };
  transform(value: string, items: any, mode: boolean): any {
    const i: any[] = Utils.getChamps(value, items).i || [];
    let it: string;
    if (i[0] && i[1] && i[2]) {
      it = '- La ficha de ' + Utils.getChamps(value).n + ' tiene tres objetos core.';
    } else if ((!i[0] && i[1] && i[2]) || (i[0] && !i[1] && i[2]) || (i[0] && i[1] && !i[2])) {
      it = '- La ficha de ' + Utils.getChamps(value).n + ' tiene dos objetos core.';
    } else if ((!i[0] && !i[1] && i[2]) || (i[0] && !i[1] && !i[2]) || (!i[0] && i[1] && !i[2])) {
      it = '- La ficha de ' + Utils.getChamps(value).n + ' tiene un objeto core.';
    } else if (mode) {
      const iN: string = items.lenght > 1 ? items.lenght + ' objetos que no son core.' : 'un objeto que no es core.';
      it = '- La ficha de ' + Utils.getChamps(value).n + ' tiene ' + iN;
    }
    console.log(it);
    return it;
  };
}
